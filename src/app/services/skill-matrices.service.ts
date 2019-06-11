import { SkillMatrix } from '../models/skill-matrix.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class SkillMatricesService {
    private url = 'http://localhost:8080/api/skillMatrices';
    constructor(private http: HttpClient) { }

    getSkillMatrices(): Observable<SkillMatrix[]> {
        return this.http.get<SkillMatrix[]>(this.url);
    }
}