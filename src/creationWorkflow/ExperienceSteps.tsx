import { WizardProps } from "@awsui/components-react";
import PersonalInfoSectionView from "../PersonalInfoSectionView/PersonalInfoSectionView";
import SchoolInfoSectionView from "../SchoolInfoSectionView/SchoolInfoSectionView";


export const ExperienceSteps: WizardProps.Step[] = [
  {
    title: 'Person Info',
    description: 'person',
    content: <div><PersonalInfoSectionView /></div>
  },
  {
    title: 'School Info',
    description: 'school',
    content: <div><SchoolInfoSectionView /></div>
  },

];