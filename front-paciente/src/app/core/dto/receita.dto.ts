import { FarmaceuticoDTO } from "./farmaceutico.dto";
import { MedicoDTO } from "./medico.dto";
import { PacienteDTO } from "./paciente.dto";

export interface ReceitaDTO {
    hash: string;
    status: string;
    medico: MedicoDTO;
    paciente: PacienteDTO;
    dtInsercao: Date
    farmaceutico: FarmaceuticoDTO
}