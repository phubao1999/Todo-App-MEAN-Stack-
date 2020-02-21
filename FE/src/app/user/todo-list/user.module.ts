import { AuthenticationComponent } from './../authentication/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailItemComponent } from './detail-item/detail-item.component';



@NgModule({
  declarations: [
    DetailItemComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
