/**
 * Seed users table.
 *
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
export function seed(knex, Promise) {
  // Deletes all existing entries
  return knex('users')
    .del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          first_name: 'ishan',
          last_name: 'dhakal',
          email: 'id99@gmail.com',
          password: 'id99'
        }),
        knex('users').insert({
          first_name: 'john',
          last_name: 'doe',
          email: 'jdoe@gmail.com',
          password: 'jdoe'
        })
      ]);
    });
}
