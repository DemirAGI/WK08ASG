import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8080;

app.use(cors()); //Allows client requests from different origins
app.use(express.json()); //Parses JSON requests

//Sample data
const messages = [
    { id: 1, text: 'Hello from the server'},
    { id: 2, text: 'This is some data.'},
    { id: 3, text: ' Fetch me!'}
];

//Get 
app.get ('/messages', (req, res) => {
    res.json(messages);
});

//start server
app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
});
