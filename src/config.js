module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  CLIENT_ORIGIN: 'https://searchstream.now.sh',
  DATABASE_URL:
    process.env.DATABASE_URL || 'postgresql://postgres@localhost/searchstream',
  API_BASE_URL:
    process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api',
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
  JWT_EXPIRY: process.env.JWT_EXPIRY || '3600s'
};
