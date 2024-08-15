const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cors = require("cors");
const productController = require("../Controllers/product.controller");
const PORT = process.env.PORT || 3001;


router.get("/", cors(), productController.getAllProduct);
router.get("/:id", cors(), productController.getOneProduct);
router.post("/", cors(), productController.addProduct);
router.put("/:id", cors(), productController.updatePro);
router.delete("/:id", cors(), productController.deleteProduct);
module.exports = router