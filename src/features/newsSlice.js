import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newsItems: [],
  categories: [
    { id: 1, icon: 'N', name: 'National', selected: true },
    { id: 2, icon: 'W', name: 'Counties', selected: false },
    { id: 3, icon: 'P', name: 'Politics', selected: false },
    { id: 4, icon: 'S', name: 'Sports', selected: false },
    { id: 5, icon: 'I', name: 'Intertainment', selected: false },
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
      const existingSelected = state.categories.find(
        (item) => item.selected === true
      );
      existingSelected.selected = false;
      filteredCategory.selected = !filteredCategory.selected;
      state.selectedItem = filteredCategory.name;
    },
  },
});

export const { requestData } = newsSlice.actions;

export default newsSlice.reducer;
