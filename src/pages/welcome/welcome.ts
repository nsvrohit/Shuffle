import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Navbar } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { LoginPage } from '../login/login';
import { SignUpPage } from '../sign-up/sign-up';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  @ViewChild(Navbar) navBar: Navbar;
  constructor(public navCtrl: NavController, public navParams: NavParams, public nativePageTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
    this.navBar.backButtonClick = (e:UIEvent)=>{
      let options: NativeTransitionOptions = {
        direction: 'right',
        duration: 600,
        slowdownfactor: -1,
        androiddelay: 50
       };
    
      this.nativePageTransitions.slide(options);
      this.navCtrl.pop();
     }
  }

  signUp(){
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 600,
      slowdownfactor: -1,
      androiddelay: 50
     };
  
    this.nativePageTransitions.slide(options);
    this.navCtrl.push(SignUpPage);
  }

  logIn(){
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 600,
      slowdownfactor: -1,
      androiddelay: 50
     };
  
    this.nativePageTransitions.slide(options);
    this.navCtrl.push(LoginPage);
  }

}
