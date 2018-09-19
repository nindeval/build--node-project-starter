const { Model } = require('objection')

class AbilityType extends Model {

    static get tableName(){
      return 'ability_types'
    }

    static get relationMappings(){
      const User = require('./User.js')

      return{
        theUsers: {
          relation: Model.ManyToManyRelation,
          modelClass: User,
          join: {
            from: 'ability_types.id',
            through: {
              from: 'user_abilities.ability_type_id',
              to: 'user_abilities.user_id'
            },
            to: 'users.id'
          }
        }
      }
    }
}

module.exports = AbilityType
