import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mediaType: [
    { id: 2, name: 'Text', category: 'Wananch Reporting', selected: true },
    {
      id: 3,
      name: 'Video',
      category: 'Wananchi Reporting Video',
      selected: false,
    },
    {
      id: 4,
      name: 'Audio',
      category: 'Wananchi Reporting Audio',
      selected: false,
    },
  ],
  selectedItem: '',
};

export const wananchiReportingSlice = createSlice({
  name: 'wananchiReporting',
  initialState,
  reducers: {
    changeMediaType: (state, action) => {
      const existingSelected = state.mediaType.find(
        (item) => item.selected === true
      );
      const mediaType = state.mediaType.find(
        (item) => item.id === action.payload
      );

      existingSelected.selected = false;
      mediaType.selected = !mediaType.selected;
    },
  },
});

export const { changeMediaType } = wananchiReportingSlice.actions;
export default wananchiReportingSlice.reducer;
