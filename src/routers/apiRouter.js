const Router = require('express').Router;
const apiRouter = Router()

const fetchUsers = (request, response)=>{
  const db = request.app.locals.db

  db.select('*').from('users')
    .then((userRecords)=>{
      response.json(userRecords)
    })
}
const fetchAbilityTypes = (request, response)=>{
  const db = request.app.locals.db
  db.select('*').from('ability_types')
    .then((abilityTypesRecords)=>{
      response.json(abilityTypesRecords)
    })
}
const fetchUserAbilities = (request, response)=>{
  const db = request.app.locals.db
  db.select('*').from('user_abilities')
    .then((userAilitiesRecords)=>{
      response.json(userAbilitiesRecords)
    })
}
const fetchInvitations = (request, response)=>{
response.json([
  {id: 1, inviting_user_id: 001, receiving_user_id: 001, ability_type_id: 001, recepted: false, rejected: false},
  {id: 2, inviting_user_id: 002, receiving_user_id: 002, ability_type_id: 002, recepted: false, rejected: false},
  {id: 3, inviting_user_id: 003, receiving_user_id: 003, ability_type_id: 003, recepted: false, rejected: false}
])
}


apiRouter.get('/', (resquest, response)=>{
  response.json({
    '/api/users' : 'Show users',
    '/api/ability_types ' : 'Show competencies',
    '/api/user_abilities' : 'Show abilites',
    '/api/invitations' : 'Show invitations'
  })
})

apiRouter
  .get('/users', fetchUsers)
  .get('/ability_types', fetchAbilityTypes)
  .get('/user_abilities', fetchUserAbilities)
  .get('/invitations', fetchInvitations)

module.exports = apiRouter
