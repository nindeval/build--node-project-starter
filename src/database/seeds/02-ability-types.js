const abilityTypeDataRows = [
  { id: 1, name:'Música'},
  { id: 2, name:'Baile'},
  { id: 3, name:'Idioma'},
  { id: 4, name:'Mecánica'},
  { id: 5, name:'Naturaleza'},
  { id: 6, name:'Animales'},
  { id: 7, name:'Primeros Auxilios'},
  { id: 8, name:'Matemáticas'},
  { id: 9, name:'Programación'},
  { id: 10, name:'Deportes'}
]
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ability_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('ability_types').insert(abilityTypeDataRows);
    });
};
