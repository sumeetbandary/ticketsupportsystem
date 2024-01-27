import express from 'express';
const app = express();

import routes from './routes/index.js'
import connectDb from './config/dbConnection.js';
app.use(express.json())

const port = 8000;

connectDb();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', routes)

app.listen(port, () => {
    console.log('Example app listening on port port!');
});

//Run app, then load http://localhost:port in a browser to see the output.