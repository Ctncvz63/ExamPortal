import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})

export class SharedComponent {
  checkSinav: boolean = false
  checkOgrenci: boolean = false
  checkProfile: boolean = false

  
  constructor(private auth: AuthService) { }

  ngOnInit(): void { 

  }

  logOut(){
    this.auth.logout
    alert('Başarıyla Çıkış Yapıldı')
  }

  checkActiveSinav() {
    if (!this.checkSinav) {
      this.checkSinav = !this.checkSinav
      this.checkOgrenci = false
      this.checkProfile = false
    }
  }
  checkActiveProfile() {
    if (!this.checkProfile) {
      this.checkProfile = !this.checkProfile
      this.checkOgrenci = false
      this.checkSinav = false
    }
  }
  checkActiveOgrenci() {
    if (!this.checkOgrenci) {
      this.checkOgrenci = !this.checkOgrenci
      this.checkSinav = false
      this.checkProfile = false
    }
  }
}
