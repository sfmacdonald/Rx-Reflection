const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Patient extends Model {}

Patient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: false,  
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,  
    },
    height: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,  
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,  
    },
    apt_unit_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,  
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,  
    },
    zip_code: {
      type: DataTypes.STRING,
      allowNull: false,  
    },
    phone_1: {
      type: DataTypes.STRING,
      allowNull: false,   
    },
    phone_2: {
      type: DataTypes.STRING,
      allowNull: true,  
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'patient',
  }
);

model.exports = Patient;



