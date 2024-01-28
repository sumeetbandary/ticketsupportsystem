import express from 'express';

const router = express.Router();

import { createTicket, getTicket } from '../controllers/ticket.js'

router.post('/createTicket', createTicket);

router.get('/getTicket/:ticketId', getTicket);

export default router;
