import type { Document } from 'mongoose';
import type { IMember } from '../interfaces/IMember';

export interface ITeam extends Document {
	name: string;
	bio?: string | null;
	coat?: string | null;
	birthDate?: Date | null;
	owner: IMember;
}
