const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres');

db.options.logging = false;

const Question = db.define('question', {
  QuestionId: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true
  },
  Index: {
    type: Sequelize.INTEGER
  },
  Text: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

const Submission = db.define('submission', {
  SubmissionId: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true
  },
  Date: {
    type: Sequelize.DATE
  },
  Latitude: {
    type: Sequelize.FLOAT
  },
  Longitude: {
    type: Sequelize.FLOAT
  },
  Address: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

const Answer = db.define('answer', {
  SubissionAnswerId: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true
  },
  SubmissionId: {
    type: Sequelize.INTEGER,
    references: {
      model: Submission,
      key: 'SubmissionId'
    }
  },
  QuestionId: {
    type: Sequelize.INTEGER,
    references: {
      model: Question,
      key: 'QuestionId'
    }
  },
  Text: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

Question.hasMany(Answer, {
  foreignKey: 'QuestionId'
});
Submission.hasMany(Answer, {
  foreignKey: 'SubmissionId'
});
Answer.belongsTo(Question, {
  foreignKey: 'QuestionId'
});
Answer.belongsTo(Submission, {
  foreignKey: 'SubmissionId'
});

db.models = {Question, Submission, Answer};

module.exports = db;