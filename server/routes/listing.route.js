import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createListing , getUerListing} from '../controllers/listing.controller.js';

const router = express.Router();

router.post('/create' , verifyToken , createListing);
router.get('/:id' ,verifyToken , getUerListing);

export default router;