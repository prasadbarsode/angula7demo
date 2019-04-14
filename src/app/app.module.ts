import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { HttpClientModule} from '@angular/common/http';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { GenderPipe } from './pipes/gender.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { CaseStudyComponent } from './case-study/case-study.component';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { CommentsComponent } from './comments/comments.component';
import { NestedComponent } from './nested/nested.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { SpringBootComponent } from './spring-boot/spring-boot.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';
import { NgShowDirective } from './directives/ng-show.directive';
import { NgHideDirective } from './directives/ng-hide.directive';
import { FgColorDirective } from './directives/fg-color.directive';
import { BgcolorDirective } from './directives/bgcolor.directive';
import { StudentFormComponent } from './student-form/student-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeCrudComponent } from './employee-crud/employee-crud.component';
import { AccountCrudComponent } from './account-crud/account-crud.component';
import { NumberComponent } from './number/number.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';


@NgModule({
  declarations: [//components,directives,pipes
    AppComponent, AngularBasicsComponent, TechnologiesComponent, AngularPipesComponent, GenderPipe, OrderByPipe, CaseStudyComponent, UsersComponent, UsersListComponent, UsersTableComponent, PostsComponent, TodosComponent, AlbumsComponent, PhotosComponent, CommentsComponent, NestedComponent, CustomDirectivesComponent, FormValidationComponent, ViewchildComponent, SpringBootComponent, CountryComponent, StateComponent, CityComponent, NgShowDirective, NgHideDirective, FgColorDirective, BgcolorDirective, StudentFormComponent, ReactiveFormComponent, EmployeeCrudComponent, AccountCrudComponent, NumberComponent, StopwatchComponent
  ],
  imports: [//modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],//services
  bootstrap: [AppComponent]//components
})
export class AppModule { }
