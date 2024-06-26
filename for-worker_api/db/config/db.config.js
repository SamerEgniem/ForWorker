

module.exports = {
    "development": {
        HOST: "localhost",
        USER: "root",
        PASSWORD: "admin",
        DB: "Forworker",
        dialect: "mysql",
},
    "test": {
        "user": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
},
    "production": {
        "user": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
},
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }

};




/*module.exports = {
    HOST: "localhost",
    USER: "root",
     PASSWORD: "password",
    DB: "Forworker",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};*/