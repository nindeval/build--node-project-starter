const { Model } = require('objection')

class User extends Model {

    static get tableName(){
      return 'users'
    }

    static get relationMappings(){
      const AbilityType = require('./AbilityType.js')

      return{
        theAbilityTypes: {
          relation: Model.ManyToManyRelation,
          modelClass: AbilityType,
          join: {
            from: 'users.id',
            through: {
              from: 'user_abilities.user_id',
              to: 'user_abilities.ability_type_id'
            },
            to: 'ability_types.id'
          }
        }
      }
    }
}

module.exports = User
