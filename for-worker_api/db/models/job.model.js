module.exports = (sequelize, DataType) => {
    const Job = sequelize.define("job", {
        name: {
            type: DataType.STRING(255),primaryKey : true,
            allowNull: false
        }
    });
    return Job;
};
