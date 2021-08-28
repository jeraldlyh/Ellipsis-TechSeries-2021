import React, { Fragment } from "react"
import Image from "next/image"
import ImageUploading from "react-images-uploading"


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
            acceptType={["jpg", "png"]}
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
                                    className="border rounded"
                                    style={isDragging ? { color: "red" } : undefined}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                >
                                    Click or Drop here
                                </button>
                                : null
                        }
                        {
                            imageList.map((image, index) => (
                                <div key={index} className="flex flex-col items-center border rounded p-3">
                                    <Image className="flex" src={image["data_url"]} alt="" width="100%" height="100%" layout="fixed" />
                                    <div className="flex w-full mt-3 justify-around">
                                        <div onClick={() => onImageUpdate(index)}>Update</div>
                                        <div onClick={() => onImageRemove(index)}>Remove</div>
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