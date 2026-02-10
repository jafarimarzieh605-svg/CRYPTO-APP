import { useEffect } from "react";
import { useState } from "react"
import { searchCoin } from "../../services/cryptoApi";

function Search({currency, setCurrency}) {
    const [text, setText] = useState("");
    const [coins, setCoins] = useState([]);

    useEffect(() => {
const controllre = new AbortController();

        if (!text) return;
        const search = async () => {
            try {
            const res = await fetch (searchCoin(text), {signal: controllre.signal});
            const json = await res.json();
            console.log(json);
            
            if (json.coins) { setCoins(json.coins)} else {
                alert(json.status.error_message);
            }
            } catch (error) {
                if (error.name !== "AbortError") {
                    alert(error.message); 
                }
            }
           
      
        };
        
        search();
        return () => controllre.abort();
        
    },[text])
  return (
    <div>
        <input type="text" placeholder="Search" value={text} onChange={ (e) => setText( e.target.value )}/>
        <select value={currency} onChange={ e => setCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
        </select>
    </div>
  )
}

export default Search