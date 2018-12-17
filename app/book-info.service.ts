import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookInfoService {
  bookInfoSubject = new Subject<any>();
  bookDetails = [];

  constructor(private http: HttpClient) { }
  getBooksList() {
    return this.http.get('assets/mock/booksList.json');
  }

  setIssuedBookDetails(bookDetails) {
    this.bookDetails.push(bookDetails);
  }
  getIssuedBookDetails() {
return this.bookDetails;
  }
}
