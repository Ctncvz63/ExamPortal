import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { SinavcoComponent } from './sinavco/sinavco.component';

const routes: Routes = [
  {path:'sinavlar',component:SinavcoComponent},
  {path:'question',component:QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinavlarRoutingModule { }
