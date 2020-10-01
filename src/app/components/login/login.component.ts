import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userLogin
  constructor(private rest:RestService, private router: Router) { 
    this.userLogin = {
      username: '',
      email: '',
      password: '',
      gettoken: 'true'
    }
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.rest.login(this.userLogin).subscribe((res: any)=>{
        alert('Bienvenido ' + res.user.name);
        localStorage.setItem('tokenUser', res.token);
        res.user.password = '';
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigateByUrl('books');
    },(err: any) =>{
        alert(err.error.message);
    });
  }
}
