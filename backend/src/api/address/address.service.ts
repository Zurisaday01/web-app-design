import { OkPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from '../../db/mysqlConnection';
import { Address } from './address.interface';

interface UpdateAddressData {
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

export class AddressService {
	static async getAddressById(addressId: string): Promise<Address | undefined> {
		return new Promise<Address>((resolve, reject) => {
			const query = `SELECT * FROM address WHERE address_id = ?`;
			connection.query<Address[] & RowDataPacket[][]>(
				query,
				[addressId],
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

	static async getAddresses(): Promise<Address[] | undefined> {
		return new Promise<Address[]>((resolve, reject) => {
			const query = `SELECT * FROM addresses`;

			connection.query<Address[] & RowDataPacket[][]>(
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

	static async createAddress(
		addressData: Omit<Address, 'id_address'>
	): Promise<Address> {
		return new Promise<Address>((resolve, reject) => {
			const query = `INSERT INTO Addresses SET ?`;
			connection.query<OkPacket>(query, addressData, (error, results) => {
				if (error) {
					reject(error);
				} else {
					const insertedId = results.insertId;
					resolve({ id_address: insertedId, ...addressData });
				}
			});
		});
	}

	static async updateAddress(
		addressId: string,
		addressData: Partial<UpdateAddressData>
	): Promise<ResultSetHeader> {
		const setValues = [];
		const values: (string | number | Date | null)[] = [];

		for (const [key, value] of Object.entries(addressData)) {
			setValues.push(`${key} = ?`);
			values.push(value);
		}

		if (setValues.length === 0) {
			throw new Error('No fields provided for update.');
		}

		const query = `UPDATE addresses SET ${setValues.join(
			', '
		)} WHERE address_id = ?`;
		values.push(addressId);

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

	static async deleteAddress(addressId: string): Promise<ResultSetHeader> {
		return new Promise<ResultSetHeader>((resolve, reject) => {
			const query = `DELETE FROM addresses WHERE address_id = ?`;
			connection.query<ResultSetHeader>(
				query,
				[addressId],
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
