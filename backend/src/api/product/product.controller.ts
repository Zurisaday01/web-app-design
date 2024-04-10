import { Request, Response } from 'express';
import { ProductService } from './product.service';

export class productController {
	static async getProductById(req: Request, res: Response) {
		try {
			const productId = req.params.id;
			const product = await ProductService.getProductById(productId);
			res.json(product);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async getProducts(_req: Request, res: Response) {
		try {
			const products = await ProductService.getProducts();
			res.json(products);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async createProduct(req: Request, res: Response) {
		try {
			const newProduct = await ProductService.createProduct(req.body);
			res.json(newProduct);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async updateProduct(req: Request, res: Response) {
		try {
			const productId = req.params.id;
			const response = await ProductService.updateProduct(productId, req.body);

			if (!response) {
				res.status(404).json({ error: 'Product not found' });
			}

			if (response.affectedRows > 0) {
				res.json({ success: 'Product successfully updated' });
			} else {
				res.status(500).json({ error: 'Failed to update product' });
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async deleteProduct(req: Request, res: Response) {
		try {
			const productId = req.params.id;
			const response = await ProductService.deleteProduct(productId);

			if (!response) {
				res.status(404).json({ error: 'Product not found' });
			}

			if (response.affectedRows > 0) {
				res.json({ success: 'Product successfully deleted' });
			} else {
				res.status(500).json({ error: 'Failed to delete product' });
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}
}
