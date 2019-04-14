import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../services/albums.service';
import { PagerService } from '../services/pager.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  
  title='Albums';

  albums:any[];


  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  message='';

  userId=0;

  constructor(private as:AlbumsService,private pagerService:PagerService,private route:ActivatedRoute) {
    console.log("AlbumsComponent created....")
   }

   ngOnInit() {
    this.userId=this.route.snapshot.queryParams.userId;
    console.log("AlbumsComponent initialized...."+this.userId);
    if(this.userId)
    this.getAlbumsByUserId();
    else
    this.getAllAlbums();
  }

  ngOnDestroy() {
    console.log("AlbumsComponent destroyed....")
  }
  getAllAlbums(){
    this.as.getAllAlbums()
           .subscribe(response=>{this.albums=response;
            this.setPage(1);
            },error=>this.message=error);
  }


  getAlbumsByUserId(){
    this.as.getAlbumsByUserId(this.userId)
           .subscribe(response=>{this.albums=response;
            this.setPage(1);
            },error=>this.message=error);
  }

  
  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.albums.length, page);

    // get current page of items
    this.pagedItems = this.albums.slice(this.pager.startIndex, this.pager.endIndex + 1);
}


}
