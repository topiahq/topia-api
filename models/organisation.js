'use strict';
module.exports = (sequelize, DataTypes) => {
  const Organisation = sequelize.define('Organisation', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    logo: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Organisation.associate = function(models) {
    // associations can be defined here
    Organisation.hasMany(models.Project)
  };
  sequelize.sync({ force: true })
    .then(() => {
      console.log(`Database & tables created!`)
    })

  return Organisation;
};
//,
//     organisation_id: DataTypes.INTEGER