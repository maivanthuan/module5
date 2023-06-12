import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RentalType} from '../model/rental-type';
import {Observable} from 'rxjs';
import {CustomerType} from '../model/customer-type';

@Injectable({
  providedIn: 'root'
})
export class TetalTypeService {
  API = 'http://localhost:3000/rentalTypes';
  constructor(private httpClient: HttpClient) { }
  // @ts-ignore
  getAllRentalType(): Observable<RentalType[]> {
    return this.httpClient.get<RentalType[]>(this.API);
  }

  findById(id: number): Observable<RentalType> {
    return this.httpClient.get<CustomerType>(this.API + '/' + id);
  }
}
