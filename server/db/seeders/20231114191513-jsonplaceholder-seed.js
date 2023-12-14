const { hashSync } = require("bcrypt");
const axios = require("axios");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        { name: "Alex", email: "1@1", hashpass: hashSync("1", 10) },
        { name: "Bob", email: "2@2", hashpass: hashSync("2", 10) },
        { name: "Carl", email: "3@3", hashpass: hashSync("3", 10) },
      ],
      {}
    );

    const { data } = await axios("https://fakestoreapi.com/products");
    await queryInterface.bulkInsert(
      "Notes",
      data.map((apiProduct) => ({
        title: apiProduct.title,
        text: apiProduct.description,
        img: apiProduct.image,
        isFav: "false",
      })),
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
