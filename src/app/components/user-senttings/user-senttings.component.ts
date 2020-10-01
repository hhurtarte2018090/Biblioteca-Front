import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/models/role.enum';
import { UserModel } from 'src/app/models/user-model';
import { RestService } from 'src/app/services/rest/rest.service';

@Component({
  selector: 'app-user-senttings',
  templateUrl: './user-senttings.component.html',
  styleUrls: ['./user-senttings.component.css']
})
export class UserSenttingsComponent implements OnInit {
  user: UserModel;

  constructor(private rest: RestService, private router: Router, private route: ActivatedRoute) {
   }

  roles: any[] = [];

  ngOnInit(): void {
    this.getUser();
    for (let item in Role){
      if(isNaN(Number(item))){
        this.roles.push({text: item, value: Role[item]});
      }
    }
  }

  getUser(){
    this.user = null;

    this.route.paramMap.subscribe(params=>{
      if(params.has("id"))
        this.rest.getUser(params.get("id")).subscribe(userFromApi =>{ 
          this.user = userFromApi.user;
        },(err: any) =>{ 
          alert(err.error.message);
        });
      else{
        this.router.navigateByUrl('users');
        alert("no se puede editar el usuario, intente mas tarde");
      }
    });
  }

  onSubmit(){
    this.rest.updateUser(this.user).subscribe((res:any)=>{
      alert(res.message);
      window.location.replace('users');
    },(err: any) =>{ 
      alert(err.error.message);
    });
  }

  onDelete(){
    this.route.paramMap.subscribe(params=>{
      if(params.has("id"))
          this.rest.deleteUser(params.get("id")).subscribe((res:any)=>{
            alert(res.message);
            window.location.replace('users');
          },(err: any) =>{ 
            alert(err.error.message);
          });
    });
  }

  close(){
    this.router.navigateByUrl('users');
  }
}
