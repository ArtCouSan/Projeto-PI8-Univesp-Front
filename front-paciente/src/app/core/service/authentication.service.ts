import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PacienteDTO } from '../dto/paciente.dto';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        return this.http.post(`${environment.apiPaciente}/login`, {
            username,
            password
        }, httpOptions);
    }

    pegarUsuario(username: string): Observable<PacienteDTO> {
        return this.http.get<PacienteDTO>(`${environment.apiPaciente}/${username}`);
    }

    register(admin: PacienteDTO): Observable<any> {
        const json = JSON.parse(JSON.stringify(admin));
        return this.http.post(environment.apiPaciente, json, httpOptions);
    }

    refreshToken(token: string) {
        const json = JSON.parse(JSON.stringify({
            oldToken: token
        }));
        return this.http.put(`${environment.apiPaciente}/token/refresh`, json, httpOptions);
    }

}