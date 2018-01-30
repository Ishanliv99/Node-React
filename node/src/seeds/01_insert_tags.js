/**
 * Seed tags table.
 *
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
export function seed(knex, Promise) {
  // Deletes all existing entries
  return knex('tags')
    .del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('tags').insert({
          tag_name: 'call'
        }),
        knex('tags').insert({
          tag_name: 'clean'
        }),
        knex('tags').insert({
          tag_name: 'grocery'
        }),
        knex('tags').insert({
          tag_name: 'meeting'
        }),
        knex('tags').insert({
          tag_name: 'shows'
        }),
        knex('tags').insert({
          tag_name: 'sports'
        }),
        knex('tags').insert({
          tag_name: 'work'
        })
      ]);
    });
  }
  