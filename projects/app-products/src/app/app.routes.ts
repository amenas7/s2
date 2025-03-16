import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ProductComponent } from './features/products/components/product.component';

export const routes: Routes = [
    {
        path: 'products',
        component: ProductComponent,
        children: [
            {
              path: "list",
              loadComponent: () =>import('./features/products/components/product-list/product-list.component').then((c) => c.ProductListComponent)
            },
            {
              path: "details/:id",
              loadComponent: () =>import('./features/products/components/product-details/product-details.component').then((c) => c.ProductDetailsComponent)
            }
        ]
    },

    { path: '',
        redirectTo: 'products/list',
        pathMatch: 'full'
    },
    { path: '**',
    redirectTo: 'products',
    pathMatch: 'full'
    }
];
