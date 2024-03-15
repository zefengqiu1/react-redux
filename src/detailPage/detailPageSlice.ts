import { createSlice } from '@reduxjs/toolkit';
import { IPersonUpdate, PersonUpdate } from '../constant/Person';
import { AppThunk } from '../app/store';
import { selectPerson } from '../PersonalInfoSectionView/PersonSlice';
import { putPerson } from '../api/acops';

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


export const savePersonOndetailPage = (): AppThunk =>
  async (dispatch, getState) => {
    const state = getState();
    const person = selectPerson(getState());
    console.log(person);
    const backendPerson = person.transformToBackendPersonModel();
    console.log(backendPerson);
    const id: string = await putPerson(backendPerson);
    // Object.assign(state.person.person, PersonUpdate.backenndPersonTransformToPersonUpdate(backenndPerson));
    console.log(id);
    //dispatch updated exprience to set detail page isEdit to false;
    // getState().person.person = backenndPersonTransformToPersonUpdate(backenndPerson);

  };

export default detailPageSlice.reducer;