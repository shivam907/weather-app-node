const axios = require("axios");
module.exports = (city) => {
  axios
    .get(
      `http://api.weatherstack.com/current?access_key=113582164e8a6873ca56cbba32c571ee&query=${city}`
    )
    .then((response) => {
      const apiResponse = response.data;
      console.log(
        `Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`
      );
      // console.log(apiResponse);
      return apiResponse;
    })
    .catch((error) => {
      console.log(error);
    });
};
