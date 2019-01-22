import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestATourPage } from './request-a-tour';

@NgModule({
  declarations: [
    RequestATourPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestATourPage),
  ],
})
export class RequestATourPageModule {}
