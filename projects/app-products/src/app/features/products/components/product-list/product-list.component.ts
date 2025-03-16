import { ProductService } from './../../services/product.service';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/i-product';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [
    AsyncPipe,
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  products$?:Observable<IProduct[]>;

  productService=inject(ProductService);

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    console.log('findAll ... ')
    this.products$=this.productService.findAll();
  }

}
