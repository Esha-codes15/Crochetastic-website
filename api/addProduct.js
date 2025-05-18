// api/addProduct.js
let content = [];
let contentdetail = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { newProduct, detailedProduct } = req.body;

    if (!newProduct || !detailedProduct) {
      return res.status(400).json({ error: 'Missing product data' });
    }

    // Add new product data to in-memory arrays (resets on every cold start)
    content.unshift(newProduct);
    contentdetail.unshift(detailedProduct);

    return res.status(200).json({ message: 'Product added (temporary in-memory)' });
  } else {
    // Return current data (only while serverless function is warm)
    return res.status(200).json({ content, contentdetail });
  }
}
