
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('ability_types', (abilityTypesTable)=>{
        abilityTypesTable.increments()
        abilityTypesTable.string('name')
        abilityTypesTable.timestamp(true, true)

        return abilityTypesTable
    })
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('ability_types')
};
