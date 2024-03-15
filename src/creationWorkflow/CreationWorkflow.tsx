import { NonCancelableCustomEvent, Wizard, WizardProps } from "@awsui/components-react"
import BeforeCreationWordflow from "./BeforeCreationWordflow"
import { ExperienceSteps } from "./ExperienceSteps"
import { useState } from "react"
import { Page, getLinkableUrl } from "../page";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { savePerson } from "../PersonalInfoSectionView/PersonSlice";

function CreationWorkflow() {
  const [stepIndex, setStepIndex] = useState(0);
  // const isEdit = useAppSelector(selectIsEdit);
  // const updateIsEdit = () => {
  //   dispatch(enableEdit(true));
  // };

  const dispatch = useAppDispatch();
  const handleOnSubmit = () => {
    dispatch(savePerson())
  };

  const begin: WizardProps.Step = {
    title: 'before start',
    content: <BeforeCreationWordflow />
  }
  const i18nString = {
    cancelButton: 'Cancel',
    previousButton: 'Previous',
    nextButton: 'Next',
    submitButton: 'Create'
  }
  const step: WizardProps.Step[] = [begin].concat(ExperienceSteps);

  return <div>
    <Wizard
      steps={step}
      i18nStrings={i18nString}
      activeStepIndex={stepIndex}
      onCancel={() => { window.location.assign(getLinkableUrl(Page.NewExperience)) }}
      onNavigate={(event: NonCancelableCustomEvent<WizardProps.NavigateDetail>) => {
        setStepIndex(event.detail.requestedStepIndex);
      }}
      onSubmit={() => {
        handleOnSubmit();
      }}
    />
  </div>
}

export default CreationWorkflow;