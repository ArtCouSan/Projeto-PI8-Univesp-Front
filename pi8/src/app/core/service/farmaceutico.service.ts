import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FarmaceuticoDTO } from '../dto/farmaceutico.dto';
import { FarmaciaDTO } from '../dto/farmacia.dto';
@Injectable({
    providedIn: 'root'
})
export class FarmaceuticoService {

    constructor(private httpClient: HttpClient) { }

    listFarmaceuticos(): Observable<Array<FarmaceuticoDTO>> {
        return of([{
            nome: "Teste 4",
            status: "Ativo",
            cpf: "1234",
            nomeId: "cpf"
        }, {
            nome: "Teste 4",
            status: "Ativo",
            cpf: "1234",
            nomeId: "cpf"
        },
        {
            nome: "Teste 4",
            status: "Ativo",
            cpf: "1234",
            nomeId: "cpf"
        },
        {
            nome: "Teste 4",
            status: "Ativo",
            cpf: "1234",
            nomeId: "cpf"
        }])
    }

    findFarmaceutico(id: string): Observable<FarmaceuticoDTO> {
        return of({
            nome: "Teste 4",
            status: "Ativo",
            cpf: "1234",
            nomeId: "cpf"
        });
    }

}