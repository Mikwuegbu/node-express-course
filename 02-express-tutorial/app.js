// const express = require('express');
// const path = require('path');
// const app = express();

// const PORT = 5000;

// app.use(express.static('./navbar-app'));
// app.get('/', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// });

// app.all('*', (req, res) => {
// 	res.status(404).send('Resource not found');
// });

// app.listen(PORT, () => {
// 	console.log(`listening on ${PORT}`);
// });

const express = require('express');
const app = express();
const { products, people } = require('./data');
app.get('/', (req, res) => {
	res.send('<h1>Hompage</h1><a href="/api/products">products</a>');
});

app.get('/api/products/:productID', (req, res) => {
	const { productID } = req.params;
	const singleProduct = products.find(
		(product) => product.id === Number(productID)
	);

	if (!singleProduct) {
		return res.status(404).send('Product not found');
	}

	return res.json(singleProduct);
});
app.listen(5000, () => {
	console.log('Server is listening on port 5000....');
});
