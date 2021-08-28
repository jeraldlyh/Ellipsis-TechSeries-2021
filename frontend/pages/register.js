import NavBar from "../components/Navbar"
import { useRouter } from "next/router"

export default function Register() {
  const router = useRouter()

  return (
    <div className="h-screen overflow-hidden">
      <NavBar />

      <div className="pt-6 pb-20 h-full overflow-hidden w-full flex items-center justify-center bg-gray-100">
        <div className="mx-32 w-full rounded-lg shadow-md text-center bg-white justify-between items-center py-20 px-28 flex flex-row">
          <img src="/auth/register.png" style={{ width: 340, height: 343 }} className="flex-none mr-12" />
          <div className="items-start flex flex-col">
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
              className="mb-2 px-5 border"
              style={{ width: 500, height: 40, borderRadius: 10, backgroundColor: '#F7F7F7', borderColor: '#B6B6B6' }}
              placeholder="UEN"
            />
            <input
              className="mb-2 px-5 border"
              style={{ width: 500, height: 40, borderRadius: 10, backgroundColor: '#F7F7F7', borderColor: '#B6B6B6' }}
              placeholder="Name"
            />
            <input
              className="mb-2 px-5 border"
              style={{ width: 500, height: 40, borderRadius: 10, backgroundColor: '#F7F7F7', borderColor: '#B6B6B6' }}
              placeholder="Address"
            />
            <input
              className="mb-2 px-5 border"
              style={{ width: 500, height: 40, borderRadius: 10, backgroundColor: '#F7F7F7', borderColor: '#B6B6B6' }}
              placeholder="Email"
              type="email"
            />
            <input
              className="mb-8 px-5 border"
              style={{ width: 500, height: 40, borderRadius: 10, backgroundColor: '#F7F7F7', borderColor: '#B6B6B6' }}
              placeholder="Password"
              type="password"
            />
            <div>
              <div
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  color: 'white',
                  width: 500,
                  height: 40
                }}
                className="w-full items-center flex justify-center bg-red-600 hover:bg-red-700 cursor-pointer"
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
