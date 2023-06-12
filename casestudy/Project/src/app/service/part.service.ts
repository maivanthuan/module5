import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Part} from '../model/part';

@Injectable({
  providedIn: 'root'
})
export class PartService {
  API = 'http://localhost:3000/parts';
  constructor(private httpClient: HttpClient) { }
  getAllPart(): Observable<Part[]> {
    return this.httpClient.get<Part[]>(this.API);
  }

  findById(id: number): Observable<Part> {
    return this.httpClient.get<Part>(this.API + '/' + id);
  }
}
