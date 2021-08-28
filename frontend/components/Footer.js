import { useRouter } from "next/router"

export default function Footer() {
  const router = useRouter()

  return (
    <div className="justify-center">
      {/* <div className="flex justify-center">
        <div className="mb-8 w-1/2 items-center flex text-xs text-red-700 justify-between">
          <div className="cursor-pointer font-semibold">
            Product
          </div>
          <div className="cursor-pointer font-semibold">
            Features
          </div>
          <div className="cursor-pointer text-base font-semibold" onClick={() => router.push("/")}>
            CHEQUEMATE
          </div>
          <div className="cursor-pointer font-semibold">
            About
          </div>
          <div className="cursor-pointer font-semibold">
            Support
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-12">
        <div className="w-2/3 border-red-700 border-b" />
      </div> */}
      <img src="/footer/footer.png" />
    </div>
  )
}