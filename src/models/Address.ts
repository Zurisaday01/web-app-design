import { Schema, model } from 'mongoose';
import { IAddress } from '../interfaces/address.interface';

const addressSchema = new Schema({
	postal_code: { type: String, required: true },
	street: { type: String, required: true },
	colony: { type: String, required: true },
	exterior_number: { type: String, required: true },
	interior_number: { type: String },
	city: { type: String, required: true },
	created_at: { type: Date, required: true },
	updated_at: { type: Date, required: true },
	created_by: { type: String, required: true },
	updated_by: { type: String, required: true },
	deleted_at: { type: Date },
	deleted_by: { type: String },
});

export const Address = model<IAddress>('Direccion', addressSchema);
