import axios from 'axios';

const GetQuestions = async () => {
  try {
    const response = await axios.get(
      'https://opentdb.com/api.php?amount=15&difficulty=hard&type=boolean'
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export default GetQuestions;
