module.exports = function(sequelize, DataTypes) {
    var Contacts = sequelize.define("Contacts", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING, 
        validation:{
          len:[0,400],
        }
      }     
    });
    return Contacts;
};
  