const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true,
      allowNull:false,

    
    
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    hp:{
      type: DataTypes.INTEGER,

    },

    attack:{
      type: DataTypes.INTEGER,

    },

    defense:{
      type: DataTypes.INTEGER,

    },
    
    speed:{
      type: DataTypes.INTEGER,

    },
    //altura
    height:{
      type: DataTypes.INTEGER,

    },
    //peso
    weight:{
      type: DataTypes.INTEGER,

    },
    img:{
      type:DataTypes.TEXT,
      allowNull:true
    },
    createdInDb:{
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true,


    }






  });
};

