export const getDate = date => {
  return new Date(date).toLocaleDateString('nl-NL');
};

export const getTime = date => {
  return new Date(date).toLocaleTimeString('nl-NL');
};

export const formatData = data => {
  if (!data) return [];
  return data.map(d => ({
    number: d.SubmissionId,
    date: getDate(d.Date),
    time: getTime(d.Date),
    address: d.Address,
    answers: d.answers
      .sort((a, b) => a.question.Index - b.question.Index)
      .map(answer => ({
        question: answer.question.Text,
        answer: answer.Text
      }))
  }))
};
