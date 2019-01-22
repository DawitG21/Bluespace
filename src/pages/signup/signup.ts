import { Component } from '@angular/core';
import { SignupProvider } from '../../providers/signupService';
import { IUser } from '../../interfaces/userInterface';
import { User } from '../../models/UserModel'; 
import { AlertController } from 'ionic-angular';

@Component({
    selector : 'signup-selector',
    templateUrl : 'signup.html'
})
export class SignupComponent {
    User : IUser;
    confirmPassword : string;
    
    constructor(public _SignupProvider : SignupProvider, public alertCtrl : AlertController) {
        this.User = new User(); 
        this.User.firstName = '';
        this.User.lastName = '';
        this.User.email = '';
        this.User.phone = '';
        this.User.password = '';
        this.User.website = 'no website entered';
        this.User.userName = 'new user';
        this.User.activateUsing = 'email';
        this.User.role = 'subscriber';
    }

    signUp() {
        if(this.User.firstName == '' || this.User.lastName == '' || this.User.email == '' ||
            this.User.phone == '' || this.User.password == '' || this.confirmPassword == ''){
                this.FillAllFieldaAlert();
        }
        else if (this.User.password != this.confirmPassword) {
            this.PasswordsNotMatchedAlert();
        }
        else {
            this._SignupProvider.signup(this.User)
            .subscribe(res => {
            console.log(res);
        }, (error) => {
            this.EmailTakenAlert();
        }
        
        );
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

    PasswordsNotMatchedAlert() {
        const alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: 'The passwords are not matched',
            buttons: ['OK']
        });
        alert.present();
    }  

    EmailTakenAlert() {
        const alert = this.alertCtrl.create({
          title: 'Alert',
          subTitle: 'There is already an account with this email',
          buttons: ['OK']
        });
        alert.present();
    }
}
