import { Request, Response } from 'express';
import { CategoryService } from './category.service';

export class categoryController {
	static async getCategoryById(req: Request, res: Response) {
		try {
			const categoryId = req.params.id;
			const category = await CategoryService.getCategoryById(categoryId);
			res.json(category);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async getCategories(_req: Request, res: Response) {
		try {
			const categories = await CategoryService.getCategories();
			res.json(categories);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async createCategory(req: Request, res: Response) {
		try {
			// Get the current date and time
			const currentDate = new Date();

			// Format the datetime value to 'YYYY-MM-DD HH:mm:ss' format
			const formattedDate = currentDate
				.toISOString()
				.slice(0, 19)
				.replace('T', ' ');

			// Set the creation date and update date to the formatted datetime value
			req.body.creation_date = formattedDate;
			req.body.update_date = formattedDate;
			const newCategory = await CategoryService.createCategory(req.body);
			res.json(newCategory);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async updateCategory(req: Request, res: Response) {
		try {
			const categoryId = req.params.id;
			const response = await CategoryService.updateCategory(
				categoryId,
				req.body
			);

			if (!response) {
				res.status(404).json({ error: 'Category not found' });
			}

			if (response.affectedRows > 0) {
				res.json({ success: 'Category successfully updated' });
			} else {
				res.status(500).json({ error: 'Failed to category category' });
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async deleteCategory(req: Request, res: Response) {
		try {
			const categoryId = req.params.id;
			const response = await CategoryService.deleteCategory(categoryId);

			if (!response) {
				res.status(404).json({ error: 'Category not found' });
			}

			if (response.affectedRows > 0) {
				res.json({ success: 'Category successfully deleted' });
			} else {
				res.status(500).json({ error: 'Failed to delete category' });
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}
}
