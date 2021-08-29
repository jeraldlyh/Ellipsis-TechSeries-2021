import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useAuth } from "../hooks/useAuth"
import { signOut } from "next-auth/client"
import axiosInstance from "../axios/axiosInstance"
import _ from 'lodash'


export default function Navbar() {
    const router = useRouter()
    const { session, loading } = useAuth()
    const [profile, setProfile] = useState({})

    useEffect(() => {
        if (session) {
            getProfile()
        }
    }, [])

    const getProfile = async () => {
        const response = await axiosInstance.get(`/api/company/${session.uen}`)
        setProfile(response.data.company)
    }

    const logout = () => {
        router.push("/login")
        signOut()
    }
    return (
        <div className="z-50 top-0 sticky flex bg-white items-center justify-between px-10 h-14">
            <div className="flex items-center justify-between w-64">
                <div className="font-semibold tracking-widest cursor-pointer" onClick={() => router.push("/")}>CHEQUEMATE</div>
                <div className="tracking-wider text-sm cursor-pointer" onClick={() => router.push("/marketplace")}>Marketplace</div>
            </div>
            <div className="flex items-center justify-between">
                {/* <div className="tracking-wider text-sm cursor-pointer" onClick={() => router.push("/")}>Help</div> */}
                {
                    session
                        ?
                        <div className="w-80 flex justify-between items-center">
                            <div className="tracking-wider text-sm cursor-pointer flex items-center" onClick={() => router.push("/profile")}>
                                <img src="/profile/profile.png" className="w-6 h-6 rounded-full mr-3" />
                                {_.upperFirst(profile.name)}
                            </div>
                            <div className="tracking-wider text-sm cursor-pointer flex items-center" onClick={() => router.push("/listings")}>
                                My Listings
                            </div>
                            <div className="py-2 px-6 tracking-wider bg-black rounded-md text-white text-sm cursor-pointer hover:bg-gray-700" onClick={logout}>Logout</div>
                        </div>
                        :
                        <div className="w-44 flex justify-between items-center">
                            <div className="tracking-wider text-sm cursor-pointer" onClick={() => router.push("/login")}>Login</div>
                            <div className="py-2 px-5 tracking-wider bg-black rounded-md text-white text-sm cursor-pointer hover:bg-gray-700" onClick={() => router.push("/register")}>Register</div>
                        </div>
                }
            </div>
        </div>
    )
}