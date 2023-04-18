// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAssets } from './redux/assetsSlice';

// function Assets() {
//   const dispatch = useDispatch();
//   const assets = useSelector((state) => state.assets.data);

//   useEffect(() => {
//     dispatch(fetchAssets());
//   }, [dispatch]);

//   if (assets === null) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {assets.map((asset) => (
//         <div key={asset.id}>
//           <h2>
//             {asset.name}
//             {' '}
//             (
//             {asset.symbol}
//             )
//           </h2>
//           <p>
//             Price: $
//             {Number(asset.priceUsd).toFixed(2)}
//           </p>
//           <p>
//             Market Cap: $
//             {Number(asset.marketCapUsd).toFixed(2)}
//           </p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Assets;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAssets } from './redux/assetsSlice';
import { useNavigate } from 'react-router-dom';

function Assets() {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.assets.data);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAssets());
  }, [dispatch]);

  const handleClick = (asset) => {
    navigate('/details', { state: { asset } });
  };

  if (assets === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {assets.map((asset) => (
        <div key={asset.id} onClick={() => handleClick(asset)}>
          <h2>
            {asset.name}
            {' '}
            (
            {asset.symbol}
            )
          </h2>
          <p>
            Price: $
            {Number(asset.priceUsd).toFixed(2)}
          </p>
          <p>
            Market Cap: $
            {Number(asset.marketCapUsd).toFixed(2)}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Assets;
