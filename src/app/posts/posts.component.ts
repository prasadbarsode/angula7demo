import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { PagerService } from '../services/pager.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  title='Posts';

  posts:any[];


  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  message='';
  
  
  userId=0;


  
  
  constructor(private ps:PostsService,private pagerService:PagerService,private route:ActivatedRoute) {
    console.log("PostsComponent created....")
   }

   ngOnInit() {

    this.userId=this.route.snapshot.queryParams.userId;

    console.log("postsComponent initialized...."+this.userId);

 if(this.userId)
 this.getAllPostsByUserId();
 else
  this.getAllPosts();
  
  
  
  }

  ngOnDestroy() {
    console.log("PostsComponent destroyed....")
  }


  getAllPosts(){
    this.ps.getAllPosts()
           .subscribe(response=>{this.posts=response;
          this.setPage(1);
          },error=>this.message=error);
  }


  getAllPostsByUserId(){
    this.ps.getAllPostsByUserId(this.userId)
           .subscribe(response=>{this.posts=response;
          this.setPage(1);
          },error=>this.message=error);
  }



  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.posts.length, page);

    // get current page of items
    this.pagedItems = this.posts.slice(this.pager.startIndex, this.pager.endIndex + 1);
}








}
