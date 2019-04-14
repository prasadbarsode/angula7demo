import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account-crud',
  templateUrl: './account-crud.component.html',
  styleUrls: ['./account-crud.component.css']
})
export class AccountCrudComponent implements OnInit {

  title='Account CRUD Application'

  accounts:any[];

  account:any;

  message="";


  add=false;
  save=false;





  constructor(private as:AccountService) {
    console.log("AccountCrudComponent created...")
   }

  ngOnInit() {
    this.getAllAccounts();
    console.log("AccountCrudComponent initialized...")
  }

  ngOnDestroy() {
    console.log("AccountCrudComponent destroyed...")
  }


  newAccount(){
    this.add=false;
    this.save=true; 
this.account={
  accno:0,
  name:'',
  balance:0.0,
  email:'',
  mobile:'',
  pan:'',
  doc:new Date()
}

  }


  getAllAccounts(){

    this.as.getAllAccounts()
           .subscribe(response=>this.accounts=response,
                       error=>this.message=error);

  }


  getAccountByAccno(accno:number){

    this.as.getAccountByAccno(accno)
           .subscribe(response=>this.account=response,
                       error=>this.message=error);

  
   this.add=true;
   this.save=false;                    

  
                      }


  deleteAccountByAccno(accno:number){

    this.as.deleteAccountByAccno(accno)
           .subscribe(response=>this.accounts=response,
                       error=>this.message=error);

  }



  updateAccountByAccno(accno:number){

    this.as.updateAccountByAccno(accno,this.account)
           .subscribe(response=>this.accounts=response,
                       error=>this.message=error);

                       this.account=null;
                       
  }




  addAccount(){

    this.as.addAccount(this.account)
           .subscribe(response=>this.accounts=response,
                       error=>this.message=error);


                       this.account=null;

  }



}
