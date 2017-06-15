import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles:[`
  	h1{
  	text-decoration:underline;
  	}
  	.red{
  		color:red;
  		text-decoration:underline;
  		cursor:pointer;
  		font-size:16px;
  		font-weight:bold;
  	}
  	.blue{
  		color:blue;
  		text-decoration:underline;
  		cursor:pointer;
  	}
  `]
})
export class AppComponent {

	constructor(private dataservice:DataService){

	}
	someProp:string='';
	ngOnInit(){
		console.log(this.dataservice.cars);
		this.someProp = this.dataservice.myData();
	}
  title = 'app works!';
  titleStyle = 'red';
  titleStatus = true;
  titleClass = 'blue';
  titleStyles = {
  	'color' : 'green',
  	'font-size':'14px'
  }
  changeClass(){
  	this.titleClass = 'red';
  }
  
}
