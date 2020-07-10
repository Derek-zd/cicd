'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('credentials', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      app_key: STRING(),
      app_secret: STRING(500),
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('credentials');
  },
};
