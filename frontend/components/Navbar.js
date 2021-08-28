import { useRouter } from "next/router"

export default function Navbar() {
  const router = useRouter()

  return (
    <div className="z-50 top-0 sticky font-semibold flex bg-white items-center justify-between px-10 h-14">
      <div className="flex items-center justify-between w-64">
        <div className="tracking-widest cursor-pointer" onClick={() => router.push("/")}>CHEQUEMATE</div>
        <div className="tracking-wider text-xs cursor-pointer" onClick={() => router.push("/marketplace")}>Marketplace</div>
      </div>
      <div className="flex items-center justify-between w-44">
        {/* <div className="tracking-wider text-xs cursor-pointer" onClick={() => router.push("/")}>Help</div> */}
        <div className="tracking-wider text-xs cursor-pointer" onClick={() => router.push("/login")}>Login</div>
        <div className="py-2 px-5 tracking-wider bg-black rounded-md text-white text-xs cursor-pointer hover:bg-gray-700" onClick={() => router.push("/register")}>Register</div>
      </div>
    </div>
  )
}