export interface Product {
	product_id: number;
	description: string;
	price: number;
	fk_category: number;
	creation_date: Date;
	update_date: Date;
	created_by: number;
	updated_by: number;
	deletion_date: Date | null;
	deleted_by: number | null;
}
