import NavBar from "../components/layout/Navbar"

export default function login() {
    return (
        <div>
        <NavBar/>
        
        <div className="h-screen overflow-hidden w-full flex items-center justify-center bg-red-50">
            
            <div
                style={{ width: 725, height: 456 }}
                className="rounded-lg text-center bg-white justify-between items-center px-10 flex flex-row"
            >
                <div className="items-center justify-center flex flex-col">
                    <span
                        style={{fontSize: 30 , color : "#D02626"}} className = "mb-1"
                    >
                        Create Account
                    </span>
                    <span
                        style={{ fontSize: 13 }}
                        className = "mb-7"
                    >
                        Start your BNPL journey now!
                    </span>
                    <input
                        className="mb-2 px-8 border"
                        style={{ width: 250, height: 40, borderRadius: 10, backgroundColor: '#F7F7F7', borderColor:'#B6B6B6' }}
                        placeholder="Name"
                    ></input>
                    <input
                        className="mb-2 px-8 border"
                        style={{ width: 250, height: 40, borderRadius: 10, backgroundColor: '#F7F7F7', borderColor:'#B6B6B6' }}
                        placeholder="Email"
                    ></input>
                    <input
                        className="mb-8 px-8 border"
                        style={{ width: 250, height: 40, borderRadius: 10, backgroundColor: '#F7F7F7', borderColor:'#B6B6B6' }}
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
                                color:'white'
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
                                color:'#D02626',
                                borderColor:'#D02626'
                            }}
                            className = "items-center flex justify-center"
                        >
                            Sign in
                        </div>
                    </div>
                </div>
            <img src = "/createAccIcon.jpg" style = {{width:340,height:343}}/>

            </div>
        </div>
        </div>
    );
}
