import { inject, Injectable } from '@angular/core';
import { GLOBAL_MFA_PRODUCTS } from '../../../constants/global.constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/i-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri=`${GLOBAL_MFA_PRODUCTS.API_BASE}/products`;

  http= inject(HttpClient);

  findAll():Observable<IProduct[]>{
      return this.http.get<IProduct[]>(this.uri);
  }

  findById(id:number):Observable<IProduct>{
    const uri_l=`${this.uri}/${id}`
    return this.http.get<IProduct>(uri_l);
  }

}
