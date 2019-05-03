## Diffrenec between Template Driven Forms Features Reactive Forms Features

### Template Driven Forms Features

>Easy to use
>Suitable for simple scenarios and fails for complex scenarios
>Similar to AngularJS
>Two way data binding(using [(NgModel)] syntax)
>Minimal component code
>Automatic track of the form and its data(handled by Angular)
>Unit testing is another challenge

add the FormsModule to the array of imports for the application module before you can use forms
in app.module.ts
    import { FormsModule }   from '@angular/forms';

in html 
```
    <form (ngSubmit)="onSubmit()" #heroForm="ngForm">
        <input type="text" class="form-control" id="name" [(ngModel)]="model.name" name="name"      #name="ngModel">
    </form>
```
### Reactive Forms Features

>More flexible, but needs a lot of practice
>Handles any complex scenarios
>No data binding is done (immutable data model preferred by most developers)
>More component code and less HTML markup
>Reactive transformations can be made possible such as
>Handling a event based on a debounce time
>Handling events when the components are distinct until changed
>Adding elements dynamically
>Easier unit testing

    https://angular.io/guide/reactive-forms
    Example
    import { ReactiveFormsModule } from '@angular/forms';

