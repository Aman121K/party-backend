const FIVE_YEARS = 1000 * 60 * 60 * 24 * 365 * 5;

const SESSION_OPTIONS = {
  name: "sid",
  secret: "session_cookie_secret",
  cookie: { maxAge: FIVE_YEARS, httpOnly: true },
  saveUninitialized: false,
  rolling: true,
  resave: false,
};

module.exports = SESSION_OPTIONS;
