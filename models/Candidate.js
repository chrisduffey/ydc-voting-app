// models/Candidate.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Candidate extends Model {
    addVote(){
        return this.count++;
    }
}

Candidate.init(
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
        party: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        bio: {
            type: DataTypes.STRING,
            allowNull: true
          },
        link: {
            type: DataTypes.STRING,
            allowNull: true
          },
        count: {
            type: DataTypes.INTEGER,
            allowNull: true
          }
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'candidate',
    }
);

module.exports = Candidate;