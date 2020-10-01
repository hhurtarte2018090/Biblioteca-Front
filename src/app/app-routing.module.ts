import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookSenttingsComponent } from './components/book-senttings/book-senttings.component';
import { BooksComponent } from './components/books/books.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewBookComponent } from './components/new-book/new-book.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { UserSenttingsComponent } from './components/user-senttings/user-senttings.component';
import { UsersComponent } from './components/users/users.component';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  {path: 'register', component: RegisterComponent, outlet: 'modal'},
  {path: 'newbook', component: NewBookComponent, outlet: 'modal'},
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'books', component: BooksComponent,
    children:[
      {path: 'booksenttings/:id', component: BookSenttingsComponent},
      {path: ':id', component: BookSenttingsComponent}
  ]},
  {path: 'myBooks/:id', component: BooksComponent},
  {path: 'users', canActivate: [AdminGuard],component: UsersComponent,
    children:[
      {path: 'usersenttings/:id', component: UserSenttingsComponent}
  ]},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
