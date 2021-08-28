import React from "react"


function Error({message, errorCode, action}) {
    return (
        <div className="bg-black h-screen text-white">
            <div className="flex flex-col h-full p-20">
                <p className="font-bold text-8xl opacity-25 tracking-widest">{errorCode}</p>
                <div className="space-y-2 my-8 font-semibold">
                    <h1 className="text-4xl pb-3">Oops..</h1>
                    <p className="text-medium uppercase">Something went wrong</p>
                    <p className="font-light text-medium">{message}</p>
                </div>
                <div className="py-3 w-28 rounded-full bg-yellow-500 hover:bg-opacity-90 cursor-pointer" onClick={action}>
                    <p className="text-center text-sm font-semibold uppercase">Back</p>
                </div>
            </div>
        </div>
    )
}

export default Error