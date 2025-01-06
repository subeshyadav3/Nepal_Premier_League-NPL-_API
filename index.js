const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const app = express();
dotenv.config();
const cors = require('cors');


const apiRoutes = require('./routes/api');

// ejs for rendering views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//this is routes section and middlewares
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiRoutes);
app.get('/', (req, res) => {
    res.render('index');
});


//assigning the port and starting the server
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
