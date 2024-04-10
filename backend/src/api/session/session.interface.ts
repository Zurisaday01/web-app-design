export interface Session {
	session_id: number;
	session_date: Date;
	session_time: string;
	fk_customer: number;
	sale_date: Date;
	creation_date: Date;
	update_date: Date;
	created_by: number;
	updated_by: number;
	deletion_date: Date | null;
	deleted_by: number | null;
}
