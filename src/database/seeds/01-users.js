
const Bcrypt = require('bcryptjs')

const RECOMMENDED_ROUNDS = 12

const userDataRows = [
    {id: 1, email: 'alex@mail.com', password: Bcrypt.hashSync('pw111' , RECOMMENDED_ROUNDS), firstname: 'Alex', lastname: 'Enriquez', delegacion: 'Cuautemoc', zipcode: '06500', city: 'cdmx', image: 'https://avatars2.githubusercontent.com/u/17577546?s=400&u=17045465a7f89024551f6c4ebc51b884c5c9c1f9&v=4'},

  {id: 2, email: 'diana@mail.com', password: Bcrypt.hashSync('pw222' , RECOMMENDED_ROUNDS), firstname: 'Diana', lastname: 'Dominguez', delegacion: 'Cuautemoc', zipcode: '06500', city: 'cdmx', image: 'https://avatars2.githubusercontent.com/u/17577546?s=400&u=17045465a7f89024551f6c4ebc51b884c5c9c1f9&v=4'},

  {id: 3, email: 'veronica@mail.com', password: Bcrypt.hashSync('pw333' , RECOMMENDED_ROUNDS), firstname: 'Veronica', lastname: 'Aceves', delegacion: 'Cuautemoc', zipcode: '06500', city: 'cdmx', image: 'https://avatars2.githubusercontent.com/u/17577546?s=400&u=17045465a7f89024551f6c4ebc51b884c5c9c1f9&v=4'},

  {id: 4, email: 'jonas@mail.com', password: Bcrypt.hashSync('pw444' , RECOMMENDED_ROUNDS), firstname: 'Jonas', lastname: 'Almeda', delegacion: 'Cuautemoc', zipcode: '06500', city: 'cdmx', image: 'https://avatars2.githubusercontent.com/u/17577546?s=400&u=17045465a7f89024551f6c4ebc51b884c5c9c1f9&v=4'},

  {id: 5, email: 'monica@mail.com', password: Bcrypt.hashSync('pw555' , RECOMMENDED_ROUNDS), firstname: 'Monica', lastname: 'Gonzalez', delegacion: 'Cuautemoc', zipcode: '06500', city: 'cdmx', image: 'https://avatars2.githubusercontent.com/u/17577546?s=400&u=17045465a7f89024551f6c4ebc51b884c5c9c1f9&v=4'},

  {id: 6, email: 'juan@mail.com', password: Bcrypt.hashSync('pw666' , RECOMMENDED_ROUNDS), firstname: 'Juan', lastname: 'Perez', delegacion: 'Cuautemoc', zipcode: '06500', city: 'cdmx', image: 'https://avatars2.githubusercontent.com/u/17577546?s=400&u=17045465a7f89024551f6c4ebc51b884c5c9c1f9&v=4'},

  {id: 7, email: 'hugo@mail.com', password: Bcrypt.hashSync('pw777' , RECOMMENDED_ROUNDS), firstname: 'Hugo', lastname: 'Lira', delegacion: 'Cuautemoc', zipcode: '06500', city: 'cdmx', image: 'https://avatars2.githubusercontent.com/u/17577546?s=400&u=17045465a7f89024551f6c4ebc51b884c5c9c1f9&v=4'},

  {id: 8, email: 'aidee@mail.com',password: Bcrypt.hashSync('pw888' , RECOMMENDED_ROUNDS), firstname: 'Aidee', lastname: 'Juarez', delegacion: 'Cuautemoc', zipcode: '06500', city: 'cdmx', image: 'https://avatars2.githubusercontent.com/u/17577546?s=400&u=17045465a7f89024551f6c4ebc51b884c5c9c1f9&v=4'}
]

/* crear columna para generar hash :  https://github.com/muktek-js-dipl-1803-ce/demo--node-boucollective-11-protected-routes/blob/master/src/database/seeds/00-user.js  */
/* crear columna en migración */


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(async function () {
      // Inserts seed entries
      await knex('users').insert(userDataRows);
      await knex.raw(`SELECT SETVAL('users_id_seq', MAX(id)) FROM users`)
      return knex
    });
};
