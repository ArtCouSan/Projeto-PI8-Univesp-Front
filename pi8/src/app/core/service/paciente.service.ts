import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PacienteDTO } from '../dto/paciente.dto';
@Injectable({
    providedIn: 'root'
})
export class PacienteService {

    constructor(private httpClient: HttpClient) { }

    listPacientes(): Observable<Array<PacienteDTO>> {
        return of([{
            nome: "Teste 4",
            status: "Ativo",
            cpf: "1234",
            nomeId: "cpf"
        },
        {
            nome: "Teste 3",
            status: "Ativo",
            cpf: "1234",
            nomeId: "cpf"
        },
        {
            nome: "Teste 2",
            status: "Ativo",
            cpf: "1234",
            nomeId: "cpf"
        },
        {
            nome: "Teste",
            status: "Ativo",
            cpf: "1234",
            nomeId: "cpf"
        }])
    }

    findPaciente(id: string): Observable<PacienteDTO> {
        return of({
            nome: "Teste",
            status: "Ativo",
            cpf: "1234",
            nomeId: "cpf"
        });
    }

}