import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-angular-basics',
  templateUrl: './angular-basics.component.html',
  styleUrls: ['./angular-basics.component.css']
})
export class AngularBasicsComponent implements OnInit,OnDestroy {

  title='Angular Basics';
  colors=['RED','MAGENTA','GREEN','BLUE'];
  day=1;
  min=1;
  max=8;
  show=true;
  hide=false;
  today=new Date();
  employee={id:101,
            name:'Pradeep chinchole',
            salary:123455.343545,
            variable:0.15,
            doj:new Date("February 01,2017"),
            mobile:'9158652627',
            pan:'amxfd9834r'
            };
       





  constructor() {
    console.log("########AngularBasicsComponent created #######");
    }

  ngOnInit() {
    console.log("########AngularBasicsComponent initialized #######");
  }

  ngOnDestroy() {
    console.log("########AngularBasicsComponent destroyed #######");
  }

  showHide(){
    this.hide=!this.hide;
  }

}
