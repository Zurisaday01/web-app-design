import express from 'express';
import { userController } from './user.controller';

const usersRouter = express.Router();

// GET
usersRouter.get('/', userController.getUsers);
usersRouter.get('/:id', userController.getUserById);

// POST
usersRouter.post('/', userController.createUser);

// DELETE
usersRouter.delete('/:id', userController.deleteUser);

// PATCH
usersRouter.patch('/:id', userController.updateUser);

export default usersRouter;
