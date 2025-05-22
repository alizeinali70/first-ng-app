import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Routes } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const routes: Routes = [{
    path:'',
    pathMatch: 'full',
    loadComponent : () => {
        return import ('./home/home.component').then((m)=> m.HomeComponent)
    },
},
{
    path:'todos',
    loadComponent: () =>{
        return import('./todos/todos.component').then((m) =>m.TodosComponent)
    },
}
];



