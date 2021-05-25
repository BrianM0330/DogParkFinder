import {FilterOptions} from './filter.model';

export interface ParkObject { //define the  necessary attributes of a park object
  name: string;
  options: FilterOptions[];
  latitude: number;
  longitude: number;
}

export class Parks {
  public parksList: ParkObject[] = [
    {
      name : "Small Dog Park",
      options : [FilterOptions.SMALL_DOGS, FilterOptions.LOW_CAPACITY, FilterOptions.LOW_POPULATION, FilterOptions.PUBLIC],
      latitude : 69.420,
      longitude : 1337
    },

    {
      name : "Big Boi Park",
      options : [FilterOptions.BIG_DOGS, FilterOptions.HIGH_CAPACITY, FilterOptions.HIGH_POPULATION, FilterOptions.PUBLIC],
      latitude : 69.420,
      longitude : 1337
    },

    {
      name : "Rich People Only",
      options : [FilterOptions.SMALL_DOGS, FilterOptions.BIG_DOGS, FilterOptions.LOW_CAPACITY, FilterOptions.LOW_POPULATION, FilterOptions.PRIVATE, FilterOptions.MEMBERSHIP],
      latitude : 69.420,
      longitude : 1337
    },

    {
      name : "Fido's home",
      options : [FilterOptions.SMALL_DOGS, FilterOptions.LOW_CAPACITY, FilterOptions.LOW_POPULATION, FilterOptions.PUBLIC],
      latitude : 69.420,
      longitude : 1337
    }
  ]

  constructor () {
  }
}
