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
  isObject: ()=> {return {}}
};

module.exports = functions;
