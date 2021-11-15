import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicoDTO } from '../dto/medico.dto';
import { ReceitaSaveDTO } from '../dto/receita-save.dto.';
import { environment } from 'src/environments/environment';
import { ReceitaDTO } from '../dto/receita.dto';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ReceitaService {

    constructor(private http: HttpClient) { }

    salvarReceita(receita: ReceitaSaveDTO): Observable<any> {
        const formData = new FormData();
        formData.append('file', receita.file[0], receita.file[0].name);
        formData.append('cpfPaciente', receita.cpfPaciente);
        formData.append('crmMedico', receita.crmMedico);
        return this.http.post<any>(`${environment.apiReceita}/upload`, formData);
    }

    buscarReceita(hash: string) {
        return this.http.get(`${environment.apiReceita}/download/${hash}`, {responseType: 'blob'});
    }

    listarReceitas(crm: string): Observable<Array<ReceitaDTO>> {
        return this.http.get<Array<ReceitaDTO>>(`${environment.apiReceita}/medico/${crm}`);
    }

    deletarReceita(hash: string, crm: string): Observable<ReceitaDTO> {
        return this.http.delete<ReceitaDTO>(`${environment.apiReceita}/${hash}/medico/${crm}`);
    }

}