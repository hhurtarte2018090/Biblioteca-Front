import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from 'src/app/models/book-model';
import { Type } from 'src/app/models/type.enum';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-book-senttings',
  templateUrl: './book-senttings.component.html',
  styleUrls: ['./book-senttings.component.css']
})
export class BookSenttingsComponent implements OnInit {
  book: BookModel;

  constructor(private bookSer: BookService, private router: Router, private route: ActivatedRoute) {
   }

  types: any[] = [];

  ngOnInit(): void {
    this.getBook();
    for (let item in Type){
      if(isNaN(Number(item))){
        this.types.push({text: item, value: Type[item]});
      }
    }
  }

  getBook(){
    this.book = null;

    this.route.paramMap.subscribe(params=>{
      if(params.has("id"))
        this.bookSer.getBook(params.get("id")).subscribe(bookFromApi =>{ 
          this.book = bookFromApi.book;
          alert("Hola");
        },(err: any) =>{ 
          alert(err.error.message);
        });
      else{
        this.router.navigateByUrl('books');
        alert("no se puede editar el libro o revista, intente mas tarde");
      }
    });
  }

  onSubmit(){
    this.bookSer.updateBook(this.book).subscribe((res:any)=>{
      alert(res.message);
      window.location.replace('books');
    },(err: any) =>{ 
      alert(err.error.message);
    });
  }

  onDelete(){
    this.route.paramMap.subscribe(params=>{
      if(params.has("id"))
          this.bookSer.deleteBook(params.get("id")).subscribe((res:any)=>{
            alert(res.message);
            window.location.replace('books');
          },(err: any) =>{ 
            alert(err.error.message);
          });
    });
  }

  onClose(){
    this.router.navigateByUrl('books');
  }

  lendBook(_id, availables){
    let lend = {_id, availables};
    this.bookSer.lendBook(lend).subscribe(res=>{
      alert('Usted acaba de tomar prestado un libro');
      window.location.replace('books');
  },(err: any) =>{
      alert(err.error.message);
    });
  }

}
