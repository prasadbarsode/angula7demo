import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.css']
})
export class AngularPipesComponent implements OnInit {

 title="Angular7 Pipes"

 time=new Observable<string>((s:Subscriber<string>)=>{
  setInterval(()=>{
    s.next(new Date().toLocaleString());
  },1000);
 });

 sortColumn='id';
 descending=false;

 searchText='';
 rows=3;


 sort(column){

   if(this.sortColumn==column)
   this.descending=!this.descending;
   this.sortColumn=column;
 }



  employees=[
    {id:101,name:"amol pathak",salary:12342,city:"Pune",age:23,gender:1,
    dob:new Date("May 31,1982"),pan:"PCXAM9834D",mobile:"9158652623",variable:0.15},
    {id:322,name:"sachin kale",salary:123332.44554,city:"Mumbai",age:43,gender:1,
    dob:new Date("June 31,1989"),pan:"AXAM98345E",mobile:"8158652625",variable:0.12},
    {id:133,name:"sunil kadam",salary:112242.44554,city:"Banglore",age:53,gender:1,
    dob:new Date("July 31,1992"),pan:"FCXAM9834M",mobile:"7158652627",variable:0.10},
    {id:432,name:"mahesh jadhav",salary:32342.44554,city:"Solapur",age:43,gender:1,
    dob:new Date("July 31,1981"),pan:"CCXAM9834O",mobile:"7758652626",variable:0.16},
    {id:453,name:"Pradeep Chinchole",salary:12342.44554,city:"Mumbai",age:13,gender:3,
    dob:new Date("July 31,1972"),pan:"HCXAM9834E",mobile:"9158652626",variable:0.16},
    {id:422,name:"Vrushali Nagarkar",salary:44232342.44554,city:"Pune",age:43,gender:2,
    dob:new Date("July 31,1974"),pan:"GCXAM9834M",mobile:"8858652623",variable:0.15},
    {id:431,name:"Prachitee Joshi",salary:4432342.44554,city:"Nagpur",age:33,gender:2,
    dob:new Date("July 31,1985"),pan:"YCXAM9834X",mobile:"8758652622",variable:0.16},
    {id:454,name:"Maohan Patil",salary:545342.44554,city:"Pune",age:32,gender:3,
    dob:new Date("July 31,1982"),pan:"PXAM98345D",mobile:"8558652629",variable:0.20},
      
  ];
  

  constructor() {
    console.log("########AngularPipesComponent created #######");
    }

  ngOnInit() {
    console.log("########AngularPipesComponent initialized #######");
  }

  ngOnDestroy() {
    console.log("########AngularPipesComponent destroyed #######");
  }

}
