// create routes
import  express  from 'express';
import { UserController } from './user.controller';

const router =express.Router();
router.post('/create-user', UserController.createUser );
router.get('/get-user', UserController.getUser );


export  const userRoutes =router;