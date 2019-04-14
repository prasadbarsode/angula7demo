import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { PagerService } from '../services/pager.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  
  title='Todos';

  todos:any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  userId=0;

  message='';
  constructor(private ts:TodosService,
    private pagerService:PagerService,
    private route:ActivatedRoute) {
    console.log("TodosComponent created....")
   }

   ngOnInit() {
    this.userId=this.route.snapshot.queryParams.userId;
    console.log("TodosComponent initialized...."+this.userId)


    if(this.userId)
          this.getAllTodosByUserId();
    else
          this.getAllTodos();
  }

  ngOnDestroy() {
    console.log("TodosComponent destroyed....")
  }

  getAllTodos(){
    this.ts.getAllTodos()
           .subscribe(response=>{this.todos=response;
            this.setPage(1);
          },error=>this.message=error);
  }

  getAllTodosByUserId(){
             this.ts.getAllTodosByUserId(this.userId)
           .subscribe(response=>{this.todos=response;
            this.setPage(1);
          },error=>this.message=error);
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.todos.length, page);

    // get current page of items
    this.pagedItems = this.todos.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

}