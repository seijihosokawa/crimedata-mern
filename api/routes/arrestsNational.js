import express from 'express';

import {getData, getArrestOffense, getYears, getSpecificYear, getYearRange } from '../controllers/arrestsNational.js';

const router = express.Router();

router.get('/', getData);
router.get('/years', getYears);
router.get('/years/:year', getSpecificYear);
router.get('/years/:yearstart/:yearend', getYearRange);
router.get('/offenses', getArrestOffense);


export default router;