import { useEffect, useState } from "react"
import Tablecoin from "../modules/Tablecoin";
import { getCoinList } from "../../services/cryptoApi";

function HomePage() {
    const [coins, setCoins] = useState([]);
    const [isLoding, setIsLoding] = useState(true);
     
  useEffect(() => {

    const getData = async () =>{
        const res = await fetch(getCoinList());
        const json = await res.json();
        setCoins(json);
    //   fetch( getCoinList ).then((res) => res.json()).then((json) => setCoins(json));
    setIsLoding(false)
    };
    getData();
  }, []);   
  return (
    <div>
        <Tablecoin coins={coins} isLoding={isLoding} />
    </div>
  )
}

export default HomePage