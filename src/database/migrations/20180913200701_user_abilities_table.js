
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('user_abilities', (userAbilitiesTable)=>{
        userAbilitiesTable.increments()
        userAbilitiesTable.integer('user_id')
        userAbilitiesTable.varchar('ability_type_id')
        userAbilitiesTable.boolean('hasAbility')
        userAbilitiesTable.boolean('wantsAbility')
        userAbilitiesTable.timestamp(true, true)

        return userAbilitiesTable
    })
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('user_abilities')
};
