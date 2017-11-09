// USD CAD 23
// 23 USD is worth 28 CAD.You can spend these in the following countries:

const axios = require('axios');

const getExchangeRate = (from, to) => {
  return axios.get(`http://api.fixer.io/latest?base=${from}`).then((response) => {
    return response.data.rates[to];
  });
}

const getCountries = (currencyCode) => {
  return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`).then((response) => {
    return response.data.map((country) => country.name);
  });
};

const convertCurrency = (from,to,amount) => {
  let countries;
  return getCountries(to).then((tempCountries) => {
    countries = tempCountries;
    return getExchangeRate(from,to);
  }).then((rate) => {
    const exchangedAmount = amount * rate;

    return `${amount} ${from} is worth ${exchangedAmount} in ${to}.${to} can be used in following countries: ${countries.join(', ')}`;
  });
};

const convertCurrencyAlt = async (from,to,amount) => {
  const rate = await getExchangeRate(from,to);
  const countries = await getCountries(to);
  const totalAmount = rate * amount;

  return `${amount} ${from} is worth ${totalAmount} in ${to}.${to} can be used in following countries: ${countries.join(', ')}`;
};

convertCurrencyAlt('USD', 'INR', 100).then((status) => {
  console.log(status);
});

// convertCurrency('USD','INR',100).then((status) => {
//   console.log(status);
// })

getExchangeRate('USD','CAD').then((rate) => {
  console.log(rate);
});
