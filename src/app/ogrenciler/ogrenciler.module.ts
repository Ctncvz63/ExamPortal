import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OgrencilerRoutingModule } from './ogrenciler-routing.module';
import { OgrencicompComponent } from './ogrencicomp/ogrencicomp.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OgrencicompComponent
  ],
  imports: [
    CommonModule,
    OgrencilerRoutingModule,
    FormsModule

  ]
})
export class OgrencilerModule { }
