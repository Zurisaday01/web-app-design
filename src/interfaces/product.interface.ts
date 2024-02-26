import { Document } from 'mongoose';
import { ICategory } from './category.interface';

export interface IProduct extends Document {
	description: string;
	price: number;
	category: ICategory['_id'];
	created_at: Date;
	updated_at: Date;
	created_by: string;
	updated_by: string;
	deleted_at?: Date;
	deleted_by?: string;
}
