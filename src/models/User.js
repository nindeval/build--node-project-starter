const { Model } = require('objection')

class User extends Model {
  static get tableName(){
      return 'users'
    }

  static get relationMappings(){
    const Company = require('./Company.js')

    return{
      theJobCompany: {
        relation: Model.BelongsToOneRelation,
        modelClass: Company,
        join: {
          from: 'jobs.company_id',
          to: 'companies.id'
        }
      }
    }
  }
}

module.exports = User
