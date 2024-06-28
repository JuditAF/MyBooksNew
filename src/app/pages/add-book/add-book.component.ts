import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  @Input() book: Book;

  @Output() addCard = new EventEmitter<Book>();

  constructor(private apiService: BooksService){}

  public addBook(title:string, tipo:string, author:string, price:number, photo:string, idBook:number, idUser:number) {

    let book = new Book(title, tipo, author, Number(price), photo, idBook, idUser);
    console.log(book);

    this.apiService.add(book).subscribe((respuesta: Respuesta)=> {

      this.apiService.books = respuesta.data;
      console.log(respuesta);

    });
            
  }

  inputNum = document.getElementById("inNum");

  public buttNum (inNum) {
    let id = inNum.getAttribute("id");
    let min = this.inputNum.getAttribute("min");
    let max = this.inputNum.getAttribute("max");
    let step = this.inputNum.getAttribute("step");
    let val = this.inputNum.getAttribute("value");
    let calStep = (id == "increment") ?  (Number(step)*1): (Number(step)*-1);
    let newValue = parseInt(val) + calStep;

    if (newValue >= Number(min) && newValue <= Number(max)) {
      this.inputNum.setAttribute("value", "newValue");
    }
  };

}
