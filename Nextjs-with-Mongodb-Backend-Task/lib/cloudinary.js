import Cloudinary from 'cloudinary';

const cloudinary = Cloudinary.v2;

cloudinary.config({
    api_key: "743279395495665",
    api_secret: "L0ON5UKJXGnx6-XObucUgb921RM",
    cloud_name: "ubaid",
})

export default cloudinary;