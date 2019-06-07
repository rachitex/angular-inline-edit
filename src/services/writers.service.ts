import { Writer } from './writer.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class WritersService {
    private url = 'http://localhost:8080/api/writers';
    constructor(private http: HttpClient) { }

    getUsers(): Observable<Writer[]> {
        return this.http.get<Writer[]>(this.url);
    }

}