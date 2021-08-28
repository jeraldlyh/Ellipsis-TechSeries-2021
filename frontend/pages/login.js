import NavBar from "../components/Navbar"

export default function login() {
  return (
    <div className="h-screen overflow-hidden">
      <NavBar />

      <div className="h-full overflow-hidden w-full flex items-center justify-center bg-gray-100">
        <div
          className="-mt-20 rounded-lg shadow-md text-center bg-white justify-between items-center py-10 px-16 flex flex-row"
        >
          <div className="items-start flex flex-col mr-12">
            <div className="text-red-700 font-semibold text-2xl tracking-wider mb-1">
              LOGIN
            </div>
            <div
              style={{ fontSize: 13 }}
              className="mb-7"
            >
              Start your BNPL journey now!
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
            <div className="flex flex-row" style={{ width: 250, height: 40}}>
              <div
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  color: 'white'
                }}
                className="w-full items-center flex justify-center bg-red-600 hover:bg-red-700 cursor-pointer"
              >
                Sign in
              </div>
            </div>
          </div>
          <img src="/createAccIcon.jpg" style={{ width: 340, height: 343 }} />

        </div>
      </div>
    </div>
  );
}
