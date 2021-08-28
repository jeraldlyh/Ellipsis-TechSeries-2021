import Navbar from "../components/Navbar";
import { AiOutlinePlus, AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router"

export default function Upload() {
  const router = useRouter()

  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <div
        className="overflow-hidden -mt-10 w-full h-screen flex items-center justify-center"
        style={{ backgroundColor: "#F4F4F4" }}
      >
        <div class="justify-start items-start mr-10 flex h-96">
          <AiOutlineArrowLeft
            className="cursor-pointer w-6 h-6"
            onClick={() => router.back()}
          />
        </div>
        <div className="bg-white shadow-md rounded-2xl flex justify-between pl-10">
          <div className="flex-col flex ml-8 mr-16">
            <span className="mt-14 mb-14 text-3xl tracking-wider font-semibold" style={{ color: "#D02626" }}>LISTING DETAILS</span>
            <div className="w-96 h-96 flex-row flex justify-between">
              <div className="flex-col flex">
                <span className="text-xs">Photo</span>
                <div className="w-24 h-24 rounded border-2 items-center justify-center flex">
                  <AiOutlinePlus />
                </div>
              </div>
              <div className="w-56 flex flex-col ml-20">
                <span className="text-xs">Listing Title</span>
                <input
                  className="w-full h-6 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                />
                <span className="text-xs">Description</span>
                <input
                  className="w-full h-6 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                />
                <span className="text-xs">Price (S$)</span>
                <input
                  className="w-full h-6 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                />
                <span className="text-xs">Stocks available</span>
                <input
                  className="w-full h-6 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                />
                <span className="text-xs">Instalment Period (Months)</span>
                <input
                  className="w-full h-6 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                />

                <div className="bg-red-700 hover:bg-red-800 cursor-pointer text-center rounded-lg h-6 items-center justify-center self-end flex flex-row mt-3 mb-10 border w-20 ">
                  <span className="text-xs text-white">
                    List it!
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-44 bg-black ml-10 ">
            <img src="/upload/uploadPic.jpeg" className="w-full h-full object-cover rounded-r-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
