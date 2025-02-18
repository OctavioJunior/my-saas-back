export interface IMember {
	email: string;
	password: string;
	name: string;
	role: 'board' | 'player' | 'both';
	picture?: string | null;
}
