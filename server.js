const express = require('express')
const ejs = require('ejs')

const knex = require('knex')
const { Model } = require('objection')

const bodyParser = require('body-parser')

const dbConfigObj = require('./knexfile.js')

const pageRouter = require(`./src/routers/pageRouter.js`)
const apiRouter = require(`./src/routers/apiRouter.js`)

const app = express()
const PORT = 8000

const appDb = knex(dbConfigObj.development)
Model.knex(appDb)
app.locals.db = appDb

app.use( express.static( `${__dirname}/public`) )

app.engine( 'ejs', ejs.renderFile )
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/src/views`)

app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() )

app.use('/api', apiRouter)
app.use('/', pageRouter)

app.use((request,response)=>{
  response.render('reactApp.ejs')
})

app.listen(PORT, ()=>{
  console.log(`Hei hei! ${PORT}`);
})
