const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON and url-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set view engine to ejs
app.set('view engine', 'ejs');

// Set static folder
app.use('/views', express.static(__dirname + '/views'));

// In-memory database for lab orders
let labOrders = [];

// Route to see the lab orders UI
app.get('/', (req, res) => {
    res.render('index', { labOrders: labOrders });
});

// REST endpoint to submit a lab order
app.post('/submit-order', (req, res) => {
    const order = req.body;
    labOrders.push(order);
    res.json({ success: true, message: 'Lab order submitted successfully!' });
});

const PORT = 7001;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
