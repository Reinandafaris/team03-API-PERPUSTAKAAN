"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Auths", [
      {
        email: "faris@gmail.com",
        userId: 1,
        password:
          "$2a$12$uykwUxMqzfI79tpPPXPojeyi3c6wV53b3iLgTELKHyk.GCpDAqg3u",
        createdAt: "2024-04-16T03:35:21 -07:00",
        updatedAt: new Date(),
      },
      {
        email: "viery@gmail.com",
        userId: 2,
        password:
          "$2a$12$XmPlDVhdizA4fkI6XaSljuqrmY63vHSNVhbIUQz5ML7QUSkPjsWFi",
        createdAt: "2024-04-16T06:40:26 -07:00",
        updatedAt: new Date(),
      },
      {
        email: "rizaldy@gmail.com",
        userId: 3,
        password:
          "$2a$12$HklYPJRw6qOKwwXcNe6Lp.BqUCEW7lYuI0pa.XCfn0uzX0bfUGZEy",
        createdAt: "2024-04-16T08:44:34 -07:00",
        updatedAt: new Date(),
      },
      {
        email: "asyifa@gmail.com",
        userId: 4,
        password:
          "$2a$12$w9fcdJ.jDdZDQxFBlenTxesQL5TZRNB/zwRESouQtD5IbHHTFs5Xm",
        createdAt: "2024-04-16T07:29:00 -07:00",
        updatedAt: new Date(),
      },
      {
        email: "qonita@gmail.com",
        userId: 5,
        password:
          "$2a$12$/BnUB3cdn0RjV7Q5wchC7uAVPKsUM4wmYrTKQehJmcAR7RMbwCCIq",
        createdAt: "2024-04-16T05:10:35 -07:00",
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Auths", null, {});
  },
};
