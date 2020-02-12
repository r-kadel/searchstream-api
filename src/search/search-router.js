const express = require('express')
const axios = require('axios')
const searchRouter = express.Router()

searchRouter.route('/:searchTerm').get((req, res) => {
  const searchTerm = req.params.searchTerm
  axios({
    method: 'GET',
    url:
      'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup',
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host':
        'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
      'x-rapidapi-key': process.env.API_KEY
    },
    params: {
      term: searchTerm,
      country: 'us'
    }
  })
    .then(response => {
      res.send(response.data)
    })
    .catch(error => {
      console.log(error)
    })
})

module.exports = searchRouter
