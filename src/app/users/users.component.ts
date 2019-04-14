import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  message='';


  userId=0;

  user:any;


  constructor(private us:UsersService,private route:ActivatedRoute) {
    console.log("UsersComponent created....")
   }

  ngOnInit() {
    
   this.userId=this.route.snapshot.params.userId;
    
    
    console.log("UsersComponent initialized...."+this.userId);
  



    if(this.userId) 
    this.getUserByUserId();
  
  }

  ngOnDestroy() {
    console.log("UsersComponent destroyed....")
  }


  getUserByUserId(){
    
    this.us.getUserByUserId(this.userId)
           .subscribe(response=>this.user=response,error=>this.message=error);

  }


}
