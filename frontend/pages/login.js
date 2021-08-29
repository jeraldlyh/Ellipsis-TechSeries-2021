import NavBar from "../components/Navbar"
import { useState } from "react"
import { useRouter } from "next/router"
import { signIn } from "next-auth/client"

export default function Login() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginUser = () => {
        const callbackUrl = process.env.NEXTAUTH_URL || "http://127.0.0.1:3000/"
        signIn("credentials", {email, password, callbackUrl: callbackUrl})
    }

    return (
        <div className="h-screen overflow-hidden">
            <NavBar />

            <div className="h-full overflow-hidden w-full flex items-center justify-center bg-gray-100">
                <div
                    className="-mt-20 rounded-3xl shadow-md text-center bg-white justify-between items-center py-14 px-20 flex flex-row"
                >
                    <div className="items-start flex flex-col mr-16">
                        <div className="text-red-700 font-semibold text-3xl tracking-wider mb-1 ">
                            Log in
                        </div>
                        <div
                            style={{ fontSize: 13 }}
                            className="mb-7"
                        >
                            Sign in to continue your BNPL journey
                        </div>
                        <input
                            className="h-8 w-64 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                            style={{ backgroundColor: "#F7F7F7"}}
                            // className="mb-2 px-5 border focus:outline-none"
                            // style={{ width: 250, height: 40, borderRadius: 10, backgroundColor: '#F7F7F7', borderColor: '#B6B6B6' }}
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            className="h-8 w-64 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                            style={{ backgroundColor: "#F7F7F7"}}
                            // className="mb-8 px-5 border focus:outline-none"
                            // style={{ width: 250, height: 40, borderRadius: 10, backgroundColor: '#F7F7F7', borderColor: '#B6B6B6' }}
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <div>
                            <div
                                className="h-9 w-64 border rounded-md mb-5 focus:outline-none px-3 text-xs text-white items-center flex justify-center"
                                style={{ backgroundColor: "#D02626"}}
                                onClick={loginUser}
                            >
                                Sign in
                            </div>
                            <div className="mt-5 h-9 w-64 items-center flex justify-center rounded-md text-gray-600 text-xs cursor-pointer hover:text-black" style={{ backgroundColor: "#F7F7F7"}} onClick={() => router.push("/register")}>
                                No account yet? Sign up here!
                            </div>

                            
                        </div>
                    </div>
                    <img src="/auth/login.jpg" style={{ width: 340, height: 343 }} />

                </div>
            </div>
        </div>
    );
}
