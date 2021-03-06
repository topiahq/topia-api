'use strict'
module.exports = (sequelize, DataTypes) => {
  const OrganisationUser = sequelize.define('organisation_user', {
    role: DataTypes.STRING,
    organisation_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {})
  OrganisationUser.associate = function (models) {
    // associations can be defined here
    OrganisationUser.belongsTo(models.organisation, {
      foreignKey: 'organisation_id'
    })
    OrganisationUser.belongsTo(models.user, {
      foreignKey: 'user_id'
    })
  }
  return OrganisationUser
}
