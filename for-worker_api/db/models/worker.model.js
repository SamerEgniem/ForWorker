const workerJob = require('./workerJob');
const Profile = require('./profile.model');

const models = require('../models');
module.exports = (sequelize, DataTypes) => {
    const Worker = sequelize.define("worker", {
        firstName: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING(50),
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profilePicture: {
            type: DataTypes.STRING
        },
    });

    Worker.associate = function(models) {
        Worker.hasOne(models.profile, { foreignKey: 'workerPhoneNumber' });
    };

    Profile.associate = function(models) {
        Profile.belongsTo(models.worker, { foreignKey: 'workerPhoneNumber' });
    };


    return Worker;
};
