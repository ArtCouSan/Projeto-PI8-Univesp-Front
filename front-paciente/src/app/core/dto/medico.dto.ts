import { HospitalDTO } from "./hospital.dto";

export interface MedicoDTO {
  crm: string;
  nome: string;
  hospital: HospitalDTO
}
