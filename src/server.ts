import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';

dotenv.config();

const startMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/my-saas');
		console.log('Conectado ao MongoDB');
	} catch (err) {
		console.error('Erro ao conectar ao MongoDB:', err);
		process.exit(1);
	}
};

const startServer = async () => {
	await startMongoDB();

	const app = express();
	const port = process.env.PORT;

	app.use(express.json());

	app.use('/api/users', userRoutes);

	app.listen(port, () => {
		console.log(`Servidor rodando na porta ${port}`);
	});
};

startServer();
