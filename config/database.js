module.exports = {
  development: {
    username: 'chandan',
    password: 'Chandankl@5',
    database: 'health_feed',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.PORT,
    dialect: 'mysql',
  }
};