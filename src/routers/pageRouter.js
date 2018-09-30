const Router = require('express').Router;
const fs = require('fs-extra')


const pageRouter = Router()

pageRouter
  .get('/', (request, response)=>{
      response.render('reactApp.ejs')
})

// pageRouter
//   .get('/about', (request, response)=>{
//       response.render('about.ejs')
// })

module.exports = pageRouter
