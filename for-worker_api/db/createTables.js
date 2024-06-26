const db = require('./models'); // Adjust the path as necessary

(async () => {
    try {
        await db.sequelize.sync({ force: true }); // Use force: true for testing; remove it for production
        console.log('Database & tables created!');
    } catch (error) {
        console.error('Unable to create tables, exiting...', error);
    } finally {
        await db.sequelize.close();
    }
})();
