require('dotenv').config();

const {
	TZ,
	DB_HOST,
	DB_USER,
	DB_PASS,
	DB_NAME,
    DB_PORT
} = process.env


module.exports = {
  "development": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": DB_NAME,
    "host": DB_HOST,
    "timezone": TZ,
    "dialect": "mysql",
    "port": DB_PORT
  },
  "test": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": DB_NAME,
    "host": DB_HOST,
    "timezone": TZ,
    "dialect": "mysql"
  },
  "production": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": DB_NAME,
    "host": DB_HOST,
    "timezone": TZ,
    "dialect": "mysql",
    "dialectOptions":{
      ssl: {
        rejectUnauthorized: true,
      },
    }
  }
}
