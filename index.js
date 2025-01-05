const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
const apiRoutes = require('./routes/api');

app.set('view engine', 'ejs');
app.use('/api', apiRoutes);
app.get('/', (req, res) => {
    res.render('index');
});

// Start the server
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
