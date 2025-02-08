import express from 'express';
import * as userController from '../controllers/userControllers';

const router = express.Router();

router.get('/', userController.getUsers);
router.get('/:userId', userController.getUserById);
router.post('/register', userController.registerUser);

export default router;
