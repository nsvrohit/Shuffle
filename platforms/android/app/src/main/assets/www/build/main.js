webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_firestore__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__song_song__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, fb, alertCtrl, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.uID = navParams.get('data');
        this.searchForm = this.fb.group({
            search: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(25), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])]
        });
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.displaySong = function (song) {
        var options = {
            direction: 'left',
            duration: 600,
            slowdownfactor: -1,
            androiddelay: 50
        };
        this.nativePageTransitions.slide(options);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__song_song__["a" /* SongPage */], {
            data: song
        });
    };
    SearchPage.prototype.searchSong = function () {
        var sID;
        var firestore = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.firestore();
        var alert = this.alertCtrl;
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
                });
            }
        });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"C:\Users\NSVR\Documents\CSE3002\Project\Shuffle\shuffle\src\pages\search\search.html"*/'<ion-content style="background-color: #86BBD8;">\n    <div class="container">\n\n        <svg viewBox="0 0 1418 116" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n          <title>Shuffle</title>\n          <g stroke="none" fill="none" fill-rule="evenodd" fill-opacity="0">\n            <text stye="text-align: center;" id="Shuffle" stroke="#fff" fill="#645F5A" font-weight="normal" font-family="PermanentMarker-Regular, Permanent Marker" font-size="144">\n              <tspan x="100" y="109"><!--\n                --><tspan>S</tspan><!--\n                --><tspan>H</tspan><!--\n                --><tspan>U</tspan><!--\n                --><tspan>F</tspan><!--\n                --><tspan>F</tspan><!--\n                --><tspan>L</tspan><!--\n                --><tspan>E</tspan><!--\n                --><tspan> </tspan><!--\n                --><tspan>S</tspan><!--\n                --><tspan>E</tspan><!--\n                --><tspan>A</tspan><!--\n                --><tspan>R</tspan><!--\n                --><tspan>C</tspan><!--\n                --><tspan>H</tspan><!--\n              --></tspan>\n            </text>\n          </g>\n        </svg>\n         \n    </div>\n    <h2 style="color: #FFFFFF; padding-left: 10%; font-family: \'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\', \'Lucida Sans\', Arial, sans-serif; text-align: center;">Search by Song or Artist!</h2>\n  <form [formGroup]="searchForm" (ngSubmit)="searchSong()">\n    <ion-item class="form-style">\n      <ion-input type="text" [(ngModel)]="search" formControlName="search"></ion-input>\n    </ion-item>\n    <br><br><br><br><button ion-button class="submit-button" full type="submit" [disabled]="!searchForm.valid">Search</button>\n  </form>      \n\n\n</ion-content>'/*ion-inline-end:"C:\Users\NSVR\Documents\CSE3002\Project\Shuffle\shuffle\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.nativePageTransitions = nativePageTransitions;
        var colors = new Array([62, 35, 255], [60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 0, 255], [255, 128, 0]);
        var step = 0;
        //color table indices for: 
        // current color left
        // next color left
        // current color right
        // next color right
        var colorIndices = [0, 1, 2, 3];
        //transition speed
        var gradientSpeed = 0.002;
        function updateGradient() {
            if (__WEBPACK_IMPORTED_MODULE_4_jquery__ === undefined)
                return;
            var c0_0 = colors[colorIndices[0]];
            var c0_1 = colors[colorIndices[1]];
            var c1_0 = colors[colorIndices[2]];
            var c1_1 = colors[colorIndices[3]];
            var istep = 1 - step;
            var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
            var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
            var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
            var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
            var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
            var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
            var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
            var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";
            __WEBPACK_IMPORTED_MODULE_4_jquery__('#gradient').css({
                background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
            }).css({
                background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
            });
            step += gradientSpeed;
            if (step >= 1) {
                step %= 1;
                colorIndices[0] = colorIndices[1];
                colorIndices[2] = colorIndices[3];
                //pick two new target color indices
                //do not pick the same as the current one
                colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
                colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
            }
        }
        setInterval(updateGradient, 10);
    }
    HomePage.prototype.welcome = function () {
        var options = {
            direction: 'left',
            duration: 600,
            slowdownfactor: -1,
            androiddelay: 50
        };
        this.nativePageTransitions.slide(options);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__welcome_welcome__["a" /* WelcomePage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\NSVR\Documents\CSE3002\Project\Shuffle\shuffle\src\pages\home\home.html"*/'<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>\n<ion-content style="text-align: center;" id="gradient">\n<img src="../../assets/imgs/shuffle.png">\n<h1><strong>The Song Dictionary</strong></h1>\n</ion-content>\n<ion-footer no-border>\n<button full (click)="welcome()" class="big-button">\n<h1> TAP TO ENTER \></h1>\n</button>\n</ion-footer>\n\n\n\n'/*ion-inline-end:"C:\Users\NSVR\Documents\CSE3002\Project\Shuffle\shuffle\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, navParams, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativePageTransitions = nativePageTransitions;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad WelcomePage');
        this.navBar.backButtonClick = function (e) {
            var options = {
                direction: 'right',
                duration: 600,
                slowdownfactor: -1,
                androiddelay: 50
            };
            _this.nativePageTransitions.slide(options);
            _this.navCtrl.pop();
        };
    };
    WelcomePage.prototype.signUp = function () {
        var options = {
            direction: 'left',
            duration: 600,
            slowdownfactor: -1,
            androiddelay: 50
        };
        this.nativePageTransitions.slide(options);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    WelcomePage.prototype.logIn = function () {
        var options = {
            direction: 'left',
            duration: 600,
            slowdownfactor: -1,
            androiddelay: 50
        };
        this.nativePageTransitions.slide(options);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Navbar */])
    ], WelcomePage.prototype, "navBar", void 0);
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\NSVR\Documents\CSE3002\Project\Shuffle\shuffle\src\pages\welcome\welcome.html"*/'<ion-header no-border style="background: transparent;">\n\n  <ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content style="background-color: #86BBD8;">\n  <br><br><br><br>\n  <h2 style="text-align: center;">Welcome to Shuffle!</h2>\n  <h3></h3>\n</ion-content>\n<ion-footer>\n<button ion-button full (click)="signUp()" class="sign-up">\nSign Up\n</button>\n<button ion-button full (click)="logIn()" class="log-in">\nLog In\n</button>\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\NSVR\Documents\CSE3002\Project\Shuffle\shuffle\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_firestore__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, fb, alertCtrl, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.logInForm = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6),
                    // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'), 
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad LoginPage');
        this.navBar.backButtonClick = function (e) {
            var options = {
                direction: 'right',
                duration: 600,
                slowdownfactor: -1,
                androiddelay: 50
            };
            _this.nativePageTransitions.slide(options);
            _this.navCtrl.pop();
        };
    };
    LoginPage.prototype.logIn = function () {
        var _this = this;
        var uID;
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(function () {
            var firestore = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.firestore();
            firestore.collection("users").where("email", "==", _this.email)
                .get()
                .then(function (user) {
                user.forEach(function (doc) {
                    console.log(doc.id);
                    uID = doc.id;
                });
            });
            var options = {
                direction: 'left',
                duration: 600,
                slowdownfactor: -1,
                androiddelay: 50
            };
            _this.nativePageTransitions.slide(options);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */], {
                data: uID
            });
        })
            .catch(function (error) {
            var alert = _this.alertCtrl.create({
                title: 'Log In Error!',
                subTitle: error.message,
                buttons: ['Dismiss']
            });
            alert.present();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Navbar */])
    ], LoginPage.prototype, "navBar", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\NSVR\Documents\CSE3002\Project\Shuffle\shuffle\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n      <ion-title>\n          <span style="color: #FFFFFF">Log In\n            </span>\n          </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: #86BBD8;">\n  <form [formGroup]="logInForm" (ngSubmit)="logIn()">\n    <ion-item class="form-style">\n      <ion-label style="color: #FFFFFF;">Email</ion-label>\n      <ion-input type="email" [(ngModel)]="email" formControlName="email"></ion-input>\n    </ion-item>\n    <ion-item class="form-style">\n      <ion-label style="color: #FFFFFF;">Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password" formControlName="password"></ion-input>\n    </ion-item>\n    <br><button ion-button class="submit-button" full type="submit" [disabled]="!logInForm.valid">Submit</button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\NSVR\Documents\CSE3002\Project\Shuffle\shuffle\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SongPage = /** @class */ (function () {
    function SongPage(navCtrl, navParams, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativePageTransitions = nativePageTransitions;
        this.sID = navParams.get('data');
        var firestore = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.firestore();
        var self = this;
        firestore.collection("songs")
            .get()
            .then(function (song) {
            song.forEach(function (doc) {
                if (doc.id == self.sID) {
                    var date = void 0;
                    var sName = void 0;
                    var sAlbum = void 0;
                    var sArtist = void 0;
                    var sGenre = void 0;
                    sName = doc.get("name");
                    sAlbum = doc.get("album");
                    date = doc.get("releaseDate");
                    sArtist = doc.get("artist");
                    sGenre = doc.get("genre");
                    self.name = sName.toLocaleUpperCase();
                    self.album = sAlbum.toLocaleUpperCase();
                    self.artist = sArtist.toLocaleUpperCase();
                    self.genre = sGenre.toLocaleUpperCase();
                    self.releaseDate = date.toString().substr(0, 16).toLocaleUpperCase();
                    console.log(self.name, self.releaseDate, self.album);
                }
            });
        });
    }
    SongPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SongPage');
        this.navBar.backButtonClick = function (e) {
            var options = {
                direction: 'right',
                duration: 600,
                slowdownfactor: -1,
                androiddelay: 50
            };
            _this.nativePageTransitions.slide(options);
            _this.navCtrl.pop();
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Navbar */])
    ], SongPage.prototype, "navBar", void 0);
    SongPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-song',template:/*ion-inline-start:"C:\Users\NSVR\Documents\CSE3002\Project\Shuffle\shuffle\src\pages\song\song.html"*/'<ion-header no-border style="background: transparent;">\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="background">\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span><strong>{{name}}</strong></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span><strong>{{name}}</strong></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span><strong>{{name}}</strong></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <br><br><br><br>\n    <div class="song-name">\n      {{name}}\n    </div>\n    <br>\n    <div class="song-artist">\n      {{artist}}\n    </div>\n    <br>\n    <div class="song-album">\n      {{album}}\n    </div>\n    <br>\n    <div class="song-genre">\n      {{genre}}\n    </div>\n    <br>\n    <div class="song-rd">\n      {{releaseDate}}\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\NSVR\Documents\CSE3002\Project\Shuffle\shuffle\src\pages\song\song.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], SongPage);
    return SongPage;
}());

