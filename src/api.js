const getAllQuestions = () => {
  return new Promise((resolve, reject) => {
    fetch('/api/question/')
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

const CCApi = { getAllQuestions };

export default CCApi;
