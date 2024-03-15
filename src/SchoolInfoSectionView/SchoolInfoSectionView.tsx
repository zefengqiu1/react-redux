import { Container, FormField, Header, Input } from "@awsui/components-react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { schoolInfo } from "../constant/Person";
import { selectIsEdit, selectPerson, udpateSchoolInfo } from "../PersonalInfoSectionView/PersonSlice";




function SchoolInfoSectionView() {

  const school = useAppSelector(selectPerson).getSchoolInfo();// 帮你从central store 拿数据
  const isEdit = useAppSelector(selectIsEdit);
  // SchoolModel
  const dispatch = useAppDispatch();
  const updateSchoolInfo = (school: schoolInfo) => {
    dispatch(udpateSchoolInfo({
      ...school
    }))
  };

  return <div>

    <Container header={<Header variant="h2">School Info</Header>}>
      <FormField
        label="School Name"
        description="School Name"
      >

        <Input
          value={school?.name ? school.name : ''}
          onChange={(e) => updateSchoolInfo({ ...school, name: e.detail.value })}
          disabled={!isEdit}
        ></Input>
      </FormField>

      <FormField
        label="School Degree"
        description="School Degree"
      >
        <Input
          value={school?.degree ? school.degree : ''}
          onChange={(e) => updateSchoolInfo({ ...school, degree: e.detail.value })}
          disabled={!isEdit}
        ></Input>
      </FormField>
    </Container>
  </div>
}

export default SchoolInfoSectionView;