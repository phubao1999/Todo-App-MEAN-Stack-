import { AuthenticationComponent } from './../authentication/authentication.component';
import { DetailItemComponent } from './detail-item/detail-item.component';
import { UserLayoutComponent } from '../../shared/layout/user-layout/user-layout.component';
import { UserComponent } from './user.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth', component: AuthenticationComponent
    },
    {
        path: 'todo-list', component: UserComponent,
    },
    {
        path: 'todo-list/item/:id', component: DetailItemComponent
    }
];

export const UserRouting: ModuleWithProviders = RouterModule.forChild(routes);
