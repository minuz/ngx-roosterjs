# ngx-roosterjs

This project was created to be an Angular Wrapper for the project https://github.com/Microsoft/roosterjs. 
It turns out that Microsoft had a wrapper for this library using React (https://github.com/Microsoft/roosterjs-react).

Obviously the react library would have a lot more support than I would by myself so I thought, why not try to consume the existing react components inside this Angular wrapper?

It turns out that is totally possible!
This project has the simplest demo ever in the `src` folder and a library that provides a basic editor.

Currently this project is under development and it only has a very basic usage.
Will add new features as I find necessary or as per feature request. Bear in mind that I'm developing solo in my spare time. Should you need features quicker, PR's are more than welcome. If you want to become a contributor, please let me know.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.

## Usage

### Install library

`npm i ngx-roosterjs` or `yarn add ngx-roosterjs`

Add the **ngx-roosterjs** module into your `ng-module` such as the below snippet

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxRoosterjsModule } from 'ngx-roosterjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxRoosterjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

On your component template

``` html
  <ngx-roosterjs></ngx-roosterjs>
```

## Development server

Run `ng serve:dev` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build library

Run `ng build:lib` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
