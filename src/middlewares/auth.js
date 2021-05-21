// const { Request } = require("express");

const SESSION_OPTIONS = require("../config/session");

const isLoggedIn = (req) => {
  return !!req.session.userId;
};

const logIn = (req, userId) => {
  if (req.session) {
    req.session.isAuth = true;
    req.session.userId = userId;
  }
};

const logOut = (req, res) =>
  new Promise((resolve, reject) => {
    if (req.session)
      req.session.destroy((err) => {
        if (err) reject(err);

        res.clearCookie(SESSION_OPTIONS.name);
        resolve();
      });
  });

const isAuth = (req, res, next) => {
  if (!isLoggedIn(req)) {
    return res.status(401).json({
      status: "error",
      message: "Unauthorized User",
    });
  }
  next();
};

module.exports = { isLoggedIn, logIn, logOut, isAuth };
