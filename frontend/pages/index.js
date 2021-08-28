import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Navbar />
      <div className="bg-gray-50 w-screen">
        <div className="justify-between flex tracking-widest font-semibold text-7xl w-screen h-screen px-28">
          <div className="w-48 py-52 z-10">
            <div className="text-black mb-3">
              CHEQUEMATE
            </div>
            <div className="text-red-600 mb-2">
              BNPL
            </div>
            <div className="border-b-8 border-red-600" />
            <div className="py-2 px-5 w-32 mt-10 tracking-wider bg-black rounded-md text-white text-xs cursor-pointer hover:bg-gray-700" onClick={() => router.push("/")}>Register now</div>
          </div>
          <img src="/landing/building.png" className="pt-10 pb-24 h-screen" />
        </div>
        <div className="text-center italic px-96">
          We help <span className="text-red-600">small businesses</span> access <span className="text-red-600">Buy Now Pay Later (BNPL)</span> schemes with the aim of <span className="text-red-600">financial inclusion</span> in mind
        </div>
        <div className="mt-8 text-red-600 font-light text-center text-xxs">
          - CHEQUEMATE
        </div>
      </div>
    </div>
  )
}
