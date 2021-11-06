import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MedicoDTO } from '../dto/medico.dto';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        return this.http.post(`${environment.apiMedico}/login`, {
            username,
            password
        }, httpOptions);
    }

    pegarUsuario(username: string): Observable<MedicoDTO> {
        return this.http.get<MedicoDTO>(`${environment.apiMedico}/${username}`);
    }

    register(admin: MedicoDTO): Observable<any> {
        const json = JSON.parse(JSON.stringify(admin));
        return this.http.post(environment.apiMedico, json, httpOptions);
    }

    refreshToken(token: string) {
        const json = JSON.parse(JSON.stringify({
            oldToken: token
        }));
        return this.http.put(`${environment.apiMedico}/token/refresh`, json, httpOptions);
    }

}