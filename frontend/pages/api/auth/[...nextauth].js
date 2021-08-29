import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import axiosInstance from "../../../axios/axiosInstance"
import { isAccessTokenExpired, refreshToken } from "../../../utils/jwt"


const settings = {
    debug: process.env.NODE_ENV === "development",
    secret: process.env.SESSION_SECRET_KEY,
    session: {
        jwt: true,
        maxAge: 7 * 24 * 60 * 60,       // 7 days validity
    },
    pages:{
        error: "/404"
    },
    providers: [
        Providers.Credentials({
            async authorize(credentials, request) {
                const response = await axiosInstance.post("/api/auth/login/", {
                    email: credentials.email,
                    password: credentials.password
                })

                if (response.status === 200) {
                    return response.data
                }
                return null
            }
        })
    ],
    callbacks: {
        async session(session, token) {
            session.accessToken = token.accessToken
            session.refreshToken = token.refreshToken
            session.uen = token.uen
            if (token.error) {
                session.error = token.error
            }
            return session
        },
        async redirect(url, baseUrl) {
            if (url !== baseUrl) {
                return url
            }
            return baseUrl
        },
        async jwt(token, user, account, profile, isNewUser) {
            if (user) {
                if (account.type === "credentials") {
                    const { access_token, refresh_token, uen } = user

                    token = {
                        ...token,
                        accessToken: access_token,
                        refreshToken: refresh_token,
                        uen: uen
                    }
                    return token
                }
            }

            if (isAccessTokenExpired(token.accessToken)) {
                const [newAccessToken] = await refreshToken(token.refreshToken)

                if (newAccessToken) {
                    token = {
                        ...token,
                        accessToken: newAccessToken,
                        // refreshToken: newRefreshToken,
                        iat: Math.floor(Date.now() / 1000),
                        exp: Math.floor(Date.now() / 1000 + process.env.JWT_EXPIRY_MINS * 60 * 60)
                    }
                    return token
                }
                return {
                    ...token,
                    error: "Unable to refresh token",
                    exp: 0,
                }
            }
            return token
        }
    }
}

export default (request, response) => NextAuth(request, response, settings)