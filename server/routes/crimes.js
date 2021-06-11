import express from 'express';

import {getData, getYears, getStates, getStatesList} from '../controllers/crimes.js';

const router = express.Router();

router.get('/', getData);
router.get('/years', getYears);
router.get('/states', getStates);
router.get('/states-list', getStatesList);

export default router;