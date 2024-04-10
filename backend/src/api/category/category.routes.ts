import express from 'express';
import { categoryController } from './category.controller';

const categoriesRouter = express.Router();

// GET
categoriesRouter.get('/', categoryController.getCategories);
categoriesRouter.get('/:id', categoryController.getCategoryById);

// POST
categoriesRouter.post('/', categoryController.createCategory);

// DELETE
categoriesRouter.delete('/:id', categoryController.deleteCategory);

// PATCH
categoriesRouter.patch('/:id', categoryController.updateCategory);

export default categoriesRouter;
