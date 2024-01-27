import express from 'express';

const router = express.Router();

import {signup,login} from '../controllers/user.js'

router.post('/signup', signup);

router.get('/login', login);

export default router;