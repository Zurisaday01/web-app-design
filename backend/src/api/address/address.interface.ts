export interface Address {
	id_address: number;
	name: string;
	postal_code: number;
	street: string;
	neighborhood: string;
	exterior_number: string;
	interior_number: string;
	city: string;
	creation_date: Date;
	update_date: Date;
	created_by: number;
	updated_by: number;
	deletion_date: Date | null;
	deleted_by: number | null;
}
