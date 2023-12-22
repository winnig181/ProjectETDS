// const sharp = require('sharp');
// const fs = require('fs/promises');
// const express = require('express');
// const { Company, User } = require('../db/models');
// const upload = require('../middlewares/multerMid');

// const multerRouter = express.Router();

// // Обработчик POST-запроса по маршруту '/upload' с использованием middleware 'upload.single'
// multerRouter.post('/company', upload.single('file'), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: 'File not found' });
//     }

//     const name = `${Date.now()}.webp`;
//     req.session.user.Company.img = name;

//     console.log(111111111111111, req.session.user.Company);
//     const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();

//     await fs.writeFile(`./public/img/${name}`, outputBuffer);

//     const companyUpdatedWithImg = await Company.update(
//       { img: name },
//       { where: { id: req.body.id } }
//     );

//     res.json(name);
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// multerRouter.post('/user', upload.single('file'), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: 'File not found' });
//     }

//     const name = `${Date.now()}.webp`;
//     req.session.user.img = name;

//     const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();

//     await fs.writeFile(`./public/img/${name}`, outputBuffer);

//     const userUpdatedWithImg = await User.update(
//       { img: name },
//       { where: { id: req.body.id } }
//     );

//     res.json(name);
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = multerRouter;
