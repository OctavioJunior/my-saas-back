import type { IUser } from '../interfaces/userInterfaces';
import User from '../models/userModels';

export const getAllUsers = async (): Promise<IUser[]> => {
	return await User.find();
};

export const getUserById = async (userId: string): Promise<IUser | null> => {
	return await User.findById(userId);
};

export const registerUser = async (
	name: string,
	email: string,
	password: string,
): Promise<IUser> => {
	const user = new User({
		name,
		email,
		password,
	});

	return await user.save();
};
