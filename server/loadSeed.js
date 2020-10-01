const question = require('./seed/Question.json');
const submission = require('./seed/Submission.json');
const answer = require('./seed/SubmissionAnswer.json');

const data = {question, submission, answer};

const bulkCreate = async model => {
  console.log(`Loading seed ${model.name}s...`);

  try {
    console.log(data[model.name])
    await model.bulkCreate(data[model.name])
    console.log(`Successfully loaded seed ${model.name}s!`);
  }
  catch (err) {
    console.log(`Failed to load ${model.name}s`);
    console.error(err);
  }

}

const loadSeed = async models => {
  console.log('Loading seed...');
  console.log(models)
  try {
    for await (const modelName of Object.keys(models)) {
      const model = models[modelName];
      await bulkCreate(model);
    }
    console.log('All done loading seed!!');
  }
  catch(err) {
    console.log('Error loading seed data');
    console.error(err)
  }
}

module.exports = loadSeed;