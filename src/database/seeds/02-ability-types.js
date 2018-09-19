const abilityTypeDataRows = [
  { id: 1, name:'Pintura'},
  { id: 2, name:'Baile'},
  { id: 3, name:'Inglés'},
  { id: 4, name:'Mecánica'},
  { id: 5, name:'Naturaleza'},
  { id: 6, name:'Cuidado de animales'},
  { id: 7, name:'Primeros Auxilios'},
  { id: 8, name:'Matemáticas'},
  { id: 9, name:'Programación'},
  { id: 10, name:'Deportes'},
  { id: 11, name:'Fútbol'},
  { id: 12, name:'Defensa Personal'},
  { id: 13, name:'Cocina'},
  { id: 14, name:'Yoga'},
  { id: 15, name:'Guitarra'},
  { id: 16, name:'Bicicleta'}
]
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ability_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('ability_types').insert(abilityTypeDataRows);
    });
};
