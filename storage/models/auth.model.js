const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('auth',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            refresh_token: {
                type: DataTypes.STRING,
                allowNull: false
            },
            // We also want it to have a 'merchantId' field, but we don't have to define it here.
            // It will be defined automatically when Sequelize applies the associations
        },
        {
            underscored: true
        });
};