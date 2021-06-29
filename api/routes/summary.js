import express from 'express';

import {getData, getYears, getStates, getStatesList, getSpecificYear, getSpecificState, 
    getTotals, getSpecificTotals, getSpecificTotalsRange, getYearRange, getCrimes, getSpecificStateYear, getSpecificStateRange
} from '../controllers/summary.js';

const router = express.Router();

router.get('/', getData);
router.get('/years', getYears);
router.get('/years/:year', getSpecificYear);
router.get('/years/:yearstart/:yearend', getYearRange);
router.get('/years-total', getTotals);
router.get('/years-total/:year', getSpecificTotals);
router.get('/years-total/:yearstart/:yearend', getSpecificTotalsRange);
router.get('/states', getStates);
router.get('/states/:id', getSpecificState);
router.get('/states/:id/:year', getSpecificStateYear);
router.get('/states/:id/:yearstart/:yearend', getSpecificStateRange);
router.get('/states-list', getStatesList);
router.get('/crimes', getCrimes);


export default router;