import express from 'express';
import { addressController } from './address.controller';

const addressesRouter = express.Router();

// GET
addressesRouter.get('/', addressController.getAddresses);
addressesRouter.get('/:id', addressController.getAddressById);

// POST
addressesRouter.post('/', addressController.createAddress);

// DELETE
addressesRouter.delete('/:id', addressController.deleteAddress);

// PATCH
addressesRouter.patch('/:id', addressController.updateAddress);

export default addressesRouter;
