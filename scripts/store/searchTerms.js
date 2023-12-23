const searchTerms = {
  main: "",
  ingredients: [],
  appliances: [],
  ustensils: []
};

export const searchTermsProxy = new Proxy(searchTerms, {
  set: function (target, key, value) {

    target[key] = value
    console.log(searchTerms);

    return true;
  },
});

export default searchTermsProxy
