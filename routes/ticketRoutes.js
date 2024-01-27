import express from 'express';

const router = express.Router();

import { createTicket, getTicket } from '../controllers/ticket.js'

router.post('/createTicket', createTicket);

router.get('/getTicket', getTicket);

export default router;
