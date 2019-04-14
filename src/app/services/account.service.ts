import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseURL="http://localhost:2323/spring-bank-mvc/accounts";
 
  constructor(private http:HttpClient) {
    console.log("AccountService created....");
   }

getAllAccounts():Observable<any>{
 return this.http.get(this.baseURL)
}

getAccountByAccno(accno:number):Observable<any>{
  return this.http.get(this.baseURL+"/"+accno);
 }

 deleteAccountByAccno(accno:number):Observable<any>{
  return this.http.delete(this.baseURL+"/"+accno);
 }
 updateAccountByAccno(accno:number,account:any):Observable<any>{
  return this.http.put(this.baseURL+"/"+accno,account);
 }


 addAccount(account:any):Observable<any>{
  return this.http.post(this.baseURL,account);
 }




}
