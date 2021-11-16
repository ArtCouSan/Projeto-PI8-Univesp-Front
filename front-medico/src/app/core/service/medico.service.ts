import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class MedicoService {

    constructor(private http: HttpClient) { }

    listarCNPJ(crm: string): Observable<any> {
        return this.http.get<any>(`${environment.apiMedico}/listar-cnpj/${crm}`);
    }

}