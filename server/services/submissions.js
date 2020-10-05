const Sequelize = require('sequelize');
const db = require('../sequelize')
const {Answer, Submission, Question} = db.models;

const parseFilters = ({searchTerm, fromDate, toDate}) => {
  const filters = [];

  if (searchTerm) {
    filters.push({
      Address: {
        [Sequelize.Op.iLike]: '%' + searchTerm + '%'
      }
    })
  }

  if (fromDate) {
    filters.push({
      Date : {
        [Sequelize.Op.gte]: new Date(fromDate)
      }
    })
  }

  if (toDate) {
    filters.push({
      Date : {
        [Sequelize.Op.lte]: new Date(toDate)
      }
    })
  }

  return filters;
}

exports.getSubmissions = params => {
  const {order, page, searchTerm, fromDate, toDate} = params;
  const offset = page > 0 ? (page - 1) * 10 : 0;

  return Submission.findAndCountAll({
    limit: 10,
    offset,
    distinct: true,
    include: [{
      model: Answer,
      include: [{
        model: Question
      }]
    }],
    order: [
      ['Date', order || 'desc']
    ], 
    where: {
      [Sequelize.Op.and]: parseFilters({searchTerm, fromDate, toDate})
    }
  })
};
