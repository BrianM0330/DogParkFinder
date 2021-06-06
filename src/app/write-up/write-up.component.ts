import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component
({
  selector: 'app-write-up',
  templateUrl: './write-up.component.html',
  styleUrls: ['./write-up.component.css']
})
export class WriteUpComponent implements OnInit 
{

  editForm = new FormGroup
  (
    {
      name    : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      review  : new FormControl('', [Validators.required, Validators.minLength(25)])
    }
  )

  controls = this.editForm.controls;
  toBePosted  : string;
  smallPark   : string[] = [];
  bigPark     : string[] = [];
  richPark    : string[] = [];
  fidoPark    : string[] = [];

  constructor(private ems : EventEmitterService) 
  {

  }

  ngOnInit(): void 
  {
    if ( this.ems.subsVar == undefined )
    {
      this.ems.subsVar = this.ems.invokeFunction.subscribe(() => { this.postReview(); })
    }
  }
  
  refreshReview()
  {
    // Create review components
    var park  = (document.getElementById("w-select")) as HTMLSelectElement;
    // Reset all form values
    this.controls.name.reset(""); this.controls.review.reset(""); park.value = "Select Which Park To Review";
  }

  saveReview()
  {
    var submit = true;
    var selectedPark = (document.getElementById("w-select")) as HTMLSelectElement;
    // Ensure all fields are filled out properly before sending review components
    if ( selectedPark.value == "Select Which Park To Review" || this.controls.review.invalid || this.controls.name.invalid ) 
    { submit = false; }
    
    // Print values for testing
    if ( submit == true )
    {
      var completeReview = this.controls.name.value + " : " + this.controls.review.value + "\n\n";
      if ( selectedPark.value == "Small Dog Park" )
      {
        this.smallPark.push(completeReview);
      }
      else if ( selectedPark.value == "Big Boi Park" )
      {
        this.bigPark.push(completeReview);
      }
      else if ( selectedPark.value == "Rich People Only" )
      {
        this.richPark.push(completeReview);
      }
      else if (selectedPark.value == "Fido's Home" )
      {
        this.fidoPark.push(completeReview);
      }
      this.postReview();
      return this.refreshReview();
    }
    alert("All fields must be filled out to submit review")
  }

  postReview()
  {
    var txtArea = (document.getElementById("p-txt")) as HTMLTextAreaElement;
    var selectedPark = (document.getElementById("p-select")) as HTMLSelectElement;

    
    if ( selectedPark.value == "Small Dog Park" && this.smallPark.length != 0 )
    {
      txtArea.value = this.strBuilder(this.newest(this.smallPark));
    }
    else if ( selectedPark.value == "Big Boi Park" && this.bigPark.length != 0 )
    {
      txtArea.value = this.strBuilder(this.newest(this.bigPark));
    }
    else if ( selectedPark.value == "Rich People Only" && this.richPark.length != 0 )
    {
      txtArea.value = this.strBuilder(this.newest(this.richPark));
    }
    else if ( selectedPark.value == "Fido's Home" && this.fidoPark.length != 0 )
    {
      txtArea.value = this.strBuilder(this.newest(this.fidoPark));
    }
    else 
    {
      if ( selectedPark.value != "Park Reviews") { txtArea.value = "No Reviews Yet"; } 
      else { txtArea.value = ""; }
    }
    return;
  }

  newest( toBeSorted : string[] )
  {
    var selectedSort = (document.getElementById("s-select")) as HTMLSelectElement;
    if ( selectedSort.value == "Newest")
    {
      const sorted : string[] = toBeSorted.reverse();
      return sorted;
    }
    return toBeSorted;
  }

  strBuilder( toBeStringed : string[] )
  {
    var stringed : string = "";
    for ( var str in toBeStringed )
    {
      stringed += toBeStringed[str];
    }
    return stringed;
  }
}