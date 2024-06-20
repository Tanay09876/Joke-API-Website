// 1. Import express and axios
import express from 'express';
import axios from 'axios';

// 2. Create an express app and set the port number.
const app = express();
const port = 3000;

// 3. Use the public folder for static files.
app.use(express.static('public'));

// 4. Set the view engine to EJS
app.set('view engine', 'ejs');

// 5. When the user goes to the home page it should render the index.ejs file.
app.get('/', (req, res) => {
    res.render('index', { joke: null });
});

// 6. Fetch a joke from JokeAPI based on the user's name and render it
app.get('/get-joke', async (req, res) => {
    try {
        const name = req.query.name || '';
        const result = await axios.get(`https://v2.jokeapi.dev/joke/Any?contains=${name}`);

        let joke;

        if (result.data.type === 'single') {
            joke = result.data.joke;
        } else if (result.data.type === 'twopart') {
            joke = `${result.data.setup} - ${result.data.delivery}`;
        } else {
            joke = 'No jokes found.';
        }

        res.render('index', { joke });
    } catch (error) {
        console.error(error.response.data);
        res.status(500).send('Internal Server Error');
    }
});

// 7. Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
