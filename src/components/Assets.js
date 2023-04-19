import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAssets } from './redux/assetsSlice';
import { useNavigate } from 'react-router-dom';
import Filter from './Filter';

import './styles/assetsStyles.css'

function Assets() {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.assets.data);
  const navigate = useNavigate();

  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    dispatch(fetchAssets());
  }, [dispatch]);

  const handleClick = (asset) => {
    navigate('/details', { state: { asset } });
  };

  const handleFilterChange = (text) => {
    setFilterText(text);
  };

  if (assets === null) {
    return <div>Loading...</div>;
  }

  const filteredAssets = assets.filter((asset) =>
  asset.name.toLowerCase().includes(filterText.toLowerCase())
);

return (
  <div>
    <div className="header">
      <h1 className="title">Crypto Stats</h1>
      <p className="subtitle">
        MOST RECENT PRICES
      <Filter filterText={filterText} onChange={handleFilterChange} />
        </p>
    </div>
    <div className="container">
      {filteredAssets.map((asset) => (
        <div className="asset" key={asset.id} onClick={() => handleClick(asset)}>
          <h2 className="symbol">
            {asset.symbol}
          </h2>
          <div className="asset-data"> 
            <p>
              {asset.name}
            </p>
            <p>
              USD
              {' '}  
              {Number(asset.priceUsd).toFixed(2)}
            </p>
        </div>  
        </div>
      ))}
    </div>
  </div>
);
}

export default Assets;
