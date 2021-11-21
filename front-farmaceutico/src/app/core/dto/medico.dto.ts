import { HospitalDTO } from "./hospital.dto";

export interface MedicoDTO {
  crm: string;
  nome: string;
  password: string;
  hospital: HospitalDTO;
}
