function applyRelation(sequelize) {
    const { merchant, product, auth } = sequelize.models;

    merchant.hasMany(product, { foreignKey: 'merchant_id' });
    product.belongsTo(merchant);

    auth.belongsTo(merchant, { foreignKey: 'merchant_id' });
}

module.exports = { applyRelation };