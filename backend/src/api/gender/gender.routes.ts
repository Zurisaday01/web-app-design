import express from 'express';
import { genderController } from './gender.controller';

const gendersRouter = express.Router();

// GET
gendersRouter.get('/', genderController.getGenders);
gendersRouter.get('/:id', genderController.getGenderById);

// POST
gendersRouter.post('/', genderController.createGender);

// DELETE
gendersRouter.delete('/:id', genderController.deleteGender);

// PATCH
gendersRouter.patch('/:id', genderController.updateGender);

export default gendersRouter;
