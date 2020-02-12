const app = require('../src/app')
const { makeResults } = require('./results.fixtures')

describe('SearchRouter', () => {
  const testResults = makeResults()

  it('GET /api/search responds with 200 and asks for a search term', () => {
    return supertest(app)
      .get('/api/search/')
      .expect(200, 'Please Enter a Search Term')
  })
  it('GET /api/term responds 200 and returns results as an array of objects', () => {
    return supertest(app)
      .get('/api/search/bojack')
      .expect(200, testResults)
  })
})