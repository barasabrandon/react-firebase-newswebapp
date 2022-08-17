import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newsItems: [],
  categories: [
    { id: 2, icon: 'N', name: 'National', selected: false },
    { id: 3, icon: 'W', name: 'Counties', selected: false },
    { id: 4, icon: 'P', name: 'Politics', selected: false },
  ],
  selectedItem: '',
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    requestData: (state, action) => {
      const filteredCategory = state.categories.find(
        (item) => item.id === action.payload
      );
      filteredCategory.selected = !filteredCategory.selected;
      state.selectedItem = filteredCategory.name;
    },
  },
});

export const { requestData } = newsSlice.actions;

export default newsSlice.reducer;
