import nextConnect from 'next-connect';
import cloudinary from '../../lib/cloudinary';
import dbConnect from '../../lib/dbConnect';
import Video from '../../models/Video';
import upload from '../../lib/multer';

const apiRoute = nextConnect({
    onError(error, req, res) {
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});

apiRoute.use(upload.array('video'));

apiRoute.post(async (req, res) => {
    try {
        await dbConnect();
        const file = req.files[0];
        const cloudRes = await cloudinary.uploader.upload(file.path, {
            resource_type: 'video',
            public_id: file.filename,
        });
        const videoRes = await Video.create({
            url: cloudRes.secure_url,
            title: req.body.title,
            description: req.body.description,
            userId: "618b611d15344f254c809213"
        });
        return res.status(201).json(videoRes);
    }
    catch (err) {
        res.status(err.http_code || error.status || error.statusCode || 501).json({message: err.message})
    }
});

export default apiRoute;

export const config = {
    api: {
        bodyParser: false,
    },
};