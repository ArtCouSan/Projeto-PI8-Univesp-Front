import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FarmaceuticoSaveDTO } from '../dto/farmaceutico-save.dto';
import { FarmaceuticoUpdateDTO } from '../dto/farmaceutico-update.dto';
import { FarmaceuticoDTO } from '../dto/farmaceutico.dto';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class FarmaceuticoService {

    constructor(private http: HttpClient) { }

    updateFarmaceutico(crf: string, farmacia: FarmaceuticoUpdateDTO): Observable<FarmaceuticoDTO> {
        const json = JSON.parse(JSON.stringify(farmacia));
        return this.http.put<FarmaceuticoDTO>(`${environment.apiFarmaceutico}/${crf}`, json, httpOptions);
    }

}