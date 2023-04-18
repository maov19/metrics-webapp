import { useLocation, useNavigate } from 'react-router-dom';

function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const asset = location.state.asset;

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={handleReturn}>Return</button>
      <h2>Ranking: {asset.rank}</h2>
      <h2>Symbol: {asset.symbol}</h2>
      <h2>Market Cap: ${Number(asset.marketCapUsd).toFixed(2)}</h2>
    </div>
  );
}

export default Details;
