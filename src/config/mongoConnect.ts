import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

export const mongoConnection = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/my-saas');
		console.log('Conectado ao MongoDB');
	} catch (err) {
		console.error('Erro ao conectar ao MongoDB:', err);
		process.exit(1);
	}
};
