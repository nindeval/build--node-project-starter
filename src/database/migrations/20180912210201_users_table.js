
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('users', (usersTable)=>{
        usersTable.increments()
        usersTable.string('name')
        usersTable.string('email')
        usersTable.string('location')
        usersTable.string('image')
        usersTable.timestamps(true, true)

      return usersTable
    })

};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('users')
};
