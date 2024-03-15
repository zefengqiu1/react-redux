import { Container, Header, Button, Tabs, TabsProps } from '@awsui/components-react'
import { useEffect, useState } from 'react'
import PersonalInfoSectionView from '../PersonalInfoSectionView/PersonalInfoSectionView';
import SchoolInfoSectionView from '../SchoolInfoSectionView/SchoolInfoSectionView';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { enableEdit, retrievePerson, selectIsEdit } from '../PersonalInfoSectionView/PersonSlice';
import { savePersonOndetailPage } from './detailPageSlice';

function GlobalSectionView() {
  return <div>

    <Container header={<Header variant="h2">GlobalSectionView</Header>}>
      GlobalSectionView
    </Container>
  </div>
}

function ExposureSectionView() {
  return <div>
    <Container header={<Header variant="h2">ExposureSectionView</Header>}>
      ExposureSectionView
    </Container>
  </div>
}

function Detailpage() {
 
  const [ativeTab, setActiveTab] = useState('1');
  const isEdit = useAppSelector(selectIsEdit);
  useEffect(() => {
    const arr = window.location.toString().split('/');
    dispatch(retrievePerson(arr[arr.length-1]));
  }, []);
  const dispatch = useAppDispatch();
  const updateIsEdit = () => {
    dispatch(enableEdit(!isEdit));
  };
  const saveHandler = () =>{
    dispatch(enableEdit(!isEdit));
    dispatch(savePersonOndetailPage());
  }


  return <div>

    <GlobalSectionView />
    <ExposureSectionView />
    <Tabs
      activeTabId={ativeTab}
      onChange={(e) => {
        setActiveTab(e.detail.activeTabId);
      }}
      tabs={generateTabs()
      }></Tabs>

    {isEdit ?
      <div>
        <Button
          onClick={() => saveHandler()}> save</Button>
      </div> : <div>
        <Button onClick={() => updateIsEdit()}> edit</Button>
      </div>
    }

    <div>
      <Button onClick={() => updateIsEdit()}> cancel</Button>
    </div>

  </div>
}

function generateTabs(): TabsProps.Tab[] {
  return [
    {
      id: '1',
      label: 'PersonalInfoSectionView',
      content: <PersonalInfoSectionView></PersonalInfoSectionView>,
    },
    {
      id: '2',
      label: 'SchoolInfoSectionView',
      content: <SchoolInfoSectionView></SchoolInfoSectionView>,
    }
  ]
}

export default Detailpage;