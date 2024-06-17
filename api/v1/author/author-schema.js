const Joi = require("joi");

const createAuthor = {
  payload: Joi.object({
    name: Joi.string().required(),
    biography: Joi.string().required(),
    birthDate: Joi.date().required(),
  }),
};

const getAuthors = {
    query: Joi.object({})
};

const getById = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
};

const deleteById = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
};

module.exports = {
  createAuthor,
  getById,
  deleteById,
  getAuthors
};