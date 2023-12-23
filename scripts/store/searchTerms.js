const searchTerms = {
  main: "",
  ingredients: [],
  appliance: [],
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
