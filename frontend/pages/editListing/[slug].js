import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Navbar from '../../components/Navbar.js'
import styles from '../../styles/marketplace.module.css'
import ImageSelector from "../../components/ImageSelector.js"
import { AiOutlineArrowLeft } from "react-icons/ai"
import axiosInstance from "../../axios/axiosInstance.js"
import NumberFormat from "react-number-format"
import { useAuth } from "../../hooks/useAuth.js"


const Editlisting = () => {
    const router = useRouter()
    const { session, loading } = useAuth()
    const { slug } = router.query
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [images, setImages] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [instalment, setInstalment] = useState("")


    useEffect(() => {
        getProductDetails()
    }, [])

    const getProductDetails = async () => {
        const response = await axiosInstance.get(`/api/product/${slug}`)
        const product = response.data.product
        setName(product.name)
        setDescription(product.description)
        setPrice(product.price)
        setInstalment(product.instalment)
        setQuantity(product.quantity)
        setImages([product.image])
    }

    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList)
    }

    const submitUpdate = async () => {
        try {
            if (images[0]["data_url"]) {
                console.log("true")
                const file = {
                    data: images[0]["data_url"],
                    type: images[0]["file"]["type"],
                }
                const response = await axiosInstance.post("api/product/image", file)
                console.log(response)
                const product = {
                    name: name,
                    description: description,
                    instalment: instalment,
                    quantity: quantity,
                    price: parseInt(price.replace("$", "").replace(",", "")),
                    image: response.data.imageURL,
                    companyID: session.uen,
                }
                await axiosInstance.post(`api/product/${slug}`, product)
            } else {
                console.log("here")
                const product = {
                    name: name,
                    description: description,
                    instalment: instalment,
                    quantity: quantity,
                    price: parseInt(price.replace("$", "").replace(",", "")),
                    image: images[0],
                    companyID: session.uen,
                }
                await axiosInstance.post(`api/product/${slug}`, product)
            }
            router.push("/listings")
        } catch (error) {
            console.log(error)
        }
    }

    const priceLimit = ({ floatValue }) => floatValue <= 999999 && floatValue > 0 || !floatValue

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
                                    <ImageSelector images={images} setImages={setImages} onChange={onChange} />
                                </div>
                            </div>
                            <div className="w-56 flex flex-col ml12">
                                <span className="text-xs">Listing Title</span>
                                <input
                                    className="w-full h-10 border rounded-md mb-4 focus:outline-none px-3 text-xs"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                                <span className="text-xs">Description</span>
                                <input
                                    className="w-full h-10 border rounded-md mb-4 focus:outline-none px-3 text-xs"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                                <span className="text-xs">Price (S$)</span>
                                <NumberFormat
                                    className="w-full h-10 border rounded-md mb-4 focus:outline-none px-3 text-xs"
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
                                <span className="text-xs">Stocks available</span>
                                <input
                                    className="w-full h-10 border rounded-md mb-4 focus:outline-none px-3 text-xs"
                                    value={quantity}
                                    onChange={e => setQuantity(e.target.value)}
                                />
                                <span className="text-xs">Instalment Period (Months)</span>
                                <input
                                    className="w-full h-10 border rounded-md mb-4 focus:outline-none px-3 text-xs"
                                    value={instalment}
                                    onChange={e => setInstalment(e.target.value)}
                                />

                                <div className="bg-red-700 hover:bg-red-800 cursor-pointer text-center rounded-lg h-9 items-center justify-center self-end flex flex-row mt-3 mb-10 border w-20 " onClick={submitUpdate}>
                                    <span className="text-xs text-white">
                                        Update!
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