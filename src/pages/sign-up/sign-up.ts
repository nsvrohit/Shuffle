import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, Navbar } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import firebase from "firebase";
import 'firebase/firestore';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  @ViewChild(Navbar) navBar: Navbar;
  public signUpForm: FormGroup;
  name: string;
  email: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public fb: FormBuilder, public alertCtrl: AlertController,
              public nativePageTransitions: NativePageTransitions) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), 
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'), 
        Validators.required])],
      confirmPassword: ['', Validators.required]
    }, {validator: SignUpPage.passwordsMatch});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
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

  static passwordsMatch(cg: FormGroup): {[err: string]: any} {
    let pwd1 = cg.get('password');
    let pwd2 = cg.get('confirmPassword');
    let rv: {[error: string]: any} = {};
    if ((pwd1.touched || pwd2.touched) && pwd1.value !== pwd2.value) {
      rv['passwordMismatch'] = true;
    }
    return rv;
  }

  signUp(){
    let uID: string;
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
    .then(()=>{
      firebase.auth().currentUser.sendEmailVerification()
      .then(()=>{
        console.log("Verification Email Sent!")
      })
      .catch((error)=>{
        console.log(error);
      })
      let firestore = firebase.firestore();
      firestore.collection("users").add({
        name: this.name,
        email: this.email,
        password: this.password
      })
      .then(()=>{
        firestore.collection("users").where("email", "==", this.email)
        .get()
        .then(function(user){
          user.forEach(function(doc){
            console.log(doc.id);
            uID = doc.id;
          });
        })
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(()=>{
          let options: NativeTransitionOptions = {
            direction: 'left',
            duration: 600,
            slowdownfactor: -1,
            androiddelay: 50
           };
          this.nativePageTransitions.slide(options);
          this.navCtrl.setRoot(SearchPage,{
            data: uID
          });
        })
      })

    })
    .catch((error)=>{
        let alert = this.alertCtrl.create({
          title: 'Sign Up Error!',
          subTitle: error.message,
          buttons: ['Dismiss']
        });
        alert.present();
    })
  }

}
