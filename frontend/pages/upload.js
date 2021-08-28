import Navbar from "../components/Navbar";
import { AiOutlinePlus } from "react-icons/ai";

export default function Upload() {
    return (
        <div>
            <Navbar />
            <div
                className="w-full h-screen flex items-center justify-center"
                style={{ backgroundColor: "#F4F4F4" }}
            >
                <div className="bg-white shadow-md rounded-2xl flex-row flex justify-between pl-10">
                    <div className = "flex-col flex">
                        <span className = "mt-10 mb-5 text-2xl" style = {{color:"#D02626"}}>Listing Details</span>
                        <div className="w-96 flex-row flex justify-between">
                            <div className="flex-col flex">
                                <span className = "text-xs">Photo</span>
                                <div className="w-24 h-24 rounded border-2 items-center justify-center flex">
                                    <AiOutlinePlus />
                                </div>
                            </div>
                            <div className="w-56 flex flex-col ml-20">
                                <span className = "text-xs">Listing Title</span>
                                <input
                                    className="w-full h-6 border rounded-md mb-5 focus:outline-none px-5 text-xs"
                                    placeholder="Name your listing"

                                ></input>
                                <span className = "text-xs">Description</span>
                                <input
                                    className="w-full h-6 border rounded-md mb-5 focus:outline-none px-5 text-xs"
                                    placeholder="Describe it!"
                                ></input>
                                <span className = "text-xs">Price</span>
                                <input
                                    className="w-full h-6 border rounded-md mb-5 focus:outline-none px-5 text-xs"
                                    placeholder="How much is it"
                                ></input>
                                <span className = "text-xs">Stocks available</span>
                                <input
                                    className="w-full h-6 border rounded-md mb-5 focus:outline-none px-5 text-xs"
                                    placeholder="Quantity?"
                                ></input>
                                <span className = "text-xs">Instalment Period (Months)</span>
                                <input
                                    className="w-full h-6 border rounded-md mb-5 focus:outline-none px-5 text-xs"
                                    placeholder="How long?"
                                ></input>

                                <div style = {{backgroundColor: "#D02626"}} className = "text-center rounded-md h-5 items-center justify-center self-end flex flex-row mb-10 border w-20 ">
                                    <span className = "text-xs text-white">
                                        List it!
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-44 bg-black ml-10 ">
                        <img src = "/upload/uploadPic.jpeg" className = "w-full h-full object-cover rounded-r-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
}
