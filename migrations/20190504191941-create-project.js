'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    const Project = queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      organisation_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'organisations', // table name
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })

    return Project
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('projects')
  }
}
