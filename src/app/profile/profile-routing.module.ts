import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilecompComponent } from './profilecomp/profilecomp.component'; 
const routes: Routes = [
{path:'profilim',component:ProfilecompComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
