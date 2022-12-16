const faker = require('@faker-js/faker').faker
module.exports =
  [
    {
      email: faker.internet.email(),
      password: faker.internet.password()
    },
  ]