const Router = require('express').Router;
const apiRouter = Router()
const User = require('../models/User.js')
const AbilityType = require('../models/AbilityType.js')

const ShowRouteListings = (resquest, response)=>{
  response.json({
    '/api/users' : 'Show users',
    '/api/ability_types ' : 'Show competencies',
    '/api/user_abilities' : 'Show abilites',
    '/api/invitations' : 'Show invitations'
  })
}
const fetchUsers = (request, response)=>{
  User.query()
    .eager('theAbilityTypes')
    .then((userRecords)=>{
      response.status(200).json(userRecords)
    })
    .catch((err)=>{
      console.log('Disculpa las molestias, estamos teniendo algunos problemas - Users');
      var errorMessage = err.toString()
      response.status(500).send(errorMessage)
    })
  // const db = request.app.locals.db
  // db.select('*').from('users')
  //   .then((Records)=>{
  //     response.json(Records)
  //   })
}
const fetchAbilityTypes = (request, response)=>{
  AbilityType.query()
    .eager('theUsers')
    .then((abilityTypesRecords)=>{
      response.status(200).json(abilityTypesRecords)
    })
    .catch((err)=>{
      console.log('Disculpa las molestias, estamos teniendo algunos problemas - abilityType');
      var errorMessage = err.toString()
        response.status(500).send(errorMessage)
    })
  // const db = request.app.locals.db
  // db.select('*').from('ability_types')
  //   .then((abilityTypesRecords)=>{
  //     response.json(abilityTypesRecords)
  //   })
}
const fetchUserAbilities = (request, response)=>{
  AbilityType.query()
    .eager('theUsers')
    .then((userAbilitiesRecords)=>{
      response.status(200).json(userAbilitiesRecords)
    })
    .catch((err)=>{
      console.log('Disculpa las molestias, estamos teniendo algunos problemas - userAbilityType');
      var errorMessage = err.toString()
        response.status(500).send(errorMessage)
    })
  // const db = request.app.locals.db
  // db.select('*').from('user_abilities')
  //   .then((userAbilitiesRecords)=>{
  //     response.json(userAbilitiesRecords)
  //   })
}
const fetchInvitations = (request, response)=>{

}



apiRouter
  .get('/', ShowRouteListings)
  .get('/users', fetchUsers)
  .get('/ability_types', fetchAbilityTypes)
  .get('/user_abilities', fetchUserAbilities)
  .get('/invitations', fetchInvitations)

module.exports = apiRouter
