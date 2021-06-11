import express from 'express';

import {getYears} from '../controllers/years.js';

const router = express.Router();

router.get('/', getYears);

export default router;