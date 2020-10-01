const Sequelize = require('sequelize');
const db = require('../../sequelize')
const {Answer, Submission, Question} = db.models;

exports.getSubmissions = query => {
  let searchOptions = {
    order: [[Submission, 'Date', 'desc']],include: [{
      model: Question
    },{
      model: Submission
    }]
  };

  if (query) {
    if (query.q) {
      searchOptions.include[1].where = {
        Address: {
          [Sequelize.Op.iLike]: '%' + query.q + '%'
        }
      }
    }
  }

  return Answer.findAll({
    limit: 10,
    ...searchOptions
  })
};
