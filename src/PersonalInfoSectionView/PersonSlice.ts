import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
import { BackendPerson, basicInfo, IPersonUpdate, PersonUpdate, schoolInfo } from '../constant/Person';
import { getPerson, putPerson } from '../api/acops';


export interface PersonState {
  person: PersonUpdate,
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
const initialState: PersonState = {
  person: PersonUpdate.createExperience(emptyPerson),
  isEditing: true
};

export const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    udpateBasicInfo: (state, action: PayloadAction<basicInfo>) => {
      if (!state.person || !action.payload) {
        console.log('isEmpty');
      }
      state.person?.setBasicInfo(action.payload);
      state.person = state.person.getCloned();
    },

    udpateSchoolInfo: (state, action: PayloadAction<schoolInfo>) => {
      if (!state.person || !action.payload) {
        console.log('isEmpty');
      }
      state.person?.setSchoolInfo(action.payload);
      state.person = state.person.getCloned();
    },
    enableEdit: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload);
      state.isEditing = action.payload
    },

  },

});


// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const savePerson = (): AppThunk =>
  async (dispatch, getState) => {
    const person = selectPerson(getState());
    const backendPerson = person.transformToBackendPersonModel();
    const id: string = await putPerson(backendPerson);
    const backenndPerson = await getPerson(id);
    //dispatch updated exprience to set detail page isEdit to false;
    // getState().person.person = backenndPersonTransformToPersonUpdate(backenndPerson);

  };

//
export const retrievePerson = (id: string): AppThunk =>
  async (dispatch, getState) => {
    const state = getState();
    // const backenndPerson = await getPerson(id);
    // getState().person.person = backenndPersonTransformToPersonUpdate(backenndPerson);
    //dispatch updated exprience to set detail page isEdit to false;
    // getState().person.isEditing = false;
    // const backenndPerson = await getPerson(id);
    const backenndPerson: BackendPerson = {
      basicInfo: {
        firstName: 'azxa',
        lastName: 'asds'
      },
      schoolInfo: {
        name: 'sjsu',
        degree: 'bachelor'
      }
    }
    Object.assign(state.person.person, PersonUpdate.backenndPersonTransformToPersonUpdate(backenndPerson));
    // state.person.person = PersonUpdate.backenndPersonTransformToPersonUpdate(backenndPerson);
    dispatch(enableEdit(false));
    // const backenndPerson: BackendPerson = {
    //   basicInfo: {
    //     firstName: 'azxa',
    //     lastName: 'asds'
    //   },
    //   schoolInfo: {
    //     name: 'sjsu',
    //     degree: 'bachelor'
    //   }
    // }
    // getState().person.person = PersonUpdate.backenndPersonTransformToPersonUpdate(backenndPerson);

  };


export const { udpateBasicInfo, enableEdit } = personSlice.actions;
export const selectIsEdit = (state: RootState) => state.person.isEditing;

export const selectPerson = (state: RootState) => state.person.person;

export default personSlice.reducer;