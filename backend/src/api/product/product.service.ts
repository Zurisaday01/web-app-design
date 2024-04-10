import { OkPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from '../../db/mysqlConnection';
import { Product } from './product.interface';

export class ProductService {
	static async getProductById(productId: string): Promise<Product | undefined> {
		return new Promise<Product>((resolve, reject) => {
			const query = `SELECT * FROM products WHERE product_id = ?`;
			connection.query<Product[] & RowDataPacket[][]>(query, [productId], (error, results) => {
				if (error) {
					reject(error);
				} else {
					resolve(results[0]);
				}
			});
		});
	}

	static async getProducts(): Promise<Product[] | undefined> {
		return new Promise<Product[]>((resolve, reject) => {
			const query = `SELECT * FROM products`;

			connection.query<Product[] & RowDataPacket[][]>(query, (error, results) => {
				if (error) {
					reject(error);
				} else {
					resolve(results);
				}
			});
		});
	}

	static async createProduct(productData: Omit<Product, 'product_id'>): Promise<Product> {
		return new Promise<Product>((resolve, reject) => {
			const query = `INSERT INTO products SET ?`;
			connection.query<OkPacket>(query, productData, (error, results) => {
				if (error) {
					reject(error);
				} else {
					const insertedId = results.insertId;
					resolve({ product_id: insertedId, ...productData });
				}
			});
		});
	}

	static async updateProduct(
		productId: string,
		productData: Partial<Product>
	): Promise<ResultSetHeader> {
		const setValues = [];
		const values: (string | number | Date | null)[] = [];

		for (const [key, value] of Object.entries(productData)) {
			setValues.push(`${key} = ?`);
			values.push(value);
		}

		if (setValues.length === 0) {
			throw new Error('No fields provided for update.');
		}

		const query = `UPDATE products SET ${setValues.join(', ')} WHERE product_id = ?`;
		values.push(productId);

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

	static async deleteProduct(productId: string): Promise<ResultSetHeader> {
		return new Promise<ResultSetHeader>((resolve, reject) => {
			const query = `DELETE FROM products WHERE product_id = ?`;
			connection.query<ResultSetHeader>(query, [productId], (error, results) => {
				if (error) {
					reject(error);
				} else {
					resolve(results);
				}
			});
		});
	}
}
