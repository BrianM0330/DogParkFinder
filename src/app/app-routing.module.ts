import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReviewBoardComponent } from './review-board/review-board.component';
import { FindAndFilterComponent } from './find-and-filter/find-and-filter.component'
import { CheckInComponent } from './check-in/check-in.component';

const routes: Routes =
[
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'reviews', component: ReviewBoardComponent},
  { path: 'map', component: CheckInComponent},
  { path: 'find', component: FindAndFilterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
