const userDataRows = [
  {id: 1, name: 'Alex', email: 'alex@mail.com', location: 'cdmx', image: 'https://avatars2.githubusercontent.com/u/17577546?s=400&u=17045465a7f89024551f6c4ebc51b884c5c9c1f9&v=4'},
  {id: 2, name: 'Diana', email: 'diana@mail.com', location: 'cdmx', image: 'https://avatars2.githubusercontent.com/u/17577546?s=400&u=17045465a7f89024551f6c4ebc51b884c5c9c1f9&v=4'},
  {id: 3, name: 'Verónica', email: 'veronica@mail.com', image: 'https://avatars2.githubusercontent.com/u/17577546?s=400&u=17045465a7f89024551f6c4ebc51b884c5c9c1f9&v=4'}
]
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(userDataRows);
    });
};
