import { useState } from "react"
import NavBar from "../components/Navbar"
import { useRouter } from "next/router"
import axiosInstance from "../axios/axiosInstance"
import { signIn } from "next-auth/client"


export default function Register() {
    const router = useRouter()
    const [UEN, setUEN] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const registerAccount = async () => {
        await axiosInstance.post("/api/auth/register", {
            name: name,
            UEN: UEN,
            address: address,
            password: password,
            email: email,
        })
        await signIn("credentials", { email: email, password: password, redirect: false })
        router.push("/calculateCredit")
    }

    return (
        <div className="h-screen overflow-hidden">
            <NavBar />

            <div className="pt-6 pb-20 h-full overflow-hidden w-full flex items-center justify-center bg-gray-100">
                <div className="mx-72 w-full rounded-3xl shadow-md text-center bg-white justify-center items-center py-10 px-8 flex flex-row">
                    <img src="/auth/register.png" style={{ height: 343 }} className="flex-none mr-2" />
                    <div className="items-start flex flex-col w-full">
                        <div className="text-red-700 font-semibold text-2xl tracking-wider mb-1">
                            Register
                        </div>
                        <div
                            style={{ fontSize: 13 }}
                            className="mb-7"
                        >
                            Start your BNPL journey now!
                        </div>
                        <input
                            className="h-8 w-80 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                            style={{ backgroundColor: "#F7F7F7" }}
                            placeholder="UEN"
                            value={UEN}
                            onChange={e => setUEN(e.target.value)}
                        />
                        <input
                            className="h-8 w-80 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                            style={{ backgroundColor: "#F7F7F7" }}
                            placeholder="Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            className="h-8 w-80 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                            style={{ backgroundColor: "#F7F7F7" }}
                            placeholder="Address"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                        />
                        <input
                            className="h-8 w-80 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                            style={{ backgroundColor: "#F7F7F7" }}
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            className="h-8 w-80 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                            style={{ backgroundColor: "#F7F7F7" }}
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <div className="w-80 flex flex-col self-start">
                            <div
                                style={{
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    color: 'white',
                                }}
                                className="h-9 w-80 items-center flex justify-center bg-red-600 hover:bg-red-700 cursor-pointer text-sm"
                                onClick={registerAccount}
                            >
                                Sign up
                            </div>
                            <div className="mt-5 h-9 w-80 items-center flex justify-center rounded-md text-gray-600 text-xs cursor-pointer bg-gray-100 hover:bg-gray-200" onClick={() => router.push("/login")}>
                                Have an account? Login here!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
