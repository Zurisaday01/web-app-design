export interface User {
	id_user: number;
	name: string;
	last_name?: string | null;
	email?: string | null;
	created_by?: number | null;
	created_date: Date;
}
