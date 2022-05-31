
const router = require('express').Router()

const MovieModel = require('../models/Movie.model')

// all your routes here
/* GET celebrities page */
router.get("/", async (req, res, next) => {
    try {
     const movies = await MovieModel.find()
    res.render("movies/movies", { movies: movies });
}
 catch (error) {
    console.log('Error occurred: ' , error)
 }
});



// Iteration #3: Add a new movie GET
router.get('/create',  (req, res, next) => {
    
    res.render('movies/new-movie')
  });
  
  // Iteration #3: Add a new movie POST
  router.post('/movies', async (req, res, next) => {
    
    const newMovie = await MovieModel.create(req.body)
    res.redirect('/movies' )
  
  });
  
  router.get('/movies/:movieId', async (req, res) => {
    const movie = await MovieModel.findById(req.params.movieId)
    const data = { movie }
    res.render('movies', data)
  })

module.exports = router
