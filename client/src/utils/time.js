export const getDate = date => {
  return new Date(date).toISOString().split('T')[0];
};

export const getTime = date => {
  return new Date(date).toLocaleTimeString('nl-NL');
};
