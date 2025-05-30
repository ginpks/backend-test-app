import express, { Router } from "express";

import { submissionController } from '../controllers/submissionController';

import { allListingsController } from '../controllers/allListingsController';




const router: Router = express.Router();



router.post('/submit', submissionController);

router.get('/all', allListingsController)


export default router;