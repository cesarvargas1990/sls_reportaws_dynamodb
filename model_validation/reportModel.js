const Joi = require('joi');

const reportModel = Joi.object().keys({ 
    name: Joi.string().min(3).max(25).required(),
    alias: Joi.string().min(3).max(25).required(),
    species: Joi.string().min(3).max(25).required(),
    company: Joi.object().required().keys({
        name: Joi.string().min(3).max(25).required(),
        team: Joi.string().min(3).max(25).required()
    })
}); 

module.exports = {
    reportModel,
};