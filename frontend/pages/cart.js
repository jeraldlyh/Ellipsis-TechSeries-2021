import Navbar from "../components/Navbar";
import {
    Divider,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio
} from "@material-ui/core";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import CartItem from "../components/CartItem";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen py-2">
            <Navbar />
            <div className="text-center justify-center">
                <span style={{ color: "#D02626", fontSize: 60 }}>My Cart</span>
            </div>

            <div className="px-16">
                {/* Header */}
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
                <CartItem />
                <CartItem />

                {/* Payment Plans */}
                <div style = {{backgroundColor:"#E7E7E7"}} className="w-full mt-10 px-20 py-10 justify-between flex-row flex rounded-3xl shadow-md">
                    <div className="flex-col flex">
                        <span className = "mb-5 text-xl">Choose Payment Plans</span>
                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-label="gender"
                                name="gender1"
                            >
                                <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label="Get what you love now"
                                />
                                <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Buy Now Pay Later"
                                />
                            </RadioGroup>
                        </FormControl>
                        <div className = "text-center border rounded-lg">
                            <span className = "text-xs">My BNPL deal</span>
                        </div>
                    </div>

                    <div className="w-80 h-30 flex-col flex">
                        <div className="flex-row flex justify-between mb-5">
                            <span>SUBTOTAL</span>
                            <span>$5150</span>
                        </div>
                        <div className="flex-row flex justify-between mb-5">
                            <span>SHIPPING</span>
                            <span>Free</span>
                        </div>
                        <Divider />
                        <div className="flex-row flex justify-between mb-5">
                            <span>TOTAL</span>
                            <span>$5150</span>
                        </div>
                        <div
                            className="text-center border rounded-lg"
                            style={{ backgroundColor: "#D02626" }}
                        >
                            <span style={{ color: "white" }}>CHECK OUT</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
