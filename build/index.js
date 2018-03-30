'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _cookieSession = require('cookie-session');

var _cookieSession2 = _interopRequireDefault(_cookieSession);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _keys = require('./config/keys');

var _keys2 = _interopRequireDefault(_keys);

var _authRoutes = require('./routes/authRoutes');

var _authRoutes2 = _interopRequireDefault(_authRoutes);

var _macroRoutes = require('./routes/macroRoutes');

var _macroRoutes2 = _interopRequireDefault(_macroRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _process$env = process.env,
    PORT = _process$env.PORT,
    MONGODB_URI = _process$env.MONGODB_URI,
    NODE_ENV = _process$env.NODE_ENV;


var app = (0, _express2.default)();

var mongoUrl = MONGODB_URI || 'mongodb://localhost/macrofit_db';

require('./models/User');
require('./services/passport');

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use((0, _cookieSession2.default)({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [_keys2.default.cookieKey]
}));
app.use(_passport2.default.initialize());
app.use(_passport2.default.session());

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect(mongoUrl);

(0, _authRoutes2.default)(app);
(0, _macroRoutes2.default)(app);

if (NODE_ENV === 'production') {
  // Express serves up production build assets
  app.use(_express2.default.static('client/build'));

  // This below informs Express to serve up
  // the index.html file if it doesn't recognize
  // the provided routes
  app.get('*', function (request, response) {
    response.sendFile(_path2.default.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT || 5000, function () {
  console.log('They came for us....out of the darkness..'); // eslint-disable-line
});
//# sourceMappingURL=index.js.map