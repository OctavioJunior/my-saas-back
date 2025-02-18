import dotenv from 'dotenv';
import express from 'express';
import { mongoConnection } from './config/mongoConnect';
import teamRoutes from './routes/teamRoutes';

dotenv.config();

const startServer = async () => {
	await mongoConnection();

	const app = express();
	app.use(express.json());

	app.use('/api/team', teamRoutes);

	app.listen(process.env.PORT, () => {
		console.log(`Servidor rodando na porta ${process.env.PORT}`);
	});
};

startServer();
