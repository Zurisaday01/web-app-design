import { Document } from 'mongoose';

export interface ICategory extends Document {
	name: string;
	created_at: Date;
	updated_at: Date;
	created_by: string;
	updated_by: string;
	deleted_at?: Date;
	deleted_by?: string;
}
