import { Component, OnInit } from '@angular/core'

import {FilterOptions} from './filter.model'
import {Parks} from './park-data'

@Component({
  selector: 'app-find-and-filter',
  templateUrl: './find-and-filter.component.html',
  styleUrls: ['./find-and-filter.component.css']
})

export class FindAndFilterComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {

  }

  dataSource: Object = new Parks().parksList;
  displayedColumns = ['Name', 'Population', 'Filters', 'Location']
}
