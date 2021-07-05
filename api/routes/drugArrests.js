import express from 'express';

import {getData, getDrugOffenses, getYears, getSpecificYear, getYearRange } from '../controllers/drugArrests.js';

const router = express.Router();

router.get('/', getData);
router.get('/years', getYears);
router.get('/years/:year', getSpecificYear);
router.get('/years/:yearstart/:yearend', getYearRange);
router.get('/offenses', getDrugOffenses);


export default router;