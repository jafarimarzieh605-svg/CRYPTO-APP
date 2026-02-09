const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-1gifHPRyzhTenTYN8hPMBJWp";


const getCoinList = () => {
    return `${BASE_URL}/coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h&per_page=20&page=1&x_cg_demo_api_key=${API_KEY}`;
};
export {getCoinList};
