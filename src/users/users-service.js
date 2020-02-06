const UsersService = {
  getAllUsers(knex) {
    return knex.select('*').from('searchstream_users')
  },

  insertUser(knex, newUser) {
    return knex
      .insert(newUser)
      .into('searchstream_users')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },

  getById(knex, id) {
    return knex
      .from('searchstream_users')
      .select('*')
      .where('id', id)
      .first()
  },

  deleteUser(knex, id) {
    return knex('searchstream_users')
      .where({ id })
      .delete()
  },

  updateUser(knex, id, newUserFields) {
    return knex('searchstream_users')
      .where({ id })
      .update(newUserFields)
  }
}

module.exports = UsersService