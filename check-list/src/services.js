const axios = require("axios");

const fetchApplicationData = async (id) => {
  try {
    const response = await axios.get(`http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching application data: " + error.message);
  }
};

module.exports = { fetchApplicationData };
