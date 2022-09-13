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
  isEditing: false,
  isLoading: false,
  currentNewsItem: [],
  currentNewsItemId: '',
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
    setCurrentNewsItem: (state, action) => {
      state.isEditing = !state.isEditing;
      state.currentNewsItemId = action.payload.documentId;
      state.currentNewsItem = action.payload.documentData;
    },
    setSelectedNewsItem: (state, action) => {
      state.selectedItem = 'National';
    },
    setIsLoading: (state, action) => {
      state.isLoading = true;
    },
    setIsNotLoading: (state, action) => {
      state.isLoading = false;
    },
    getAllNewsItem: (state, action) => {
      console.log(action.payload);
      // state.newsItems = state.newsItems.push(action.payload);
    },
  },
});

export const {
  requestData,
  setCurrentNewsItem,
  setSelectedNewsItem,
  setIsLoading,
  setIsNotLoading,
} = newsSlice.actions;

export default newsSlice.reducer;
