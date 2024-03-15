import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
import { schoolInfo } from '../constant/Person';


export interface SchoolState {
  school?: schoolInfo,
}

const initialState: SchoolState = {
  school: {
    name: '',
    degree: ''
  }
};

export const schoolSlice = createSlice({
  name: 'school',
  initialState,
  reducers: {
  }

});


export const selectSchool = (state: RootState) => state.school.school;

export default schoolSlice.reducer;