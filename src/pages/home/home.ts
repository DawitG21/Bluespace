import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupComponent } from '../signup/signup';
import { loginProvider } from '../../providers/loginService';
import { IUser } from '../../interfaces/userInterface';
import { User } from '../../models/UserModel';
import { AlertController } from 'ionic-angular';
import { HomePage2 } from '../home2/home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: IUser;

  constructor(public navCtrl: NavController, public _loginProvider: loginProvider,
    public alertCtrl: AlertController) {
    this.user = new User();
    this.user.email = '';
    this.user.password = '';
  }

  login() {
    if (this.user.email == '' || this.user.password == '') {
      this.FillAllFieldaAlert();
    }
    else {
      this._loginProvider.login(this.user)
        .subscribe(res => {
          console.log(res);
          this.navCtrl.push(HomePage2);
        }, (error) => {
          this.LoginFailedAlert();
        })
    }
  }

  FillAllFieldaAlert() {
    const alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'The form is not completely filled!!',
      buttons: ['OK']
    });
    alert.present();
  }

  LoginFailedAlert() {
    const alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Login failed because of wrong credentials',
      buttons: ['OK']
    });
    alert.present();
  }

  toSignupPage() {
    this.navCtrl.push(SignupComponent);
  }

}
