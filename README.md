# BluespaceApp
blueSpaceApp allows you to signup for premier work-spaces and events, whether you need a pass for a day, a dedicated desk for your business, or an office suite for your entire company.

Developed using Typescript, CSS3, HTML 5 and .NET CORE REST API.
The app can perfom all the CRUD operations-for creating, reading, updating and deleting various components(workspaces,events,services etc). For the backend, 
I am using a REST WEB service-http://185.136.165.131/apidoc/.

This project was generated with [Ionic CLI](https://ionicframework.com/docs/cli/) version 4.2.1.

## Development server

Start the server using command -  `ionic serve(for browser view)` or `ionic lab(for mobile view)`.

## Steps to setup Ionic project 

1. Create an Ionic CLI project
2. Install node_modules e.g `npm -i`
3. Install ion-text-avatar e.g `npm install --save ionic-text-avatar`
4. Make sure you add IonTextAvatar to the declarations array of your app.module.ts e.g

`import { IonTextAvatar } from 'ionic-text-avatar';`

`@NgModule({`
  `declarations: [`
    `IonTextAvatar`
  `]`
`})`
`export class AppModule {}`

5. Run the project using command `ionic serve(for browser view)` or `ionic lab(for mobile view)`
