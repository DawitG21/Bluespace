import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
/* import { WorkSpacePage } from '../workSpace/workSpace'; */
import { HomePage } from '../home/home'; 

@Component({
  selector: 'page-loadpage',
  templateUrl: 'loadpage.html',
})
export class LoadPage {

  @ViewChild(Slides) slides: Slides;

  description: string = "SKIP TO LOGIN";
  status: string = 's';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadpagePage');
  }

  skipSlides() {
    this.navCtrl.push(HomePage);
  }

  changeSlide() {
    if (this.slides.isEnd())
      this.description = "LET'S GET STARTED";
  }

  slideMoved() {
    if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex())
      this.status = 'rightSwipe';
    else
      this.status = 'leftSwipe';
  }

  animationDone() {
    this.status = 's';
  }
}


