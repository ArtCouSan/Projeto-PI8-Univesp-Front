import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MedicoDTO } from '../dto/medico.dto';
@Injectable({
    providedIn: 'root'
})
export class MedicoService {

    constructor(private httpClient: HttpClient) { }

    listMedicos(): Observable<Array<MedicoDTO>> {
        return of([{
            crm: "1234",
            nome: "Teste",
            status: "Ativo",
            cpf: "1234",
            nomeId: "crm"
        },
        {
            crm: "12345",
            nome: "Teste 2",
            status: "Ativo",
            cpf: "1234",
            nomeId: "crm"
        },
        {
            crm: "123456",
            nome: "Teste 3",
            status: "Ativo",
            cpf: "1234",
            nomeId: "crm"
        },
        {
            crm: "1234567",
            nome: "Teste 4",
            status: "Ativo",
            cpf: "1234",
            nomeId: "crm"
        }])
    }

    findMedico(id: string): Observable<MedicoDTO> {
        return of(
            {
                crm: "1234567",
                nome: "Teste 4",
                status: "Ativo",
                cpf: "1234",
                nomeId: "crm"
            }
        );
    }


}