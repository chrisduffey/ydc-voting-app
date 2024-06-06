// models/Election.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Election extends Model {}

Election.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: 'election',
    }
);

module.exports = Election;
