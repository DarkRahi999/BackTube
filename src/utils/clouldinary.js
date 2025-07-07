import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

const uploadFile = async (filePath) => {
    try {
        if (!filePath) return null;
        const result = await cloudinary.uploader.upload(filePath, {
            resource_type: "auto",
        });
        console.log("File uploaded successfully on cloudinary", result.url);
        return result;

    } catch (error) {
        fs.unlinkSync(filePath);
        return null;
    }
}
export { uploadFile };