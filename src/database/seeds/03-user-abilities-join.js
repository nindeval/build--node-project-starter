const userAbilitiesDataRows = [
  /*  gererar mas usuarios */
  { id: 1, user_id: 9, ability_type_id: 2, hasAbility: false, wantsAbility: true },
  { id: 2, user_id: 8, ability_type_id: 4, hasAbility: false, wantsAbility: true },
  { id: 3, user_id: 7, ability_type_id: 6, hasAbility: false, wantsAbility: true },
  { id: 4, user_id: 6, ability_type_id: 8, hasAbility: false, wantsAbility: true },
  { id: 5, user_id: 5, ability_type_id: 10, hasAbility: true, wantsAbility: false },
  { id: 6, user_id: 4, ability_type_id: 12, hasAbility: true, wantsAbility: true },
  { id: 7, user_id: 3, ability_type_id: 14, hasAbility: true, wantsAbility: false },
  { id: 8, user_id: 2, ability_type_id: 16, hasAbility: true, wantsAbility: true },
  { id: 9, user_id: 1, ability_type_id: 18, hasAbility: true, wantsAbility: true },
  { id: 10, user_id: 20, ability_type_id: 20, hasAbility: true, wantsAbility: true },
  { id: 11, user_id: 19, ability_type_id: 1, hasAbility: true, wantsAbility: true },
  { id: 12, user_id: 18, ability_type_id: 3, hasAbility: true, wantsAbility: false },
  { id: 13, user_id: 17, ability_type_id: 5, hasAbility: true, wantsAbility: true },
  { id: 14, user_id: 16, ability_type_id: 7, hasAbility: true, wantsAbility: false },
  { id: 15, user_id: 15, ability_type_id: 9, hasAbility: true, wantsAbility: true },
  { id: 16, user_id: 14, ability_type_id: 11, hasAbility: false, wantsAbility: true },
  { id: 17, user_id: 13, ability_type_id: 13, hasAbility: false, wantsAbility: true },
  { id: 18, user_id: 12, ability_type_id: 15, hasAbility: false, wantsAbility: true },
  { id: 19, user_id: 11, ability_type_id: 17, hasAbility: false, wantsAbility: true },
  { id: 20, user_id: 10, ability_type_id: 19, hasAbility: false, wantsAbility: true }
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
