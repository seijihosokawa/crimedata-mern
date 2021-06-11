import express from 'express';

import {getYears, getYearsList} from '../controllers/years.js';

const router = express.Router();

router.get('/', getYears);
router.get('/list', getYearsList);

export default router;