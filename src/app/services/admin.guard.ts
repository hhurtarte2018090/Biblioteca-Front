import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  token: string;
  user;
  
  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user && this.user.role == 'admin'){
      alert('Bienvenido');
      return true;
    }else{
      alert('No tienes permiso de estar acá');
      this.user = JSON.parse(localStorage.getItem('user'));
      this.token = localStorage.getItem('tokenUser');
      if(this.token == null)
        this.router.navigateByUrl('');
      else
        this.router.navigateByUrl('books');
      return false;
    }
  }
  
}
