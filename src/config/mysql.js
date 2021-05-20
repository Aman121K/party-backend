const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = process.env;

const MYSQL_OPTIONS = {
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  user: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
};

module.exports = MYSQL_OPTIONS;
