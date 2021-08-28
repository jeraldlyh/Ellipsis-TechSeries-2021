import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen py-2">
      <Navbar />
      <div className="bg-gray-100 w-screen justify-center">
        <div className="justify-between flex tracking-widest font-semibold text-7xl w-screen h-screen px-28">
          <div className="w-48 py-52 z-10">
            <div className="text-black mb-3">
              CHEQUEMATE
            </div>
            <div className="text-red-700 mb-2">
              BNPL
            </div>
            <div className="border-b-8 border-red-700" />
            <div className="py-2 px-5 w-32 mt-10 tracking-wider bg-black rounded-md text-white text-xs cursor-pointer hover:bg-gray-700" onClick={() => router.push("/")}>Register now</div>
          </div>
          <img src="/landing/building.png" className="pt-10 pb-24 h-screen" />
        </div>
        <div className="flex justify-center">
          <div className="text-center italic w-1/2">
            We help <span className="text-red-700">small businesses</span> access <span className="text-red-700">Buy Now Pay Later (BNPL)</span> schemes with the aim of <span className="text-red-700">financial inclusion</span> in mind
          </div>
        </div>
        <div className="mt-8 mb-32 text-red-700 font-light text-center text-xxs">
          - CHEQUEMATE
        </div>

        <div className="flex w-full absolute z-30 mt-12">
          <div className="w-3/5 mt-60">
            <div className="pl-40 font-semibold text-5xl text-red-700 mb-8">
              What we offer
            </div>
            <div className="italic pl-40 font-light text-xl text-gray-700 mb-2">
              ChequeMate provide financial inclusion to SMEs by creating a platform facilitating Business to Business (B2B) BNPL scheme. We offers a safer alternative to taking high interest loans from banks, allowing you to procure goods from suppliers at no or low interest repayment instalments.
            </div>
          </div>
          <div className="w-3/5">
            <div className="pl-10 pr-40 font-semibold text-5xl text-red-700 mb-8">
              Buy Now <br />Pay Later Scheme
            </div>
            <div className="italic pl-10 pr-40 font-light text-xl text-gray-700 mb-2">
              BNPL services enable consumers to buy items now and spread their purchases over short instalment periods, with little to no interest.
            </div>
          </div>
        </div>
        <img src="/landing/background.png" className="mb-32" />

        <Footer />
      </div>
    </div>
  )
}