//# sourceMappingURL=song.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_firestore__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignUpPage = /** @class */ (function () {
    function SignUpPage(navCtrl, navParams, fb, alertCtrl, nativePageTransitions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.signUpForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(20), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6),
                    // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'), 
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        }, { validator: SignUpPage_1.passwordsMatch });
    }
    SignUpPage_1 = SignUpPage;
    SignUpPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SignUpPage');
        this.navBar.backButtonClick = function (e) {
            var options = {
                direction: 'right',
                duration: 600,
                slowdownfactor: -1,
                androiddelay: 50
            };
            _this.nativePageTransitions.slide(options);
            _this.navCtrl.pop();
        };
    };
    SignUpPage.passwordsMatch = function (cg) {
        var pwd1 = cg.get('password');
        var pwd2 = cg.get('confirmPassword');
        var rv = {};
        if ((pwd1.touched || pwd2.touched) && pwd1.value !== pwd2.value) {
            rv['passwordMismatch'] = true;
        }
        return rv;
    };
    SignUpPage.prototype.signUp = function () {
        var _this = this;
        var uID;
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(function () {
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.sendEmailVerification()
                .then(function () {
                console.log("Verification Email Sent!");
            })
                .catch(function (error) {
                console.log(error);
            });
            var firestore = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.firestore();
            firestore.collection("users").add({
                name: _this.name,
                email: _this.email,
                password: _this.password
            })
                .then(function () {
                firestore.collection("users").where("email", "==", _this.email)
                    .get()
                    .then(function (user) {
                    user.forEach(function (doc) {
                        console.log(doc.id);
                        uID = doc.id;
                    });
                });
                __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInWithEmailAndPassword(_this.email, _this.password)
                    .then(function () {
                    var options = {
                        direction: 'left',
                        duration: 600,
                        slowdownfactor: -1,
                        androiddelay: 50
                    };
                    _this.nativePageTransitions.slide(options);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */], {
                        data: uID
                    });
                });
            });
        })
            .catch(function (error) {
            var alert = _this.alertCtrl.create({
                title: 'Sign Up Error!',
                subTitle: error.message,
                buttons: ['Dismiss']
            });
            alert.present();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Navbar */])
    ], SignUpPage.prototype, "navBar", void 0);
    SignUpPage = SignUpPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"C:\Users\NSVR\Documents\CSE3002\Project\Shuffle\shuffle\src\pages\sign-up\sign-up.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <span style="color: #FFFFFF">Sign Up\n        </span>\n      </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: #86BBD8;">\n  <form [formGroup]="signUpForm" (ngSubmit)="signUp()">\n    <ion-item class="form-style">\n      <ion-label style="color: #FFFFFF;">Name</ion-label>\n      <ion-input type="text" [(ngModel)]="name" formControlName="name"></ion-input>\n    </ion-item>\n    <ion-item class="form-style">\n      <ion-label style="color: #FFFFFF;">Email</ion-label>\n      <ion-input type="email" [(ngModel)]="email" formControlName="email"></ion-input>\n    </ion-item>\n    <ion-item class="form-style">\n      <ion-label style="color: #FFFFFF;">Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password" formControlName="password"></ion-input>\n    </ion-item>\n    <ion-item class="form-style">\n      <ion-label style="color: #FFFFFF;">Confirm Password</ion-label>\n      <ion-input type="password" formControlName="confirmPassword"></ion-input>\n    </ion-item>\n    <br><button ion-button class="submit-button" full type="submit" [disabled]="!signUpForm.valid">Submit</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\NSVR\Documents\CSE3002\Project\Shuffle\shuffle\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */]])
    ], SignUpPage);
    return SignUpPage;
    var SignUpPage_1;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_search_search__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_song_song__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_firebase__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var firebaseConfig = {
    apiKey: "AIzaSyB2AN9p3ykeLueaGMU0c3U8tmPtWuEO_Pw",
    authDomain: "shuffle-cse3002.firebaseapp.com",
    databaseURL: "https://shuffle-cse3002.firebaseio.com",
    projectId: "shuffle-cse3002",
    storageBucket: "",
    messagingSenderId: "705406863985"
};
__WEBPACK_IMPORTED_MODULE_13_firebase___default.a.initializeApp(firebaseConfig);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_song_song__["a" /* SongPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    backButtonIcon: "ios-arrow-back"
                }, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_song_song__["a" /* SongPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\NSVR\Documents\CSE3002\Project\Shuffle\shuffle\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\NSVR\Documents\CSE3002\Project\Shuffle\shuffle\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map