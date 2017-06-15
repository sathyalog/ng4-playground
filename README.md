# Ng4Playground

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Constructor
The Constructor is a default method of the class that is executed when the class is instantiated and ensures proper initialization of fields in the class and its subclasses. This should be called before ngOnInit().

## OnInit
ngOnInit is a life cycle hook called by Angular2 to indicate that Angular is done creating the component.

We have to import OnInit in order to use like this (actually implementing OnInit is not mandatory but considered good practice).Mostly we use ngOnInit for all the initialization/declaration and avoid stuff to work in the constructor. The constructor should only be used to initialize class members but shouldn't do actual "work".

## ngIf, ngIf-else, ngIf-then-else, ngFor, ng-templates 
used in templates commit. Have a look.

## event binding examples
(focus)="myMethod()"  // An element has received focus
(blur)="myMethod()"   // An element has lost focus

(submit)="myMethod()"  // A submit button has been pressed

(scroll)="myMethod()"

(cut)="myMethod()"
(copy)="myMethod()"
(paste)="myMethod()"

(keydown)="myMethod()"
(keypress)="myMethod()"
(keyup)="myMethod()"

(mouseenter)="myMethod()"
(mousedown)="myMethod()"
(mouseup)="myMethod()"

(click)="myMethod()"
(dblclick)="myMethod()"

(drag)="myMethod()"
(dragover)="myMethod()"
(drop)="myMethod()"

## style binding
Used [style.color] and [ngStyle] in this commit.

## class binding
Change classnames of your element on conditions and apply related class properties dynamically. Check this related commit. 
