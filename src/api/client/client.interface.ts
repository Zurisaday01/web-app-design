import { Document } from 'mongoose';
import { IAddress } from '../adress/address.interface';

export interface IClient extends Document {
	name: string;
	last_name: string;
	birth_date: Date;
	gender: string;
	phone: string;
	email: string;
	address: IAddress['_id'];
	created_at: Date;
	deleted_by?: string;
	created_by: string;
	updated_by: string;
	deleted_at?: Date;
}
