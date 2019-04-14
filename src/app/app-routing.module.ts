import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { TodosComponent } from './todos/todos.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { NestedComponent } from './nested/nested.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { SpringBootComponent } from './spring-boot/spring-boot.component';

const routes: Routes = [
  {path:'basics',component:AngularBasicsComponent},
  {path:'pipes',component:AngularPipesComponent},
  
 
  {path:'casestudy',component:CaseStudyComponent,
   children:[
    {path:'',component:UsersComponent},
    {path:'users',component:UsersComponent,
     children:[
      {path:'list',component:UsersListComponent},
      {path:'table',component:UsersTableComponent},
     ]
    
  },
  { path: 'casestudy', pathMatch: 'full', redirectTo: '(casetudy/users/list)'},
  
  {path:'users/:userId',component:UsersComponent},
  
  {path:'posts',component:PostsComponent},
    {path:'comments',component:CommentsComponent},
    {path:'todos',component:TodosComponent},
    {path:'albums',component:AlbumsComponent},
    {path:'photos',component:PhotosComponent},
           

            


   ]

  },
  
  {path:'technologies',component:TechnologiesComponent},
  {path:'nested-comp',component:NestedComponent},
  {path:'custom-directives',component:CustomDirectivesComponent},
  {path:'form-validation',component:FormValidationComponent},
  {path:'view-child',component:ViewchildComponent},
  {path:'spring-boot',component:SpringBootComponent},
  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
