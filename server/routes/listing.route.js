import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createListing , getUerListing , deleteListing, updateListing, getListing , getListings} from '../controllers/listing.controller.js';

const router = express.Router();

router.get('/get', getListings) // To get all lists present in database
router.get('/get/:id' , getListing); // To get apecific list at which we clicked
router.get('/:id' ,verifyToken , getUerListing); // Tp get the Lists of current user
router.post('/create' , verifyToken , createListing); // To create a list for the user which is loged in already
router.delete('/delete/:id' , verifyToken , deleteListing); // To delete specific list
router.post('/update/:id' , verifyToken , updateListing); // To Update specific List



export default router;