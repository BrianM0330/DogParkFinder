import {FilterOptions} from './filter.model';

export interface ParkObject { //define the  necessary attributes of a park object
  name: string;
  population: number
  maxPopulation: number
  options: FilterOptions[];
  latitude: number;
  longitude: number;
}

export class Parks {
  public parksList: ParkObject[] = [

    {
      name : "Small Dog Park",
      population: 5,
      maxPopulation: 15,
      options : [FilterOptions.Small_Dogs, FilterOptions.Low_Capacity, FilterOptions.Low_Population, FilterOptions.Public],
      latitude : 69.420,
      longitude : 1337
    },

    {
      name : "Big Boi Park",
      population: 28,
      maxPopulation: 35,
      options : [FilterOptions.Big_Dogs, FilterOptions.High_Capacity, FilterOptions.High_Population, FilterOptions.Public],
      latitude : 69.420,
      longitude : 1337
    },

    {
      name : "Rich People Only",
      population: 12,
      maxPopulation: 40,
      options : [FilterOptions.Big_Dogs, FilterOptions.Low_Capacity, FilterOptions.Low_Population, FilterOptions.Private, FilterOptions.Membership],
      latitude : 69.420,
      longitude : 1337
    },

    {
      name : "Fido's home",
      population: 5,
      maxPopulation: 45,
      options : [FilterOptions.Small_Dogs, FilterOptions.Low_Capacity, FilterOptions.Low_Population, FilterOptions.Public],
      latitude : 69.420,
      longitude : 1337
    },

    {
      name : "Snoopyland",
      population: 31,
      maxPopulation: 40,
      options : [FilterOptions.Big_Dogs, FilterOptions.Low_Capacity, FilterOptions.Low_Population, FilterOptions.Public, FilterOptions.Free],
      latitude : 69.420,
      longitude : 1337
    },

    {
      name : "Unethical Designer Dogs Only",
      population: 3,
      maxPopulation: 10,
      options : [FilterOptions.Big_Dogs, FilterOptions.Low_Capacity, FilterOptions.Low_Population, FilterOptions.Private, FilterOptions.Membership, FilterOptions.Small_Dogs],
      latitude : 69.420,
      longitude : 1337
    },

    {
      name : "Marxland",
      population: 69,
      maxPopulation: 100,
      options : [FilterOptions.Big_Dogs, FilterOptions.Small_Dogs, FilterOptions.High_Capacity, FilterOptions.High_Population, FilterOptions.Public, FilterOptions.Free],
      latitude : 69.420,
      longitude : 1337
    }
  ]

  constructor () {
  }
}
