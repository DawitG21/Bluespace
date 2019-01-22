import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ModalController, ToastController, AlertController, ActionSheetController } from 'ionic-angular';
import { MyworkspaceProvider } from '../../providers/myworkspaceProvider';
import { workSpaceInterface } from '../../interfaces/workSpaceInterface';
import { SpaceDetailsPage } from '../space-details/space-details';
import { AddworkspacePage } from '../addworkspace/addworkspace';
import { HomePage2 } from '../home2/home';

@Component({
  selector: 'page-workspace',
  templateUrl: 'workSpace.html'
})
export class WorkSpacePage implements OnInit {

  docs: workSpaceInterface;

  constructor(public navCtrl: NavController, public loadCtrl: LoadingController,
    public modalCtrl: ModalController, public _workSpaceProvider: MyworkspaceProvider,
    public alertCtrl: AlertController, public toast: ToastController, public actSheetCtrl: ActionSheetController) { }

  ngOnInit() {
    this.getSpaces();
  }

  getSpaces() {
    const loader = this.loadCtrl.create({
      content: "Please Wait..."
    });
    loader.present();
    this._workSpaceProvider.getWorkSpace()
      .subscribe(res => {
        this.docs = res;
        /* console.log('docs.limit is:',this.docs.limit); */
        loader.dismiss();
      })
  }

  getRandomColor() {
    var color = "#";
    for (var i = 0; i < 3; i++) {
      var part = Math.round(Math.random() * 255).toString(16);
      color += (part.length > 1) ? part : "0" + part;
    }
    let style = {
      'background-color': color
    }
    return style;    
  }

  openModal(docs) {
    const modal = this.modalCtrl.create(SpaceDetailsPage, {
      item: docs
    });
    modal.present();
  }

  addWorkSpace() {
    this.navCtrl.push(AddworkspacePage);
  }

  deleteConfirm(docs: workSpaceInterface) {
    const confirm = this.alertCtrl.create({
      title: 'Confirm Delete?',
      message: 'This will permanently remove the workspace from the list.Proceed?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            /* console.log('Disagree clicked'); */
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this._workSpaceProvider.deleteWorkSpace(docs)
              .subscribe(res => {
                const index: number = this.docs.indexOf(docs);
                if (index !== -1) {
                  this.docs.splice(index, 1);
                }
                this.deleteToast();
              }, err => console.log(err));
          }
        }
      ]
    });
    confirm.present();
  }

  deleteToast() {
    const toast = this.toast.create({
      message: 'Deleted Successfully',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  goBack() {
    this.navCtrl.push(HomePage2);
  }

  presentActionSheet(docs) {
    const actionSheet = this.actSheetCtrl.create({
      title: 'Actions',
      buttons: [
        {
          text: 'Preview',
          handler: () => {
            const modal = this.modalCtrl.create(SpaceDetailsPage, {
              item: docs
            });
            modal.present();
          }
        }, {
          text: 'Delete',
          handler: () => {
            const confirm = this.alertCtrl.create({
              title: 'Confirm Delete?',
              message: 'This will permanently remove the workspace from the list.Proceed?',
              buttons: [
                {
                  text: 'No',
                  handler: () => {
                    /* console.log('Disagree clicked'); */
                  }
                },
                {
                  text: 'Yes',
                  handler: () => {
                    this._workSpaceProvider.deleteWorkSpace(docs)
                      .subscribe(res => {
                        const index: number = this.docs.indexOf(docs);
                        if (index !== -1) {
                          this.docs.splice(index, 1);
                        }
                        this.deleteToast();
                      }, err => console.log(err));
                  }
                }
              ]
            });
            confirm.present();
          }
        }
      ]
    });
    actionSheet.present();
  }
}
