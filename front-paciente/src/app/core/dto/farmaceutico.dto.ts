import { FarmaciaDTO } from "./farmacia.dto";

export interface FarmaceuticoDTO {
    crf: string;
    nome: string;
    password: string;
    status: string;
    farmacia: FarmaciaDTO;
}