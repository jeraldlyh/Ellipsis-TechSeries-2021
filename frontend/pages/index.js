import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Navbar />
      <div className="bg-gray-50 tracking-widest font-semibold text-7xl w-screen h-screen px-20 py-52">
        <div className="w-48">
          <div className="text-black mb-2">
            CHEQUEMATE
          </div>
          <div className="text-red-600 mb-1">
            BNPL
          </div>
          <div className="border-b-8 border-red-600" />
        </div>
      </div>
    </div>
  )
}
