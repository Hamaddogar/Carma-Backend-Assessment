import multer from "multer";

const upload = multer({
    storage: multer.diskStorage({
        destination: './content',
        filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now()),
    }),
    limits: 100000
});

export default upload;