import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
  cars = ['nissan','renault','infiniti'];

  myData(){
  	return 'My Data';
  }
}
