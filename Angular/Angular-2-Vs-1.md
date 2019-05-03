## Angular 2 vs. Angular 1

>Angular2 has better performance.

>It is entirely component based.

>Angular2 much more testable

>Better change detection

>Angular2 has more powerful template system.

>Angular2 provide simpler APIs, lazy loading and easier to application debugging.

>Ahead of Time compilation (AOT) improves rendering speed

>Angular1 is controllers and $scope based but Angular2 is component based.

>The Angular2 structural directives syntax is changed like ng-repeat is replaced with *ngFor etc.

>TypeScript can be used for developing Angular 2 applications

>Better syntax and application structure

There are more advantages over performance, template system, application debugging, testing, components and nested level components.
For Examples as,

### Angular 1 Controller:-
```
var app = angular.module("userApp", []);
   app.controller("productController", function($scope) {
   $scope.users = [{ name: "Anil Singh", Age:30, department :"IT" },
  { name: "Aradhya Singh", Age:3, department :"MGMT" }];
}); 
```
### Angular 2 Components using TypeScript:-

Here the @Component annotation is used to add the metadata to the class.
```
import { Component } from 'angular2/core';
@Component({
  selector: 'usersdata',
  template: `<h3>{{users.name}}</h3>`
})
 
export class UsersComponent {
  users = [{ name: "Anil Singh", Age:30, department :"IT" },
  { name: "Aradhya Singh", Age:3, department :"MGMT" }];
}

Bootstrapping in Angular 1 using ng-app,
angular.element(document).ready(function() {
   angular.bootstrap(document, ['userApp']);
});
```
### Bootstrapping in Angular 2,
```
import { bootstrap } from 'angular2/platform/browser';
import { UsersComponent } from './product.component';

bootstrap(UserComponent);
```
The Angular2 structural directives syntax is changed like ng-repeat is replaced with *ngFor etc.

For example as,
//Angular 1,
```
<div ng-repeat="user in users">
     Name: {{user.name}}, Age : {{user.Age}}, Dept: {{user.Department}}
</div>

//Angular2,
<div *ngFor="let user of users">
     Name: {{user.name}}, Age : {{user.Age}}, Dept: {{user.Department}}
</div>
```
