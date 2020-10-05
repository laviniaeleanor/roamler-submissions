const Sequelize = require('sequelize');
const db = require('../../sequelize')
const {Answer, Submission, Question} = db.models;

exports.getSubmissions = params => {
  const {order, page, searchTerm, fromDate, toDate} = params;
  const offset = page > 0 ? (page - 1) * 10 : 0;
  const whereConditions = [];


  if (searchTerm) {
    whereConditions.push({
      Address: {
        [Sequelize.Op.iLike]: '%' + searchTerm + '%'
      }
    })
  }

  if (fromDate) {
    whereConditions.push({
      Date : {
        [Sequelize.Op.gte]: new Date(fromDate)
      }
    })
  }

  if (toDate) {
    whereConditions.push({
      Date : {
        [Sequelize.Op.lte]: new Date(toDate)
      }
    })
  }

  let searchOptions = {
    order: [
      ['Date', order || 'desc']
    ], 
    where: {
      [Sequelize.Op.and]: whereConditions
    }
  };

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
    ...searchOptions
  })
};
