const app = require('./server/app');
const sequelize = require('./storage');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

async function assertDatabaseConnectionOk() {
    console.log(`Checking database connection...`);
    try {
        await sequelize.authenticate();
        console.log('Database connection OK!');
        await sequelize.sync();
        console.log('Database synced!');
    } catch (error) {
        console.log('Unable to connect to the database:');
        console.log(error.message);
        process.exit(1);
    }
}

async function init() {
    await assertDatabaseConnectionOk();

    console.log(`Starting server on port ${PORT}...`);

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}. Try some routes, such as '/api/merchants'.`);
    });
}

init();