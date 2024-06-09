// models/Vote.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vote extends Model {}

Vote.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        voterId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        candidateId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'candidate',
                key: 'id',
            },
        },
        //we should only use it for one election may get to complicated if we do more than one.
        // electionId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'election',
        //         key: 'id',
        //     },
        // },
    },
    {
        sequelize,
        timestamps: true, // Track vote time
        underscored: true,
        modelName: 'vote',
       
    }
);

module.exports = Vote;
