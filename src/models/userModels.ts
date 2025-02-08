import mongoose, { type Document, Schema } from 'mongoose';
import type { IUser } from '../interfaces/userInterfaces';

const userSchema: Schema<IUser> = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ timestamps: true },
);

const User = mongoose.model<IUser>('User', userSchema);

export default User;
