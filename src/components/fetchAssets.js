import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchAssets = createAsyncThunk(
  'assets/fetchAssets',
  async () => {
    const response = await fetch('https://api.coincap.io/v2/assets');
    const data = await response.json();
    return data.data;
  }
);

export default fetchAssets;