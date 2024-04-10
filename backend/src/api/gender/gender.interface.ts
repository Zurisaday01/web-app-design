export interface Gender {
	id_gender: number;
	gender: string;
	creation_date: Date;
	update_date: Date;
	created_by: number;
	updated_by: number;
	deletion_date: Date | null;
	deleted_by: number | null;
}
