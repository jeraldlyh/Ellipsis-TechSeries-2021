import React, { Fragment } from "react"
import Image from "next/image"
import ImageUploading from "react-images-uploading"
import { AiOutlinePlus } from "react-icons/ai"

function ImageSelector({ images, setImages, onChange }) {
    const onError = () => {
        setImages([])       // Clear images
    }

    return (
        <ImageUploading
            multiple={false}
            value={images}
            onChange={onChange}
            maxNumber={1}
            dataURLKey="data_url"
            onError={(error, files) => onError()}
        // resolutionHeight={480}
        // resolutionWidth={640}
        // resolutionType="less"
        >
            {({
                imageList,
                onImageUpload,
                // onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
                errors,
            }) => (
                errors
                    ? <div className="flex flex-col text-center">
                        {errors.maxNumber && <span>Number of selected images exceed maxNumber</span>}
                        {errors.acceptType && <span>Your selected file type is not allow</span>}
                        {errors.maxFileSize && <span>Selected file size exceed maxFileSize</span>}
                        {errors.resolution && <span>The image should be 640x480px!</span>}
                        <button
                            className="border rounded"
                            style={isDragging ? { color: "red" } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            Upload again
                        </button>
                    </div>
                    : <Fragment>
                        {
                            imageList && imageList.length === 0
                                ? <button
                                    className="w-24 h-24 rounded items-center justify-center flex"
                                    style={isDragging ? { color: "red" } : undefined}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                >
                                    <AiOutlinePlus />
                                </button>
                                : null
                        }
                        {
                            imageList.map((image, index) => (
                                <div key={index} className="flex flex-col items-center p-3">
                                    <img className="flex" src={image["data_url"] ? image["data_url"] : image} alt="" width="100%" height="100%" layout="fixed" />
                                    <div className="flex w-full mt-3 justify-around">
                                        <div className="text-xs cursor-pointer" onClick={() => onImageUpdate(index)}>Update</div>
                                        <div className="text-xs cursor-pointer text-red-700" onClick={() => onImageRemove(index)}>Remove</div>
                                    </div>
                                </div>
                            ))
                        }
                    </Fragment>
            )}
        </ImageUploading>
    )
}

export default ImageSelector