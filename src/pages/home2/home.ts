import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalpagePage } from '../../pages/modalpage/modalpage';
import { EventsComponent } from '../events/events';
import { GuestPage } from '../guest/guest';
import { RequestATourPage } from '../request-a-tour/request-a-tour';
import { HowToUseTheAppPage } from '../how-to-use-the-app/how-to-use-the-app';
import { SettingsPage } from '../settings/settings';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { WorkSpacePage } from '../workSpace/workSpace';

@Component({
  selector: 'page-home2',
  templateUrl: 'home.html'
})
export class HomePage2 implements OnInit {
  /* rootPage:any = HomePage2; */
  ngOnInit(): void {
    var index = 0;
    show();
    function show() {
      var i;
      var slides = document.getElementsByClassName("slide");
      for (i = 0; i < slides.length; i++) {
        /* slides[i].style.display = "none"; */
        slides[i].classList.remove('show');
        slides[i].classList.add('hide');
      }
      index = index + 1;
      if (index > slides.length) {
        index = 1;
      }
      slides[index - 1].classList.remove('hide');
      slides[index - 1].classList.add('show');

      /* slides[index-1].style.display="block"; */
      setTimeout(show, 2000);
    }
  }

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  presentModal() {
    const modal = this.modalCtrl.create(ModalpagePage);
    modal.present();
  }

  toEventsPage() {
    this.navCtrl.push(EventsComponent);
  }

  openHome() {
    this.navCtrl.push(HomePage2)
  }

  openGuest() {
    this.navCtrl.push(GuestPage);
  }

  openRequestatour() {
    this.navCtrl.push(RequestATourPage);
  }

  openHowtousetheapp() {
    this.navCtrl.push(HowToUseTheAppPage);
  }

  openSettings() {
    this.navCtrl.push(SettingsPage);
  }

  openAbout() {
    this.navCtrl.push(AboutPage);
  }

  openSignOut() {
    this.navCtrl.push(HomePage);
  }

  toWorkspacePage() {
    this.navCtrl.push(WorkSpacePage);
  }

}
