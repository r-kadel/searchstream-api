require('dotenv').config();
process.env.TZ = 'UTC';
process.env.NODE_ENV = 'test';
process.env.TEST_DB_URL =
  process.env.TEST_DB_URL || 'postgresql://postgres@localhost/searchstream';
process.env.JWT_EXPIRY = '3m';

const { expect } = require('chai');
const supertest = require('supertest');

global.expect = expect;
global.supertest = supertest;
