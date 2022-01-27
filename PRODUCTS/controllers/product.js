import Product from "../models/productModel.js";

export const getAllProducts = async(req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(404).send('cant find your data.');
        // res.json({ message: error.message });
    }
}

export const getProductById = async(req, res) => {
    try {
        const product = await Product.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(product[0]);
    } catch (error) {
        res.status(401).send('failed to get data.');
        // res.json({ message: error.message })
    }
}

export const createProduct = async(req, res) => {
    try {
        await Product.create(req.body);
        res.json({ "message": "Product has been created" });
    } catch (error) {
        res.status(400).send('cant create product data');
        // res.json({ message: error.message });
    }
}

export const updateProduct = async(req, res) => {
    try {
        await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({ "message": "Product has been update" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteProduct = async(req, res) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({ "message": "Product has been deleted" });
    } catch (error) {
        res.json({ message: error.message });
    }
}