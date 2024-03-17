import { Request, Response } from 'express';
import { UserService } from './user.service';

export class userController {
	static async getUserById(req: Request, res: Response) {
		try {
			const userId = req.params.id;
			const user = await UserService.getUserById(userId);
			res.json(user);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async getUsers(_req: Request, res: Response) {
		try {
			const users = await UserService.getUsers();
			res.json(users);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async createUser(req: Request, res: Response) {
		try {
			const newUser = await UserService.createUser(req.body);
			res.json(newUser);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async updateUser(req: Request, res: Response) {
		try {
			const userId = req.params.id;
			const response = await UserService.updateUser(userId, req.body);

			if (!response) {
				res.status(404).json({ error: 'User not found' });
			}

			if (response.affectedRows > 0) {
				res.json({ success: 'User successfully updated' });
			} else {
				res.status(500).json({ error: 'Failed to update user' });
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	static async deleteUser(req: Request, res: Response) {
		try {
			const userId = req.params.id;
			const response = await UserService.deleteUser(userId);

			if (!response) {
				res.status(404).json({ error: 'User not found' });
			}

			if (response.affectedRows > 0) {
				res.json({ success: 'User successfully deleted' });
			} else {
				res.status(500).json({ error: 'Failed to delete user' });
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}
}
