import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ReceitaDTO } from '../dto/receita.dto';
@Injectable({
    providedIn: 'root'
})
export class ReceitaService {

    constructor(private httpClient: HttpClient) { }

    listReceitas(): Observable<Array<ReceitaDTO>> {
        return of([{
            status: "Ativo",
            cpfPaciente: "12345",
            crmMedico: "123456",
            crfFarmaceutico: "1234567",
            dtInsercao: new Date(),
            dtAlteracao: new Date(),
            dtExclusao: new Date(),
            idReceita: "1",
            nomeId: "idReceita"
        }])
    }

    findReceita(id: string): Observable<ReceitaDTO> {
        return of({
            status: "Ativo",
            cpfPaciente: "12345",
            crmMedico: "123456",
            crfFarmaceutico: "1234567",
            dtInsercao: new Date(),
            dtAlteracao: new Date(),
            dtExclusao: new Date(),
            idReceita: "1",
            nomeId: "idReceita"
        });
    }

}