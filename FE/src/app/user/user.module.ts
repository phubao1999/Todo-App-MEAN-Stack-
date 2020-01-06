import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailItemComponent } from './detail-item/detail-item.component';



@NgModule({
  declarations: [DetailItemComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
