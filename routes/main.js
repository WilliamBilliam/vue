const express = require('express')
const { route } = require('../app')
const router = express.Router()

router.get('/', (req, res, next) => {
    //render the key word title and description to the home mustache page

    res.render('home', req.context)

})

router.get('/blog', (req, res, next) => {
        //render the key word title and description to the blog mustache page
        //const data = req.context

        res.render('blog', req.context)
    

})

//getting the code for the homepage
router.get('/home', (req, res, next) => {
    res.render('home', req.context)
})

//import the code for the about page
router.get('/about', (req, res, next) => {
    res.render('about', req.context)
})

//import the code for the contact page
router.get('/contact', (req, res, next) => {
    res.render('contact', req.context)
})


//import the code for the reservation page
router.get('/reservation', (req, res, next) => {
    res.render('reservation', req.context)
})


//import the code for the menu page
router.get('/menu', (req, res, next) => {
    res.render('menu', req.context)
})

module.exports = router 