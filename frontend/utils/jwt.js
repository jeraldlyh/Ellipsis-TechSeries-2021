import jwt from "jsonwebtoken"
import axiosInstance from "../axios/axiosInstance"
import moment from "moment"


export const isAccessTokenExpired = (token) => {
    const currentTime = Math.round(Date.now() / 1000 + 60)      // Checks for expiry one minute in advance to prevent errors
    const expiry = getExpiryTime(token)


    if (expiry) {
        if (expiry < currentTime) {
            console.log("Token expired")
            return true
        }
        console.log("Token has not expired yet")
        return false
    }
    console.log("Token does not exist")
    return true
}

export const getExpiryTime = (token) => {
    const decoded = jwt.decode(token)
    const expiry = decoded["exp"]
    return expiry
}

export const refreshToken = async (refreshToken) => {
    try {
        const response = await axiosInstance.post("/api/auth/token/refresh/", { refresh: refreshToken })
        const { access_token } = response.data
        return [access_token]
    } catch (error) {
        return [null, null]
    }
}