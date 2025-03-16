import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'appProducts',
        loadComponent: () =>
            loadRemoteModule('appProducts', './Component').then((m) => m.AppComponent)
    },
    {
        path: 'appUsers',
        loadComponent: () =>
            loadRemoteModule('appUsers', './Component').then((m) => m.AppComponent)
    }
];
