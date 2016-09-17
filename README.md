# Nat Geo 2.0.0

## How to start
Run `npm install`

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## With Angular CLi

1. `ng new <nat-geo>`
2.  migrate app/ assets/
3. `npm install firebase angularfire2 --save`
4. `typings install firebase --save` and then modified files in tsconfig.json: `"files": [ ... "typings/index.d.ts" ]`