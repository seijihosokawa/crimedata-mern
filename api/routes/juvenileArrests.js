import express from 'express';

import {getData, getOffenses, getYears, getSpecificYear, getYearRange } from '../controllers/juvenileArrests.js';

const router = express.Router();

router.get('/', getData);
router.get('/years', getYears);
router.get('/years/:year', getSpecificYear);
router.get('/years/:yearstart/:yearend', getYearRange);
router.get('/offenses', getOffenses);


export default router;