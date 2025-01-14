const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connectDB');
const studentRouter = require('./routes/students/studentRoute');

const app = express();
const port = 8080;

// create an express server and connect to MongoDB
const startServer = () => {
    app.listen(port, () => {
        connectDB().then(() => {
            console.log('Connected to MongoDB');
        });
        console.log(`Server running on port ${port}`);
    });
};

app.use(express.json());
app.use(cors());

app.use('/students', studentRouter);

app.get('/', async (req, res) => {
    return res.send("Hello");
});

startServer();