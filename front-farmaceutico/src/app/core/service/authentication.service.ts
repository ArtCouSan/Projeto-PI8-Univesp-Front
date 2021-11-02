import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FarmaceuticoDTO } from '../dto/farmaceutico.dto';
import { FarmaceuticoSaveDTO } from '../dto/farmaceutico-save.dto';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        return this.http.post(`${environment.apiFarmaceutico}/login`, {
            username,
            password
        }, httpOptions);
    }

    pegarUsuario(username: string): Observable<FarmaceuticoDTO> {
        return this.http.get<FarmaceuticoDTO>(`${environment.apiFarmaceutico}/${username}`);
    }

    register(farmaceutico: FarmaceuticoSaveDTO): Observable<any> {
        const json = JSON.parse(JSON.stringify(farmaceutico));
        return this.http.post(environment.apiFarmaceutico, json, httpOptions);
    }

    refreshToken(token: string) {
        const json = JSON.parse(JSON.stringify({
            oldToken: token
        }));
        return this.http.put(`${environment.apiFarmaceutico}/token/refresh`, json, httpOptions);
    }

}