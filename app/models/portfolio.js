module.exports = function(sequelize, DataTypes) {
    var Portfolio = sequelize.define("Portfolio", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      github_link: {
        type: DataTypes.STRING,
        defaultValue: false
      },
      deployed_link: {
        type: DataTypes.STRING, 
      }     
    });
    return Portfolio;
};
  