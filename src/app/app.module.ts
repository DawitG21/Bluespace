import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { IonTextAvatar } from 'ionic-text-avatar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupComponent } from '../pages/signup/signup';
import { SignupProvider } from '../providers/signupService';
import { loginProvider } from '../providers/loginService';
import { EventsComponent } from '../pages/events/events';
import { EventsProvider } from '../providers/eventsService';
import { EventComponent } from '../pages/event/event';
import { AddEventComponent } from '../pages/addEvent/addEvent';
import { AboutPage } from '../pages/about/about';
import { GuestPage } from '../pages/guest/guest';
import { HowToUseTheAppPage } from '../pages/how-to-use-the-app/how-to-use-the-app';
import { ModalpagePage } from '../pages/modalpage/modalpage';
import { RequestATourPage } from '../pages/request-a-tour/request-a-tour';
import { SettingsPage } from '../pages/settings/settings';
import { HomePage2 } from '../pages/home2/home';
import { MyworkspaceProvider } from '../providers/myworkspaceProvider';
import { LoadPage } from '../pages/loadpage/loadpage';
import { WorkSpacePage } from '../pages/workSpace/workSpace';
import { SpaceDetailsPage } from '../pages/space-details/space-details';
import { AddworkspacePage } from '../pages/addworkspace/addworkspace';
import { RenewWorkSpacePage } from '../pages/renew-work-space/renew-work-space';

@NgModule({
  declarations: [
    MyApp,
    IonTextAvatar,
    HomePage,
    SignupComponent,
    EventsComponent,
    EventComponent,
    AddEventComponent,
    AboutPage,
    GuestPage,
    HowToUseTheAppPage,
    ModalpagePage,
    RequestATourPage,
    SettingsPage,
    HomePage2,
    LoadPage,
    WorkSpacePage,
    SpaceDetailsPage,
    AddworkspacePage,
    RenewWorkSpacePage,
  ],
  imports: [
    AngularDateTimePickerModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupComponent,
    EventsComponent,
    EventComponent,
    AddEventComponent,
    AboutPage,
    GuestPage,
    HowToUseTheAppPage,
    ModalpagePage,
    RequestATourPage,
    SettingsPage,
    HomePage2,
    LoadPage,
    AddworkspacePage,
    RenewWorkSpacePage,
    SpaceDetailsPage,
    WorkSpacePage
  ],
  providers: [
    StatusBar,
    SignupProvider,
    loginProvider,
    EventsProvider,
    MyworkspaceProvider,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
