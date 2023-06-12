import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contract} from '../model/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  API = 'http://localhost:3000/contracts';
  constructor(private httpClient: HttpClient) { }
  public getAllContract(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.API);
  }

  save(contract): Observable<Contract> {
    return this.httpClient.post<Contract>(this.API, contract);
  }

  search(start: string, end: string): Observable<Contract[]> {
    let key = '';
    if (start !== '' && end !== '') {
      key += '?ngayLamHopDong_gte=' + start + '&ngayLamHopDong_lte=' + end;
    } else if (start !== '') {
      key += '?ngayLamHopDong_gte=' + start;
    } else if (end !== '') {
      key += '?ngayLamHopDong_lte' + end;
    }
    return this.httpClient.get<Contract[]>(this.API + key);
  }
}

