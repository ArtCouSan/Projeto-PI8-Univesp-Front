import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FarmaciaDTO } from '../dto/farmacia.dto';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        return this.http.post(`${environment.apiFarmacia}/login`, {
            username,
            password
        }, httpOptions);
    }

    pegarUsuario(username: string): Observable<FarmaciaDTO> {
        return this.http.get<FarmaciaDTO>(`${environment.apiFarmacia}/${username}`);
    }

    register(admin: FarmaciaDTO): Observable<any> {
        const json = JSON.parse(JSON.stringify(admin));
        return this.http.post(environment.apiFarmacia, json, httpOptions);
    }

    refreshToken(token: string) {
        const json = JSON.parse(JSON.stringify({
            oldToken: token
        }));
        return this.http.put(`${environment.apiFarmacia}/token/refresh`, json, httpOptions);
    }

}