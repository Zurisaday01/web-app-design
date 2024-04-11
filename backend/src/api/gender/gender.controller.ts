import { Request, Response } from 'express';
import { GenderService } from './gender.service';

export class genderController {
	static async getGenderById(req: Request, res: Response) {
		try {
			const genderId = req.params.id;
			const gender = await GenderService.getGenderById(genderId);
			res.json(gender);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async getGenders(_req: Request, res: Response) {
		try {
			const genders = await GenderService.getGenders();
			res.json(genders);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async createGender(req: Request, res: Response) {
		try {
			// Get the current date and time
			const currentDate = new Date();

			// Format the datetime value to 'YYYY-MM-DD HH:mm:ss' format
			const formattedDate = currentDate
				.toISOString()
				.slice(0, 19)
				.replace('T', ' ');

			// Set the creation date and update date to the formatted datetime value
			req.body.creation_date = formattedDate;
			req.body.update_date = formattedDate;
			const newGender = await GenderService.createGender(req.body);
			res.json(newGender);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async updateGender(req: Request, res: Response) {
		try {
			const genderId = req.params.id;
			const response = await GenderService.updateGender(genderId, req.body);

			if (!response) {
				res.status(404).json({ error: 'Gender not found' });
			}

			if (response.affectedRows > 0) {
				res.json({ success: 'Gender successfully updated' });
			} else {
				res.status(500).json({ error: 'Failed to update gender' });
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async deleteGender(req: Request, res: Response) {
		try {
			const genderId = req.params.id;
			const response = await GenderService.deleteGender(genderId);

			if (!response) {
				res.status(404).json({ error: 'Gender not found' });
			}

			if (response.affectedRows > 0) {
				res.json({ success: 'Gender successfully deleted' });
			} else {
				res.status(500).json({ error: 'Failed to delete gender' });
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}
}
