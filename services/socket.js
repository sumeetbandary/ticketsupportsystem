// Use import syntax for ECMAScript modules
import { Server } from 'socket.io';

export default function initializeSocket(server) {

    // Create a Socket.io server by passing your HTTP server instance (express or http).
    const io = new Server(server);

    // Define socket.io events and handlers here
    io.on('connection', (socket) => {
        console.log(`User connected: ${socket.id}`);

        // Handle when a user sends a chat message
        socket.on('chatMessage', (data) => {
            console.log("Data", data);
            // Broadcast the message to all connected clients
            socket.emit('chatMessage', data);
        });

        // Handle when a user disconnects
        socket.on('disconnect', () => {
            console.log(`User disconnected: ${socket.id}`);
        });
    });

    return io;
}
