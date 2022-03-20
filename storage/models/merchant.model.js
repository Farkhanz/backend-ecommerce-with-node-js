const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('merchant',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false
            },
            join_date: {
                type: DataTypes.DATE,
                allowNull: false
            },
            phone_number: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            underscored: true
        });
};
