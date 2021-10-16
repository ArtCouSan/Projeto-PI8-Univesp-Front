import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FarmaciaDTO } from '../dto/farmacia.dto';
@Injectable({
    providedIn: 'root'
})
export class FarmaciaService {

    constructor(private httpClient: HttpClient) { }

    listFarmacias(): Observable<Array<FarmaciaDTO>> {
        return of([{
            cnpj: "1234567",
            nomeFantasia: "Teste 4",
            nomeId: "cnpj"
        }, {
            cnpj: "123456",
            nomeFantasia: "Teste 3",
            nomeId: "cnpj"
        },
        {
            cnpj: "12345",
            nomeFantasia: "Teste 2",
            nomeId: "cnpj"
        },
        {
            cnpj: "1234",
            nomeFantasia: "Teste",
            nomeId: "cnpj"
        }])
    }

    findFarmacia(id: string): Observable<FarmaciaDTO> {
        return of({
            cnpj: "1234",
            nomeFantasia: "Teste",
            nomeId: "cnpj"
        });
    }

}