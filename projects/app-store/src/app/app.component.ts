import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, Injector, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit{
  title = 'app-store';

  injector=inject(Injector);

  ngOnInit(): void {

      // loadRemoteModule('appProducts', './Component').then((m) => {
      //   const ce = createCustomElement(
      //     m.AppComponent, {
      //       injector: this.injector
      //     }
      //   );

      //   if (!customElements.get('app-root')) {
      //     customElements.define('mfe-app-products', ce);
      //   }

      // }).catch((err:any) => console.log(err));

      // loadRemoteModule('appUsers', './Component').then((m) => {
      //   const ce = createCustomElement(
      //     m.AppComponent, {
      //       injector: this.injector
      //     }
      //   );

      //   if (!customElements.get('app-root')) {
      //     customElements.define('mfe-app-users', ce);
      //   }

      // }).catch((err:any) => console.log(err));

  }

     
}
