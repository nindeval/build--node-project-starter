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
  // const appDb = request.app.locals.db
  console.log(request.query);

  // Return records where hasAbility is false
  User.query()
    .eager('userAbilityJoin.theAbilityType')
    .modifyEager("userAbilityJoin", builder => {
      console.log("oxxxxoooo");
      console.log(request.params.wants_ability);
      if(request.query.wants_ability === "true"){
        console.log("ooooo");
        return builder.where("wantsAbility", "=", true)
      }

      if(request.query.has_ability === "true"){
        return builder.where("hasAbility", "=", true)
      }
    })
    .then((userRecordsAbilitites)=>{
      const userRecordsFilteredHasAbility = userRecordsAbilitites.filter( userRecord =>{
        return userRecord.userAbilityJoin.length > 0
      })
      response.status(200).json(userRecordsFilteredHasAbility)
    })
    .catch((err)=>{
      console.log(err);
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
  .get('/ability-types', fetchAbilityTypes)
  .get('/user-abilities', fetchUserAbilities)
  .get('/invitations', fetchInvitations)

module.exports = apiRouter
