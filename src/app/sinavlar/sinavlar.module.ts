import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinavlarRoutingModule } from './sinavlar-routing.module';
import { SinavcoComponent } from './sinavco/sinavco.component';
import { QuestionComponent } from './question/question.component';



@NgModule({
  declarations: [
    SinavcoComponent,
    QuestionComponent,
  ],
  imports: [
    CommonModule,
    SinavlarRoutingModule
  ],
  exports:[

  ]
})
export class SinavlarModule { }
