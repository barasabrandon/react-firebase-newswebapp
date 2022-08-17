import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mediaType: [
    { id: 2, name: 'Text', selected: false },
    { id: 3, name: 'Video', selected: false },
    { id: 4, name: 'Audio', selected: true },
  ],
  selectedItem: '',
};

export const wananchiReportingSlice = createSlice({
  name: 'wananchiReporting',
  initialState,
  reducers: {
    changeMediaType: (state, action) => {
      const mediaType = state.mediaType.find(
        (item) => item.id === action.payload
      );
      mediaType.selected = !mediaType.selected;
    },
  },
});

export const { changeMediaType } = wananchiReportingSlice.actions;
export default wananchiReportingSlice.reducer;
