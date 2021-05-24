'use strict';

const express = require('express');
require('dotenv').config();

// Constants
const PORT = 6001;
const HOST = '0.0.0.0';

// Import the sequelize object on which
const sequelize = require('./utils/database')

// Import the user model we have defined
const User = require('./models/user');

// Create all the table defined using 
// sequelize in Database

// Sync all models that are not
// already in the database
// sequelize.sync()

// Force sync all models
// It will drop the table first 
// and re-create it afterwards
sequelize.sync({ force: true })
  .then(() => {
    // seed db
    User.create({ name: 'bob', email: 'bob@gmail.com' });
  })


// App
const app = express();
app.get('/api', async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);