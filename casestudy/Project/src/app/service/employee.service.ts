import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Employee} from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  API = ' http://localhost:3000/employees';
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.API);
  }

  saveEmployee(employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.API, employee);
  }
  findById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(this.API + '/' + id);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(this.API + '/' + id, employee);
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.httpClient.delete<Employee>(this.API + '/' + id);
  }
}
