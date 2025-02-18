import type { Request, Response } from 'express';
import type { ITeam } from '../interfaces/ITeam';
import { createNewTeam, getAllTeams } from '../services/teamServices';

export const getTeams = async (req: Request, res: Response): Promise<void> => {
	try {
		const allTeams: ITeam[] = await getAllTeams();

		res.status(200).json(allTeams);
	} catch (error) {
		res.status(500).json({ message: 'Erro ao buscar os times', error: error });
	}
};

export const createTeam = async (req: Request, res: Response): Promise<void> => {
	const { name, bio, coat, birthDate, owner } = req.body;

	if (!name || !owner) {
		res.status(400).json({ message: 'Obrigatório informar o nome do time e um responsável!' });
	}

	try {
		const newTeam: ITeam = await createNewTeam(name, bio, coat, birthDate, owner);
		res.status(201).json(newTeam);
	} catch (error) {
		res.status(500).json({ message: 'Erro ao criar o time', error: error });
	}
};
