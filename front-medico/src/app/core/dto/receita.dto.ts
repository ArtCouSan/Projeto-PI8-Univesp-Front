import { PacienteDTO } from "./paciente.dto";

export interface ReceitaDTO {
    hash: string;
    status: string;
    paciente: PacienteDTO;
    dtInsercao: Date
}