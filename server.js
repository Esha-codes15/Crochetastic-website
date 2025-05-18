// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');
// const path = require('path');
// const multer = require('multer');

// const app = express();
// const PORT = 3000;

// // Enable CORS
// app.use(cors());

// // Create uploads folder if it doesn't exist
// const uploadFolder = path.join(__dirname, 'uploads');
// if (!fs.existsSync(uploadFolder)) {
//   fs.mkdirSync(uploadFolder);
// }

// // Multer storage config
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, uploadFolder),
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     const cleanName = file.originalname.replace(/\s+/g, '_');
//     cb(null, uniqueSuffix + '-' + cleanName);
//   }
// });
// const upload = multer({ storage });

// // Serve uploads folder statically
// app.use('/uploads', express.static(uploadFolder));

// // Get last product ID to increment for next product
// app.get('/last-id', (req, res) => {
//   const contentPath = path.join(__dirname, 'content.json');
//   if (!fs.existsSync(contentPath)) {
//     return res.json({ lastId: 0 });
//   }
//   try {
//     const content = JSON.parse(fs.readFileSync(contentPath));
//     const lastId = content.length > 0 ? Math.max(...content.map(p => Number(p.id))) : 0;
//     res.json({ lastId });
//   } catch (err) {
//     console.error('Error reading last ID:', err);
//     res.status(500).json({ lastId: 0 });
//   }
// });

// // Add product with image uploads
// app.post('/add-product', upload.fields([
//   { name: 'previewFile', maxCount: 1 },
//   { name: 'photosFiles', maxCount: 10 }
// ]), (req, res) => {
//   try {
//     const {
//       id,
//       name,
//       brand,
//       price,
//       isAccessory,
//       description
//     } = req.body;

//     if (!id || !name || !brand || !price || !req.files['previewFile']) {
//       return res.status(400).send('Missing required fields or files');
//     }

//     // Build URLs for images
//     const previewFile = req.files['previewFile'][0];
//     const previewUrl = `/uploads/${previewFile.filename}`;

//     const photosFiles = req.files['photosFiles'] || [];
//     const photosUrls = photosFiles.map(f => `/uploads/${f.filename}`);

//     // Construct product data
//     const contentData = {
//       id,
//       name,
//       brand,
//       price: parseFloat(price),
//       preview: previewUrl,
//       isAccessory: isAccessory === 'true'
//     };

//     const contentDetailData = {
//       ...contentData,
//       description: description || '',
//       photos: photosUrls
//     };

//     // Paths for JSON files
//     const contentPath = path.join(__dirname, 'content.json');
//     const detailPath = path.join(__dirname, 'contentdetail.json');

//     // Read existing content or start empty
//     let content = [];
//     if (fs.existsSync(contentPath)) {
//       content = JSON.parse(fs.readFileSync(contentPath));
//     }
//     content.unshift(contentData); // Add new product to start
//     fs.writeFileSync(contentPath, JSON.stringify(content, null, 2));

//     let contentDetails = [];
//     if (fs.existsSync(detailPath)) {
//       contentDetails = JSON.parse(fs.readFileSync(detailPath));
//     }
//     contentDetails.unshift(contentDetailData); // Add new detail to start
//     fs.writeFileSync(detailPath, JSON.stringify(contentDetails, null, 2));

//     res.send('✅ Product added successfully!');
//   } catch (err) {
//     console.error('Error handling upload:', err);
//     res.status(500).send('Server error');
//   }
// });

// // Serve admin.html on root
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'admin.html'));
// });

// app.listen(PORT, () => {
//   console.log(`Server started at http://localhost:${PORT}`);
// });
