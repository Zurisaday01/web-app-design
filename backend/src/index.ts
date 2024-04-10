import express, { Request, Response } from 'express';
import cors from 'cors';
import usersRouter from './api/user/user.routes';
import addressesRouter from './api/address/address.routes';
import categoriesRouter from './api/category/category.routes';
import gendersRouter from './api/gender/gender.routes';
import productsRouter from './api/product/product.routes';

const app = express();

app.use(
	cors({
		origin: 'http://127.0.0.1:5500',
	})
);

app.use(express.json());

const PORT = 3000;

app.get('/', (_req: Request, res: Response) => {
	res.send('Hello world!!');
});
app.use('/api/users', usersRouter);
app.use('/api/addresses', addressesRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/genders', gendersRouter);
app.use('/api/products', productsRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
