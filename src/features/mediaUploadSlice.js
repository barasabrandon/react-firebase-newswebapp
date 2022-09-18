import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mediaItems: [],
  selectedMediaType: '',
  mediaTypes: [
    { id: 1, icon: 'A', name: 'Wananchi Reporting Audio', selected: true },
    { id: 2, icon: 'V', name: 'Wananchi Reporting Video', selected: false },
    { id: 3, icon: 'EV', name: 'Exclusive Videos', selected: false },
  ],
};

export const mediaUploadSlice = createSlice({
  name: 'mediaUpload',
  initialState,
  reducers: {
    requestMediaData: (state, action) => {
      const filteredMediaTypes = state.mediaTypes.find(
        (item) => item.id === action.payload
      );
      const existingSelected = state.mediaTypes.find(
        (item) => item.selected === true
      );
      existingSelected.selected = false;
      filteredMediaTypes.selected = !filteredMediaTypes.selected;
      state.selectedMediaType = filteredMediaTypes.name;
    },
    getMediaItems: (state, action) => {
      state.mediaItems = action.payload;
    },
    setSelectedMediaType: (state, action) => {
      state.selectedMediaType = 'Wananchi Reporting Video';
    },
  },
});

export const { getMediaItems, setSelectedMediaType, requestMediaData } =
  mediaUploadSlice.actions;

export default mediaUploadSlice.reducer;
