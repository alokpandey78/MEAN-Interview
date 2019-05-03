### The Angular 5 Improvements

    Improvements on Lazy loading

### Contains bunch of new features, performance improvements and lot of bug fixes
    Make AOT the default
    Watch mode
    Type checking in templates
    More flexible metadata
    Remove *.ngfactory.ts files
    Better error messages
    Smooth upgrades
    Tree-Shakeable components
    Hybrid Upgrade Application

### Performance Improvements
    Use of addEventListener for the faster rendering and it is the core functionality.
    Update to new version of build-optimizer.
    Added some Improvements on the abstract class methods and interfaces
    Switch Angular to use Static-Injector instead of Reflective-Injector.
    Improve the applications testing.
    Improve the performance of hybrid applications
    Improvements on Lazy loading for Angular

### Some Improvement on HttpClient – 
    This is used for Applications communicate with backend services over the HTTP protocol!
    Improvement on Type-checking the response
    Improvement on Reading the full response
    Improvement on Error handling and fetching error details
    Improvement on Intercepting all requests or responses
    Improvement on Logging
    Improvement on Caching
    Improvement on XSRF Protection

### Router Life Cycle Events – Angular 5

### Added new router life cycle events for Guards and Resolvers -
    GuardsCheckStart,
    GuardsCheckEnd,
    ResolveStart and
    ResolveEnd

### Angular 5 Bug Fixes - Angular 5
    Fixed compilation error by using the correct type for providers
    Skip PWA test when redeploying non-public commit
    Don't strip CSS source maps. This is the compiler related fix
    Remove tsickle (language-service) dependency
    Support persisting dynamic styles within animation states
    Ignore @import in multi-line css
    Fix platform-browser-dynamic
    Forbid destroyed views to be inserted or moved in VC
    Support persisting dynamic styles within animation states

### ---------  What’s New in Angular 4? AND what are the Improvements in Angular 4? -------------
    additional Enhancement and Improvement.
    1. Smaller & Faster Apps
    2. View Engine Size Reduce
    3. Animation Package
    4. NgIf and ngFor Improvement
    5. Template
    6. NgIf with Else
    7. Use of AS keyword
    8. Pipes
    9. HTTP Request Simplified
    10. Apps Testing Simplified
    11. Introduce Meta Tags
    12. Added some Forms Validators Attributes
    13. Enhancement in Router

### 1. Smaller & Faster Apps -
    Angular 4 applications is smaller & faster in comparison with Angular 2.

### 2. View Engine Size Reduce - 
    Some changes under to hood to what AOT generated code compilation that means in Angular 4, 
    improved the compilation time. 
    These changes reduce around 60% size in most cases. 

### 3. Animation Package- 
    Animations now have their own package i.e. @angular/platform-browser/animations

### 4. Improvement - 
    Some Improvement on *ngIf and *ngFor.

### 5. Template - The template is now ng-template. 
    You should use the “ng-template” tag instead of “template”
    Now Angular has its own template tag that is called “ng-template”.

### 6. NgIf with Else – 
    Now in Angular 4, possible to use an else syntax as,
    <div *ngIf="user.length > 0; else empty">
        <h2>Users</h2>
    </div>

    <ng-template #empty>
        <h2>No users.</h2>
    </ng-template>

### 7. AS keyword – 
    A new addition to the template syntax is the “as keyword” is use to simplify to the “let” syntax.

    Use of as keyword,
    <div *ngFor="let user of users | slice:0:2 as total; index as = i">
        {{i+1}}/{{total.length}}: {{user.name}}
    </div>

    To subscribe only once to a pipe “|” with “async” and If a user is an observable, you can now use to write,
    <div *ngIf="users | async as usersModel">
        <h2>{{ usersModel.name }}</h2> <small>{{ usersModel.age }}</small>
    </div>

### 8. Pipes - 
    Angular 4 introduced a new “titlecase” pipe “|” and use to changes the first letter of each word into the uppercase. 
    The example as,
    <h2>{{ 'anil singh' | titlecase }}</h2>
    <!-- OUPPUT - It will display 'Anil Singh' -->

### 9. Http - 
    Adding search parameters to an “HTTP request” has been simplified as,

    //Angular 4 -
    http.get(`${baseUrl}/api/users`, { params: { sort: 'ascending' } });

    //Angular 2-
    const params = new URLSearchParams();
    params.append('sort', 'ascending');
    http.get(`${baseUrl}/api/users`, { search: params });

### 10. Test- Angular 4, overriding a template in a test has also been simplified as,

    //Angular 4 -
    TestBed.overrideTemplate(UsersComponent, '<h2>{{users.name}}</h2>');

    //Angular 2 -
    TestBed.overrideComponent(UsersComponent, {
        set: { template: '<h2>{{users.name}}</h2>' }
    });

### 11. Service- 
    A new service has been introduced to easily get or update “Meta Tags” i.e.

    @Component({
        selector: 'users-app',
        template: `<h1>Users</h1>`
    })
    export class UsersAppComponent {
        constructor(meta: Meta) {
            meta.addTag({ name: 'Blogger', content: 'Anil Singh' });
        }
    }

### 12. Forms Validators - 
    One new validator joins the existing “required”, “minLength”, “maxLength” and “pattern”. An email helps you validate that the input is a valid email.

### 13. Compare Select Options - 
    A new “compareWith” directive has been added and it used to help you compare options from a select.
    <select [compareWith]="byUId" [(ngModel)]="selectedUsers">
        <option *ngFor="let user of users" [ngValue]="user.UId">{{user.name}}</option>
    </select>

### 14. Router - 
    A new interface “paramMap” and “queryParamMap” has been added and it introduced to represent the parameters of a URL. 
    const uid = this.route.snapshot.paramMap.get('UId');
    this.userService.get(uid).subscribe(user => this.name = name);