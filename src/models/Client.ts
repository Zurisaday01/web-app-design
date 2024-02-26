import { Schema, model } from 'mongoose';
import { IClient } from '../interfaces/client.interface';

const clientSchema = new Schema({
	name: { type: String, required: true },
	last_name: { type: String, required: true },
	birth_date: { type: Date, required: true },
	gender: { type: String, required: true },
	phone: { type: String, required: true },
	email: { type: String, required: true },
	address: { type: Schema.Types.ObjectId, ref: 'Address', required: true },
	created_at: { type: Date, required: true },
	deleted_by: { type: String },
	created_by: { type: String, required: true },
	updated_by: { type: String, required: true },
	deleted_at: { type: Date },
});

export const Client = model<IClient>('Client', clientSchema);

