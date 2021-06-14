const multer = require("multer");
const path = require("path");

//set multer storage engine
const storage = multer.diskStorage({
    destination: "./client/public/post",
    filename: (req, file, cb) => {
        cb(
            null,
            req.body.title.split(" ").join("-") +
                "_" +
                file.fieldname +
                path.extname(file.originalname)
        );
    },
});
const checkFileType = (file, cb) => {
    const ext = path.extname(file.originalname);
    if (
        ext !== ".png" &&
        ext !== ".jpg" &&
        ext !== ".jpeg" &&
        ext !== ".webp"
    ) {
        return cb("error :file should be an image (jpeg, png, jpg, webp)");
    }
    cb(null, true);
};
exports.upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024,
    },
    fileFilter: (res, file, cb) => {
        checkFileType(file, cb);
    },
});
