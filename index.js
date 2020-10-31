const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const cityRoutes = require('./routes/city.routes');
const provincesRoutes = require('./routes/province.routes');
require('dotenv').config();

const app = express();

// Mengamankan Aplikasi Express dengan mengatur HTTP Headers
app.use(helmet());
// Mengatasi masalah Cross Origin Resource Sharing
app.use(cors());
// Mengirim request body JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cityRoutes);
app.use(provincesRoutes);

app.listen(process.env.PORT || 8000, () => {
	console.log(`Listen on port ${process.env.PORT}`);
});
