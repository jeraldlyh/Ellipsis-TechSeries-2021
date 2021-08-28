import Navbar from "../components/Navbar";
import { Divider } from "@material-ui/core";
import { AiOutlinePlus,AiOutlineMinus, AiOutlineClose} from "react-icons/ai";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen py-2">
            <Navbar />
            <div className="text-center justify-center">
                <span style={{ color: "#D02626", fontSize: 60 }}>My Cart</span>
            </div>
            <div className="px-16">
                <div className="px-16 flex-row flex justify-between">
                    <div className="w-36 flex-row flex justify-center">
                        <span>PRODUCT</span>
                    </div>
                    <div className="flex-row flex">
                        <div className="w-48 text-center">
                            <span>QTY</span>
                        </div>
                        <div className="w-32 text-center ">
                            <span>TOTAL</span>
                        </div>
                    </div>
                </div>
                <Divider />
                <div className="pl-16 mt-4 flex-row flex justify-between">
                    <div className = "flex-row flex h-36">
                        <img src="/flour.jpg" className="w-36" />
                        <div className="justify-center flex-col flex ml-10">
                            <span>Premium Flour</span>
                            <span>S$ 10 / 100kg</span>
                            <span>PonHockSG</span>
                        </div>
                    </div>
                    <div className = "flex-row flex">
                        <div className = "w-48 flex-row flex items-center justify-evenly">
                            <AiOutlinePlus/>
                            <span>15</span>
                            <AiOutlineMinus/>
                        </div>
                        <div className = "w-32 flex-row flex items-center justify-evenly">
                            <span>$ 150</span>
                        </div>
                        <div className = "w-16 flex items-center justify-center">
                            <AiOutlineClose />
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}
