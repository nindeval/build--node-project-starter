const userAbilitiesDataRows = [
  /*  gererar mas usuarios */
  { id: 1, user_id: 8, ability_type_id: 2, hasAbility: true, wantsAbility: true },
  { id: 2, user_id: 7, ability_type_id: 4, hasAbility: true, wantsAbility: true },
  { id: 3, user_id: 6, ability_type_id: 6, hasAbility: true, wantsAbility: true },
  { id: 4, user_id: 5, ability_type_id: 8, hasAbility: true, wantsAbility: true },
  { id: 5, user_id: 4, ability_type_id: 7, hasAbility: true, wantsAbility: true },
  { id: 6, user_id: 3, ability_type_id: 5, hasAbility: true, wantsAbility: true },
  { id: 7, user_id: 2, ability_type_id: 3, hasAbility: true, wantsAbility: true },
  { id: 8, user_id: 1, ability_type_id: 1, hasAbility: true, wantsAbility: true }
]

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_abilities').del()
    .then(async function () {
      // Inserts seed entries
      await knex('user_abilities').insert(userAbilitiesDataRows);
      await knex.raw(`SELECT SETVAL('user_abilities_id_seq', MAX(id)) FROM user_abilities`)
      return knex


    });
};
