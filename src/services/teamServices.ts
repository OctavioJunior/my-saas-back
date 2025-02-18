import type { IMember } from '../interfaces/IMember';
import type { ITeam } from '../interfaces/ITeam';
import { Team } from '../models/teamModel';

export const getAllTeams = async (): Promise<ITeam[]> => {
	const allTeams: ITeam[] = await Team.find();

	return allTeams;
};

export const createNewTeam = async (
	name: string,
	bio: string | null,
	coat: string | null,
	birthDate: Date | null,
	owner: IMember,
): Promise<ITeam> => {
	const newTeam = new Team({ name, bio, coat, birthDate, owner });
	return await newTeam.save();
};
