import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NumberComponent } from '../number/number.component';
import { StopwatchComponent } from '../stopwatch/stopwatch.component';
import { BgcolorDirective } from '../directives/bgcolor.directive';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {

  @ViewChild(NumberComponent)
  private numberComponent: NumberComponent;
  
  @ViewChild(StopwatchComponent)
  private stopwatchComponent: StopwatchComponent;
  
  
  @ViewChild(BgcolorDirective)
  private b:BgcolorDirective;


  @ViewChild('name') 
	private name : ElementRef;
  
  @ViewChild('city') 
	private city : ElementRef;
	




  increase() {
     this.numberComponent.increaseByOne();
  }
  
  
  decrease() {
     this.numberComponent.decreaseByOne();
  }


  startStopwatch() {
    this.stopwatchComponent.start();
}
stopStopwatch() {
    this.stopwatchComponent.stop();
}



changeBgColor(){
this.b.bgColor="lightgreen";

this.name.nativeElement.style.color='blue';
this.city.nativeElement.style.color='blue';

this.name.nativeElement.style.backgroundColor='wheat';
this.city.nativeElement.style.backgroundColor='wheat';



}




  constructor() { }

  ngOnInit() {
  }

}
