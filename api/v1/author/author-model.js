const Sequelize = require('sequelize');
const database = require('../../../config/db');
const Book = require('../book/book-model');

const Author = database.sequelize.define('Author', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    biography: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    birthDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'tb_author'
});

Author.hasMany(Book, { foreignKey: 'authorId' });

module.exports = Author;