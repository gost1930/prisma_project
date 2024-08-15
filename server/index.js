const express = require("express");
const app = express();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const rouert = require("./routes/product.router.js");
const cors = require("cors");
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/products", rouert);


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
