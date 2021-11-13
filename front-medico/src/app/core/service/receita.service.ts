import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicoDTO } from '../dto/medico.dto';
import { ReceitaSaveDTO } from '../dto/receita-save.dto.';
import { environment } from 'src/environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ReceitaService {

    constructor(private http: HttpClient) { }

    salvarReceita(receita: ReceitaSaveDTO): Observable<any> {
        const formData = new FormData();
        formData.append('file', receita.file);
        formData.append('cpfPaciente', receita.cpfPaciente);
        formData.append('crmMedico', receita.crmMedico);
        return this.http.post<any>(`${environment.apiReceita}/upload`, formData);
    }

}