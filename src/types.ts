export interface IFile {
  fileId: string;
  fileName: string;
}

export interface Values {
  name: string;
  isImage: boolean;
  values: string[];
}

export interface AuditorCompany {
  auditorCompanyId: string;
  name: string;
  email: string;
  phone: string;
  zip: string;
  city: string;
  house: string;
  creationDate: Date;
  modifiedDate: Date;
}

export interface EquipmentAudit {
  equipmentAuditId: string;
  standard: string;
  isElectronic: boolean;
  auditDate: Date;
  nextAuditDate: Date;
  passed: boolean;
  isRecheck: boolean;
  auditorCompany: AuditorCompany;
  values: Values[];
}

export interface DataAboutAudits {
  id: string;
  clientName: string;
  equipmentAudits: EquipmentAudit[];
  files: IFile[];
}
