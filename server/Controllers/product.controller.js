const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Add product
const addProduct = async (req, res) => {
    try {
        const { title, price, description, img, categoryId } = req.body;
        if (!title || !price || !description) {
            return res.status(400).json({ error: "All fields are required." });
        }

        const product = await prisma.product.create({
            data: {
                title,
                price,
                description,
                img,
                categoryId,
                updated_at: new Date(), 
            }
        });
        res.status(201).json(product);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "An error occurred while adding the product." });
    }
};

// Update product
const updatePro = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, price, description, img } = req.body;
        if (!title || !price || !description) {
            return res.status(400).json({ error: "All fields are required." });
        }
        const product = await prisma.product.update({
            where: { id: Number(id) },
            data: {
                title,
                price,
                description,
                img,
                updated_at: new Date(), 
            }
        });
        res.status(200).json(product);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "An error occurred while updating the product." });
    }
};

// Delete product
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await prisma.product.delete({
            where: { id: Number(id) }
        });
        res.status(200).json(product);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "An error occurred while deleting the product." });
    }
};

// Get all products
const getAllProduct = async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        res.status(200).json(products);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "An error occurred while fetching products." });
    }
};

// Get one product
const getOneProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await prisma.product.findUnique({
            where: { id: Number(id) }
        });
        res.status(200).json(product);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "An error occurred while fetching the product." });
    }
};

module.exports = {
    addProduct,
    updatePro,
    deleteProduct,
    getAllProduct,
    getOneProduct,
};
