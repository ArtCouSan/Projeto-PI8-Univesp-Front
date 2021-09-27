import { PessoaDTO } from "./pessoa.dto";

export interface MedicoDTO extends PessoaDTO {
    crm: string
}