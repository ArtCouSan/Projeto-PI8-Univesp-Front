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
        return this.http.get(`${environment.apiReceita}/download/${hash}`, { responseType: 'blob' });
    }

    listarReceitas(cpfFiltrado: string): Observable<Array<ReceitaDTO>> {
        return this.http.post<Array<ReceitaDTO>>(`${environment.apiReceita}/farmaceutico`, {
            "cpfFiltrado": cpfFiltrado
        });
    }

    listarMinhasReceitas(crf: string, cnpj: string,cpfFiltrado: string): Observable<Array<ReceitaDTO>> {
        return this.http.post<Array<ReceitaDTO>>(`${environment.apiReceita}/farmaceutico/${crf}/${cnpj}`, {
            "cpfFiltrado": cpfFiltrado
        });
    }

    analisarReceitaPacienteComoFarmaceuticorReceitasFarmaceutico(hash: string, crf: string, cnpj: string) {
        return this.http.get(`${environment.apiReceita}/${hash}/farmaceutico/analisar/${crf}/${cnpj}`);
    }

    devolverReceitaPacienteComoFarmaceuticorReceitasFarmaceutico(hash: string) {
        return this.http.get(`${environment.apiReceita}/${hash}/farmaceutico/devolver`);
    }

    finalizarReceitaPacienteComoFarmaceuticorReceitasFarmaceutico(hash: string, crf: string, cnpj: string): Observable<Array<ReceitaDTO>> {
        return this.http.get<Array<ReceitaDTO>>(`${environment.apiReceita}/${hash}/farmaceutico/finalizar/${crf}/${cnpj}`);
    }

}