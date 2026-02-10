import { useEffect, useState } from "react"
import Tablecoin from "../modules/Tablecoin";
import { getCoinList } from "../../services/cryptoApi";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";

function HomePage() {
    const [coins, setCoins] = useState([]);
    const [isLoding, setIsLoding] = useState(true);
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState("usd");

     
  useEffect(() => {
    setIsLoding(true);
    const getData = async () =>{
        
      try{
        const res = await fetch(getCoinList(page, currency));
        const json = await res.json();
        setCoins(json);
    //   fetch( getCoinList ).then((res) => res.json()).then((json) => setCoins(json));
    setIsLoding(false)
      } catch (error) {
        console.log(error);
        
      }

      
    };
    getData();
  }, [page, currency]);   
  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency}/>
        <Tablecoin coins={coins} isLoding={isLoding} /> 
         <Pagination  page={page} setPage={setPage}/>

    </div>
  )
}

export default HomePage