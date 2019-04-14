import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL="http://localhost:1212/spring-employee-mvc/employees";

  constructor(private http:HttpClient) {
    console.log("EmployeeService created....");
   }

   getAllEmployees():Observable<any>{
    return this.http.get(this.baseURL)
   }
   
   getEmployeeByEmpno(empno:number):Observable<any>{
     return this.http.get(this.baseURL+"/"+empno);
    }
   
    deleteEmployeeByEmpno(empno:number):Observable<any>{
     return this.http.delete(this.baseURL+"/"+empno);
    }
    updateEmployeeByEmpno(empno:number,employee:any):Observable<any>{
     return this.http.put(this.baseURL+"/"+empno,employee);
    }
   
   
    addEmployee(employee:any):Observable<any>{
     return this.http.post(this.baseURL,employee);
    }
}
