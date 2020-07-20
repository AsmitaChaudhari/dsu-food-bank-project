/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 * Generalized schema to validate requests related to Product APIs
 */
const { Joi } = require('express-validation');

module.exports = {
  // GET: /api/products/:productId
  getProductById: {
    params: Joi.object({
      productId: Joi.number().required(),
    }),
  },
};
