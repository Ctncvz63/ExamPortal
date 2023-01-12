import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  hideSb:boolean=false

  constructor(private auth: AuthService,private appcompveri:AppComponent) { }

  ngOnInit(): void { 
  }
  
  login() {
    if (this.email == '') {
      alert('email boş bırakılamaz');
      return
    }
    if (this.password == '') {
      alert('şifre boş bırakılamaz');
      return
    }
    else{
      this.auth.login(this.email,this.password);
      this.appcompveri.sbCheck=!this.appcompveri.sbCheck
    }
      
  }
}
