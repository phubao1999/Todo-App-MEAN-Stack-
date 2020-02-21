import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DetailItemComponent } from './todo-list/detail-item/detail-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';



@NgModule({
  declarations: [
    DetailItemComponent,
    AuthenticationComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
