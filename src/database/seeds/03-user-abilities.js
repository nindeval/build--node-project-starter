const userAbilitiesDataRows = [
  { id: 1, user_id: 001, ability_type_id: 001, hasAbility: true, wantsAbility: true },
  { id: 2, user_id: 002, ability_type_id: 002, hasAbility: true, wantsAbility: true },
  { id: 3, user_id: 003, ability_type_id: 003, hasAbility: true, wantsAbility: true },
  { id: 4, user_id: 004, ability_type_id: 004, hasAbility: true, wantsAbility: true },
]

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_abilities').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_abilities').insert(userAbilitiesDataRows);
    });
};
