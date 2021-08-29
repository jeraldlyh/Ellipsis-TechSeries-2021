import React, { useState } from 'react'
import Navbar from '../components/Navbar.js'
import { AiOutlineArrowLeft } from "react-icons/ai"
import { useRouter } from "next/router"
import NumberFormat from "react-number-format"
import axiosInstance from '../axios/axiosInstance.js'
import { useAuth } from '../hooks/useAuth.js'


const calculateCredit = () => {
    const router = useRouter()
    const [liquid, setLiquid] = useState("")
    const [liabilities, setLiabilities] = useState("")
    const [netProfit, setNetProfit] = useState("")
    const [revenue, setRevenue] = useState("")
    const [cashFlow, setCashFlow] = useState("")
    const [shares, setShares] = useState("")
    const [debt, setDebt] = useState("")
    const [asset, setAsset] = useState("")
    const { session, loading } = useAuth()

    const submitCreditRating = async () => {
        const quickRatio = parseInt(liquid.replace("$", "")) / parseInt(liabilities.replace("$", ""))
        const netProfitMargin = parseInt(netProfit.replace("$", "")) / parseInt(revenue.replace("$", ""))
        const debtRatio = parseInt(debt.replace("$", "")) / parseInt(asset.replace("$", ""))
        const operatingCashFlowPerShare = parseInt(cashFlow.replace("$", "")) / parseInt(shares.replace("$", ""))

        const body = {
            quickRatio: quickRatio,
            netProfitMargin: netProfitMargin,
            debtRatio: debtRatio,
            operatingCashFlowPerShare: operatingCashFlowPerShare,
            companyID: session.uen,
        }
        await axiosInstance.post("/api/company/credit", body)
        router.push("/home")
    }

    return (
        <div className="h-screen overflow-hidden">
            <Navbar />
            <div
                className="overflow-hidden -mt-10 w-full h-screen flex items-center justify-center"
                style={{ backgroundColor: "#F4F4F4" }}
            >
                <div className="justify-start items-start mr-10 flex -mt-24 h-96">
                    <AiOutlineArrowLeft
                        className="cursor-pointer w-6 h-6"
                        onClick={() => router.back()}
                    />
                </div>
                <div className="bg-white shadow-md rounded-2xl flex justify-between pl-10">
                    <div className="flex-col flex ml-8 mr-0">
                        <span className="mt-14 mb-10 text-3xl tracking-wider font-semibold" style={{ color: "#D02626" }}>Let us find out more about your business...</span>
                        <div className="w-96 h-96 flex-row flex justify-between">
                            <div className="w-96 flex flex-col">
                                <span className="text-xs pb-1" >Liquid Assets</span>
                                <NumberFormat
                                    className="w-full h-8 w-56 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                                    style={{ backgroundColor: "#F7F7F7" }}
                                    value={liquid}
                                    prefix="$"
                                    type="text"
                                    thousandSeparator={true}
                                    displayType="input"
                                    onValueChange={(values) => {
                                        const { formattedValue, value } = values
                                        setLiquid(formattedValue)
                                    }}
                                />
                                <span className="text-xs pb-1">Liabilities</span>
                                <NumberFormat
                                    className="w-full h-8 w-56 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                                    style={{ backgroundColor: "#F7F7F7" }}
                                    value={liabilities}
                                    prefix="$"
                                    type="text"
                                    thousandSeparator={true}
                                    displayType="input"
                                    onValueChange={(values) => {
                                        const { formattedValue, value } = values
                                        setLiabilities(formattedValue)
                                    }}
                                />
                                <span className="text-xs pb-1">Company Net profits</span>
                                <NumberFormat
                                    className="w-full h-8 w-56 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                                    style={{ backgroundColor: "#F7F7F7" }}
                                    value={netProfit}
                                    prefix="$"
                                    type="text"
                                    thousandSeparator={true}
                                    displayType="input"
                                    onValueChange={(values) => {
                                        const { formattedValue, value } = values
                                        setNetProfit(formattedValue)
                                    }}
                                />
                                <span className="text-xs pb-1">Company Revenue</span>
                                <NumberFormat
                                    className="w-full h-8 w-56 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                                    style={{ backgroundColor: "#F7F7F7" }}
                                    value={revenue}
                                    prefix="$"
                                    type="text"
                                    thousandSeparator={true}
                                    displayType="input"
                                    onValueChange={(values) => {
                                        const { formattedValue, value } = values
                                        setRevenue(formattedValue)
                                    }}
                                />
                            </div>

                            <div className="w-96 flex flex-col ml-16">
                                <span className="text-xs pb-1">Net Cash Flow from Operating Activities</span>
                                <NumberFormat
                                    className="w-full h-8 w-56 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                                    style={{ backgroundColor: "#F7F7F7" }}
                                    value={cashFlow}
                                    prefix="$"
                                    type="text"
                                    thousandSeparator={true}
                                    displayType="input"
                                    onValueChange={(values) => {
                                        const { formattedValue, value } = values
                                        setCashFlow(formattedValue)
                                    }}
                                />
                                <span className="text-xs pb-1">Number of outstanding shares</span>
                                <input
                                    className="w-full h-8 w-56 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                                    style={{ backgroundColor: "#F7F7F7" }}
                                    value={shares}
                                    onChange={e => setShares(e.target.value)}
                                />

                                <span className="text-xs pb-1">Total debt</span>
                                <NumberFormat
                                    className="w-full h-8 w-56 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                                    style={{ backgroundColor: "#F7F7F7" }}
                                    value={debt}
                                    prefix="$"
                                    type="text"
                                    thousandSeparator={true}
                                    displayType="input"
                                    onValueChange={(values) => {
                                        const { formattedValue, value } = values
                                        setDebt(formattedValue)
                                    }}
                                />

                                <span className="text-xs pb-1">Total assets</span>
                                <NumberFormat
                                    className="w-full h-8 w-56 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                                    style={{ backgroundColor: "#F7F7F7" }}
                                    value={asset}
                                    prefix="$"
                                    type="text"
                                    thousandSeparator={true}
                                    displayType="input"
                                    onValueChange={(values) => {
                                        const { formattedValue, value } = values
                                        setAsset(formattedValue)
                                    }}
                                />

                                <div className="bg-red-700 hover:bg-red-800 cursor-pointer text-center rounded-lg h-8 w-56 items-center justify-center self-end flex flex-row border" onClick={submitCreditRating}>
                                    <span className="text-xs text-white w-full h-full flex flex-wrap content-center justify-center">
                                        Calculate my credit rating!
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-80  mr-6">
                        <img src="/calculateCredit/pic.jpg" className="h-full w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default calculateCredit
