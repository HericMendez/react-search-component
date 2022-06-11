import axios from "axios";


export const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins/",
});

//markets?vs_currency=brl&order=market_cap_desc&per_page=10&page=1&sparkline=false
const urlObj = {
  currency: "usd",
  perPage: "10",
  page: "1",
};

export const busca = async (setData, money, coinPerPage, pageNo) => {
  urlObj.currency = money ? money : urlObj.currency;
  urlObj.perPage = coinPerPage ? coinPerPage : urlObj.perPage;
  urlObj.page = pageNo ? pageNo : urlObj.page;

  const url = `markets?vs_currency=${urlObj.currency}
&order=market_cap_desc&per_page=${urlObj.perPage}
&page=${urlObj.page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C30d%2C200d%2C1y`;
  try {
    const resposta = await api.get(url);
    setData(resposta.data);


  } catch (error) {
    console.log(error);
  }
};

