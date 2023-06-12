import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API = 'http://localhost:3000/customers';
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API);
  }
  saveCustomer(customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.API, customer);
  }
  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.API}/${id}`);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(`${this.API}/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(this.API + '/' + id);
  }

  search(input: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API + '?q=' + input);
  }
}
