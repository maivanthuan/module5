import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {KhachHang} from '../model/khach-hang';

@Injectable({
  providedIn: 'root'
})
export class KhachHangService {

  API = 'http://localhost:3000/khachHangs';
  constructor(private httpClient: HttpClient) { }
  getAllKhachHang(): Observable<KhachHang[]> {
    return this.httpClient.get<KhachHang[]>(this.API);
  }
  findById(id: number): Observable<KhachHang> {
    return this.httpClient.get<KhachHang>(this.API + '/' + id);
  }}
