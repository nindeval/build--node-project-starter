const { Model } = require('objection');
const Password = require('../helpers/auth--objection-password.js')();
const _validateModelFields = require('../helpers/auth--objection-validateModelFields.js')



class User extends Password(Model) {

  static get tableName (){
    return 'users'
  }

  $validate(modelInstance){
    _validateModelFields(modelInstance)
    return modelInstance
  }

  static get relationMappings(){
    const AbilityType = require('./AbilityType.js')
    const UserAbility = require("./UserAbility")
    return {
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
      },
      userAbilityJoin : {
        relation: Model.HasManyRelation,
        modelClass: UserAbility,
        join: {
          from: 'users.id',
          to: 'user_abilities.user_id'
        }
      }
    }
  }

}



module.exports = User
