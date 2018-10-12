const { Model } = require('objection')

class UserAbility extends Model {

    static get tableName(){
      return 'user_abilities'
    }

    static get relationMappings(){
      const User = require('./User.js')
      const AbilityType = require('./AbilityType.js')

      return{
        theUser: {
          relation: Model.BelongsToOneRelation,
          modelClass: User,
          join: {
            from: 'user_abilities.id',
            to: 'users.id',
          }
        },
        theAbilityType : {
          relation: Model.BelongsToOneRelation,
          modelClass: AbilityType,
          join: {
            from: 'user_abilities.id',
            to: 'ability_types.id'
          }
        }
      }
    }
}

module.exports = UserAbility
