import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
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
  	console.log("Hey welcome to angular4 basics")
  }
}
