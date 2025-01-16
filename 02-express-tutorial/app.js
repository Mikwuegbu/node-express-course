const express = require('express');
const app = express();

// middleware

app.get('/', (req, res) => {
	res.send('Hello from Express!');
});

app.get('/about', (req, res) => {
	res.send('Hello from About!');
});

app.listen(5000, () => {
	console.log('Server is listening on port 5000....');
});
