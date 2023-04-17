import { configureStore } from '@reduxjs/toolkit';
import assetsReducer from './components/redux/assetsSlice';

export default configureStore({
  reducer: {
    assets: assetsReducer,
  },
});
