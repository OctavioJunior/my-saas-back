import mongoose from 'mongoose';
// import { v4 as uuidv4 } from 'uuid';

const memberSchema = new mongoose.Schema({
	// id: { type: String, default: uuidv4 },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	name: { type: String, required: true },
	role: { type: String, enum: ['player', 'board', 'both'], required: true },
	picture: { type: String, required: false, default: null },
});

export const Member = mongoose.model('Member', memberSchema);
export default memberSchema;
