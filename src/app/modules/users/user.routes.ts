// create routes
import  express  from 'express';
import { UserController } from './user.controller';

const router =express.Router();
router.post('/create-user', UserController.createUser );
router.post('/create-facilitator', UserController.createFacilitators );
router.get('/get-user', UserController.getUser );
router.get('/get-alluser', UserController.getAllUserDetails );


export  const userRoutes =router;