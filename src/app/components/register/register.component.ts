import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role.enum';
import { UserModel } from 'src/app/models/user-model';
import { RestService } from 'src/app/services/rest/rest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: UserModel = {identifier: '', name: '',lastname: '', username: '',
                      email: '', role: Role.Student, password: ''};

  constructor(private rest: RestService, private router: Router) {
   }

  roles: any[] = [];

  ngOnInit(): void {
    for (let item in Role){
      if(isNaN(Number(item))){
        this.roles.push({text: item, value: Role[item]});
      }
    }
  }

  onSubmit(){
    this.rest.saveUser(this.user).subscribe((res:any)=>{
      alert('Usuario creado, con username: ' + res.user.username);
      this.router.navigateByUrl('users');
      close();
    },(err: any) =>{ 
      alert(err.error.message);
    });
  }

  close(){
    this.router.navigate([{outlets: {modal:null} }]);
  }
}
