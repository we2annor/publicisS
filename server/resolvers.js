const faker = require("faker");

const Query = {
  name: () => faker.name,
  cards: (parent, arg) => {
    let lists = [];
    for (let i = 0; i < 20; i++) {
      lists.push({ id: i + 1, ...faker.helpers.createCard() });
    }
    return lists;
  },
  nameList: [],
};

module.exports = { Query };
