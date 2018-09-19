
exports.up = async function(knex, Promise) {
  return knex
    .schema
    .createTable('user_invitations', (userInvitationsTable)=>{
      userInvitationsTable.increments('id')

      userInvitationsTable.integer('inviting_user_id')
        .unsigned()
        .references('id')
        .inTable('users')

      userInvitationsTable.integer('receiving_user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete("cascade")

      userInvitationsTable.integer('ability_type_id')
        .unsigned()
        .references('id')
        .inTable('ability_types')
        .onDelete("cascade")

      userInvitationsTable.boolean('accepted')
      userInvitationsTable.boolean('rejected')
    })
};

exports.down = async function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('user_invitations')

};
