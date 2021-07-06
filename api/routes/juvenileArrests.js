import express from 'express';

import {getData, getOffenses, getYears, getSpecificYear, getYearRange, getSpecificOffense, getOffenseCodes } from '../controllers/juvenileArrests.js';

const router = express.Router();

router.get('/', getData);
router.get('/years', getYears);
router.get('/years/:year', getSpecificYear);
router.get('/years/:yearstart/:yearend', getYearRange);
router.get('/offenses', getOffenses);
router.get('/offense-code', getOffenseCodes);
router.get('/offenses/:offense', getSpecificOffense);


export default router;