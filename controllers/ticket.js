const createTicket = async (req, res) => {
    try {
        res.send('Hello World!');
    } catch (error) {

    }
}

const getTicket = async (req, res) => {
    try {
        res.send('Ticket');
    } catch (error) {

    }
}

export {
    createTicket,
    getTicket
}