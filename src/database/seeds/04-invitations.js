const userInvitationsDataRows = [
  // {id: 1, inviting_user_id: 020, receiving_user_id: 010, ability_type_id: 011, accepted: false, rejected: false},
  // {id: 2, inviting_user_id: 019, receiving_user_id: 009, ability_type_id: 012, accepted: false, rejected: false},
  // {id: 3, inviting_user_id: 018, receiving_user_id: 008, ability_type_id: 013, accepted: false, rejected: false},
  // {id: 4, inviting_user_id: 017, receiving_user_id: 007, ability_type_id: 014, accepted: false, rejected: false},
  // {id: 5, inviting_user_id: 016, receiving_user_id: 006, ability_type_id: 015, accepted: false, rejected: false},
  // {id: 6, inviting_user_id: 015, receiving_user_id: 005, ability_type_id: 016, accepted: false, rejected: false},
  // {id: 7, inviting_user_id: 014, receiving_user_id: 004, ability_type_id: 017, accepted: false, rejected: false},
  // {id: 8, inviting_user_id: 013, receiving_user_id: 003, ability_type_id: 018, accepted: false, rejected: false},
  // {id: 9, inviting_user_id: 012, receiving_user_id: 002, ability_type_id: 019, accepted: false, rejected: false},
  // {id: 10, inviting_user_id: 011, receiving_user_id: 001, ability_type_id: 020, accepted: false, rejected: false},
  // {id: 11, inviting_user_id: 010, receiving_user_id: 020, ability_type_id: 001, accepted: false, rejected: false},
  // {id: 12, inviting_user_id: 009, receiving_user_id: 019, ability_type_id: 002, accepted: false, rejected: false},
  // {id: 13, inviting_user_id: 008, receiving_user_id: 018, ability_type_id: 003, accepted: false, rejected: false},
  // {id: 14, inviting_user_id: 007, receiving_user_id: 017, ability_type_id: 004, accepted: false, rejected: false},
  // {id: 15, inviting_user_id: 006, receiving_user_id: 016, ability_type_id: 005, accepted: false, rejected: false},
  // {id: 16, inviting_user_id: 005, receiving_user_id: 015, ability_type_id: 006, accepted: false, rejected: false},
  // {id: 17, inviting_user_id: 004, receiving_user_id: 014, ability_type_id: 007, accepted: false, rejected: false},
  // {id: 18, inviting_user_id: 003, receiving_user_id: 013, ability_type_id: 008, accepted: false, rejected: false},
  // {id: 19, inviting_user_id: 002, receiving_user_id: 012, ability_type_id: 009, accepted: false, rejected: false},
  // {id: 20, inviting_user_id: 001, receiving_user_id: 011, ability_type_id: 010, accepted: false, rejected: false}
]


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_invitations').del()
    .then(async function () {
      // Inserts seed entries
      await knex('user_invitations').insert(userInvitationsDataRows);
      //await knex.raw(`SELECT SETVAL('user_invitations_id_seq', MAX(id)) FROM user_invitations`)
      return knex
    });
};
