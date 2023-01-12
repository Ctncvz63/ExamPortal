import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OgrencilerModule } from './ogrenciler/ogrenciler.module';
import { ProfileModule } from './profile/profile.module';
import { SinavlarModule } from './sinavlar/sinavlar.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component'
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { SharedComponent } from './shared/shared.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    SharedComponent,
    ChangeBgDirective,
  ],
  imports: [
    BrowserModule,
    SinavlarModule,
    ProfileModule,
    OgrencilerModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginComponent,SharedComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
