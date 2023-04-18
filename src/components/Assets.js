import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAssets } from './redux/assetsSlice';
import { useNavigate } from 'react-router-dom';
import Filter from './Filter';

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
      <Filter filterText={filterText} onChange={handleFilterChange} />
      {filteredAssets.map((asset) => (
        <div key={asset.id} onClick={() => handleClick(asset)}>
          <h2>
            {asset.name}
            {' '}
          </h2>
          <p>
            USD
            {' '}  
            {Number(asset.priceUsd).toFixed(2)}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Assets;
