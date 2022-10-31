const db = require ('../utils/database')
const Users =require('./users.models')
const { DataTypes } = require('sequelize')


const Conversations = db.define('conversations',{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false
      },

      imageURL: {
        type: DataTypes.STRING,
        allowNull: true
      },

      userId:{
        type:DataTypes.UUID,
        allowNull:false,
        references: {
            key: 'id',
            model: Users
        }
      }
  
})

module.exports=Conversations