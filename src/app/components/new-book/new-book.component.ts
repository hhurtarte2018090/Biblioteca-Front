import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from 'src/app/models/book-model';
import { Type } from 'src/app/models/type.enum';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  book: BookModel = {type: Type.Book, author: '', title: '', edition: '', codeWords: '',
    description: '', topics: '', currentFrequency: '', prints:null, copies: null, availables: null};

  constructor(private bookSer: BookService, private router: Router) {
   }

  types: any[] = [];

  ngOnInit(): void {
    for (let item in Type){
      if(isNaN(Number(item))){
        this.types.push({text: item, value: Type[item]});
      }
    }
  }

  onSubmit(){
    this.bookSer.saveBook(this.book).subscribe((res:any)=>{
      if(res.book.type == 1)
        alert('Libro "'+res.book.title+ '" creado');
      else
        alert('Revista "'+res.book.title+ '" creada');

      this.router.navigateByUrl('books');
      this.onClose();
    },(err: any) =>{ 
      alert(err.error.message);
    });
  }

  onClose(){
    this.router.navigate([{outlets: {modal:null} }]);
  }
}
