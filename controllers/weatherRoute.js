const axios = require("axios");
module.exports = (city) => {
  const params = {
    access_key: "113582164e8a6873ca56cbba32c571eeY",
    query: `${city}`,
  };

  axios
    .get("https://api.weatherstack.com/current", { params })
    .then((response) => {
      const apiResponse = response.data;
      console.log(
        `Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`
      );
    })
    .catch((error) => {
      console.log(error);
    });
};
