import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAssets = createAsyncThunk('assets/fetchAssets', async () => {
  const response = await fetch('https://api.coincap.io/v2/assets');
  const data = await response.json();
  return data.data;
});

const assetsSlice = createSlice({
  name: 'assets',
  initialState: {
    data: null,
    error: null,
    status: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAssets.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchAssets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchAssets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default assetsSlice.reducer;
