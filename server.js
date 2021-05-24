require("dotenv").config();
require("./src/config/cloudinary");

const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const morgan = require("morgan");
var session = require("express-session");
var MySQLStore = require("express-mysql-session")(session);
const path = require("path");

const { notFound, errorHandling } = require("./src/errorHandler");
const { MYSQL_OPTIONS, SESSION_OPTIONS } = require("./src/config");
const { fileStorage, fileFilter } = require("./src/multer");
const { banner, city, auth, profile, plans } = require("./src/routes");

var sessionStore = new MySQLStore(MYSQL_OPTIONS);

app.use(session({ ...SESSION_OPTIONS, store: sessionStore }));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("common"));
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("imageUrl")
);

app.get("/", (req, res) => {
  res.send("test");
});

// routes
app.use(`/api/v1/banner`, banner);
app.use(`/api/v1/city`, city);
app.use(`/api/v1/auth`, auth);
app.use(`/api/v1/profile`, profile);
app.use(`/api/v1/plan`, plans);

// error handling
app.use(notFound);

app.use(errorHandling);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listning at port : ${port}`);
});
