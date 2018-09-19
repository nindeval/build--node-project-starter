
exports.up = async function(knex, Promise) {
  // return knex
  //   .schema
  //   .dropTableIfExists('user_abilities')

  return knex
  .schema
  .createTable('user_abilities', (userAbilitiesTable)=>{
    userAbilitiesTable.increments('id')

    userAbilitiesTable.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete("cascade")

    userAbilitiesTable.integer('ability_type_id')
      .unsigned()
      .references('id')
      .inTable('ability_types')
      .onDelete("cascade")

    userAbilitiesTable.boolean('hasAbility')
    userAbilitiesTable.boolean('wantsAbility')

    return userAbilitiesTable
  })
};

exports.down = async function(knex, Promise) {
  // await knex.schema.table("user_abilities", uaTable => {
  //   uaTable.dropForeign("user_id")
  //   uaTable.dropColumn("user_id")
  //   uaTable.dropForeign("ability_type_id")
  //   uaTable.dropColumn("ability_type_id")
  //
  // })

  return knex
    .schema
    .dropTableIfExists('user_abilities')

};
