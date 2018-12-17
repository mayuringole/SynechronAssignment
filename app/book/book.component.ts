import { Component, OnInit, Input } from '@angular/core';
import { BookInfoService } from '../book-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() bookInfo;
  issuedBooksDetails = [];
  alreadyIssued = false;
  constructor(private bookInfoService: BookInfoService, private router: Router) { }

  ngOnInit() {
    console.log(this.bookInfo);
  }
  ngOnChanges() {
    console.log(this.bookInfo);
    this.alreadyIssued = false;
  }
  onIssue(bookDetails) {
    let counter = 0;
    this.issuedBooksDetails = this.bookInfoService.getIssuedBookDetails();
    console.log(this.issuedBooksDetails);
    if(this.issuedBooksDetails.length > 0) {
      this.issuedBooksDetails.forEach(item => {
        if(item.bookTitle === bookDetails.bookTitle) {
          this.alreadyIssued = true;
          counter++;
        } 
      });
          if (counter === 0) {
            this.alreadyIssued = false;
              this.bookInfoService.setIssuedBookDetails(bookDetails);
              this.router.navigate(['/issued-books']);
          }
    } else {
      this.bookInfoService.setIssuedBookDetails(bookDetails);
      this.router.navigate(['/issued-books']);
    }
  }
}
