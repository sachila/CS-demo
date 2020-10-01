
This project is built upon Angular 8.2.2

## Assumptions

Data is loaded from the `vehicles.json` file in the `assets` directory.
We load all the data at once and then filter them based on the category to reduce the filtering time.
List of categories are stored in the `Category` enum file.
Routing module is also set up. (at the moment only one route)

we have a couple of services to load and store the data in the client.

`remote.service` - Generic service to send POST, GET requests.
`vehicle-load service` - call remote service to load the data from a specific API
`vehicle-cache-service` - Store the data we get from load service (components access data from this service).

Whenever data get loaded/changed, cache service fire an event. So the  components which are listening to these events jar
update the logic based on the updates.

`global-service` - Generic service to persist the global values throughout the application. It also can fire an event when the values get changes so that components can update the UI.

Angular material is used to develop the UI components.

## Development server

Run `npm install` command to install the node module.
Then navigate to `src` directory and run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
