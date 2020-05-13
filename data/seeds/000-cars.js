exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([{
          id: 1,
          vin: '11111111111111111',
          make: 'Honda',
          model: 'Accord',
          mileage: '1234'
        },
        {
          id: 2,
          vin: '22222222222222222',
          make: 'Honda',
          model: 'Civic',
          mileage: '2345'
        },
        {
          id: 3,
          vin: '33333333333333333',
          make: 'Honda',
          model: 'Pilot',
          mileage: '3456'
        }
      ]);
    });
};