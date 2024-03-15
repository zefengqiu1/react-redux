
export interface basicInfo {
  firstName?: string,
  lastName?: string
}
export interface schoolInfo {
  name?: string
  degree?: string
}
export interface workInfo {
  name?: string
}

export interface IPersonUpdate {
  id?:string
  basicInfo?: basicInfo
  schoolInfo?: schoolInfo
  workInfo?: workInfo
}

export interface BackendPerson {
  id?:string
  basicInfo?: basicInfo
  schoolInfo?: schoolInfo
}
export class PersonUpdate {
  private props: IPersonUpdate;

  constructor(props: IPersonUpdate) {
    const deepCloned = PersonUpdate.deepClone(props);
    this.props = deepCloned;
  }

  setBasicInfo(basicInfo: basicInfo) {
    console.log("setBasicInfo");
    const { firstName, lastName } = basicInfo;
    if (firstName !== undefined) this.props.basicInfo!.firstName = firstName || undefined;
    if (lastName !== undefined) this.props.basicInfo!.lastName = lastName || undefined;
  }
  getBasicInfo() {
    return this.props.basicInfo;
  }

  setSchoolInfo(schoolInfo: schoolInfo) {
    const { name, degree } = schoolInfo;
    if (name !== undefined) this.props.schoolInfo!.name = name || undefined;
    if (degree !== undefined) this.props.schoolInfo!.degree = degree || undefined;
  }

  getSchoolInfo() {
    return this.props.schoolInfo;
  }

  static createExperience(personUpdate: IPersonUpdate): PersonUpdate {
    const candidate = new PersonUpdate(PersonUpdate.extractUpdatePerson(personUpdate));
    return candidate;
  }

  transformToBackendPersonModel(): BackendPerson {
    return {
      id: this.props.id,
      basicInfo: this.props.basicInfo,
      schoolInfo: this.props.schoolInfo
    }
  }

  static extractBasicInfo(basicInfo?: basicInfo): basicInfo {
    return {
      firstName: basicInfo?.firstName || undefined,
      lastName: basicInfo?.lastName || undefined
    }
  }

  static extractSchoolInfo(schoolInfo?: schoolInfo): schoolInfo {
    return {
      name: schoolInfo?.name || undefined,
      degree: schoolInfo?.degree || undefined
    }
  }

  static extractUpdatePerson(person: IPersonUpdate): IPersonUpdate {
    const res = {
      id: person.id,
      basicInfo: PersonUpdate.extractBasicInfo(person.basicInfo),
      schoolInfo: this.extractSchoolInfo(person.schoolInfo)

    }
    return res;
  }

  static backenndPersonTransformToPersonUpdate(backendPerson: BackendPerson): PersonUpdate {
    return new PersonUpdate(PersonUpdate.deepClone(backendPerson));
  }

  static deepClone<T>(person: T): T {
    return JSON.parse(JSON.stringify(person));
  }

  isEqualTo(updatePerson: PersonUpdate): boolean {
    return JSON.stringify(this) === JSON.stringify(updatePerson);
  }

  getCloned() {
    return new PersonUpdate(PersonUpdate.deepClone(this.props));
  }

}