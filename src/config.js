module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    CLIENT_ORIGIN: 'https://searchstream.r-kadel.now.sh/',
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://postgres@localhost/searchstream'
  }