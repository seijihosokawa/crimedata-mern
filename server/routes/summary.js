import express from 'express';

import {getData, getYears, getStates, getStatesList, getSpecificYear, getSpecificState, getYearsTotal, getSpecificYearTotal, getSpecificYearRange, getYearRange, getCrimesList} from '../controllers/summary.js';

const router = express.Router();

router.get('/', getData);
router.get('/years', getYears);
router.get('/years/:year', getSpecificYear);
router.get('/years/:yearstart/:yearend', getYearRange);
router.get('/years-total', getYearsTotal);
router.get('/years-total/:year', getSpecificYearTotal);
router.get('/years-total/:yearstart/:yearend', getSpecificYearRange);
router.get('/states', getStates);
router.get('/states/:id', getSpecificState);
router.get('/states-list', getStatesList);
router.get('/crimes', getCrimesList);


export default router;