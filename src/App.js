import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import PunkList from './components/PunkList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { stockData } from "./data";


function App() {

  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  // API call via useEffect Async Await
  useEffect(() => {
  const getMyNfts = async () => {
    const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xb6F41E1cb14df0F8e84e86090eAF6802354E8d02&order_direction=asc'
    )
     console.log(openseaData.data.assets)

    setPunkListData(stockData);

  }
  return getMyNfts()
  }, []);


  return (
    <div className='app'>
      <Header/>
      {
        punkListData.length > 0 &&(
          <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
          <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
          </>
        )
      }
    
    </div>
  );
}

export default App;
