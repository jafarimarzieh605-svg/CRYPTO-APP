const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-1gifHPRyzhTenTYN8hPMBJWp";


const getCoinList = (page ,currency) => 
     `${BASE_URL}/coins/markets?vs_currency=${currency}&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`;


const searchCoin = (query) => `${BASE_URL}/ search?query=${query}&x_cg_demo_api_key=${API_KEY}`;
export {getCoinList, searchCoin };
