import { HomeComponent } from './home/home.component';
import { DetailItemComponent } from './todo-list/detail-item/detail-item.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'auth', component: AuthenticationComponent
    },
    {
        path: 'todo-list', component: TodoListComponent,
    },
    {
        path: 'todo-list/item/:id', component: DetailItemComponent
    }
];

export const UserRouting: ModuleWithProviders = RouterModule.forChild(routes);
