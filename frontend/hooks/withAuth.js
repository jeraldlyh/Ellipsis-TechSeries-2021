import { useRouter } from "next/router"
import React from "react"
import Error from "../components/Error"
import { useAuth } from "./useAuth"
import _ from "lodash"
import { signOut } from "next-auth/client"

const PERMITTED_URLS = ["/", "/login", "/register", "/marketplace", "/product"]

export const withAuth = () => {
    return function (Component) {
        return function (props) {
            const { session, loading } = useAuth()

            if (!loading && session && session.error) {             // Handle expired tokens
                signOut()
                return <Error message="Something bad happened..." errorCode={404} action={() => router.push("/login")} />
            }

            const router = useRouter()
            const isPermitted = _.filter(PERMITTED_URLS, function (path) {
                return _.includes(router.pathname, path)
            })

            if (!loading && !session && isPermitted.length === 0) {
                return <Error message="You are not authorized here." errorCode={401} action={() => router.push("/login")} />
            }

            if (typeof window !== undefined && loading) {
                return <div className="flex justify-center items-center">LOADING IN HOC</div>
            }

            return <Component session={session} {...props} />
        }
    }
}