import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  public books: Book[] = [];

  public url = "http://localhost:3000/books";

  constructor( public http:HttpClient ) { }

  public getAll() {
  
    return this.http.get(this.url);

  }

  public getOne(id_book: number) {
    
    return this.http.get(this.url + "/" + id_book);

  };

  public add(book:Book) {                   // POSTBOOK

    console.log(book);
   
    return this.http.post(this.url, book);

  };

  public edit(book: Book) {
   
    return this.http.put(this.url, book);

  };

  public delete(id_book:number) {

    return this.http.delete(this.url + "/" +  id_book);
  
  }

}
