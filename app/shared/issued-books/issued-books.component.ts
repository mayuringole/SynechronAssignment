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

  constructor(private router: Router, private bookInfoService: BookInfoService) { }

  ngOnInit() {
    this.booksDetails = this.bookInfoService.getIssuedBookDetails();
    console.log(this.booksDetails);
  }
  onBack() {
    this.router.navigate(['']);
  }
}
