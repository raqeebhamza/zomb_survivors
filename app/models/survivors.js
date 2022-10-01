const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const survivors = sequelize.define("survivors", {
       
        id: {

            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
            
        },
        name: {
            type: DataTypes.STRING(45),
        },

        age:{
            type: DataTypes.INTEGER(10)
        
        },

        latitude:{
            type: DataTypes.DECIMAL(10,8)
        },
        longitude:{
            type:DataTypes.DECIMAL(10,8)
        },
        infected:{
            type:DataTypes.INTEGER(1),
        }
    },
        {
            tableName: 'survivors',
            timestamps: false,
          })
  
          survivors.associate = function (models) {
            survivors.hasMany(models.resources,{
                foriegnKey:"survivors_id",
                as: "my_resources"
            })
          }
    return survivors;
  };