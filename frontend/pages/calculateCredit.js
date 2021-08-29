import React from 'react'
import Navbar from '../components/Navbar.js'
import { AiOutlinePlus, AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router"


const calculateCredit = () => {
    const router = useRouter()

    return (
        <div className="h-screen overflow-hidden">
            <Navbar />
            <div
                className="overflow-hidden -mt-10 w-full h-screen flex items-center justify-center"
                style={{ backgroundColor: "#F4F4F4" }}
            >
                <div class="justify-start items-start mr-10 flex -mt-24 h-96">
                    <AiOutlineArrowLeft
                        className="cursor-pointer w-6 h-6"
                        onClick={() => router.back()}
                    />
                </div>
                <div className="bg-white shadow-md rounded-2xl flex justify-between pl-10">
                    <div className="flex-col flex ml-8 mr-0">
                        <span className="mt-14 mb-10 text-3xl tracking-wider font-semibold" style={{ color: "#D02626" }}>Let us find out more about your business...</span>
                        <div className="w-96 h-96 flex-row flex justify-between">
                            <div className="w-96 flex flex-col">
                                <span className="text-xs pb-1" >Liquid Assets</span>
                                <input
                                    className="w-full h-8 w-56 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                                    style={{ backgroundColor: "#F7F7F7"}}
                                />
                                <span className="text-xs pb-1">Liabilities</span>
                                <input
                                    className="w-full h-8 w-56 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                                    style={{ backgroundColor: "#F7F7F7"}}
                                />
                                <span className="text-xs pb-1">Company Net profits</span>
                                <input
                                    className="w-full h-8 w-56 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                                    style={{ backgroundColor: "#F7F7F7"}}
                                />
                                <span className="text-xs pb-1">Company Revenue</span>
                                <input
                                    className="w-full h-8 w-56 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                                    style={{ backgroundColor: "#F7F7F7"}}
                                />
                            </div>

                            <div className="w-96 flex flex-col ml-16">
                                <span className="text-xs pb-1">Instalment Period (Months)</span>
                                <input
                                    className="w-full h-8 w-56 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                                    style={{ backgroundColor: "#F7F7F7"}}
                                />
                                <span className="text-xs pb-1">Number of outstanding shares</span>
                                <input
                                    className="w-full h-8 w-56 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                                    style={{ backgroundColor: "#F7F7F7"}}
                                />

                                <span className="text-xs pb-1">Total debt</span>
                                <input
                                    className="w-full h-8 w-56 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                                    style={{ backgroundColor: "#F7F7F7"}}
                                />

                                <span className="text-xs pb-1">Total assets</span>
                                <input
                                    className="w-full h-8 w-56 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                                    style={{ backgroundColor: "#F7F7F7"}}
                                />

                                <div className="bg-red-700 hover:bg-red-800 cursor-pointer text-center rounded-lg h-8 w-56 items-center justify-center self-end flex flex-row border">
                                    <span className="text-xs text-white w-full h-full flex flex-wrap content-center justify-center">
                                        Calculate my credit rating!
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-80  mr-6">
                        <img src="/calculateCredit/pic.jpg" className="h-full w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default calculateCredit
