if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const editJsonFile = require('edit-json-file');

let file = editJsonFile(`config/development.json`);
file.set('assetsBaseUrl', `${process.env.BASE_URL}`);
file.set('port', 9000);
file.save();

const express = require('express');
const categories = require('./routes/categories');
const listings = require('./routes/listings');
const listing = require('./routes/listing');
const users = require('./routes/users');
const user = require('./routes/user');
const auth = require('./routes/auth');
const my = require('./routes/my');
const messages = require('./routes/messages');
const expoPushTokens = require('./routes/expoPushTokens');
const helmet = require('helmet');
const compression = require('compression');
const config = require('config');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(helmet());
app.use(compression());

app.use('/api/categories', categories);
app.use('/api/listing', listing);
app.use('/api/listings', listings);
app.use('/api/user', user);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/my', my);
app.use('/api/expoPushTokens', expoPushTokens);
app.use('/api/messages', messages);

const port = process.env.PORT || config.get('port');
app.listen(port, function() {
	console.log(`Server started on port ${port}...`);
});
