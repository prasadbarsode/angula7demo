import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//where to inject
  templateUrl: './app.component.html',//where to diplay
  //template: '<h3>{{title}}</h3>',//where to diplay
  styleUrls: ['./app.component.css'] //how to display
})
export class AppComponent {
  title = 'angular7-app-template';//what to display
}
