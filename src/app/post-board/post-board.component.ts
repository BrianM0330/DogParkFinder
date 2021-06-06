import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-post-board',
  templateUrl: './post-board.component.html',
  styleUrls: ['./post-board.component.css']
})
export class PostBoardComponent implements OnInit {

  constructor(private ems : EventEmitterService) 
  { 
    
  }

  ngOnInit(): void 
  {
    
  }

  loadReviews()
  {
    this.ems.onButtonClick();
  }
}