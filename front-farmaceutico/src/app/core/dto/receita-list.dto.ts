import { PacienteDTO } from "./paciente.dto";

export interface ReceitaListDTO {
    hash: string;
    status: string;
    cpfPaciente: string;
    dtInsercao: Date
}