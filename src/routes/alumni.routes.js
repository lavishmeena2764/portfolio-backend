import { newAlumni, getAlumni } from '../controllers/alumni.controller.js';
import { Router } from 'express';

const router = Router();

router.post('/upload', newAlumni);
router.get('/' , getAlumni);

export default router;