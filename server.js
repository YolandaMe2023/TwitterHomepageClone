const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3003;

// Enable CORS
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAJVxuAEAAAAADDakZ%2FBJdzcG3AX6deaIub5QACc%3DFxpHc6ezR6RVBMBERY4ilx6tFvkSZDUIVic9SgGOqUrsDM6fXd';

// Route to fetch trending topics
app.get('/trending', async (req, res) => {
    try {
        const response = await axios.get('https://api.twitter.com/1.1/trends/place.json?id=1', {
            headers: {
                'Authorization': `Bearer ${BEARER_TOKEN}`
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching trends');
    }
});

// Route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
