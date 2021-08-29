import {useRouter} from "next/router"
import Navbar from '../../components/Navbar.js'
import styles from '../../styles/marketplace.module.css'
import { AiOutlineArrowLeft,AiOutlinePlus } from "react-icons/ai";

const Editlisting = () => {
  const router = useRouter();
  const { name, company, price, image, desc, bnpl } = router.query

  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <div
        className="overflow-hidden -mt-10 w-full h-screen flex items-center justify-center"
        style={{ backgroundColor: "#F4F4F4" }}
      >
        <div class="justify-start items-start mr-10 flex -mt-28 h-96">
          <AiOutlineArrowLeft
            className="cursor-pointer w-6 h-6"
            onClick={() => router.back()}
          />
        </div>
        <div className="bg-white shadow-md rounded-3xl flex justify-between pl-10">
          <div className="flex-col flex ml-8 mr-10">
            <span className="mt-14 mb-8 text-3xl tracking-wider font-semibold" style={{ color: "#D02626" }}>Listing Details</span>
            <div className="w-96 h-96 flex-row flex justify-between">
              <div className="flex-col flex">
                <span className="text-xs">Photo</span>
                <div className="w-32 h-32 rounded border-2 items-center justify-center flex">
                  <img src = {image} className = "w-full h-full" />
                </div>
              </div>
              <div className="w-56 flex flex-col ml12">
                <span className="text-xs">Listing Title</span>
                <input
                  className="w-full h-10 border rounded-md mb-4 focus:outline-none px-3 text-xs"
                  value = {name}
                />
                <span className="text-xs">Description</span>
                <input
                  className="w-full h-10 border rounded-md mb-4 focus:outline-none px-3 text-xs"
                  value = {desc}
                />
                <span className="text-xs">Price (S$)</span>
                <input
                  className="w-full h-10 border rounded-md mb-4 focus:outline-none px-3 text-xs"
                  value = {price}
                />
                <span className="text-xs">Stocks available</span>
                <input
                  className="w-full h-10 border rounded-md mb-4 focus:outline-none px-3 text-xs"
                  value = "50"
                />
                <span className="text-xs">Instalment Period (Months)</span>
                <input
                  className="w-full h-10 border rounded-md mb-4 focus:outline-none px-3 text-xs"
                  value = "36 months"
                />

                <div className="bg-red-700 hover:bg-red-800 cursor-pointer text-center rounded-lg h-9 items-center justify-center self-end flex flex-row mt-3 mb-10 border w-20 ">
                  <span className="text-xs text-white">
                    List it!
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-56 bg-black ml-8 ">
            <img src="/upload/uploadPic.jpeg" className="w-full h-full object-contain rounded-r-2xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editlisting