const workers = require('./worker.model.js');
const catgories =require('./category.model');
module.exports = (sequelize, DataTypes) => {
    const jobCategory = sequelize.define("jobCategory", {

        workerPhoneNumber: {
            type: DataTypes.STRING(50),primaryKey: true,
            references: {
                model: 'workers', // This is the name of the Worker table in your database
                key: 'phoneNumber'
            }
        },
        jobName:{type : DataTypes.STRING(255),primaryKey: true,
        references: {
            model:'catgories',
            key:'name'

            }
        }

    });


    return Profile;
};
