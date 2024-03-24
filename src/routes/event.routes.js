import { getEvent } from '../controllers/event.controller.js';
import { Router } from 'express';

const router = Router();

router.get('/', getEvent);

export default router;