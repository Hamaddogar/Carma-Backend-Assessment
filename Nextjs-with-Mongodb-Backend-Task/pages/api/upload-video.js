import cloudinary from '../../lib/cloudinary';
import dbConnect from '../../lib/dbConnect';
import getData from '../../lib/getData';
import Video from '../../models/Video';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            await dbConnect();
            const { files, fields } = await getData(req);
            
            const cloudRes = await cloudinary.uploader.upload(files.video.filepath, {
                resource_type: 'video',
                public_id: files.video.newFilename,
            });
            const videoRes = await Video.create({
                url: cloudRes.secure_url,
                title: fields.title,
                description: fields.description,
                userId: "618b611d15344f254c809213"
            });
            res.status(201).json(videoRes);
        }
        catch (err) {
            res.json(err);
        }
    }
    else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}