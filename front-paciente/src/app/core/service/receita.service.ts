import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReceitaSaveDTO } from '../dto/receita-save.dto.';
import { environment } from 'src/environments/environment';
import { ReceitaDTO } from '../dto/receita.dto';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ReceitaService {

    constructor(private http: HttpClient) { }

    buscarReceita(hash: string) {
        return this.http.get(`${environment.apiReceita}/download/${hash}`, {responseType: 'blob'});
    }

    listarReceitas(cpf: string): Observable<Array<ReceitaDTO>> {
        return this.http.get<Array<ReceitaDTO>>(`${environment.apiReceita}/paciente/${cpf}`);
    }

}