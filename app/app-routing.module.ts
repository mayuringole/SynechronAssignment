import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { BooksListComponent } from "./books-list/books-list.component";
import { IssuedBooksComponent } from "./shared/issued-books/issued-books.component";


const appRoutes: Routes=[
    {path: '', redirectTo: '/books-list', pathMatch: 'full'},
    {path: 'books-list', component: BooksListComponent},
    {path: 'issued-books', component: IssuedBooksComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}