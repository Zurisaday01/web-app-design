import { OkPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from '../../db/mysqlConnection';
import { Category } from './category.interface';

export class CategoryService {
	static async getCategoryById(
		categoryId: string
	): Promise<Category | undefined> {
		return new Promise<Category>((resolve, reject) => {
			const query = `SELECT * FROM categories WHERE category_id = ?`;
			connection.query<Category[] & RowDataPacket[][]>(
				query,
				[categoryId],
				(error, results) => {
					if (error) {
						reject(error);
					} else {
						resolve(results[0]);
					}
				}
			);
		});
	}

	static async getCategories(): Promise<Category[] | undefined> {
		return new Promise<Category[]>((resolve, reject) => {
			const query = `SELECT * FROM categories`;

			connection.query<Category[] & RowDataPacket[][]>(
				query,
				(error, results) => {
					if (error) {
						reject(error);
					} else {
						resolve(results);
					}
				}
			);
		});
	}

	static async createCategory(
		categoryData: Omit<Category, 'category_id'>
	): Promise<Category> {
		return new Promise<Category>((resolve, reject) => {
			const query = `INSERT INTO categories SET ?`;
			connection.query<OkPacket>(query, categoryData, (error, results) => {
				if (error) {
					reject(error);
				} else {
					const insertedId = results.insertId;
					resolve({ category_id: insertedId, ...categoryData });
				}
			});
		});
	}

	static async updateCategory(
		categoryId: string,
		categoryData: Partial<Category>
	): Promise<ResultSetHeader> {
		const setValues = [];
		const values: (string | number | Date | null)[] = [];

		for (const [key, value] of Object.entries(categoryData)) {
			setValues.push(`${key} = ?`);
			values.push(value);
		}

		if (setValues.length === 0) {
			throw new Error('No fields provided for update.');
		}

		const query = `UPDATE categories SET ${setValues.join(
			', '
		)} WHERE category_id = ?`;
		values.push(categoryId);

		return new Promise<ResultSetHeader>((resolve, reject) => {
			connection.query<ResultSetHeader>(query, values, (error, results) => {
				if (error) {
					reject(error);
				} else {
					resolve(results);
				}
			});
		});
	}

	static async deleteCategory(categoryId: string): Promise<ResultSetHeader> {
		return new Promise<ResultSetHeader>((resolve, reject) => {
			const query = `DELETE FROM categories WHERE category_id = ?`;
			connection.query<ResultSetHeader>(
				query,
				[categoryId],
				(error, results) => {
					if (error) {
						reject(error);
					} else {
						resolve(results);
					}
				}
			);
		});
	}
}
