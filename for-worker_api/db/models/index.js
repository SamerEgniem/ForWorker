

const dbConfig = require("../config/db.config.js")['development'];

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,

    /*pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }*/
});

const db = {};


db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
//db.category = require("./category.model.js")(sequelize, Sequelize);
//db.job = require("./job.model.js")(sequelize, Sequelize);
db.worker = require("./worker.model.js")(sequelize, Sequelize);
db.profile = require("./profile.model.js")(sequelize, Sequelize);
//db.job_category = require("./job_category.model.js")(sequelize,Sequelize);



// Define the one-to-one relationship between worker and profile
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

//--------

//--------

module.exports = db;