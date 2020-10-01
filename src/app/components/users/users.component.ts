import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role.enum';
import { UserModel } from 'src/app/models/user-model';
import { RestService } from 'src/app/services/rest/rest.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : UserModel[];
  roles: number;

  constructor(private rest: RestService, private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.rest.getUsers().subscribe(usersFromApi=>{ 
      this.users = usersFromApi.users;
    },(err: any) =>{ 
      alert(err.error.message);
    });
  }

  getUser(idUser: string){
    this.router.navigate(["users/usersenttings", idUser]);
  }

}
