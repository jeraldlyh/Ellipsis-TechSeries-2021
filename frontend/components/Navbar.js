export default function Navbar() {
  return (
    <div className="font-semibold flex bg-white items-center justify-between px-10 pt-1 pb-3">
      <div className="tracking-widest">CHEQUEMATE</div>
      <div className="flex items-center justify-between w-56">
        <div className="tracking-wider text-xs">Help</div>
        <div className="tracking-wider text-xs">Login</div>
        <div className="py-2 px-5 tracking-wider bg-black rounded-md text-white text-xs">Register</div>
      </div>
    </div>
  )
}