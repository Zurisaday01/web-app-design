import { Request, Response } from 'express';
import { AddressService } from './address.service';

export class addressController {
	static async getAddressById(req: Request, res: Response) {
		try {
			const addressId = req.params.id;
			const address = await AddressService.getAddressById(addressId);
			res.json(address);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async getAddresses(_req: Request, res: Response) {
		try {
			const addresses = await AddressService.getAddresses();
			res.json(addresses);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async createAddress(req: Request, res: Response) {
		try {
			const newAddress = await AddressService.createAddress(req.body);
			res.json(newAddress);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async updateAddress(req: Request, res: Response) {
		try {
			const addressId = req.params.id;
			const response = await AddressService.updateAddress(addressId, req.body);

			if (!response) {
				res.status(404).json({ error: 'Address not found' });
			}

			if (response.affectedRows > 0) {
				res.json({ success: 'Address successfully updated' });
			} else {
				res.status(500).json({ error: 'Failed to update address' });
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async deleteAddress(req: Request, res: Response) {
		try {
			const addressId = req.params.id;
			const response = await AddressService.deleteAddress(addressId);

			if (!response) {
				res.status(404).json({ error: 'Address not found' });
			}

			if (response.affectedRows > 0) {
				res.json({ success: 'Address successfully deleted' });
			} else {
				res.status(500).json({ error: 'Failed to delete address' });
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}
}
