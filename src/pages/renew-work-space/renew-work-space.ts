import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { MyworkspaceProvider } from '../../providers/myworkspaceProvider';
import { workSpaceInterface } from '../../interfaces/workSpaceInterface';
import { Docs } from '../../models/IDocs.model';
import { WorkSpacePage } from '../workSpace/workSpace';

@IonicPage()
@Component({
  selector: 'page-renew-work-space',
  templateUrl: 'renew-work-space.html',
})

export class RenewWorkSpacePage implements OnInit {

  docs: workSpaceInterface;
  modalSpace: workSpaceInterface

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController, public loadCtrl: LoadingController,
    public toast: ToastController, public _workSpaceProvider: MyworkspaceProvider) {

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

  updatePackage() {
    this._workSpaceProvider.updateWorkSpace(this.docs)
    .subscribe((response) => {      
      this.showToast();
      this.goToWorkSpace();
    },
      (error: Response) => {
        this.errorAlert();
      });
      this.docs.passType = '';
      this.docs.pass = '';
      this.docs.start = '';
      this.docs.end = '';
      this.docs.approved = '';
      this.docs.duration = '';
      this.docs.workspaceCategory = '';
   }

   errorAlert() {
    const alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: 'Package NOT renewed',
      buttons: ['OK']
    });
    alert.present();
  }

  showToast() {
    const toast = this.toast.create({
      message: 'Renewal Succesful',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  goToWorkSpace() {
    this.navCtrl.setRoot(WorkSpacePage);      
  }
  
  goBack() {
    this.navCtrl.push(WorkSpacePage);
  }

}
