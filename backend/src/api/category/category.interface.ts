export interface Category {
	category_id: number;
	name: string;
	creation_date: Date;
	update_date: Date;
	created_by: number;
	updated_by: number;
	deletion_date: Date | null;
	deleted_by: number | null;
}
