const upload_preset= import.meta.env.VITE_UPLOAD_PRESET;
const cloud_name = import.meta.env.VITE_CLOUD_NAME;

const uploadCloud = async (file) => {
    const uploaddata = new FormData();
    uploaddata.append("file", file);
    uploaddata.append("upload_preset", upload_preset);
    uploaddata.append("cloud_name", cloud_name);

    const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        {
            method: "POST",
            body: uploaddata,
        }
    );

    const data = await response.json();
    return data;
}  

export default uploadCloud;