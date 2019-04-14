import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../services/comments.service';
import { PagerService } from '../services/pager.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  title='Comments';
  comments:any[];
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];


  message='';


  postId=0;



  constructor(private commentsService:CommentsService,private pagerService:PagerService,private route:ActivatedRoute) { 
    console.log("CommentsComponant created.....")

  }

  ngOnInit() {
    
    this.postId=this.route.snapshot.queryParams.postId;
    
    
    console.log("CommentsComponent initialized...."+this.postId);


    if(this.postId)
    this.getAllCommentsByPostId();
     else
    this.getAllComments();
  
  
  
  }

  ngOnDistroy(){
    console.log("Comments Component distroy.....");
  }
 
  getAllComments(){
    this.commentsService.getAllComments()
                        .subscribe(response=>{this.comments=response;
                          this.setPage(1);
                          },error=>this.message=error);
  }

  getAllCommentsByPostId(){
    this.commentsService.getAllCommentsByPostId(this.postId)
                        .subscribe(response=>{this.comments=response;
                          this.setPage(1);
                          },error=>this.message=error);
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.comments.length, page);

    // get current page of items
    this.pagedItems = this.comments.slice(this.pager.startIndex, this.pager.endIndex + 1);
}


}
