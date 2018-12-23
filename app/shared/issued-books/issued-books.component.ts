import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookInfoService } from '../../book-info.service';

@Component({
  selector: 'app-issued-books',
  templateUrl: './issued-books.component.html',
  styleUrls: ['./issued-books.component.css']
})
export class IssuedBooksComponent implements OnInit {
  booksDetails;
  noBooksIssued = false;

  constructor(private router: Router, private bookInfoService: BookInfoService) { }

  ngOnInit() {
    this.booksDetails = this.bookInfoService.getIssuedBookDetails();
    console.log(this.booksDetails);
    if(this.booksDetails.length === 0) {
      this.noBooksIssued = true;
    }
  }
  onBack() {
    this.router.navigate(['']);
  }
}
