const Sequelize = require('sequelize');
const db = require('../../sequelize')
const {Answer, Submission, Question} = db.models;

exports.getSubmissions = query => {
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

  return Submission.findAll({
    limit: 10,
    ...searchOptions
  })
};
