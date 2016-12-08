
# SearchPipeExample

This project is very simple search pipe is used with ngFor Directive.

# Usage
import pipe to module `src/app.module.ts`
```js
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { FormsModule } from '@angular/forms';
    import { HttpModule } from '@angular/http';

    import { AppComponent } from './app.component';
    import { Ng2SearchPipe } from './pipes/ng2-search-pipe';

    @NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Ng2SearchPipe
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }
```
just use this pipe in component template

```html
<div>
    <input #searchTerm (keyup)="0" class="search-term"  />
    <div *ngFor="let hero of heroes | searchPipe: {term: searchTerm.value, naming:'name'}">
        {{hero.name}}
    </div>
</div>

```
if you want to search using id (not name), searchPipe parameter change like this.
```html
<div>
    <input #searchTerm (keyup)="0" class="search-term"  />
    <div *ngFor="let hero of heroes | searchPipe: {term: searchTerm.value, naming:'id'}">
        {{hero.name}}
    </div>
</div>
```
naming property is search key word. so, insert search keyword that your object property name to naming property. 

---
 
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
