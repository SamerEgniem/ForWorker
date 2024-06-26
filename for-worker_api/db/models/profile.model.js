const workers = require('./worker.model.js');
const models =require('../models');
module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define("profile", {
        description: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        images: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        Rate: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        workerPhoneNumber: {
            type: DataTypes.STRING(50),
            primaryKey: true,
            unique: true, // Add the unique constraint
            references: {
                model: 'workers', // This is the name of the Worker table in your database
                key: 'phoneNumber'
            }
        }
    });



    return Profile;
};
