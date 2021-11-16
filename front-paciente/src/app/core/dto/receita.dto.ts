import { MedicoDTO } from "./medico.dto";

export interface ReceitaDTO {
    hash: string;
    status: string;
    medico: MedicoDTO;
    dtInsercao: Date
}