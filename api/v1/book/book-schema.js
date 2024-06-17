const Joi = require("joi");

const createBook = {
    payload: Joi.object({
        title: Joi.string() .required(),
        publishedDate: Joi.date(),
        isbn: Joi.string(),
        summary: Joi.string(),
        authorId: Joi.number().integer().required()
    })
};

const getById = {
    params: Joi.object({
        id: Joi.number().integer().required()
    })
}

const deleteById = {
    params: Joi.object({
        id: Joi.number().integer().required()
    })
}

const getBooks = {
    query: Joi.object({
    })
}

module.exports = {
    createBook,
    getById,
    deleteById,
    getBooks
};