const ONE_HOUR = 1000 * 60 * 60;

const SESSION_OPTIONS = {
  name: "sid",
  secret: "session_cookie_secret",
  cookie: { maxAge: ONE_HOUR, httpOnly: true },
  saveUninitialized: false,
  rolling: true,
  resave: false,
};

module.exports = SESSION_OPTIONS;
