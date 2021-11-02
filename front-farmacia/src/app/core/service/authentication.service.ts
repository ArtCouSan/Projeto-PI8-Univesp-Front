import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Admin } from '../dto/admin.dto';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        return this.http.post(`${environment.apiFarmaciaAdmin}/login`, {
            username,
            password
        }, httpOptions);
    }

    pegarUsuario(username: string): Observable<Admin> {
        return this.http.get<Admin>(`${environment.apiFarmaciaAdmin}/${username}`);
    }

    register(admin: Admin): Observable<any> {
        const json = JSON.parse(JSON.stringify(admin));
        return this.http.post(environment.apiFarmaciaAdmin, json, httpOptions);
    }

    refreshToken(token: string) {
        const json = JSON.parse(JSON.stringify({
            oldToken: token
        }));
        return this.http.put(`${environment.apiFarmaciaAdmin}/token/refresh`, json, httpOptions);
    }

}