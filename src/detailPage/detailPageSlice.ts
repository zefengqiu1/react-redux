import { createSlice } from '@reduxjs/toolkit';
import { IPersonUpdate, PersonUpdate } from '../constant/Person';

export interface DeatilPageState {
  person: PersonUpdate,
  isViewing: boolean,
  isEditing: boolean
}
const emptyPerson: IPersonUpdate = {
  basicInfo: {
    firstName: '',
    lastName: ''
  },
  schoolInfo: {
    name: '',
    degree: ''
  }
}
const initialState: DeatilPageState = {
  person: PersonUpdate.createExperience(emptyPerson),
  isViewing: true,
  isEditing: false
};

export const detailPageSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
  },

});

export default detailPageSlice.reducer;