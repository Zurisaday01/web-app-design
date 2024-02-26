import { Document } from 'mongoose';

export interface IAddress extends Document {
	postal_code: string;
	street: string;
	colony: string;
	exterior_number: string;
	interior_number: string;
	city: string;
	created_at: Date;
	updated_at: Date;
	created_by: string;
	updated_by: string;
	deleted_at?: Date;
	deleted_by?: string;
}
