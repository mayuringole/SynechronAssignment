import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { BookInfoService } from '../book-info.service';
import { Router } from '@angular/router';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  booksDetail;
  bookInfo;
  showBook = false;
  displayBookDetails = new EventEmitter();

  constructor(private bookInfoService: BookInfoService, private router: Router) { }

  ngOnInit() {
    this.bookInfoService.getBooksList().subscribe(
      (res: any) => {
        console.log(res);
        this.booksDetail = res.data;
      }
    )
  }

  showBookDetails(book) {
    console.log(book);
    this.showBook = true;
    this.bookInfo = book;
  }

}
