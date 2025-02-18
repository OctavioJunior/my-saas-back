import mongoose from 'mongoose';
import memberSchema from './memberModel';

const teamSchema = new mongoose.Schema({
	name: { type: String, required: true },
	bio: { type: String, required: false },
	coat: { type: String, required: false },
	birthDate: { type: Date, required: false },
	owner: { type: memberSchema, required: true },
});

export const Team = mongoose.model('Team', teamSchema);
