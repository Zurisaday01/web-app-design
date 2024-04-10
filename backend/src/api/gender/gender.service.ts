import { OkPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from '../../db/mysqlConnection';
import { Gender } from './gender.interface';

export class GenderService {
	static async getGenderById(genderId: string): Promise<Gender | undefined> {
		return new Promise<Gender>((resolve, reject) => {
			const query = `SELECT * FROM genders WHERE gender_id = ?`;
			connection.query<Gender[] & RowDataPacket[][]>(query, [genderId], (error, results) => {
				if (error) {
					reject(error);
				} else {
					resolve(results[0]);
				}
			});
		});
	}

	static async getGenders(): Promise<Gender[] | undefined> {
		return new Promise<Gender[]>((resolve, reject) => {
			const query = `SELECT * FROM genders`;

			connection.query<Gender[] & RowDataPacket[][]>(query, (error, results) => {
				if (error) {
					reject(error);
				} else {
					resolve(results);
				}
			});
		});
	}

	static async createGender(genderData: Omit<Gender, 'id_gender'>): Promise<Gender> {
		return new Promise<Gender>((resolve, reject) => {
			const query = `INSERT INTO genders SET ?`;
			connection.query<OkPacket>(query, genderData, (error, results) => {
				if (error) {
					reject(error);
				} else {
					const insertedId = results.insertId;
					resolve({ id_gender: insertedId, ...genderData });
				}
			});
		});
	}

	static async updateGender(
		genderId: string,
		genderData: Partial<Gender>
	): Promise<ResultSetHeader> {
		const setValues = [];
		const values: (string | number | Date | null)[] = [];

		for (const [key, value] of Object.entries(genderData)) {
			setValues.push(`${key} = ?`);
			values.push(value);
		}

		if (setValues.length === 0) {
			throw new Error('No fields provided for update.');
		}

		const query = `UPDATE genders SET ${setValues.join(', ')} WHERE gender_id = ?`;
		values.push(genderId);

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

	static async deleteGender(genderId: string): Promise<ResultSetHeader> {
		return new Promise<ResultSetHeader>((resolve, reject) => {
			const query = `DELETE FROM genders WHERE gender_id = ?`;
			connection.query<ResultSetHeader>(query, [genderId], (error, results) => {
				if (error) {
					reject(error);
				} else {
					resolve(results);
				}
			});
		});
	}
}
