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
    const callbackUrl = process.env.NEXTAUTH_URL || "http://127.0.0.1:3000/"
    await signIn("credentials", { email: email, password: password, callbackUrl: callbackUrl })
  }

  return (
    <div className="h-screen overflow-hidden">
      <NavBar />

      <div className="pt-6 pb-20 h-full overflow-hidden w-full flex items-center justify-center bg-gray-100">
        <div className="mx-32 w-full rounded-lg shadow-md text-center bg-white justify-center items-center py-20 px-28 flex flex-row">
          <img src="/auth/register.png" style={{ height: 343 }} className="flex-none mr-10" />
          <div className="items-start flex flex-col w-full">
            <div className="text-red-700 font-semibold text-2xl tracking-wider mb-1">
              REGISTER
            </div>
            <div
              style={{ fontSize: 13 }}
              className="mb-7"
            >
              Start your BNPL journey now!
            </div>
            <input
              className="mb-2 px-5 border w-full"
              style={{ height: 40, borderRadius: 10, backgroundColor: '#F7F7F7', borderColor: '#B6B6B6' }}
              placeholder="UEN"
              value={UEN}
              onChange={e => setUEN(e.target.value)}
            />
            <input
              className="mb-2 px-5 border w-full"
              style={{ height: 40, borderRadius: 10, backgroundColor: '#F7F7F7', borderColor: '#B6B6B6' }}
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              className="mb-2 px-5 border w-full"
              style={{ height: 40, borderRadius: 10, backgroundColor: '#F7F7F7', borderColor: '#B6B6B6' }}
              placeholder="Address"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
            <input
              className="mb-2 px-5 border w-full"
              style={{ height: 40, borderRadius: 10, backgroundColor: '#F7F7F7', borderColor: '#B6B6B6' }}
              placeholder="Email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              className="mb-8 px-5 border w-full"
              style={{ height: 40, borderRadius: 10, backgroundColor: '#F7F7F7', borderColor: '#B6B6B6' }}
              placeholder="Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <div className="w-full flex flex-col self-center">
              <div
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  color: 'white',
                  height: 40
                }}
                className="w-full items-center flex justify-center bg-red-600 hover:bg-red-700 cursor-pointer"
                onClick={registerAccount}
              >
                Sign up
              </div>
              <div className="mt-5 text-gray-600 text-xs cursor-pointer hover:text-black" onClick={() => router.push("/login")}>
                Have an account? Login here!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
