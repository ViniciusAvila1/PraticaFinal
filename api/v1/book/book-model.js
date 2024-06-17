const Sequelize = require('sequelize');
const database = require('../../../config/db');
const Author = require('../author/author-model');

const Book = database.sequelize.define('Book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
        field: 'codigo' //nome do atributo do banco
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    publishedDate: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    isbn: {
        type: Sequelize.STRING,
        allowNull: true
    },
    summary: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    authorId: {
        type: Sequelize.INTEGER,
        references: {
            model: Author,
            key: 'id'
        }
    }
}, {
    timestamps: false,
    tableName: 'tb_book'
});

Book.belongsTo(Author, {foreignKey: 'authorId'});

module.exports = Book;