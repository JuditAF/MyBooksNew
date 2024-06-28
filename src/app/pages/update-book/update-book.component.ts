import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  @Input() book: Book;

  @Output() modifyCard = new EventEmitter<Book>();

  constructor(private apiService: BooksService){}

  public editBook(title:string, tipo:string, author:string, price:number, photo:string, idBook:number, idUser:number) {

    let book = new Book(title, tipo, author, Number(price), photo, idBook, idUser);

    this.apiService.edit(book).subscribe((respuesta: Respuesta)=> {

      this.apiService.books = respuesta.data;
      console.log(respuesta);
            
    });

  }
}
