import express from 'express';
import { userController } from './user.controller';

const userRouter = express.Router();

// GET
userRouter.get('/', userController.getUsers);
userRouter.get('/:id', userController.getUserById);

// POST
userRouter.post('/', userController.createUser);

// DELETE
userRouter.delete('/:id', userController.deleteUser);

// PATCH
userRouter.patch('/:id', userController.updateUser);

export default userRouter;
