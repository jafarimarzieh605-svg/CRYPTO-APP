import { useEffect, useState } from "react"
import Tablecoin from "../modules/Tablecoin";
import { getCoinList } from "../../services/cryptoApi";
import Pagination from "../modules/Pagination";

function HomePage() {
    const [coins, setCoins] = useState([]);
    const [isLoding, setIsLoding] = useState(true);
    const [page, setPage] = useState(1);

     
  useEffect(() => {
    setIsLoding(true)

    const getData = async () =>{
        const res = await fetch(getCoinList(page));
        const json = await res.json();
        setCoins(json);
    //   fetch( getCoinList ).then((res) => res.json()).then((json) => setCoins(json));
    setIsLoding(false)
    };
    getData();
  }, [page]);   
  return (
    <div>
        <Tablecoin coins={coins} isLoding={isLoding} /> 
         <Pagination  page={page} setPage={setPage}/>

    </div>
  )
}

export default HomePage