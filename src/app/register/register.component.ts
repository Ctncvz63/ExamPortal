import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = ''

  constructor(private auth: AuthService) { }

  ngOnInit(): void { }

  register() {
    if (this.email == '') {
      alert('email boş bırakılamaz');
      return
    }
    if (this.password == '') {
      alert('şifre boş bırakılamaz');
      return
    }
    this.auth.register(this.email,this.password);
    this.email='';
    this.password ='';
  }
}

