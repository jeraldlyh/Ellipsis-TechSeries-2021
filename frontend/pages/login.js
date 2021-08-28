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
              CREATE ACCOUNT
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
              placeholder="Name"
            ></input>
            <input
              className="mb-2 px-5 border"
              style={{ width: 250, height: 40, borderRadius: 10, backgroundColor: '#F7F7F7', borderColor: '#B6B6B6' }}
              placeholder="Email"
            ></input>
            <input
              className="mb-8 px-5 border"
              style={{ width: 250, height: 40, borderRadius: 10, backgroundColor: '#F7F7F7', borderColor: '#B6B6B6' }}
              placeholder="Password"
            ></input>
            <div
              style={{ width: 250, height: 40 }}
              className="justify-between flex flex-row"
            >
              <div
                style={{
                  borderWidth: 1,
                  width: 110,
                  height: 37,
                  borderRadius: 10,
                  backgroundColor: "#D02626",
                  color: 'white'
                }}
                className="items-center flex justify-center"
              >
                Sign up
              </div>
              <div
                style={{
                  borderWidth: 1,
                  width: 110,
                  height: 37,
                  borderRadius: 10,
                  color: '#D02626',
                  borderColor: '#D02626'
                }}
                className="items-center flex justify-center"
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
