import { Component} from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {

  public books: Book[] = [];

  constructor(public apiService: BooksService) {

    this.apiService.getAll().subscribe((respuesta: Respuesta) => {
      this.books = respuesta.data;
      console.log(respuesta.data);
      console.log(this.books);
      
    });

  }

  public delete(id_book:number) {
  
    this.apiService.delete(id_book).subscribe((respuesta: Respuesta) => {
      this.books = respuesta.data;
    });
   
  }
  

  public buscar(id_book: number) {
    console.log(id_book);
    
    if (id_book){
      
      this.apiService.getOne(Number(id_book)).subscribe((respuesta: Respuesta) => {
        this.books = respuesta.data;
      });
      console.log(this.books);
      
    } else {
      
      this.apiService.getAll().subscribe((respuesta: Respuesta) => {
        this.books = respuesta.data;
      });
    }
    
  }

}