exports.up = function (knex) {
  // create cars table
  return knex.schema.createTable('cars', table => {
    table.increments()
    table.string('vin', 18).notNullable()
    table.string('make').notNullable()
    table.string('model').notNullable()
    table.integer('mileage').notNullable()
  })
};

exports.down = function (knex) {
  // remove cars table
  return knex.schema.dropTableIfExists('cars')
}