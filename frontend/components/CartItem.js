import { Divider } from "@material-ui/core";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

export default function CartItem() {
    return (
        <div>
            <div className="pl-16 mt-4 flex-row flex justify-between">
                <div className="flex-row flex h-36">
                    <img src="/flour.jpg" className="w-36" />
                    <div className="justify-center flex-col flex ml-20">
                        <span>Premium Flour</span>
                        <span>S$ 10 / 100kg</span>
                        <span>PonHockSG</span>
                    </div>
                </div>
                <div className="flex-row flex">
                    <div className="w-48 flex-row flex items-center justify-evenly">
                        <AiOutlinePlus />
                        <span>15</span>
                        <AiOutlineMinus />
                    </div>
                    <div className="w-32 flex-row flex items-center justify-evenly">
                        <span>$ 150</span>
                    </div>
                    <div className="w-16 flex items-center justify-center">
                        <AiOutlineClose />
                    </div>
                </div>
            </div>
            <Divider style={{ marginTop: 30 }} />
        </div>
    );
}
