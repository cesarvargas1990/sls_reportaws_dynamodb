/* eslint @typescript-eslint/no-var-requires: "off" */

const Joi = require('joi');

const reportModel = Joi.object().keys({ 
    name: Joi.string().min(3).max(30).required(),
    alias: Joi.string().min(3).max(30).required(),
    species: Joi.string().min(3).max(30).required(),
    company: Joi.object().required().keys({
        name: Joi.string().min(3).max(30).required(),
        team: Joi.string().min(3).max(30).required()
    })
}); 

module.exports = {
    reportModel,
};