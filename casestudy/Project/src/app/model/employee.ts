import {Level} from './level';
import {Part} from './part';
import {Position} from './position';


export interface Employee {
  id?: number;
  idEmployee?: string;
  nameEmployee?: string;
  viTriEmployee?: Position;
  trinhDoEmployee?: Level;
  boPhanEmployee?: Part;
  dateEmployee?: string;
  idCardEmployee?: number;
  salaryEmployee?: number;
  phoneEmployee?: string;
  emailEmployee?: string;
  addressEmployee?: string;
}
