const { getBooks, create, findById, deleteById} = require('./book-controller');
const schema = require('./book-schema');

const plugin = {
    name: 'book-v1-route',
    version: '1',
    register: (server) => {
        server.route([
            {
                method: "GET",
                path: "/v1/books",
                options: {
                    tags: ['api'],
                    description: 'Lista de livros',
                    handler: getBooks,
                    validate: schema.getBooks
                }
            },
            {
                method: "GET",
                path: "/v1/books/{id}",
                options: {
                    tags: ['api'],
                    description: 'Encontrar livro pelo ID',
                    handler: findById,
                    validate: schema.getById
                }
            },
            {
                method: "POST",
                path: "/v1/books",
                options: {
                    tags: ['api'],
                    handler: create
                }
            },
            {
                method: "DELETE",
                path: "/v1/books/{id}",
                options: {
                    tags: ['api'],
                    handler: deleteById,
                    validate: schema.deleteById
                }
            },
        ])
    }
};

module.exports = plugin;