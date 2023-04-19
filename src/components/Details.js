import { useLocation } from 'react-router-dom';

import './styles/detailsStyle.css'

function Details() {
  const location = useLocation();
  const asset = location.state.asset;

  return (
    <div>
        <div className="details-title" key={asset.id}>
          <h2 className="symbol">
          {asset.symbol}
          </h2>
          <div className="asset-data"> 
            <p>
            {asset.name}
            </p>
          </div>  
        </div>
      <p className="subtitle">COIN INFO</p>
      <div className="details-container">
        <div className="details">
          <p><strong>Price</strong> {Number(asset.priceUsd).toFixed(2)}</p>
          <p><strong>Ranking</strong> {asset.rank}</p>
          <p><strong>24h Change</strong> {Number(asset.changePercent24Hr).toFixed(2)}%</p>
          <p><strong>Market Cap</strong> {Number(asset.marketCapUsd).toFixed(2)}</p>
          <p><strong>Actual Supply</strong> {Number(asset.supply).toFixed()}</p>
          <p><strong>Max Supply</strong> {Number(asset.maxSupply).toFixed()}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
