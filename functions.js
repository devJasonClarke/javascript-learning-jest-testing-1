const axios = require("axios");

const functions = {
  add: (num1, num2) => {
    return num1 + num2;
  },
  isnull: () => null,
  isNotDefined: () => undefined,
  checkValue: (x) => x,
  createUser: () => {
    let user = { firstName: "Jason" };
    user.lastName = "Clarke";
    return user;
  },
  isObject: () => {
    return {};
  },
  fetchUser: () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
};

module.exports = functions;
