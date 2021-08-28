import React from "react"
import Error from "../components/Error"
import { useRouter } from "next/router"


function Error404() {
    const router = useRouter()

    return (
        <Error message="Page not found!" errorCode={404} action={() => router.push("/")} />
    )
}

export default Error404