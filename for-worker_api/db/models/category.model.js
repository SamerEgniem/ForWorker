module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
        name: {
            type: Sequelize.STRING(255),
            primaryKey: true,
            allowNull: false
        }
    });
    return Category;
};

