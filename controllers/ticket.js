import Ticket from "../models/ticket.model.js";

const createTicket = async (req, res) => {
    try {
        const {createdBy, subject}=req.body
        const ticket=new Ticket({
            createdBy, 
            subject
        })
        ticket.save()
        res.status(200).json({ message: "ticket created successfully"})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const getTicket = async (req, res) => {
    try {
        const ticketId= req.params.ticketId
        const ticket=await Ticket.findOne({ ticketId });
        res.status(200).json({data: ticket})

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export {
    createTicket,
    getTicket
}