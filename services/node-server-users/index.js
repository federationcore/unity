const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const user = require('./src/routes/v1/user');

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(
    'mongodb://federation:iopqzan123187abza@18.144.2.196:27017/federation',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('MongoDB successfully connected'))
  .catch((err) => console.log(err));

// mongoose.set('useFindAndModify', false);
// Passport middleware

app.use(passport.initialize());

// Passport config
require('./src/config/passport')(passport);

// Routes
app.get('/v1', (req, res) => {
  return res.status(200).json({ health_check: 'healthy' });
});

app.use('/v1/user', user);

const port = process.env.PORT || 5000;
server = app.listen(port);

console.log(`data being sent on localhost ${port}`);
