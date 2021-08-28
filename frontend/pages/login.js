import NavBar from "../components/Navbar"
import { useRouter } from "next/router"

export default function Login() {
  const router = useRouter()

  return (
    <div className="h-screen overflow-hidden">
      <NavBar />

      <div className="h-full overflow-hidden w-full flex items-center justify-center bg-gray-100">
        <div
          className="-mt-20 rounded-lg shadow-md text-center bg-white justify-between items-center py-14 px-20 flex flex-row"
        >
          <div className="items-start flex flex-col mr-16">
            <div className="text-red-700 font-semibold text-2xl tracking-wider mb-1">
              LOGIN
            </div>
            <div
              style={{ fontSize: 13 }}
              className="mb-7"
            >
              Sign in to continue your BNPL journey
            </div>
            <input
              className="mb-2 px-5 border"
              style={{ width: 250, height: 40, borderRadius: 10, backgroundColor: '#F7F7F7', borderColor: '#B6B6B6' }}
              placeholder="Email"
              type="email"
            />
            <input
              className="mb-8 px-5 border"
              style={{ width: 250, height: 40, borderRadius: 10, backgroundColor: '#F7F7F7', borderColor: '#B6B6B6' }}
              placeholder="Password"
              type="password"
            />
            <div>
              <div
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  color: 'white',
                  width: 250, 
                  height: 40
                }}
                className="w-full items-center flex justify-center bg-red-600 hover:bg-red-700 cursor-pointer"
              >
                Sign in
              </div>
              <div className="mt-5 text-gray-600 text-xs cursor-pointer hover:text-black" onClick={() => router.push("/register")}>
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
