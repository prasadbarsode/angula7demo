import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCrudComponent implements OnInit {

  title='Employee CRUD Application'

  employees:any[];

  employee:any;

  message="";


  add=false;
  save=false;

  constructor(private employeeService:EmployeeService) {
    console.log("EmployeeCrudComponent created...")
   }

  ngOnInit() {
    this.getAllEmployees();
    console.log("EmployeeCrudComponent initialized...")
  }

  ngOnDestroy() {
    console.log("EmployeeCrudComponent destroyed...")
  }

  getAllEmployees(){

    this.employeeService.getAllEmployees()
           .subscribe(response=>this.employees=response,
                       error=>this.message=error);

    console.log("employees:", this.employees);                    

  }

}
