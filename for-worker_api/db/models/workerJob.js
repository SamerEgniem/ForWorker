
module.exports = (sequelize, DataTypes) => {
    const workerJob = sequelize.define("workerJob", {
        workerPhoneNumber: {
            type: DataTypes.STRING(255),primaryKey: true,
            allowNull: false
        },
        jobName: {
            type: DataTypes.STRING(255),primaryKey:true,
            allowNull: false
        }

    });
    workerJob.associate = function(workerJob) {
        workerJob.belongsTo(workerJob, { foreignKey: 'workerPhoneNumber' });
    }
    return workerJob;
};