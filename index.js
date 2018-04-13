const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');
const macroRoutes = require('./routes/macroRoutes');

const { PORT, MONGODB_URI, NODE_ENV } = process.env;

const app = express();

const mongoUrl = MONGODB_URI || 'mongodb://localhost/macrofit_db';

require('./models/User');
require('./services/passport');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl);

authRoutes(app);
macroRoutes(app);

if (NODE_ENV === 'production') {
  // Express serves up production build assets
  app.use(express.static('client/build'));

  // This below informs Express to serve up
  // the index.html file if it doesn't recognize
  // the provided routes
  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT || 5000, () => {
  console.log('They came for us....out of the darkness..'); // eslint-disable-line
});
