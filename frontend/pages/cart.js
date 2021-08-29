import Navbar from "../components/Navbar";
import {
  Divider,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";
import CartItem from "../components/CartItem";

export default function Home() {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-12 pb-4 text-red-700 font-semibold tracking-wider text-4xl text-center justify-center">
        MY CART
      </div>

      <div className="px-16">
        {/* Header */}
        <div className="px-16 pb-2 flex-row flex justify-between">
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
        <div className="bg-white w-full mt-10 mb-12 px-20 py-10 justify-between flex-row flex rounded-3xl shadow-md">
          <div className="flex-col flex">
            <span className="mb-5 text-xl">Choose Payment Plan:</span>
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
            {/* <div className="text-center border rounded-lg">
              <span className="text-xs">My BNPL deal</span>
            </div> */}
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
            <div className="flex-row flex justify-between my-5">
              <span>TOTAL</span>
              <span>$5150</span>
            </div>
            <div className="text-center border rounded-lg py-1 bg-red-700 hover:bg-red-800 cursor-pointer">
              <span style={{ color: "white" }}>CHECKOUT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
