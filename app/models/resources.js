const { DataTypes } = require("sequelize");
const { survivors } = require(".");

module.exports = (sequelize, Sequelize) => {
    const resources = sequelize.define("resources", {
       
    id: {

        type: DataTypes.INTEGER(10),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(45),
      },

    quantity:{
        type: DataTypes.INTEGER(10)
    
    },
    survivors_id:{
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'survivors',
        key: 'id'
      }
    }

  },
    {
      tableName: 'resources',
      timestamps: false,
    });

    resources.associate = function (models) {
      resources.belongsTo(models.survivors,{
          foriegnKey:"survivors_id",
          as: "owner"
      })
    }
  
    return resources;
  };