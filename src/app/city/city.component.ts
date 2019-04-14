import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {


  name='PUNE';


  @Input()
  countryName='';
  
  
  @Input()
  stateName='';
  

  @Output()
  cityChanged=new EventEmitter<string>();



  constructor() { }

  ngOnInit() {
  }


  sendCityToState(){
    this.cityChanged.emit(this.name);
    console.log("In sendCityTostate :"+this.name);
  }


}
