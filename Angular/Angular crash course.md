## Step 1: Install the Angular CLI
    npm install -g @angular/cli

## Step 2: Create a workspace and initial application
    ng new my-app

## Step 3: Serve the application
    cd my-app
    ng serve --open
    ng serve --o

## Create the heroes component
   ng generate component heroes

## Two-way binding
    [(ngModel)]="hero.name"

## Display hero list
    <li *ngFor="let hero of heroes">

## click event binding
    <li *ngFor="let hero of heroes" (click)="onSelect(hero)">

## Hide empty details with *ngIf
    <div *ngIf="selectedHero">

## @Input() hero property
    <app-hero-detail [hero]="selectedHero"></app-hero-detail>

## Create the HeroService
    ng generate service hero
    @Injectable() services
## Add the AppRoutingModule
    ng generate module app-routing --flat --module=app
    --flat puts the file in src/app instead of its own folder.
    --module=app tells the CLI to register it in the imports array of the AppModule

