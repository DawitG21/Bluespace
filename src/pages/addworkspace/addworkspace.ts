import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { workSpaceInterface } from '../../interfaces/workSpaceInterface';
import { Docs } from '../../models/IDocs.model';
import { MyworkspaceProvider } from '../../providers/myworkspaceProvider';

@IonicPage()
@Component({
  selector: 'page-addworkspace',
  templateUrl: 'addworkspace.html',
})

export class AddworkspacePage implements OnInit {

  docs: workSpaceInterface;
  space: string = 'hot';
  workspaceCategory: string = '';
  passType: string = '';
  start: string = '';
  pass: string = '';
  duration: string = '';
  userId: string = '';
  serviceId: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public _workSpaceProvider: MyworkspaceProvider, public toast: ToastController) {
  }

  ngOnInit() {
    this.docs = new Docs(); {
      this.docs.userId = '5c39bcde77138f002705c6fc';
      this.docs.serviceId = '5c13956936d8f37d788b981c';
      this.docs.passType = 'normal pass';
      this.docs.pass = '10';
      this.docs.prepaid = '10';
      this.docs.workspaceCategory = '';
      this.docs.start = '';
      this.docs.duration = '';
    }
  }

  onBuy() {
    if (this.docs.workspaceCategory == '') {
      this.emptyWorkSpaceAlert();
    } else {
      this._workSpaceProvider.addWorkSpace(this.docs)
        .subscribe((response) => {
          console.log('add test', response);
          this.showToast();
        },
          (error: Response) => {
            this.errorAlert();
          });
    }
    this.docs.workspaceCategory = '';
    this.docs.start = '';
    this.docs.prepaid = '';
    this.docs.pass = '';
    this.docs.duration = '';
  }

  showToast() {
    const toast = this.toast.create({
      message: 'Subcription successful',
      duration: 3000,
      position: 'top'

    });
    toast.present();
  }

  emptyWorkSpaceAlert() {
    const alert = this.alertCtrl.create({
      message: 'Workspace cannot be empty',
      buttons: ['OK']
    });
    alert.present();
  }

  errorAlert() {
    const alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: 'EndPoint Does not Exist',
      buttons: ['OK']
    });
    alert.present();
  }

}
