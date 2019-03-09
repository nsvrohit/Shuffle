import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import firebase from "firebase";
import 'firebase/firestore';
import { SongPage } from '../song/song';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  public searchForm: FormGroup;
  search: string;
  uID: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fb: FormBuilder, public alertCtrl: AlertController,
    public nativePageTransitions: NativePageTransitions) {
    this.uID = navParams.get('data');
    this.searchForm = this.fb.group({
      search: ['', Validators.compose([Validators.maxLength(25), Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  displaySong(song) {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 600,
      slowdownfactor: -1,
      androiddelay: 50
    };
    this.nativePageTransitions.slide(options);
    this.navCtrl.push(SongPage, {
      data: song
    });
  }

  searchSong() {
    let sID;
    let firestore = firebase.firestore();
    let alert = this.alertCtrl;
    var self = this;
    var search1 = this.search;
    firestore.collection("songs").where("name", "==", this.search)
      .get()
      .then(function (song) {
        var search2 = search1;
        if (!song.empty) {
          song.forEach(function (doc) {
            console.log(doc.id);
            sID = doc.id;
          });
          console.log(sID);
          self.displaySong(sID);
          
        }
        else {
          var search3 = search2;
          firestore.collection("songs").where("artist", "==", search3)
            .get()
            .then(function (song) {
              if (!song.empty) {
                song.forEach(function (doc) {
                  console.log(doc.id);
                  sID = doc.id;
                });
                console.log(sID);
                self.displaySong(sID);
              }
              else {
                alert.create({
                  title: 'Not Found.',
                  buttons: ['Dismiss']
                })
                  .present();
              }
            })
        }
      })
  }
}
