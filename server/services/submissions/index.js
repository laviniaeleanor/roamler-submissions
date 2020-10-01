const Sequelize = require('sequelize');
const db = require('../../sequelize')
const {Answer, Submission, Question} = db.models;

exports.getSubmissions = options => {
  const {query, page = 1} = options;
  const offset = page > 0 ? (page - 1) * 10 : 0;

  let searchOptions = {
    order: [
      ['Date', 'desc']
    ], 
    include: [{
      model: Answer,
      include: [{
        model: Question
      }]
    }]
  };

  if (query) {
    if (query.q) {
      searchOptions.where = {
        Address: {
          [Sequelize.Op.iLike]: '%' + query.q + '%'
        }
      }
    }
  }

  return Submission.findAndCountAll({
    limit: 10,
    offset,
    distinct: true,
    ...searchOptions
  })
};
