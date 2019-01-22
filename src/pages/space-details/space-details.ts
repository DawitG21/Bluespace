import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController, AlertController } from 'ionic-angular';
import { MyworkspaceProvider } from '../../providers/myworkspaceProvider';
import { workSpaceInterface } from '../../interfaces/workSpaceInterface';
import { Docs } from '../../models/IDocs.model';
import { WorkSpacePage } from '../workSpace/workSpace';
import { RenewWorkSpacePage } from '../renew-work-space/renew-work-space';

@IonicPage()
@Component({
  selector: 'page-space-details',
  templateUrl: 'space-details.html',
})

export class SpaceDetailsPage implements OnInit {

  docs: workSpaceInterface;
  modalSpace: workSpaceInterface


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController, public loadCtrl: LoadingController,
    public _workSpaceProvider: MyworkspaceProvider, public alertCtrl: AlertController) {

    this.modalSpace = navParams.get('item');
    this.docs = new Docs(); {
      this.docs.passType = '';
      this.docs.pass = '';
      this.docs.start = '';
      this.docs.end = '';
      this.docs.approved = '';
      this.docs.duration = '';
      this.docs.workspaceCategory = '';
    }

  }

  ngOnInit(): void {
    this.docs.passType = this.modalSpace.passType;
    this.docs.pass = this.modalSpace.pass;
    this.docs.start = this.modalSpace.start;
    this.docs.end = this.modalSpace.end;
    this.docs.approved = this.modalSpace.approved;
    this.docs.duration = this.modalSpace.duration;
    this.docs.workspaceCategory = this.modalSpace.workspaceCategory;
  }

  goBack() {
    this.navCtrl.push(WorkSpacePage);
  }

  updateModal(docs) {
    if (this.docs.approved == '' || this.docs.approved == 'false') {
      this.ErrorAlert();
    } else {
      const modal = this.modalCtrl.create(RenewWorkSpacePage, {
        item: docs
      });
      modal.present();
    }
  }

  ErrorAlert() {
    const alert = this.alertCtrl.create({
      title: 'Ooops!',
      subTitle: 'You cannot renew a subscription that has not been approved',
      buttons: ['OK']
    });
    alert.present();
  }
}
