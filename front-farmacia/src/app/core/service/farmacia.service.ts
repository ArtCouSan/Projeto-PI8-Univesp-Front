import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FarmaciaSaveDTO } from '../dto/farmacia-save.dto';
import { FarmaciaUpdateDTO } from '../dto/farmacia-update.dto';
import { FarmaciaDTO } from '../dto/farmacia.dto';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class FarmaciaService {

    constructor(private http: HttpClient) { }

    listFarmacias(cnpj: string): Observable<Array<FarmaciaDTO>> {
        return this.http.get<Array<FarmaciaDTO>>(`${environment.apiFarmacia}/${cnpj}/listar`, httpOptions);
    }

    findFarmacia(id: string): Observable<FarmaciaDTO> {
        return this.http.get<FarmaciaDTO>(`${environment.apiFarmacia}/${id}`, httpOptions);
    }

    saveFarmacia(farmacia: FarmaciaSaveDTO): Observable<FarmaciaDTO> {
        const json = JSON.parse(JSON.stringify(farmacia));
        return this.http.post<FarmaciaDTO>(`${environment.apiFarmacia}`, json, httpOptions);
    }

    updateFarmacia(id: string, farmacia: FarmaciaUpdateDTO): Observable<FarmaciaDTO> {
        const json = JSON.parse(JSON.stringify(farmacia));
        return this.http.put<FarmaciaDTO>(`${environment.apiFarmacia}/${id}`, json, httpOptions);
    }

}