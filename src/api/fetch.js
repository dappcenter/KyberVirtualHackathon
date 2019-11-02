/* eslint-disable camelcase */
export const fetchTokensSetsAPI = async () => {
  const res = await fetch('https://sleepy-shelf-37331.herokuapp.com/tokensets');
  const { rebalancing_sets } = await res.json();
  return rebalancing_sets;
};

export const fetchEtherPriceAPI = async () => {
  const res = await fetch(
    'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=9PFG6U3B5UWDIEMYKP6B91EHZ7KB1A9YPD'
  );
  const {
    result: { ethusd }
  } = await res.json();
  return ethusd;
};
