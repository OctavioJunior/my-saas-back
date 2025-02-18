import express from 'express';
import { createTeam, getTeams } from '../controllers/teamControllers';

const router = express.Router();

router.get('/', getTeams);
router.post('/register', createTeam);

export default router;
