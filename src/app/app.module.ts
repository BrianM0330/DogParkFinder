import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindAndFilterComponent } from './find-and-filter/find-and-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//material imports
import {MatSliderModule} from '@angular/material/slider'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'
import {MatTableModule} from '@angular/material/table'

//jorgon imports
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ReviewBoardComponent } from './review-board/review-board.component';
import { WriteUpComponent } from './write-up/write-up.component';
import { PostBoardComponent } from './post-board/post-board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventEmitterService } from './event-emitter.service';

@NgModule({
  declarations: [
    AppComponent,
    FindAndFilterComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PostBoardComponent,
    ReviewBoardComponent,
    WriteUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule, MatToolbarModule, MatButtonModule, MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
