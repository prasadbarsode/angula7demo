import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { PagerService } from '../services/pager.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  
  title='Photos';

  photos:any[];

   // pager object
   pager: any = {};

   // paged items
   pagedItems: any[];

   albumId=0;

  message='';
  constructor(private ps:PhotosService,private pagerService:PagerService,private route:ActivatedRoute) {
    console.log("PhotosComponent created....")
   }

   ngOnInit() {
    this.albumId=this.route.snapshot.queryParams.albumId;
    console.log("PhotosComponent initialized...."+this.albumId)
    if(this.albumId)
 this.getPhotosByUserId();
 else
    this.getAllPhotos();
  }

  ngOnDestroy() {
    console.log("PhotosComponent destroyed....")
  }
  getAllPhotos(){
    this.ps.getAllPhotos()
           .subscribe(response=>{this.photos=response;
            this.setPage(1);
          },error=>this.message=error);
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.photos.length, page);

    // get current page of items
    this.pagedItems = this.photos.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

getPhotosByUserId(){
  this.ps.getPhotosByUserId(this.albumId)
         .subscribe(response=>{this.photos=response;
        this.setPage(1);
        },error=>this.message=error);
}



}
