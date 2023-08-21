import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SoTietKiem} from '../model/soTietKiem';

@Injectable({
  providedIn: 'root'
})
export class SoTietKiemService {
  API_PROD = 'http://localhost:3000/soTietKiems';
  constructor(private httpClient: HttpClient ) { }
  findAll(): Observable<SoTietKiem[]> {
    return this.httpClient.get<SoTietKiem[]>(this.API_PROD);
  }
  findById(id: number): Observable<SoTietKiem> {
    return this.httpClient.get<SoTietKiem>(`${this.API_PROD}/${id}`)  ;
  }
  deleteById(id: number): Observable<SoTietKiem> {
    return this.httpClient.delete<SoTietKiem>(`${this.API_PROD}/${id}`);
  }
  update(id: number, soTietKiem: SoTietKiem): Observable<SoTietKiem> {
    return this.httpClient.put<SoTietKiem>(`${this.API_PROD}/${id}`, soTietKiem);
  }
  search(input: string): Observable<SoTietKiem[]> {
    return this.httpClient.get<SoTietKiem[]>(this.API_PROD + '?q=' + input);
  }
}
