import { useState } from "react"
import NumberFormat from "react-number-format"
import ImageSelector from "../components/ImageSelector"
import axiosInstance from "../axios/axiosInstance"


export default function Items() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [instalment, setInstalment] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [images, setImages] = useState([])

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
            const product = {
                name: name,
                description: description,
                instalment: instalment,
                quantity: quantity,
                price: price,
                image: response.data.imageURL,
            }
            await axiosInstance.post("api/product/", product)
        } catch (error) {
            console.log(error)
        }
    }
    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList)
        console.log(imageList)
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex space-x-3 items-center">
                <span>Name</span>
                <input className="border-2" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="flex space-x-3 items-center">
                <span>Description</span>
                <input className="border-2" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
            </div>
            <div className="flex space-x-3 items-center">
                <span>Price</span>
                <NumberFormat
                    className="border-2"
                    value={price}
                    prefix="$"
                    type="text"
                    thousandSeparator={true}
                    displayType="input"
                    onValueChange={(values) => {
                        const { formattedValue, value } = values
                        setPrice(formattedValue)
                    }}
                    placeholder="Price"
                    isAllowed={priceLimit}
                />
            </div>
            <div className="flex space-x-3 items-center">
                <span>Quantity</span>
                <NumberFormat
                    className="border-2"
                    value={quantity}
                    type="text"
                    thousandSeparator={true}
                    displayType="input"
                    onValueChange={(values) => {
                        const { formattedValue, value } = values
                        setQuantity(formattedValue)
                    }}
                    placeholder="Price"
                    isAllowed={quantityLimit}
                />
            </div>
            <div className="flex space-x-3 items-center">
                <span>Instalment Period</span>
                <NumberFormat
                    className="border-2"
                    value={instalment}
                    type="text"
                    thousandSeparator={true}
                    displayType="input"
                    onValueChange={(values) => {
                        const { formattedValue, value } = values
                        setInstalment(formattedValue)
                    }}
                    placeholder="Instalment Period"
                    isAllowed={instalmentLimit}
                />
            </div>
            <ImageSelector images={images} setImages={setImages} onChange={onChange} />
            <div onClick={handleUpload}>Upload la</div>
        </div>
    )
}