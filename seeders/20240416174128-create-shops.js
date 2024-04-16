"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Shops", [
      {
        name: "Toko Faris",
        city: "Bekasi",
        createdAt: "2024-04-16T12:43:59 -07:00",
        updatedAt: new Date(),
      },
      {
        name: "Toko Viery",
        city: "Blitar",
        createdAt: "2024-04-16T07:23:19 -07:00",
        updatedAt: new Date(),
      },
      {
        name: "Toko Rizaldy",
        city: "Manado",
        createdAt: "2024-04-16T10:24:31 -07:00",
        updatedAt: new Date(),
      },
      {
        name: "Toko Asyifa",
        city: "Pesisir Selatan",
        createdAt: "2024-04-16T12:39:04 -07:00",
        updatedAt: new Date(),
      },
      {
        name: "Toko Qonita",
        city: "Bengkulu",
        createdAt: "2024-04-16T10:38:30 -07:00",
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Shops", null, {});
  },
};
