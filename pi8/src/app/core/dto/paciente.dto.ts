import { PessoaDTO } from "./pessoa.dto";

export interface PacienteDTO extends PessoaDTO {
    nomeId: string
}