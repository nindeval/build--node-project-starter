
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('users', (usersTable)=>{
        usersTable.increments()
        usersTable.string('email').notNullable()
        usersTable.string('password').notNullable()
        usersTable.string('firstname')
        usersTable.string('lastname')
        usersTable.string('delegacion')
        usersTable.integer('zipcode')
        usersTable.string('city')
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
