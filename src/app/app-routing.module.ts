import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReviewBoardComponent } from './review-board/review-board.component';
import { FindAndFilterComponent } from './find-and-filter/find-and-filter.component'

const routes: Routes =
[
  { path: 'home', component: HomeComponent},
  { path: 'reviews', component: ReviewBoardComponent},
  { path: 'find', component: FindAndFilterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
