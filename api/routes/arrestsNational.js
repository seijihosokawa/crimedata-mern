import express from 'express';

import {getData, getArrestOffense, getSpecificCrime } from '../controllers/arrestsNational.js';

const router = express.Router();

router.get('/', getData);
router.get('/offenses', getArrestOffense);
router.get('/:crime', getSpecificCrime);





export default router;