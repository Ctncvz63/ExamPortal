import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OgrencicompComponent } from './ogrencicomp/ogrencicomp.component';

const routes: Routes = [
  {path:'ogrenciler',component:OgrencicompComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OgrencilerRoutingModule { }
