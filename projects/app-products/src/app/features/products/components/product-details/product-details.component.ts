import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/i-product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [
    AsyncPipe
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

  product$?:Observable<IProduct>

  productService=inject(ProductService);
  activatedRoute=inject(ActivatedRoute);
  id:number=0;

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: any)=>{
      const id=params['id'];
      if(id){
        this.id=id;
        this.findById(+id)
      }
    })

  }

  findById(id:number){

    this.product$=this.productService.findById(id);
  }

}
