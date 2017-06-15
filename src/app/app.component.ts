import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles:[`
  	h1{
  	text-decoration:underline;
  	}
  `]
})
export class AppComponent {
  title = 'app works!';
  titleStyle = 'red';
  titleStatus = true;
  titleStyles = {
  	'color' : 'green',
  	'font-size':'14px'
  }
}
