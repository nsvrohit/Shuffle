import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Navbar } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import firebase from "firebase";
import 'firebase/firestore';

@Component({
  selector: 'page-song',
  templateUrl: 'song.html',
})
export class SongPage {
  @ViewChild(Navbar) navBar: Navbar;
  public ratingForm: FormGroup;
  sID: String;
  name: String;
  album: String;
  releaseDate: String;
  artist: String;
  genre: String;
  sRating: number;
  nRating: number;
  rating: number;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public fb: FormBuilder, 
              public nativePageTransitions: NativePageTransitions) {
                this.ratingForm = this.fb.group({
                  rating: ['', Validators.compose([Validators.pattern('[1-5]'), Validators.required])],
                });
    this.sID = navParams.get('data');
    let firestore = firebase.firestore();
    var self = this;
    firestore.collection("songs")
    .get()
    .then(function(song){
      song.forEach(function(doc){
        if(doc.id==self.sID){
          let date: Date;
          let sName: String;
          let sAlbum: String;
          let sArtist: String;
          let sGenre: String;
          sName = doc.get("name")
          sAlbum = doc.get("album")
          date = doc.get("releaseDate")
          sArtist = doc.get("artist");
          sGenre = doc.get("genre");
          self.sRating = doc.get("rating");
          self.nRating = doc.get("nRating");
          self.name = sName.toLocaleUpperCase();
          self.album = sAlbum.toLocaleUpperCase();
          self.artist = sArtist.toLocaleUpperCase();
          self.genre = sGenre.toLocaleUpperCase();
          self.releaseDate = date.toString().substr(0,16).toLocaleUpperCase();
          console.log(self.name, self.releaseDate, self.album);
        }
      });
    })
  }

  rateSong(){
    let firestore = firebase.firestore();
    var songName = this.name;
    var songID = this.sID;
    var nr = this.nRating;
    var sr = this.sRating;
    var r = this.rating;
    r*=1;
    console.log(nr, sr, r);
    var finalRating=0;
    var newNum = nr + 1;
    finalRating = (((sr*nr)+r)/newNum);
    firestore.collection("songs")
    .get()
    .then(function(song){
      song.forEach(function(doc){
        if(doc.id==songID){
        doc.ref.update({
          nRating: newNum,
          rating: finalRating
        });          
        }
      })
    })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SongPage');
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

}
