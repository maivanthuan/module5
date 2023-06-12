import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Service} from '../model/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  API = 'http://localhost:3000/services';
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Service[]> {
    return this.httpClient.get<Service[]>(this.API);
  }
  saveService(service): Observable<Service> {
    return this.httpClient.post<Service>(this.API, service);
  }

  findById(id: number): Observable<Service> {
    return this.httpClient.get<Service>(this.API + '/' + id);
  }

  updateService(id: number, service: Service): Observable<Service> {
    return this.httpClient.put<Service>(this.API + '/' + id, service);
  }

  deleteService(id: number): Observable<Service> {
    return this.httpClient.delete<Service>(this.API + '/' + id);
  }
}
