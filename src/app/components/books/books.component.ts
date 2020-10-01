import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from 'src/app/models/book-model';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books : BookModel[];
  type: number;

  token: string;
  user;

  constructor(private bookSer: BookService, private router: Router, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.token = localStorage.getItem('tokenUser');
    this.route.paramMap.subscribe(params=>{
      if(params.has("id"))
        this.bookSer.getBooksByUser().subscribe(books => this.books = books);
      else{
        this.getBooks();
      }
    });
  }

  getBooks(){
    this.bookSer.getbooks().subscribe(booksFromApi=>{ 
      this.books = booksFromApi.books;
    },(err: any) =>{ 
      alert(err.error.message);
    });
  }

  getBook(idBook: string){
    this.router.navigate(["books/booksenttings", idBook]);
  }

  getBookForLend(idBook: string){
    this.router.navigate(["books", idBook]);
  }

}
