const Sequelize = require('sequelize');
const database = require('../../../config/db');

const Author = database.sequelize.define('Author', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
        field: 'id'
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'name'
    },
    biography: {
        type: Sequelize.TEXT,
        allowNull: false,
        field: 'biography'
    },
    birthDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        field: 'birth_date'
    }
}, {
    timestamps: false,
    tableName: 'tb_author'
});

module.exports = Author;