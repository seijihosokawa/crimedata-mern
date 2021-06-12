import express from 'express';

import {getData, getYears, getStates, getStatesList, getSpecificYear, getSpecificState} from '../controllers/crimes.js';

const router = express.Router();

router.get('/', getData);
router.get('/years', getYears);
router.get('/years/:year', getSpecificYear);
router.get('/states', getStates);
router.get('/states/:id', getSpecificState);
router.get('/states-list', getStatesList);

export default router;