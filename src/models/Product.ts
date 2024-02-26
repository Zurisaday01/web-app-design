import { Schema, model } from 'mongoose';
import { IProduct } from '../interfaces/product.interface';

const productSchema = new Schema({
	description: { type: String, required: true },
	price: { type: Number, required: true },
	category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
	created_at: { type: Date, required: true },
	updated_at: { type: Date, required: true },
	created_by: { type: String, required: true },
	updated_by: { type: String, required: true },
	deleted_at: { type: Date },
	deleted_by: { type: String },
});

export const Product = model<IProduct>('Product', productSchema);
