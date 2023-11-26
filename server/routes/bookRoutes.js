const express = require('express');
const router = express.Router();

require('../db/conn');

const bookController = require('../controllers/bookController');

//===================  CREATE BOOK  =========================//

router.post('/createBook', bookController.createBook);

//===================  GET BOOK  =========================//

router.get('/book', bookController.getBooks);



// =======================================//

// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         console.log("File: ", file);
//         cb(null, path.join(__dirname, '../client/src/assets/books'));
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
// });

// const upload = multer({ storage: storage });

// app.post("/upload-image", upload.single("image"), async (req, res) => {
//     console.log(req.body);
//     const imageName = req.file.filename;

//     try {
//         await Images.create({ image: imageName });
//         res.json({ status: "ok" });
//     } catch (error) {
//         res.json({ status: error });
//     }
// });

// =======================================//

module.exports = router;
