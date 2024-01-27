import express from 'express';

const router = express.Router();

import ticketRoutes from './ticketRoutes.js'
import userRoutes from './userRoutes.js'

router.use('/ticket', ticketRoutes)
router.use('/user', userRoutes)

export default router;
