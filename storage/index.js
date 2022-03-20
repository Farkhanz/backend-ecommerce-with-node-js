const { Sequelize } = require('sequelize');
const { applyRelation } = require('./relation');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

const modelDefiners = [
    require('./models/merchant.model'),
    require('./models/product.model'),
    require('./models/auth.model'),
];

for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

applyRelation(sequelize);

module.exports = sequelize;