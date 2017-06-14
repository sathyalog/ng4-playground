import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  template:`
  	<p> Its an internal template rendering method</p>
  	<ul>
  		<li *ngFor="let arr of myArr">{{arr}}</li>
  	</ul>
  	<span *ngIf="myObject">{{myObject.name}} lives in {{myObject.location}}. Mother country is {{myObject.homeCountry}}</span><br/>
  	<span *ngIf="myName == 'Sathya';else otherTmpl">Hey! Its me Sathya.</span>
  	<ng-template #otherTmpl>I am not Sathya</ng-template>
  	<br/>
  	<div *ngIf="isTrue; then tmpl1 else tmpl2"></div>
  	<ng-template #tmpl1>True</ng-template>
  	<ng-template #tmpl2>False</ng-template><br/>
  	Three type of property binding here..
  	<img src={{angularLogo}}/>
  	<img [src]="angularLogo"/>
  	<img bind-src="angularLogo"/><br/><br/>
  	<button [disabled]="btnStatus" (click)="myEvent($event)">My Button</button>
  `,
  //templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

  constructor() { }//called first time before the ngOnInit()
  //The Constructor is a default method of the class that is executed when the class is instantiated and ensures proper initialization of fields in the class and its subclasses. 

  ngOnInit() {
  //called after the constructor and called  after the first ngOnChanges().ngOnChanges is called when an input or output binding value changes
 
  this.sayHi();
  }
  sayHi(){
  	console.log("Hey welcome to angular4 basics");
  }
  myArr = ['him','her','them'];
  myObject = {
  	name: 'Sathya',
  	age:30,
  	location:'London',
  	'homeCountry':'India'
  }
  myName='Sathya V'; //try changing me
  isTrue=false;

  angularLogo = 'https://angular.io/assets/images/logos/angular/angular.png';
  btnStatus = false;
  myEvent(event){
  	console.log(event);
  }
}
