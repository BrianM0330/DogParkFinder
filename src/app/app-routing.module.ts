import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReviewBoardComponent } from './review-board/review-board.component';


const routes: Routes = 
[
  { path: 'home', component: HomeComponent},
  { path: 'reviews', component: ReviewBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }