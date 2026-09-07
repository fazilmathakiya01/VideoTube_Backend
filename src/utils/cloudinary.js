import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!LocalFilePath) return console.log("Local File Path Not Found!!")
        const cloudinaryLink = await cloudinary.uploader.upload(localFilePath,{
            resource_type: 'raw'
        })
        if(!cloudinaryLink){
            return console.log("File Not Uploaded!!")
        } else{
            fs.unlinkSync(localFilePath)
            return cloudinaryLink.url
        }

    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
    }
}

export { uploadOnCloudinary }