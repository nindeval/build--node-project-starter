const userDataRows = [
  {id: 1, name: 'Alex', email: 'alex@mail.com', location: 'cdmx', image: 'https://avatars2.githubusercontent.com/u/17577546?s=400&u=17045465a7f89024551f6c4ebc51b884c5c9c1f9&v=4'},
  {id: 2, name: 'Diana', email: 'diana@mail.com', location: 'cdmx', image: 'https://avatars2.githubusercontent.com/u/17577546?s=400&u=17045465a7f89024551f6c4ebc51b884c5c9c1f9&v=4'},
  {id: 3, name: 'Verónica', email: 'veronica@mail.com',location: 'cdmx', image: 'https://avatars2.githubusercontent.com/u/17577546?s=400&u=17045465a7f89024551f6c4ebc51b884c5c9c1f9&v=4'},
  {id: 4, name: 'Jonas', email: 'jonas@mail.com', location: 'Estado de Mexico', image: 'https://avatars2.githubusercontent.com/u/17577546?s=400&u=17045465a7f89024551f6c4ebc51b884c5c9c1f9&v=4'},
  {id: 5, name: 'Verónica', email: 'veronica@mail.com',location: 'cdmx', image: 'https://avatars2.githubusercontent.com/u/17577546?s=400&u=17045465a7f89024551f6c4ebc51b884c5c9c1f9&v=4'},
  {id: 6, name: 'Juan', email: 'juan@mail.com',location: 'cdmx', image: 'https://avatars2.githubusercontent.com/u/17577546?s=400&u=17045465a7f89024551f6c4ebc51b884c5c9c1f9&v=4'},
  {id: 7, name: 'Hugo', email: 'hugo@mail.com',location: 'cdmx', image: 'https://avatars2.githubusercontent.com/u/17577546?s=400&u=17045465a7f89024551f6c4ebc51b884c5c9c1f9&v=4'},
  {id: 8, name: 'Aidee', email: 'aidee@mail.com',location: 'cdmx', image: 'https://avatars2.githubusercontent.com/u/17577546?s=400&u=17045465a7f89024551f6c4ebc51b884c5c9c1f9&v=4'}
]
/* crear columna para generar hash :  https://github.com/muktek-js-dipl-1803-ce/demo--node-boucollective-11-protected-routes/blob/master/src/database/seeds/00-user.js  */
/* crear columna en migración */


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(userDataRows);
    });
};
