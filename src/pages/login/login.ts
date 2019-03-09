import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, Navbar } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import firebase from "firebase";
import 'firebase/firestore';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild(Navbar) navBar: Navbar;
  public logInForm: FormGroup;
  email: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fb: FormBuilder, public alertCtrl: AlertController,
    public nativePageTransitions: NativePageTransitions) {
    this.logInForm = this.fb.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6),
      // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'), 
      Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.navBar.backButtonClick = (e: UIEvent) => {
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

  logIn() {
    let uID: string;
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        let firestore = firebase.firestore();
        firestore.collection("users").where("email", "==", this.email)
          .get()
          .then(function (user) {
            user.forEach(function (doc) {
              console.log(doc.id);
              uID = doc.id;
            });
          })
          let options: NativeTransitionOptions = {
            direction: 'left',
            duration: 600,
            slowdownfactor: -1,
            androiddelay: 50
           };
        
          this.nativePageTransitions.slide(options);
          this.navCtrl.setRoot(SearchPage, {
            data: uID
          });
      })
      .catch((error) => {
        let alert = this.alertCtrl.create({
          title: 'Log In Error!',
          subTitle: error.message,
          buttons: ['Dismiss']
        });
        alert.present();
      })
  }


}
