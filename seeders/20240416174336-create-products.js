"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      {
        name: "Bumi Manusia",
        price: 200000,
        stock: 6,
        shopId: 1,
        userId: 1,
        createdAt: "2024-04-16T08:32:26 -07:00",
        updatedAt: new Date(),
      },
      {
        name: "Laskar Pelangi",
        price: 150000,
        stock: 39,
        shopId: 2,
        userId: 2,
        createdAt: "2024-04-16T03:19:14 -07:00",
        updatedAt: new Date(),
      },
      {
        name: "Anak Semua Bangsa",
        price: 175000,
        stock: 37,
        shopId: 3,
        userId: 3,
        createdAt: "2024-04-16T09:26:16 -07:00",
        updatedAt: new Date(),
      },
      {
        name: "Ronggeng Dukuh Paruk",
        price: 132000,
        stock: 20,
        shopId: 4,
        userId: 4,
        createdAt: "2024-04-16T08:41:09 -07:00",
        updatedAt: new Date(),
      },
      {
        name: "Negeri 5 Menara",
        price: 324000,
        stock: 89,
        shopId: 5,
        userId: 5,
        createdAt: "2024-04-16T01:14:07 -07:00",
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
