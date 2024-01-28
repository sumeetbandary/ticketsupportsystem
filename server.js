import express from 'express';
import http from 'http';
const app = express();

import routes from './routes/index.js'
import connectDb from './config/dbConnection.js';

app.use(express.json())

import initializeSocket from './services/socket.js';
const server = http.createServer(app);



const port = 8000;

connectDb();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', routes)

initializeSocket(server);

server.listen(port, () => {
    console.log('Started server');
});

//Run app, then load http://localhost:port in a browser to see the output.