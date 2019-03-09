import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from "../pages/welcome/welcome";
import { SignUpPage } from "../pages/sign-up/sign-up";
import { LoginPage } from "../pages/login/login";
import { SearchPage } from "../pages/search/search";
import { SongPage } from "../pages/song/song";

import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyB2AN9p3ykeLueaGMU0c3U8tmPtWuEO_Pw",
  authDomain: "shuffle-cse3002.firebaseapp.com",
  databaseURL: "https://shuffle-cse3002.firebaseio.com",
  projectId: "shuffle-cse3002",
  storageBucket: "",
  messagingSenderId: "705406863985"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    SignUpPage,
    LoginPage,
    SearchPage,
    SongPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonIcon: "ios-arrow-back"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    SignUpPage,
    LoginPage,
    SearchPage,
    SongPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativePageTransitions,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
