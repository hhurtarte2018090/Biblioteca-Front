import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token: string;
  user;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.token = localStorage.getItem('tokenUser');
    if(this.token == null)
      console.log('No estás logeado, por favor inicia sesión')
  }

  logOut(){
    this.token = '';
    localStorage.clear();
    this.router.navigateByUrl('home');
  }

  getBooksByUser(idUser){
    this.router.navigate(["/myBooks", idUser]);
  }

}
