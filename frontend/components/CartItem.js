import { Divider } from "@material-ui/core";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react'

export default function CartItem(props) {
  const [quantity, setQuantity] = useState(1)

  return (
    <div>
      <div className="pl-16 mt-4 pt-3 flex-row flex justify-between">
        <div className="flex-row flex h-36">
          <img src="/flour.jpg" className="w-36" />
          <div className="justify-center flex-col flex ml-20">
            <span>{props.name}</span>
            <span className="text-sm">{props.company}</span>
            <span className="text-red-700">S$ {props.price}</span>
          </div>
        </div>
        <div className="flex-row flex">
          <div className="w-48 flex-row flex items-center justify-evenly">
            <div onClick={() => { (quantity > 0) && setQuantity(quantity - 1) }}
              className={quantity > 0 ? "bg-black cursor-pointer text-white w-6 h-6 rounded-lg flex justify-center items-center" : "bg-black opacity-40 text-white w-6 h-6 rounded-lg flex justify-center items-center"}>
              <AiOutlineMinus />
            </div>
            <span>{quantity}</span>
            <div onClick={() => setQuantity(quantity + 1)} className="bg-black cursor-pointer text-white w-6 h-6 rounded-lg flex justify-center items-center">
              <AiOutlinePlus />
            </div>
          </div>
          <div className="w-32 flex-row flex items-center justify-evenly">
            <span>S$ {quantity * props.price}</span>
          </div>
          <div className="text-red-700 w-16 flex items-center justify-center cursor-pointer">
            <AiOutlineClose />
          </div>
        </div>
      </div>
      <Divider style={{ marginTop: 30 }} />
    </div>
  );
}
