import type { Request, Response } from 'express';
import * as userService from '../services/userServices';
import type { IUser } from '../interfaces/userInterfaces';

export const getUsers = async (req: Request, res: Response) => {
	try {
		const users: IUser[] = await userService.getAllUsers();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: 'Erro ao buscar usuários', error: error });
	}
};

export const getUserById = async (req: Request, res: Response) => {
	const { userId } = req.params;

	try {
		const user: IUser | null = await userService.getUserById(userId);

		if (!user) {
			res.status(404).json({ message: 'Usuário não encontrado' });
		}

		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ message: 'Erro ao buscar o usuário', error: error });
	}
};

export const registerUser = async (req: Request, res: Response) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		res.status(400).json({ message: 'Campos obrigatórios: name, email e password.' });
	}

	try {
		const newUser: IUser = await userService.registerUser(name, email, password);
		res.status(201).json(newUser);
	} catch (error) {
		res.status(500).json({ message: 'Erro ao criar o novo usuário', error: error });
	}
};
