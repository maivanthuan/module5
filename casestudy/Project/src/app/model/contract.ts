import {Employee} from './employee';
import {Customer} from './customer';
import {Service} from './service';

export interface Contract {
  id?: number;
  code?: string;
  employee?: Employee;
  customer?: Customer;
  service?: Service;
  ngayLamHopDong?: string;
  ngayKetThuc?: string;
  tienDatCoc?: number;
  tongTien?: number;
}
