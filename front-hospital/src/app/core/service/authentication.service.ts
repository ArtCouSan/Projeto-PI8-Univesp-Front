import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HospitalDTO } from '../dto/hospital.dto';
import { MedicoDTO } from '../dto/medico.dto';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        return this.http.post(`${environment.apiHospital}/login`, {
            username,
            password
        }, httpOptions);
    }

    pegarUsuario(username: string): Observable<HospitalDTO> {
        return this.http.get<HospitalDTO>(`${environment.apiHospital}/${username}`);
    }

    register(admin: HospitalDTO): Observable<any> {
        const json = JSON.parse(JSON.stringify(admin));
        return this.http.post(environment.apiHospital, json, httpOptions);
    }

    registerMedico(admin: MedicoDTO): Observable<any> {
        const json = JSON.parse(JSON.stringify(admin));
        return this.http.post(environment.apiMedico, json, httpOptions);
    }

    refreshToken(token: string) {
        const json = JSON.parse(JSON.stringify({
            oldToken: token
        }));
        return this.http.put(`${environment.apiHospital}/token/refresh`, json, httpOptions);
    }

}