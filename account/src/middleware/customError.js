const createCustomError = (status, message) => {
  console.log('entrei no custom error');
  const error = new Error(message);
  error.status = status;
  console.log('vou retornar');
  return error;
};

export default createCustomError;
