'use strict';

module.exports = (sequelize, DataTypes) => {
 
  const Usuario = sequelize.define('usuarios', {
    //titulo: DataTypes.STRING,
    //likes: DataTypes.INTEGER,
  }, { tableName: 'usuarios'});
  
  return Usuario;

  
};