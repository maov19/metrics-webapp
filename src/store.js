import { configureStore } from '@reduxjs/toolkit';
import assetsReducer from './assetsSlice';

export default configureStore({
  reducer: {
    assets: assetsReducer,
  },
});