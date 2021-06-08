import { Component, OnInit } from '@angular/core'

import {FilterOptions} from './filter.model'
import {Parks} from './park-data'

@Component({
  selector: 'app-find-and-filter',
  templateUrl: './find-and-filter.component.html',
  styleUrls: ['./find-and-filter.component.css']
})

export class FindAndFilterComponent implements OnInit {
  ParkData: Parks = new Parks()

  dataToDisplay = this.ParkData.parksList;

  constructor() {
  }

  ngOnInit(): void {
  }

  filterNames = Object.keys(FilterOptions)
  filterValues = Object.values(FilterOptions)

  dataSource = this.dataToDisplay
  displayedColumns = ['Name', 'Population', 'Filters', 'Location']

  public filterFunction(toFilter: string) {
    toFilter = toFilter.replace("_", " ")
    console.log("Before ==>  ", this.dataSource)

    // this.dataSource = this.dataSource.splice(2)
    this.dataSource = this.dataSource.filter(park => park.options.includes(<FilterOptions> toFilter)) //casted enum to string param

    console.log(this.dataSource)
  }

  public toggleSelected() {

  }
}
