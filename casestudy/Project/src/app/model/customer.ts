
import {CustomerType} from './customer-type';

export interface Customer {
  id?: number;
  idCustomer?: string;
  nameCustomer?: string;
  dateCustomer?: string;
  genderCustomer?: number;
  idCardCustomer?: number;
  phoneCustomer?: string;
  emailCustomer?: string;
  typeCustomer?: CustomerType;
  addressCustomer?: string;
}
