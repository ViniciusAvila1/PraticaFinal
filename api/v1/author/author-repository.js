const authorModel = require('./author-model');
const bookModel = require('./book-model');

const save = async (author) => {
    return authorModel.create(author);
}

const findAll = async () => {
    return authorModel.findAll();
}

const findById = async (id) => {
    return authorModel.findOne({
        where: { id: id }
    });
}

const deleteById = async (id) => {
    const books = await bookModel.findAll({ where: { authorId: id } });
    if (books.length > 0) {
        throw new Error('Não é possível excluir autor relacionado a algum livro.');
    }
    return authorModel.destroy({
        where: { id: id }
    });
}

module.exports = {
    save,
    findAll,
    findById,
    deleteById
}
