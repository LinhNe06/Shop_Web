const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config()
app.use(cors());

const PORT = process.env.PORT;

app.get('/api/products', (req, res) => {
    res.json([
        { id: 1, name: "Áo sơ mi Shop Web", price: 250000 },
        { id: 2, name: "Quần Jean Express", price: 350000 }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});