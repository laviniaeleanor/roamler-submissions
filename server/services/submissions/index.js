const Sequelize = require('sequelize');
const db = require('../../sequelize')
const {Answer, Submission, Question} = db.models;

exports.getSubmissions = params => {
  const {order, page, searchTerm} = params;
  const offset = page > 0 ? (page - 1) * 10 : 0;

  let searchOptions = {
    order: [
      ['Date', order || 'desc']
    ], 
    include: [{
      model: Answer,
      include: [{
        model: Question
      }]
    }]
  };

  if (searchTerm) {
    searchOptions.where = {
      Address: {
        [Sequelize.Op.iLike]: '%' + searchTerm + '%'
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
