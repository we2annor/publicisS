const faker = require("faker");

const Query = {
  name: () => faker.name,
  cards: () => {
    let lists = [];
    for (let i = 0; i < 20; i++) {
      lists.push(faker.helpers.createCard());
    }
    return lists;
  },
  nameList: [],
};

module.exports = { Query };
