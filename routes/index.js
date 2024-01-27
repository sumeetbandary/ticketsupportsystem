import express from 'express';

const router = express.Router();

import ticketRoutes from './ticketRoutes.js'

router.use('/ticket', ticketRoutes)

export default router;
