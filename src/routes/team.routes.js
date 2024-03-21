import { newTeam, getTeam } from '../controllers/team.controller.js';
import { Router } from 'express';

const router = Router();

router.post('/upload', newTeam);
router.get('/', getTeam);

export default router;