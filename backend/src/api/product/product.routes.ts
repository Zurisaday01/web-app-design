import express from 'express';
import { productController } from './product.controller';

const productsRouter = express.Router();

// GET
productsRouter.get('/', productController.getProducts);
productsRouter.get('/:id', productController.getProductById);

// POST
productsRouter.post('/', productController.createProduct);

// DELETE
productsRouter.delete('/:id', productController.deleteProduct);

// PATCH
productsRouter.patch('/:id', productController.updateProduct);

export default productsRouter;
