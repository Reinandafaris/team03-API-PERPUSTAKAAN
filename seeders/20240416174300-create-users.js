"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "Reinanda Faris",
        city: "Bekasi",
        age: 17,
        role: "Admin",
        shopId: 37,
        createdAt: "2024-04-16T03:35:21 -07:00",
        updatedAt: new Date(),
      },
      {
        name: "Viery Nugroho",
        city: "Blitar",
        age: 20,
        role: "Staff",
        shopId: 32,
        createdAt: "2024-04-16T06:40:26 -07:00",
        updatedAt: new Date(),
      },
      {
        name: "Rizaldy Mustakim",
        city: "Manado",
        age: 20,
        role: "Manager",
        shopId: 12,
        createdAt: "2024-04-16T08:44:34 -07:00",
        updatedAt: new Date(),
      },
      {
        name: "Asyifa Maharani",
        city: "Pesisir Selatan",
        age: 20,
        role: "Staff",
        shopId: 24,
        createdAt: "2024-04-16T07:29:00 -07:00",
        updatedAt: new Date(),
      },
      {
        name: "Qonita Afifah",
        city: "Bengkulu",
        age: 20,
        role: "Staff",
        shopId: 19,
        createdAt: "2024-04-16T05:10:35 -07:00",
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
