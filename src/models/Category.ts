import { Schema, model } from 'mongoose';
import { ICategory } from '../interfaces/category.interface';

const categorySchema = new Schema({
	name: { type: String, required: true },
	created_at: { type: Date, required: true },
	updated_at: { type: Date, required: true },
	created_by: { type: String, required: true },
	updated_by: { type: String, required: true },
	deleted_at: { type: Date },
	deleted_by: { type: String },
});

export const Category = model<ICategory>('Categoria', categorySchema);
