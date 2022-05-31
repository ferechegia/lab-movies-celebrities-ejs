const router = require('express').Router()

const CelebrityModel = require('../models/Celebrity.model')

// all your routes here
/* GET celebrities page */
router.get("/", async (req, res, next) => {
    try {
     const celebrities = await CelebrityModel.find()
    res.render("celebrities/celebrities", { celebrities });
}
 catch (error) {
    console.log('Error occurred: ' , error)
 }
});



// Iteration #3: Add a new celebrity GET
router.get('/create',  (req, res, next) => {
    
    res.render('celebrities/new-celebrity')
  });
  
  // Iteration #3: Add a new celebrity POST
  router.post('/create', async (req, res, next) => {
    
    const newCeleb = await CelebrityModel.create(req.body)
    res.redirect('/' )
  
  });
  
  router.get('/:celebId', async (req, res) => {
    const celebrity = await CelebrityModel.findById(req.params.celebId)
    const data = { celebrity }
    res.render('celebrities', data)
  })

module.exports = router