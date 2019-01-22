import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpaceDetailsPage } from './space-details';

@NgModule({
  declarations: [
    SpaceDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SpaceDetailsPage),
  ],
})
export class SpaceDetailsPageModule {}
