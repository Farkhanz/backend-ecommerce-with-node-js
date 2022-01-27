import express from 'express';
import {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} from '../controllers/product.js';
// import { getMerchant } from '../controllers/merchant.js';

const router = express.Router();

// router for login merchant
// router.get('/merchant', getMerchant);

// router for products
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;