import { useState } from "react"
import Navbar from "../components/Navbar"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { useRouter } from "next/router"
import NumberFormat from "react-number-format"
import ImageSelector from "../components/ImageSelector"
import axiosInstance from "../axios/axiosInstance"
import { useAuth } from "../hooks/useAuth"


export default function Upload() {
    const router = useRouter()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [instalment, setInstalment] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [images, setImages] = useState([])
    const { session, loading } = useAuth()

    const priceLimit = ({ floatValue }) => floatValue <= 999999 && floatValue > 0 || !floatValue
    const instalmentLimit = ({ floatValue }) => floatValue <= 36 && floatValue > 0 || !floatValue
    const quantityLimit = ({ floatValue }) => floatValue <= 999 && floatValue > 0 || !floatValue

    const handleUpload = async () => {
        try {
            const file = {
                data: images[0]["data_url"],
                type: images[0]["file"]["type"],
            }

            const response = await axiosInstance.post("api/product/image", file)
            console.log(response.data)
            const product = {
                name: name,
                description: description,
                instalment: instalment,
                quantity: quantity,
                price: price,
                image: response.data.imageURL,
                companyID: session.uen,
            }
            await axiosInstance.post("api/product/", product)
            router.push("/listings")
        } catch (error) {
            console.log(error)
        }
    }

    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList)
    }

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
                <div className="bg-white shadow-md rounded-2xl flex justify-between pl-10">
                    <div className="flex-col flex ml-8 mr-16">
                        <span className="mt-14 mb-14 text-3xl tracking-wider font-semibold" style={{ color: "#D02626" }}>LISTING DETAILS</span>
                        <div className="w-96 h-96 flex-row flex justify-between">
                            <div className="flex-col flex">
                                <span className="text-xs">Photo</span>
                                <ImageSelector images={images} setImages={setImages} onChange={onChange} />
                            </div>
                            <div className="w-56 flex flex-col ml-20">
                                <span className="text-xs">Listing Title</span>
                                <input
                                    className="w-full h-6 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                                    value={name} onChange={e => setName(e.target.value)}
                                />
                                <span className="text-xs">Description</span>
                                <input
                                    className="w-full h-6 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                                    value={description} onChange={e => setDescription(e.target.value)}
                                />
                                <span className="text-xs">Price (S$)</span>
                                <NumberFormat
                                    className="w-full h-6 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                                    value={price}
                                    prefix="$"
                                    type="text"
                                    thousandSeparator={true}
                                    displayType="input"
                                    onValueChange={(values) => {
                                        const { formattedValue, value } = values
                                        setPrice(formattedValue)
                                    }}
                                    isAllowed={priceLimit}
                                />
                                <span className="text-xs">Stocks Available</span>
                                <NumberFormat
                                    className="w-full h-6 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                                    value={quantity}
                                    type="text"
                                    thousandSeparator={true}
                                    displayType="input"
                                    onValueChange={(values) => {
                                        const { formattedValue, value } = values
                                        setQuantity(formattedValue)
                                    }}
                                    isAllowed={quantityLimit}
                                />
                                <span className="text-xs">Instalment Period (Months)</span>
                                <NumberFormat
                                    className="w-full h-6 border rounded-md mb-5 focus:outline-none px-3 text-xs"
                                    value={instalment}
                                    type="text"
                                    thousandSeparator={true}
                                    displayType="input"
                                    onValueChange={(values) => {
                                        const { formattedValue, value } = values
                                        setInstalment(formattedValue)
                                    }}
                                    isAllowed={instalmentLimit}
                                />
                                <div className="bg-red-700 hover:bg-red-800 cursor-pointer text-center rounded-lg h-6 items-center justify-center self-end flex flex-row mt-3 mb-10 border w-20" onClick={handleUpload}>
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
