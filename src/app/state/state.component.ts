import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {


  name='MAHARASHTRA';


 cityName='';


 @Input()
 countryName='';



 @Output()
 cityChanged=new EventEmitter<string>();

 @Output()
 stateChanged=new EventEmitter<string>();




  constructor() { }

  ngOnInit() {
  }

  sendCityToCountry(city){
    this.cityName=city;
    this.cityChanged.emit(city);
  }


  sendStateToCountry(){
    this.stateChanged.emit(this.name);
  }





}
