import { Container, FormField, Header, Input } from "@awsui/components-react";
import { selectIsEdit, selectPerson, udpateBasicInfo } from './PersonSlice'
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { basicInfo } from "../constant/Person";

function PersonalInfoSectionView() {

  const basicInfo = useAppSelector(selectPerson).getBasicInfo();// 帮你从central store 拿数据
  const isEdit = useAppSelector(selectIsEdit);
  const dispatch = useAppDispatch();
  const updatePersonInfo = (basicInfo: basicInfo) => {
    dispatch(udpateBasicInfo({
      ...basicInfo
    }))
  };

  return <div>

    <Container header={<Header variant="h2">Basic Info</Header>}>
      <FormField
        label="First Name"
        description="First Name"

      >
        <Input
          value={basicInfo?.firstName ? basicInfo.firstName : ''}
          onChange={(e) => updatePersonInfo({ ...basicInfo, firstName: e.detail.value })}
          disabled={!isEdit}
        ></Input>
      </FormField>

      <FormField
        label="Last Name"
        description="Last Name"
      >
        <Input
          value={basicInfo?.lastName ? basicInfo.lastName : ''}
          onChange={(e) => updatePersonInfo({ ...basicInfo, lastName: e.detail.value })}
          disabled={!isEdit}
        ></Input>
      </FormField>
    </Container>
  </div>
}

export default PersonalInfoSectionView;