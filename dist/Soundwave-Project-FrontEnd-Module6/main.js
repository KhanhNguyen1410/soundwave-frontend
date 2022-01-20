(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/AaM":
/*!**********************************************!*\
  !*** ./src/app/service/auth/auth.service.ts ***!
  \**********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _Project_Sound_Wave_FrontEnd_src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Project_Sound_Wave_FrontEnd/src/environments/environment */ "eCOg");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
// @ts-ignore

// @ts-ignore


// @ts-ignore



const API_URL = `${_Project_Sound_Wave_FrontEnd_src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
// @ts-ignore
class AuthService {
    constructor(http) {
        this.http = http;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // @ts-ignore
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    // tslint:disable-next-line:typedef
    login(username, password) {
        return this.http.post(API_URL + '/login', { username, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(user => {
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUserSubject.next(user);
            this.update.emit('login');
            return user;
        }));
    }
    // @ts-ignore
    register(user) {
        return this.http.post(API_URL + '/register', user);
    }
    checkUserName(userName) {
        return this.http.get(API_URL + '/register/check');
    }
    // tslint:disable-next-line:typedef
    logout() {
        localStorage.removeItem('user');
        // @ts-ignore
        this.currentUserSubject.next(null);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "/XLG":
/*!*****************************************************!*\
  !*** ./src/app/landing-page/home/home.component.ts ***!
  \*****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _service_song_song_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/song/song.service */ "r1xU");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/user/user.service */ "rwBg");
/* harmony import */ var _service_like_like_song_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/like/like-song.service */ "87Ka");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/category/category.service */ "00Ag");
/* harmony import */ var _service_songPlaylist_song_playlist_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/songPlaylist/song-playlist.service */ "jjR9");
/* harmony import */ var _service_playList_play_list_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/playList/play-list.service */ "06Dn");
/* harmony import */ var _service_like_like_playlist_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../service/like/like-playlist.service */ "Y5Hv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _playing_songs_playing_songs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../playing-songs/playing-songs.component */ "cTPe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "tyNb");


















function HomeComponent_article_5_ng_container_1_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_article_5_ng_container_1_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const playlist_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.likePlaylist(playlist_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_article_5_ng_container_1_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_article_5_ng_container_1_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const playlist_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.likePlaylist(playlist_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/playlist", a1]; };
function HomeComponent_article_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HomeComponent_article_5_ng_container_1_a_8_Template, 2, 0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HomeComponent_article_5_ng_container_1_a_9_Template, 2, 0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const songPl_r5 = ctx.$implicit;
    const playlist_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", songPl_r5.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, playlist_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](playlist_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !playlist_r3.isLike && ctx_r4.userCurrent);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", playlist_r3.isLike && ctx_r4.userCurrent);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", playlist_r3.like, " ");
} }
function HomeComponent_article_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_article_5_ng_container_1_Template, 14, 8, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playlist_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", playlist_r3.song.slice(0, 1));
} }
function HomeComponent_tbody_12_h1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r16 + 1);
} }
function HomeComponent_tbody_12_h1_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r16 + 1);
} }
function HomeComponent_tbody_12_h1_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r16 + 1);
} }
function HomeComponent_tbody_12_h1_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r16 + 1);
} }
function HomeComponent_tbody_12_a_17_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_tbody_12_a_17_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const s_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.likeSong(s_r15.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_tbody_12_a_18_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_tbody_12_a_18_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const s_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.likeSong(s_r15.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_tbody_12_td_19_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_tbody_12_td_19_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.openScrollableContent(_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_tbody_12_ng_template_29_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pl_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", pl_r40.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pl_r40.name, " ");
} }
function HomeComponent_tbody_12_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function HomeComponent_tbody_12_ng_template_29_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r41.addSongToPlaylist(ctx_r41.song.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Pick your playlist to add song:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "select", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomeComponent_tbody_12_ng_template_29_option_6_Template, 2, 2, "option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_tbody_12_ng_template_29_Template_button_click_8_listener() { const modal_r38 = ctx.$implicit; return modal_r38.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Add to playlist ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_tbody_12_ng_template_29_Template_button_click_10_listener() { const modal_r38 = ctx.$implicit; return modal_r38.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r25.songPlaylistForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r25.myPlayLists);
} }
const _c1 = function (a1) { return ["/songs/detail", a1]; };
function HomeComponent_tbody_12_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HomeComponent_tbody_12_h1_3_Template, 2, 1, "h1", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomeComponent_tbody_12_h1_4_Template, 2, 1, "h1", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomeComponent_tbody_12_h1_5_Template, 2, 1, "h1", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomeComponent_tbody_12_h1_6_Template, 2, 1, "h1", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_tbody_12_Template_img_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); const s_r15 = ctx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r45.playThisSong(s_r15.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HomeComponent_tbody_12_a_17_Template, 2, 0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, HomeComponent_tbody_12_a_18_Template, 2, 0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, HomeComponent_tbody_12_td_19_Template, 3, 0, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h6", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h6", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, HomeComponent_tbody_12_ng_template_29_Template, 12, 2, "ng-template", null, 65, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r16 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r16 == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r16 == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r16 > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", s_r15.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c1, s_r15.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r15.singer.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !s_r15.isLiked && ctx_r1.userCurrent);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", s_r15.isLiked && ctx_r1.userCurrent);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.userCurrent);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", s_r15.views, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", s_r15.like, " ");
} }
function HomeComponent_tbody_47_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_tbody_47_a_12_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const song_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r53.likeSong(song_r47.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_tbody_47_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_tbody_47_a_13_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58); const song_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r56.likeSong(song_r47.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_tbody_47_ng_template_26_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pl_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", pl_r61.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pl_r61.name, " ");
} }
function HomeComponent_tbody_47_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function HomeComponent_tbody_47_ng_template_26_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const song_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r62.addSongToPlaylist(song_r47.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Pick your playlist to add song:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "select", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomeComponent_tbody_47_ng_template_26_option_6_Template, 2, 2, "option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_tbody_47_ng_template_26_Template_button_click_8_listener() { const modal_r59 = ctx.$implicit; return modal_r59.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Add to playlist ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_tbody_47_ng_template_26_Template_button_click_10_listener() { const modal_r59 = ctx.$implicit; return modal_r59.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r52.songPlaylistForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r52.myPlayLists);
} }
function HomeComponent_tbody_47_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_tbody_47_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); const song_r47 = ctx.$implicit; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r67.playThisSong(song_r47.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HomeComponent_tbody_47_a_12_Template, 2, 0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HomeComponent_tbody_47_a_13_Template, 2, 0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_tbody_47_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r69.openScrollableContent(_r51); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h6", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h6", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, HomeComponent_tbody_47_ng_template_26_Template, 12, 2, "ng-template", null, 65, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const song_r47 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", song_r47.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c1, song_r47.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](song_r47.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](song_r47.singer.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !song_r47.isLiked && ctx_r2.userCurrent);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", song_r47.isLiked && ctx_r2.userCurrent);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", song_r47.views, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", song_r47.like, " ");
} }
class HomeComponent {
    constructor(songService, authService, userService, likeService, fb, modalService, categoryService, songPlaylistService, playListService, likePlaylistService) {
        this.songService = songService;
        this.authService = authService;
        this.userService = userService;
        this.likeService = likeService;
        this.fb = fb;
        this.modalService = modalService;
        this.categoryService = categoryService;
        this.songPlaylistService = songPlaylistService;
        this.playListService = playListService;
        this.likePlaylistService = likePlaylistService;
        this.historySong = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('historySongs')));
        this.songs = [];
        this.topSongs = [];
        this.myPlayLists = [];
        this.songLikes = [];
        this.playlistLikes = [];
        this.playLists = [];
        this.allPlayLists = [];
        this.playlistsNewest = [];
        this.songPlaylistForm = this.fb.group({
            song: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            playlist: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
    }
    ngOnInit() {
        if (this.userCurrent == null) {
            this.songService.getAllNewSong().subscribe(value => {
                this.songs = value;
            });
        }
        if (this.userCurrent == null) {
            this.songService.getTopViewSong().subscribe(value => {
                this.topSongs = value;
            });
        }
        this.getHistorySongs();
        this.authService.currentUser.subscribe(value => {
            this.userCurrent = value;
            this.userService.getUserByUsername(value.username).subscribe(value1 => {
                this.user = value1;
                this.getAllSong(this.user.id);
                this.getTopSong(this.user.id);
                this.getMyPlaylists(this.user.id);
                this.getAllPlaylistNewest(this.user.id);
                // console.log(this.songLikes);
            });
        });
        this.getAllPlaylist();
        // console.log(this.songs);
        // console.log(this.playlistsNewest);
    }
    getAllSong(userId) {
        this.songService.getAllNewSong().subscribe((data) => {
            this.songs = data;
            this.songs.map(song => {
                song.isLiked = false;
                this.likeService.getLikeSong(song.id).subscribe(value => song.like = value);
            });
            this.likeService.getAllLikeUser(userId).subscribe((data) => {
                this.songLikes = data;
                for (let i = 0; i < this.songs.length; i++) {
                    for (let j = 0; j < this.songLikes.length; j++) {
                        if (this.songs[i].id === this.songLikes[j].id) {
                            this.songs[i].isLiked = true;
                        }
                    }
                }
                console.log(this.songLikes);
            });
        });
    }
    getTopSong(userId) {
        this.songService.getTopViewSong().subscribe((data) => {
            this.topSongs = data;
            this.topSongs.map(song => {
                song.isLiked = false;
                this.likeService.getLikeSong(song.id).subscribe(value => song.like = value);
            });
            this.likeService.getAllLikeUser(userId).subscribe((data) => {
                this.songLikes = data;
                for (let i = 0; i < this.topSongs.length; i++) {
                    for (let j = 0; j < this.songLikes.length; j++) {
                        if (this.topSongs[i].id === this.songLikes[j].id) {
                            this.topSongs[i].isLiked = true;
                        }
                    }
                }
                console.log(this.songLikes);
            });
        });
    }
    getHistorySongs() {
        this.songService.getSong(Number(this.historySong.value)).subscribe(value => {
            this.historySongs = value;
        });
    }
    playThisSong(id) {
        this.songService.countViews(id).subscribe(() => console.log());
        this.songService.getSongById(id).subscribe(value => {
            this.song = value;
            localStorage.setItem('songSelected', JSON.stringify(this.song));
            this.testString = String(this.song.id);
            if (localStorage.getItem('Storage') == null) {
                let Values = [];
                Values.push(this.testString);
                localStorage.setItem('Storage', JSON.stringify(Values));
            }
            else {
                let array = JSON.parse(localStorage.getItem('Storage'));
                if (array.length === 5) {
                    array.shift();
                    localStorage.setItem('Storage', JSON.stringify(array));
                }
                let Values = [];
                Values = JSON.parse(localStorage.getItem('Storage'));
                Values.push(this.testString);
                localStorage.setItem('Storage', JSON.stringify(Values));
            }
            window.location.reload();
        });
    }
    likeSong(s_id) {
        this.likeService.likeSong(s_id, this.user.id).subscribe(() => console.log(this.user.id));
        this.getAllSong(this.user.id);
        this.getTopSong(this.user.id);
        // this.getAllLikeSong(this.user.id);
    }
    openScrollableContent(longContent) {
        this.modalService.open(longContent, { scrollable: true });
    }
    getSongAddToList(id) {
        return this.songService.getSongById(id).toPromise();
    }
    checkSongPlaylist(id, song) {
        return this.songPlaylistService.checkSongPlaylist(id, song).toPromise();
    }
    addSongToPlaylist(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const newSong = yield this.getSongAddToList(id);
            let p_id = +this.songPlaylistForm.get('playlist').value;
            let checkSong = yield this.checkSongPlaylist(p_id, newSong);
            if (checkSong) {
                this.songPlaylistService.addSongToPlaylist(p_id, newSong).subscribe(() => alert('add to playlist ok!'));
            }
            else {
                alert('this song had in this playlist');
            }
        });
    }
    getAllPlaylist() {
        this.playListService.getAllPlaylist().subscribe(value => {
            this.playLists = value;
        });
    }
    getAllPlaylistNewest(userId) {
        this.playListService.getAllPlaylist().subscribe((data) => {
            this.playlistsNewest = data;
            this.playlistsNewest.map((playlist) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                playlist.isLike = false;
                playlist.song = yield this.getSongByPlaylist(playlist.id);
                this.likePlaylistService.getLikePlaylist(playlist.id).subscribe(value => {
                    playlist.like = value;
                });
            }));
            this.likePlaylistService.getAllLikeUser(userId).subscribe((data) => {
                this.playlistLikes = data;
                for (let i = 0; i < this.playlistsNewest.length; i++) {
                    for (let j = 0; j < this.playlistLikes.length; j++) {
                        if (this.playlistsNewest[i].id === this.playlistLikes[j].id) {
                            this.playlistsNewest[i].isLike = true;
                        }
                    }
                }
            });
        });
    }
    getSongByPlaylist(id) {
        return this.songPlaylistService.getSongByPlaylist(id).toPromise();
    }
    getMyPlaylists(id) {
        this.playListService.getMyPlaylists(id).subscribe(value => this.myPlayLists = value);
    }
    likePlaylist(p_id) {
        this.likePlaylistService.likePlaylist(p_id, this.user.id).subscribe(() => console.log(this.user.id));
        // this.getAllSong(this.user.id);
        // this.getTopSong(this.user.id);
        this.getAllPlaylistNewest(this.user.id);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_song_song_service__WEBPACK_IMPORTED_MODULE_4__["SongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_like_like_song_service__WEBPACK_IMPORTED_MODULE_7__["LikeSongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_category_category_service__WEBPACK_IMPORTED_MODULE_9__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_songPlaylist_song_playlist_service__WEBPACK_IMPORTED_MODULE_10__["SongPlaylistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_playList_play_list_service__WEBPACK_IMPORTED_MODULE_11__["PlayListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_like_like_playlist_service__WEBPACK_IMPORTED_MODULE_12__["LikePlaylistService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 197, vars: 3, consts: [[1, "container", "col-lg-12"], [1, "container", "container-flex", "col-lg-12"], [1, "col-lg-12", "col-md-6"], [1, "row"], [1, "col-lg-12"], ["class", "article-featured flex-space", "style", "display: inline-block", 4, "ngFor", "ngForOf"], [1, "latest-release"], ["id", "title"], [1, "container"], ["id", "myTable", "cellpadding", "15", 2, "align-content", "center"], [4, "ngFor", "ngForOf"], [1, "popular-artists"], [1, "title"], [1, "artist-container", "flex-space"], [1, "popular-artist-entry"], ["src", "https://thenewsmexico.com/wp-content/uploads/2018/11/image2-6.jpg", 2, "width", "100px", "height", "100px", "object-fit", "cover", "display", "block"], ["src", "https://cdn.vietnammoi.vn/stores/news_dataimages/vudt/122016/12/11/2503_MBI_7016.jpg", 2, "width", "100px", "height", "100px", "object-fit", "cover", "display", "block"], ["src", "https://image.thanhnien.vn/768/uploaded/ngocthanh/2020_07_05/j02-anhnoibat_kieu.jpg", 2, "width", "100px", "height", "100px", "object-fit", "cover", "display", "block"], ["src", "https://esportsobserver.com/wp-content/uploads/2019/02/Marshmellow-Fortnite-Concert-Opinion.jpg", 2, "width", "100px", "height", "100px", "object-fit", "cover", "display", "block"], ["src", "https://i.pinimg.com/736x/f4/a0/8e/f4a08e93ac7cd83ee6cdd7719e54db9a.jpg", 2, "width", "100px", "height", "100px", "object-fit", "cover", "display", "block"], ["cellpadding", "15", 2, "align-content", "center"], [1, "stations", "flex-space"], [1, "stations-entry"], ["src", "https://i.pinimg.com/736x/f4/a0/8e/f4a08e93ac7cd83ee6cdd7719e54db9a.jpg", 2, "max-width", "100%", "display", "block"], [1, "stations-centered"], [1, "stations-entry", "display-none"], [1, "middle-featured", "article-featured", "flex-space"], [1, "article-image"], [1, "stations-centered", "mid-featured-font"], [1, "mid-featured-font", "stations-centered"], [1, "article-info"], [1, "article-body"], [1, "latest-language"], [1, "latest-language-title"], [1, "song-container", "flex-space"], [1, "language-song-entry"], [1, "language-image"], [1, "language-sub", "latest-release-sub"], ["src", "https://i.pinimg.com/736x/ee/64/fa/ee64fad515bf0b8a03ffb21e964eab61.jpg", 2, "max-width", "100%", "display", "block"], [1, "language-song-entry", "display-none"], [2, "text-align", "center"], [1, "article-featured", "flex-space", 2, "display", "inline-block"], ["class", "show-play-list", 4, "ngFor", "ngForOf"], [1, "show-play-list"], [1, "article-image", "test", 2, "margin-right", "35px"], [1, "imagek", 2, "width", "200px", "height", "250px", "object-fit", "cover", 3, "src"], [1, "test2"], [3, "routerLink"], [1, "text"], [1, "text", 2, "margin-top", "50px"], [3, "click", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-heart", 2, "color", "#FF0099"], [3, "click"], ["id", "unlike2", "aria-hidden", "true", 1, "fa", "fa-heart"], ["id", "like2", "aria-hidden", "true", 1, "fa", "fa-heart"], ["class", "numberOne", 4, "ngIf"], ["class", "numberTwo", 4, "ngIf"], ["class", "numberThree", 4, "ngIf"], [4, "ngIf"], [1, "imageSong"], [1, "test", 2, "border-radius", "5px", "height", "80px", "width", "80px", "object-fit", "cover", 3, "src", "click"], [2, "width", "50px"], ["aria-hidden", "true", 1, "fa", "fa-headphones"], [1, "modal"], [1, "card", "card-deck"], ["longContent", ""], [1, "numberOne"], [1, "numberTwo"], [1, "numberThree"], ["id", "unlike1", "aria-hidden", "true", 1, "fa", "fa-heart"], ["id", "like1", "aria-hidden", "true", 1, "fa", "fa-heart"], ["role", "button", 3, "click"], ["id", "add1", "aria-hidden", "true", 1, "fa", "fa-plus"], [3, "formGroup", "ngSubmit"], [1, "modal-header"], [1, "modal-title", 2, "color", "#1b1b1b"], ["formControlName", "playlist", 1, "input-group-lg"], [3, "value", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "submit", 1, "btn-danger", 3, "click"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], [3, "value"], ["id", "add", "aria-hidden", "true", 1, "fa", "fa-plus"], ["id", "unlike", "aria-hidden", "true", 1, "fa", "fa-heart"], ["id", "like", "aria-hidden", "true", 1, "fa", "fa-heart"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomeComponent_article_5_Template, 4, 1, "article", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "article", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Top Songs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HomeComponent_tbody_12_Template, 31, 15, "tbody", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "article", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Popular Artists");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Suni H\u1EA1 Linh");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Erik");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "S\u01A1n T\u00F9ng MTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Jack");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Marshmello");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Drake");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "article", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "New Songs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, HomeComponent_tbody_47_Template, 28, 10, "tbody", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "article", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Love");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Retro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Chill");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Workout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Rock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Pop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "article", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Party");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Electronic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Road Trip");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "article", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "h2", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Latest English");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Bad Guy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "MAR 29, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Bad Guy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "MAR 29, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Bad Guy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "MAR 29, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Bad Guy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "MAR 29, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Bad Guy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "MAR 29, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Bad Guy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "MAR 29, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "article", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "h2", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Latest Hindi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Bad Guy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "MAR 29, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Bad Guy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "MAR 29, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "Bad Guy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "MAR 29, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](172, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Bad Guy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "MAR 29, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](180, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Bad Guy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "MAR 29, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Bad Guy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "MAR 29, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](194, "app-playing-songs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "h1", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "Case Study Module 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.playlistsNewest.slice(0, 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.topSongs.slice(0, 5));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.songs.slice(0, 5));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _playing_songs_playing_songs_component__WEBPACK_IMPORTED_MODULE_14__["PlayingSongsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: [".text[_ngcontent-%COMP%] {\r\n  color: white ;\r\n  font-size: 20px ;\r\n  position: absolute !important;\r\n  top: 50% ;\r\n  left: 50% ;\r\n  transform: translate(-50%, -50%) !important;\r\n  text-align: center ;\r\n  width: 200px;\r\n}\r\n\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  background: #333641;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: \"Source Sans Pro\", sans-serif;\r\n}\r\n\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\n\r\nh4[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  transition: 0.5s;\r\n  color: white;\r\n}\r\n\r\n\r\nh4[_ngcontent-%COMP%]:hover {\r\n  transition: 0.5s;\r\n  text-shadow: 0 0 5px rgba(81, 203, 238, 1);\r\n}\r\n\r\n\r\n.numberOne[_ngcontent-%COMP%] {\r\n  color: #12c2e9;\r\n  display: block;\r\n  text-align: center;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.numberTwo[_ngcontent-%COMP%] {\r\n  color: #c471ed;\r\n  display: block;\r\n  text-align: center;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.numberThree[_ngcontent-%COMP%] {\r\n  color: #f64f59;\r\n  display: block;\r\n  text-align: center;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n#unlike[_ngcontent-%COMP%], #unlike1[_ngcontent-%COMP%], #unlike2[_ngcontent-%COMP%] {\r\n  transition: 0.2s;\r\n  cursor: pointer;\r\n  color: transparent;\r\n  -webkit-text-stroke-width: 1px;\r\n  -webkit-text-stroke-color: white;\r\n}\r\n\r\n\r\n#like[_ngcontent-%COMP%], #like1[_ngcontent-%COMP%], #like2[_ngcontent-%COMP%] {\r\n  -webkit-text-stroke-width: 1px;\r\n  -webkit-text-stroke-color: #FF0099;\r\n  transition: 0.2s;\r\n  cursor: pointer;\r\n  color: #FF0099;\r\n}\r\n\r\n\r\n#unlikeHistorySong[_ngcontent-%COMP%] {\r\n  transition: 0.2s;\r\n  cursor: pointer;\r\n  color: transparent;\r\n  -webkit-text-stroke-width: 1px;\r\n  -webkit-text-stroke-color: white;\r\n}\r\n\r\n\r\n#unlikeHistorySong[_ngcontent-%COMP%]:hover {\r\n  transition: 0.2s;\r\n  transform: scale(1.1);\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n#likeHistorySong[_ngcontent-%COMP%] {\r\n  -webkit-text-stroke-width: 1px;\r\n  -webkit-text-stroke-color: #FF0099;\r\n  transition: 0.2s;\r\n  cursor: pointer;\r\n  color: #FF0099;\r\n}\r\n\r\n\r\n#likeHistorySong[_ngcontent-%COMP%]:hover {\r\n  transition: 0.2s;\r\n  transform: scale(1.1);\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n#like[_ngcontent-%COMP%], #like1[_ngcontent-%COMP%]:hover {\r\n  transition: 0.2s;\r\n  transform: scale(1.1);\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n#unlike[_ngcontent-%COMP%], #unlike1[_ngcontent-%COMP%]:hover {\r\n  transition: 0.2s;\r\n  transform: scale(1.1);\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.popular-artist-entry[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  transition: 0.5s;\r\n}\r\n\r\n\r\n.popular-artist-entry[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\n  transform: scale(1.1);\r\n}\r\n\r\n\r\n.imageSong[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\n  transform: scale(1.1);\r\n}\r\n\r\n\r\n@keyframes reveal {\r\n  80% {\r\n    letter-spacing: 8px;\r\n  }\r\n  100% {\r\n    background-size: 300% 300%;\r\n  }\r\n}\r\n\r\n\r\n@keyframes glow {\r\n  40% {\r\n    text-shadow: 0 0 8px #fff;\r\n  }\r\n}\r\n\r\n\r\nimg[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  transition: 0.2s;\r\n  box-shadow: 0 0 5px rgba(81, 203, 238, 1);\r\n  border: 1px solid rgba(81, 203, 238, 1);\r\n}\r\n\r\n\r\n[_ngcontent-%COMP%]:root {\r\n  --main-bg-color: #0c1027;\r\n  --main-font-color: #ffffff;\r\n}\r\n\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  max-width: 900px;\r\n  margin: 0 auto;\r\n}\r\n\r\n\r\n.container-flex[_ngcontent-%COMP%], .flex-space[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n\r\n.container-flex[_ngcontent-%COMP%] {\r\n  margin-bottom: 6em;\r\n}\r\n\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  width: 75%;\r\n}\r\n\r\n\r\naside[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n}\r\n\r\n\r\n.article-image[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.latest-release-col[_ngcontent-%COMP%] {\r\n  width: 47.5%;\r\n}\r\n\r\n\r\n.latest-release-entry[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.8em;\r\n}\r\n\r\n\r\n.latest-release-image[_ngcontent-%COMP%] {\r\n  width: 25%;\r\n}\r\n\r\n\r\n.latest-release-info[_ngcontent-%COMP%] {\r\n  margin: auto 0;\r\n}\r\n\r\n\r\n.latest-release-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-bottom: 0.5em;\r\n}\r\n\r\n\r\n.latest-release-options[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-top: 0.5em;\r\n  margin-bottom: 0;\r\n}\r\n\r\n\r\n.latest-release-sub[_ngcontent-%COMP%] {\r\n  font-weight: 1;\r\n  font-size: 0.75rem;\r\n  color: #9c9da7;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.popular-artist-entry[_ngcontent-%COMP%] {\r\n  width: 16%;\r\n}\r\n\r\n\r\n.popular-artist-entry[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\n.popular-artist-entry[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-top: 0.4em;\r\n  margin-bottom: 0;\r\n  text-align: center;\r\n  font-size: 0.73rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.stations[_ngcontent-%COMP%] {\r\n  margin-top: 2em;\r\n  padding: 1em;\r\n  background: #101642;\r\n}\r\n\r\n\r\n.stations-entry[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 13.5%;\r\n}\r\n\r\n\r\n.stations-entry[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\n.stations-centered[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  font-size: 0.73rem;\r\n}\r\n\r\n\r\n.mid-featured-font[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n  font-size: 1rem;\r\n}\r\n\r\n\r\n.article-image[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n\r\n.middle-featured[_ngcontent-%COMP%] {\r\n  margin-top: 2em;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.language-song-entry[_ngcontent-%COMP%] {\r\n  width: 16%;\r\n}\r\n\r\n\r\n.language-song-entry[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n.language-sub[_ngcontent-%COMP%] {\r\n  font-size: 0.7rem;\r\n  margin-top: 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.queue-entry[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n\r\n.queue-number[_ngcontent-%COMP%] {\r\n  width: 10%;\r\n}\r\n\r\n\r\n.queue-entry-image[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n}\r\n\r\n\r\n.queue-entry-info[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n\r\n.like-icon[_ngcontent-%COMP%] {\r\n  width: 5%;\r\n}\r\n\r\n\r\n.queue-entry-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  margin-bottom: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n@media screen and (max-width: 840px) {\r\n  .queue-entry-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .queue-entry-sub[_ngcontent-%COMP%], .queue-number[_ngcontent-%COMP%] {\r\n    font-size: 0.6rem;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 650px) {\r\n  .container-flex[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n  main[_ngcontent-%COMP%], aside[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  aside[_ngcontent-%COMP%] {\r\n    margin-bottom: 6em;\r\n  }\r\n\r\n  .queue-entry-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .queue-entry-sub[_ngcontent-%COMP%], .queue-number[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 520px) {\r\n  .display-none[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .latest-release-col[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .popular-artist-entry[_ngcontent-%COMP%] {\r\n    width: 23%;\r\n  }\r\n\r\n  .stations-entry[_ngcontent-%COMP%] {\r\n    width: 18%;\r\n  }\r\n\r\n  .language-song-entry[_ngcontent-%COMP%] {\r\n    width: 32%;\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.featured-playlist[_ngcontent-%COMP%] {\r\n  background: #141b41;\r\n}\r\n\r\n\r\n.featured-playlist-image[_ngcontent-%COMP%] {\r\n  width: 45%;\r\n}\r\n\r\n\r\n.featured-playlist-image[_ngcontent-%COMP%]::after {\r\n  display: block;\r\n  position: relative;\r\n  background-image: linear-gradient(to bottom, transparent 0%, #141b41 150%);\r\n  margin-top: -150px;\r\n  height: 150px;\r\n  width: 100%;\r\n  content: '';\r\n}\r\n\r\n\r\n.featured-playlist-details[_ngcontent-%COMP%] {\r\n  width: 52.5%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n\r\n.featured-playlist-info-name[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n\r\n.featured-playlist-info-top[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n}\r\n\r\n\r\n.featured-playlist[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 0.8rem;\r\n  color: #9c9da7;\r\n}\r\n\r\n\r\n.followers[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 0.6rem;\r\n}\r\n\r\n\r\n.featured-playlist-buttons[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n\r\n.play-all-button[_ngcontent-%COMP%] {\r\n  margin-right: 1em;\r\n}\r\n\r\n\r\n.play-all-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-image: linear-gradient(to right, #4327b4, #be46dd);\r\n  color: white;\r\n  border: none;\r\n  padding: 0.5em 3em;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  margin-bottom: 0.2em;\r\n}\r\n\r\n\r\n.play-all-button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 0.7rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.playlist-next-item[_ngcontent-%COMP%] {\r\n  flex-direction: column;\r\n}\r\n\r\n\r\n.playlist-next-item-entry[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background: #1a1e33;\r\n  padding: 0.5em 0;\r\n  margin: 0.5em 0;\r\n}\r\n\r\n\r\n.playlist-next-item-entry[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n\r\n.playlist-next-item-entry-info[_ngcontent-%COMP%] {\r\n  width: 35%;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n\r\n.playlist-next-item-entry-info-image[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n}\r\n\r\n\r\n.playlist-next-item-entry-icons[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  width: 20%;\r\n  justify-content: space-around;\r\n}\r\n\r\n\r\n.playlist-next-item-entry-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #9c9da7;\r\n}\r\n\r\n\r\n.playlist-next-item-entry-number[_ngcontent-%COMP%], .playlist-next-item-entry-info-name-sub[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  color: #9c9da7;\r\n}\r\n\r\n\r\n@media screen and (max-width: 960px) and (min-width: 650px) {\r\n  .display-none-960[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 750px) {\r\n  .similar-artists-info-name[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 750px) and (min-width: 651px) {\r\n  .featured-playlist-writeup[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 0.6rem;\r\n  }\r\n\r\n  .playlist-next-item-entry-info[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 550px) {\r\n  .featured-playlist[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .featured-playlist-image[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .featured-playlist-details[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n  }\r\n\r\n  .featured-playlist-info-top[_ngcontent-%COMP%] {\r\n    margin-top: 0.5em;\r\n  }\r\n\r\n  .featured-playlist-writeup[_ngcontent-%COMP%] {\r\n    margin-top: 0.5em;\r\n  }\r\n\r\n  .featured-playlist-buttons[_ngcontent-%COMP%] {\r\n    margin: 0.5em 0;\r\n  }\r\n\r\n  .playlist-next-item-entry-info[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 365px) {\r\n  .similar-artists-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .playlist-next-item-entry-info[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n  }\r\n}\r\n\r\n\r\n.test[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n.test2[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  height: 250px;\r\n  opacity:0.6;\r\n  background-color: #1a1e33;\r\n  position: absolute;\r\n  top: 0;\r\n  display: none;\r\n}\r\n\r\n\r\n.test[_ngcontent-%COMP%]:hover   .test2[_ngcontent-%COMP%] {\r\n  \r\n  display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixTQUFTO0VBQ1QsVUFBVTtFQUdWLDJDQUEyQztFQUMzQyxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOzs7QUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QiwwQ0FBMEM7QUFDNUM7OztBQUdBO0VBQ0UscUJBQXFCO0FBQ3ZCOzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMENBQTBDO0FBQzVDOzs7QUFHQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixnQ0FBZ0M7QUFDbEM7OztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7OztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGdDQUFnQztBQUNsQzs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7OztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7OztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7OztBQUVBO0VBR0UsZ0JBQWdCO0FBQ2xCOzs7QUFFQTtFQUdFLHFCQUFxQjtBQUN2Qjs7O0FBR0E7RUFHRSxxQkFBcUI7QUFDdkI7OztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOzs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7OztBQUdBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsdUNBQXVDO0FBQ3pDOzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7QUFDNUI7OztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOzs7QUFFQTs7eUJBRXlCOzs7QUFHekIsV0FBVzs7O0FBRVg7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7OztBQUdBLGlCQUFpQjs7O0FBQ2pCO0VBQ0UsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOzs7QUFFQSxrQkFBa0I7OztBQUNsQjtFQUNFLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOzs7QUFFQSxXQUFXOzs7QUFDWDtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7OztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7OztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7OztBQUVBLGdCQUFnQjs7O0FBRWhCO0VBQ0UsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7O0FBRUEsZ0JBQWdCOzs7QUFFaEI7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOzs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7QUFFRjs7O0FBRUEsT0FBTzs7O0FBQ1A7RUFDRSxtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMEVBQTBFO0VBQzFFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7OztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7OztBQUVBLHFCQUFxQjs7O0FBQ3JCO0VBQ0Usc0JBQXNCO0FBQ3hCOzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDViw2QkFBNkI7QUFDL0I7OztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7O0FBR0E7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOzs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7OztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7OztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sYUFBYTtBQUNmOzs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxjQUFjO0FBQ2hCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udGV4dCB7XHJcbiAgY29sb3I6IHdoaXRlIDtcclxuICBmb250LXNpemU6IDIwcHggO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIHRvcDogNTAlIDtcclxuICBsZWZ0OiA1MCUgO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgIWltcG9ydGFudDtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgIWltcG9ydGFudDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciA7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG5cclxuYm9keSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZDogIzMzMzY0MTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmg0IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmg0OmhvdmVyIHtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4IHJnYmEoODEsIDIwMywgMjM4LCAxKTtcclxufVxyXG5cclxuXHJcbi5udW1iZXJPbmUge1xyXG4gIGNvbG9yOiAjMTJjMmU5O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm51bWJlclR3byB7XHJcbiAgY29sb3I6ICNjNDcxZWQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubnVtYmVyVGhyZWUge1xyXG4gIGNvbG9yOiAjZjY0ZjU5O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI3VubGlrZSwgI3VubGlrZTEsI3VubGlrZTIge1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAxcHg7XHJcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNsaWtlLCAjbGlrZTEsICNsaWtlMiB7XHJcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMXB4O1xyXG4gIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6ICNGRjAwOTk7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICNGRjAwOTk7XHJcbn1cclxuXHJcbiN1bmxpa2VIaXN0b3J5U29uZyB7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDFweDtcclxuICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI3VubGlrZUhpc3RvcnlTb25nOmhvdmVyIHtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNsaWtlSGlzdG9yeVNvbmcge1xyXG4gIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDFweDtcclxuICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiAjRkYwMDk5O1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjRkYwMDk5O1xyXG59XHJcblxyXG4jbGlrZUhpc3RvcnlTb25nOmhvdmVyIHtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNsaWtlLCAjbGlrZTE6aG92ZXIge1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI3VubGlrZSwgI3VubGlrZTE6aG92ZXIge1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBvcHVsYXItYXJ0aXN0LWVudHJ5IGltZyB7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5wb3B1bGFyLWFydGlzdC1lbnRyeTpob3ZlciBpbWcge1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuXHJcbi5pbWFnZVNvbmc6aG92ZXIgaW1nIHtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcmV2ZWFsIHtcclxuICA4MCUge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDhweDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwMCUgMzAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZ2xvdyB7XHJcbiAgNDAlIHtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgOHB4ICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuaW1nOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoODEsIDIwMywgMjM4LCAxKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDgxLCAyMDMsIDIzOCwgMSk7XHJcbn1cclxuXHJcbjpyb290IHtcclxuICAtLW1haW4tYmctY29sb3I6ICMwYzEwMjc7XHJcbiAgLS1tYWluLWZvbnQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbmgyIHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRCT0RZXHJcbioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cclxuLypGZWF0dXJlZCovXHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5jb250YWluZXItZmxleCwgLmZsZXgtc3BhY2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsZXgge1xyXG4gIG1hcmdpbi1ib3R0b206IDZlbTtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG5cclxuYXNpZGUge1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5hcnRpY2xlLWltYWdlIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG5cclxuLypMYXRlc3QgUmVsZWFzZSovXHJcbi5sYXRlc3QtcmVsZWFzZS1jb2wge1xyXG4gIHdpZHRoOiA0Ny41JTtcclxufVxyXG5cclxuLmxhdGVzdC1yZWxlYXNlLWVudHJ5IHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjhlbTtcclxufVxyXG5cclxuLmxhdGVzdC1yZWxlYXNlLWltYWdlIHtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4ubGF0ZXN0LXJlbGVhc2UtaW5mbyB7XHJcbiAgbWFyZ2luOiBhdXRvIDA7XHJcbn1cclxuXHJcbi5sYXRlc3QtcmVsZWFzZS1pbmZvIHAge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbn1cclxuXHJcbi5sYXRlc3QtcmVsZWFzZS1vcHRpb25zIHAge1xyXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5sYXRlc3QtcmVsZWFzZS1zdWIge1xyXG4gIGZvbnQtd2VpZ2h0OiAxO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBjb2xvcjogIzljOWRhNztcclxufVxyXG5cclxuLypQb3B1bGFyIEFydGlzdHMqL1xyXG4ucG9wdWxhci1hcnRpc3QtZW50cnkge1xyXG4gIHdpZHRoOiAxNiU7XHJcbn1cclxuXHJcbi5wb3B1bGFyLWFydGlzdC1lbnRyeSBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnBvcHVsYXItYXJ0aXN0LWVudHJ5IHAge1xyXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMC43M3JlbTtcclxufVxyXG5cclxuLypTdGF0aW9ucyovXHJcbi5zdGF0aW9ucyB7XHJcbiAgbWFyZ2luLXRvcDogMmVtO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBiYWNrZ3JvdW5kOiAjMTAxNjQyO1xyXG59XHJcblxyXG4uc3RhdGlvbnMtZW50cnkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTMuNSU7XHJcbn1cclxuXHJcbi5zdGF0aW9ucy1lbnRyeSBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnN0YXRpb25zLWNlbnRlcmVkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGZvbnQtc2l6ZTogMC43M3JlbTtcclxufVxyXG5cclxuLm1pZC1mZWF0dXJlZC1mb250IHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmFydGljbGUtaW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1pZGRsZS1mZWF0dXJlZCB7XHJcbiAgbWFyZ2luLXRvcDogMmVtO1xyXG59XHJcblxyXG4vKkxhbmd1YWdlIFNvbmcqL1xyXG5cclxuLmxhbmd1YWdlLXNvbmctZW50cnkge1xyXG4gIHdpZHRoOiAxNiU7XHJcbn1cclxuXHJcbi5sYW5ndWFnZS1zb25nLWVudHJ5IHAge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmxhbmd1YWdlLXN1YiB7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLypBc2lkZSBTZWN0aW9uKi9cclxuXHJcbi5xdWV1ZS1lbnRyeSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi5xdWV1ZS1udW1iZXIge1xyXG4gIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbi5xdWV1ZS1lbnRyeS1pbWFnZSB7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLnF1ZXVlLWVudHJ5LWluZm8ge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saWtlLWljb24ge1xyXG4gIHdpZHRoOiA1JTtcclxufVxyXG5cclxuLnF1ZXVlLWVudHJ5LWluZm8gcCB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDBweCkge1xyXG4gIC5xdWV1ZS1lbnRyeS1pbmZvIHAsIC5xdWV1ZS1lbnRyeS1zdWIsIC5xdWV1ZS1udW1iZXIge1xyXG4gICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gIC5jb250YWluZXItZmxleCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuXHJcbiAgbWFpbiwgYXNpZGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBhc2lkZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2ZW07XHJcbiAgfVxyXG5cclxuICAucXVldWUtZW50cnktaW5mbyBwLCAucXVldWUtZW50cnktc3ViLCAucXVldWUtbnVtYmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgLmRpc3BsYXktbm9uZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmxhdGVzdC1yZWxlYXNlLWNvbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5wb3B1bGFyLWFydGlzdC1lbnRyeSB7XHJcbiAgICB3aWR0aDogMjMlO1xyXG4gIH1cclxuXHJcbiAgLnN0YXRpb25zLWVudHJ5IHtcclxuICAgIHdpZHRoOiAxOCU7XHJcbiAgfVxyXG5cclxuICAubGFuZ3VhZ2Utc29uZy1lbnRyeSB7XHJcbiAgICB3aWR0aDogMzIlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qTUFJTiovXHJcbi5mZWF0dXJlZC1wbGF5bGlzdCB7XHJcbiAgYmFja2dyb3VuZDogIzE0MWI0MTtcclxufVxyXG5cclxuLmZlYXR1cmVkLXBsYXlsaXN0LWltYWdlIHtcclxuICB3aWR0aDogNDUlO1xyXG59XHJcblxyXG4uZmVhdHVyZWQtcGxheWxpc3QtaW1hZ2U6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQgMCUsICMxNDFiNDEgMTUwJSk7XHJcbiAgbWFyZ2luLXRvcDogLTE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29udGVudDogJyc7XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1wbGF5bGlzdC1kZXRhaWxzIHtcclxuICB3aWR0aDogNTIuNSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uZmVhdHVyZWQtcGxheWxpc3QtaW5mby1uYW1lIGgyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmZlYXR1cmVkLXBsYXlsaXN0LWluZm8tdG9wIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmVhdHVyZWQtcGxheWxpc3QgcCB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgY29sb3I6ICM5YzlkYTc7XHJcbn1cclxuXHJcbi5mb2xsb3dlcnMgcCB7XHJcbiAgZm9udC1zaXplOiAwLjZyZW07XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1wbGF5bGlzdC1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucGxheS1hbGwtYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuLnBsYXktYWxsLWJ1dHRvbiBidXR0b24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQzMjdiNCwgI2JlNDZkZCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwLjVlbSAzZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcclxufVxyXG5cclxuLnBsYXktYWxsLWJ1dHRvbiBwIHtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxufVxyXG5cclxuLypQbGF5bGlzdCBuZXh0IGl0ZW0qL1xyXG4ucGxheWxpc3QtbmV4dC1pdGVtIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucGxheWxpc3QtbmV4dC1pdGVtLWVudHJ5IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMWExZTMzO1xyXG4gIHBhZGRpbmc6IDAuNWVtIDA7XHJcbiAgbWFyZ2luOiAwLjVlbSAwO1xyXG59XHJcblxyXG4ucGxheWxpc3QtbmV4dC1pdGVtLWVudHJ5IHAge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucGxheWxpc3QtbmV4dC1pdGVtLWVudHJ5LWluZm8ge1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLnBsYXlsaXN0LW5leHQtaXRlbS1lbnRyeS1pbmZvLWltYWdlIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4ucGxheWxpc3QtbmV4dC1pdGVtLWVudHJ5LWljb25zIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5wbGF5bGlzdC1uZXh0LWl0ZW0tZW50cnktaWNvbnMgYSB7XHJcbiAgY29sb3I6ICM5YzlkYTc7XHJcbn1cclxuXHJcbi5wbGF5bGlzdC1uZXh0LWl0ZW0tZW50cnktbnVtYmVyLCAucGxheWxpc3QtbmV4dC1pdGVtLWVudHJ5LWluZm8tbmFtZS1zdWIge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGNvbG9yOiAjOWM5ZGE3O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xyXG4gIC5kaXNwbGF5LW5vbmUtOTYwIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gIC5zaW1pbGFyLWFydGlzdHMtaW5mby1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIGFuZCAobWluLXdpZHRoOiA2NTFweCkge1xyXG4gIC5mZWF0dXJlZC1wbGF5bGlzdC13cml0ZXVwIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgfVxyXG5cclxuICAucGxheWxpc3QtbmV4dC1pdGVtLWVudHJ5LWluZm8ge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgLmZlYXR1cmVkLXBsYXlsaXN0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmZlYXR1cmVkLXBsYXlsaXN0LWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmZlYXR1cmVkLXBsYXlsaXN0LWRldGFpbHMge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICB9XHJcblxyXG4gIC5mZWF0dXJlZC1wbGF5bGlzdC1pbmZvLXRvcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICB9XHJcblxyXG4gIC5mZWF0dXJlZC1wbGF5bGlzdC13cml0ZXVwIHtcclxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gIH1cclxuXHJcbiAgLmZlYXR1cmVkLXBsYXlsaXN0LWJ1dHRvbnMge1xyXG4gICAgbWFyZ2luOiAwLjVlbSAwO1xyXG4gIH1cclxuXHJcbiAgLnBsYXlsaXN0LW5leHQtaXRlbS1lbnRyeS1pbmZvIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjVweCkge1xyXG4gIC5zaW1pbGFyLWFydGlzdHMtdGl0bGUgaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgfVxyXG5cclxuICAucGxheWxpc3QtbmV4dC1pdGVtLWVudHJ5LWluZm8ge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcbn1cclxuXHJcbi50ZXN0IGltZyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRlc3QyIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBvcGFjaXR5OjAuNjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExZTMzO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRlc3Q6aG92ZXIgLnRlc3QyIHtcclxuICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpOyovXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _service_song_song_service__WEBPACK_IMPORTED_MODULE_4__["SongService"] }, { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: _service_like_like_song_service__WEBPACK_IMPORTED_MODULE_7__["LikeSongService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] }, { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_9__["CategoryService"] }, { type: _service_songPlaylist_song_playlist_service__WEBPACK_IMPORTED_MODULE_10__["SongPlaylistService"] }, { type: _service_playList_play_list_service__WEBPACK_IMPORTED_MODULE_11__["PlayListService"] }, { type: _service_like_like_playlist_service__WEBPACK_IMPORTED_MODULE_12__["LikePlaylistService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\CodeGym\Module_06\Soundwave-Project-FrontEnd-Module6\src\main.ts */"zUnb");


/***/ }),

/***/ "00Ag":
/*!******************************************************!*\
  !*** ./src/app/service/category/category.service.ts ***!
  \******************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Project_Sound_Wave_FrontEnd_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../Project_Sound_Wave_FrontEnd/src/environments/environment */ "eCOg");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const urlApi = `${_Project_Sound_Wave_FrontEnd_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}`;
// @ts-ignore
class CategoryService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllCategory() {
        return this.httpClient.get(urlApi + '/categories');
    }
    getCategory(id) {
        return this.httpClient.get(urlApi + '/categories' + `/${id}`);
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "06Dn":
/*!*******************************************************!*\
  !*** ./src/app/service/playList/play-list.service.ts ***!
  \*******************************************************/
/*! exports provided: PlayListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayListService", function() { return PlayListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const URL_API = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}`;
class PlayListService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    savePlayList(playList) {
        return this.httpClient.post(URL_API + `/playlists`, playList);
    }
    getAllPlaylist() {
        return this.httpClient.get(URL_API + `/playlists`);
    }
    getOnePlaylist(id) {
        return this.httpClient.get(URL_API + `/playlists/${id}`);
    }
    getPlaylistsNewest() {
        return this.httpClient.get(URL_API + `/playlists/date-new`);
    }
    getMyPlaylists(id) {
        return this.httpClient.get(URL_API + `/playlists/user/${id}`);
    }
    updateMyPlaylist(p_id, u_id, playlist) {
        return this.httpClient.put(URL_API + `/playlists/${p_id}/${u_id}`, playlist);
    }
}
PlayListService.ɵfac = function PlayListService_Factory(t) { return new (t || PlayListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PlayListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlayListService, factory: PlayListService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "27X8":
/*!*************************************************************!*\
  !*** ./src/app/song/comment-list/comment-list.component.ts ***!
  \*************************************************************/
/*! exports provided: CommentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentListComponent", function() { return CommentListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_comment_comment_song_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/comment/comment-song.service */ "4yZ9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/user/user.service */ "rwBg");
/* harmony import */ var _service_song_song_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/song/song.service */ "r1xU");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function CommentListComponent_li_5_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r3.date);
} }
function CommentListComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CommentListComponent_li_5_div_13_Template, 3, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", comment_r3.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r3.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r3.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userCurrent);
} }
const _c0 = function () { return ["/login"]; };
function CommentListComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log In To Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function CommentListComponent_form_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CommentListComponent_form_8_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.addComment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentListComponent_form_8_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.addCommentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class CommentListComponent {
    constructor(commentService, activatedRoute, authService, userService, songService, fb) {
        this.commentService = commentService;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.userService = userService;
        this.songService = songService;
        this.fb = fb;
    }
    ngOnInit() {
        this.userCurrent = this.authService.currentUserValue;
        this.addCommentForm = this.fb.group({
            comment: [null]
        });
        this.getAllComment();
        const userFromLocalStorage = this.authService.currentUserValue;
        this.userService.getUserByUsername(userFromLocalStorage.username).subscribe(value => {
            this.user = value;
        });
    }
    addComment() {
        // @ts-ignore
        if (document.getElementById('inputComment').value !== '') {
            this.songService.getSongById(this.id).subscribe(value => {
                const commentTest = this.addCommentForm.value;
                commentTest.comment = this.addCommentForm.value.comment;
                commentTest.user = this.user;
                commentTest.song = value;
                this.commentService.addComment(commentTest).subscribe(() => {
                    this.commentService.getCommentBySongId(this.id).subscribe(value1 => {
                        this.comments = value1;
                        this.getAllComment();
                    });
                });
            });
            this.clear();
        }
    }
    getAllComment() {
        this.activatedRoute.paramMap.subscribe((param) => {
            this.id = +param.get('id');
            this.commentService.getCommentBySongId(this.id).subscribe(value => {
                this.comments = value;
            });
        });
    }
    clear() {
        // @ts-ignore
        const input = document.getElementById('inputComment').value = '';
    }
}
CommentListComponent.ɵfac = function CommentListComponent_Factory(t) { return new (t || CommentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_comment_comment_song_service__WEBPACK_IMPORTED_MODULE_1__["CommentSongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_song_song_service__WEBPACK_IMPORTED_MODULE_5__["SongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"])); };
CommentListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentListComponent, selectors: [["app-comment-list"]], decls: 9, vars: 4, consts: [[1, "chatContainer"], [1, "chatTitleContainer"], [1, "chatHistoryContainer"], [1, "formComments"], ["class", "commentLi commentstep-1", "data-commentid", "4", 4, "ngFor", "ngForOf"], [2, "text-align", "center", "margin-top", "20px"], ["type", "button", "class", "btn btn-outline-info", "style", "width: 100%", 3, "routerLink", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["data-commentid", "4", 1, "commentLi", "commentstep-1"], [1, "row", "d-flex", "justify-content-center", "mt-100", "mb-100"], [1, "col-lg-12"], [1, "card"], [1, "comment-widgets", 2, "border-bottom", "solid 1px gray"], [1, "d-flex", "flex-row", "comment-row", "m-t-0"], [1, "p-2"], ["alt", "user", 1, "rounded-circle", 2, "object-fit", "cover", "height", "50px", "width", "50px", 3, "src"], [1, "comment-text", "w-100"], [1, "font-medium", 2, "font-size", "20px"], [1, "m-b-15", "d-block", 2, "font-size", "12px"], ["class", "comment-footer", 4, "ngIf"], [1, "comment-footer", 2, "margin-top", "20px"], [1, "fas", "fa-thumbs-up"], [1, "fas", "fa-thumbs-down", 2, "margin-left", "20px"], [1, "comment-footer"], [1, "text-muted", "float-right"], ["type", "button", 1, "btn", "btn-outline-info", 2, "width", "100%", 3, "routerLink"], [3, "formGroup", "ngSubmit"], [1, "input-group", "input-group-sm", "chatMessageControls"], ["id", "sizing-addon3", 1, "input-group-addon"], [2, "width", "40px", "height", "40px", "object-fit", "cover", "border-radius", "50%", 3, "src"], ["autocomplete", "off", "id", "inputComment", "name", "comment", "formControlName", "comment", "type", "text", "placeholder", "Type your comment here..", 1, "form-control", 2, "border-radius", "20px", "height", "40px"], [1, "input-group-btn"], ["id", "clearMessageButton", 1, "btn", "btn-default", 3, "click"], ["id", "sendMessageButton", "type", "submit", 1, "btn", "btn-primary"], [1, "fas", "fa-comments"]], template: function CommentListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CommentListComponent_li_5_Template, 19, 4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CommentListComponent_button_7_Template, 2, 2, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CommentListComponent_form_8_Template, 11, 2, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Comments (", ctx.comments.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"]], styles: [".formComments[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\ninput[type=\"text\"][_ngcontent-%COMP%] {\r\n  border-radius: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.chatTitleContainer[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  font-size: 15pt;\r\n  vertical-align: middle;\r\n  display: table-cell;\r\n  height: 15px;\r\n  width: 100%;\r\n  font-family: Expert-Sans-Regular, verdana, Arial, helvetica, sans-serif;\r\n  color: white;\r\n\r\n}\r\n\r\n.chatContainer[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: #1a1e33;\r\n  padding: 20px;\r\n\r\n}\r\n\r\n.chatHistoryContainer[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  height: 300px;\r\n  width: 100%;\r\n  background-color: transparent;\r\n  border-top-left-radius: 6px;\r\n  border-top-right-radius: 6px;\r\n\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:hover {\r\n  transition: 0.5s;\r\n  box-shadow: 0 0 5px rgba(81, 203, 238, 1);\r\n  border: 1px solid rgba(81, 203, 238, 1);\r\n}\r\n\r\n.chatMessageControls[_ngcontent-%COMP%] {\r\n\r\n  margin-top: 6px;\r\n  padding: 10px;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  border-bottom-left-radius: 6px;\r\n  border-bottom-right-radius: 6px;\r\n\r\n}\r\n\r\n.fa[_ngcontent-%COMP%] {\r\n  margin-right: 6px;\r\n}\r\n\r\n.formComments[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  padding-bottom: 60px;\r\n  padding-left: 0px;\r\n\r\n}\r\n\r\n.formComments[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\r\n  margin-bottom: 10px;\r\n\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 0;\r\n  word-wrap: break-word;\r\n  background-color: #1a93ca;\r\n  background-clip: border-box;\r\n  border: 0px solid transparent;\r\n  border-radius: 0px\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n  padding: 1.25rem\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  font-weight: 600;\r\n  margin-bottom: 10px\r\n}\r\n\r\n.comment-widgets[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-bottom: 10px\r\n}\r\n\r\n.comment-widgets[_ngcontent-%COMP%]   .comment-row[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid transparent;\r\n  padding: 14px;\r\n  display: flex;\r\n  margin: 10px 0\r\n}\r\n\r\n.p-2[_ngcontent-%COMP%] {\r\n  padding: 0.5rem !important\r\n}\r\n\r\n.comment-text[_ngcontent-%COMP%] {\r\n  padding-left: 15px\r\n}\r\n\r\n.w-100[_ngcontent-%COMP%] {\r\n  width: 100% !important\r\n}\r\n\r\n.m-b-15[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px\r\n}\r\n\r\n.btn-sm[_ngcontent-%COMP%] {\r\n  padding: 0.25rem 0.5rem;\r\n  font-size: 0.76563rem;\r\n  line-height: 1.5;\r\n  border-radius: 1px\r\n}\r\n\r\n.btn-cyan[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background-color: #27a9e3;\r\n  border-color: #27a9e3\r\n}\r\n\r\n.btn-cyan[_ngcontent-%COMP%]:hover {\r\n  color: #fff;\r\n  background-color: #1a93ca;\r\n  border-color: #198bbe\r\n}\r\n\r\n.comment-widgets[_ngcontent-%COMP%]   .comment-row[_ngcontent-%COMP%]:hover {\r\n  background: rgba(0, 0, 0, 0.05)\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCx1RUFBdUU7RUFDdkUsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixhQUFhOztBQUVmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQiw0QkFBNEI7O0FBRTlCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlDQUF5QztFQUN6Qyx1Q0FBdUM7QUFDekM7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGFBQWE7RUFDYixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QiwrQkFBK0I7O0FBRWpDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGlCQUFpQjs7QUFFbkI7O0FBRUE7O0VBRUUsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUdsQixhQUFhO0VBSWIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0I7QUFDRjs7QUFFQTtFQUdFLGNBQWM7RUFDZDtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUdiLGFBQWE7RUFDYjtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGIiwiZmlsZSI6ImNvbW1lbnQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm1Db21tZW50czo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmNoYXRUaXRsZUNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDE1cHQ7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIGhlaWdodDogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LWZhbWlseTogRXhwZXJ0LVNhbnMtUmVndWxhciwgdmVyZGFuYSwgQXJpYWwsIGhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG59XHJcblxyXG4uY2hhdENvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExZTMzO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcblxyXG59XHJcblxyXG4uY2hhdEhpc3RvcnlDb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcclxuXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6aG92ZXIge1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDgxLCAyMDMsIDIzOCwgMSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg4MSwgMjAzLCAyMzgsIDEpO1xyXG59XHJcblxyXG4uY2hhdE1lc3NhZ2VDb250cm9scyB7XHJcblxyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XHJcblxyXG59XHJcblxyXG4uZmEge1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcblxyXG4uZm9ybUNvbW1lbnRzIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuXHJcbn1cclxuXHJcbi5mb3JtQ29tbWVudHMgbGkge1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTkzY2E7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweFxyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gIC1tcy1mbGV4OiAxIDEgYXV0bztcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBwYWRkaW5nOiAxLjI1cmVtXHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLXRpdGxlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4XHJcbn1cclxuXHJcbi5jb21tZW50LXdpZGdldHMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4XHJcbn1cclxuXHJcbi5jb21tZW50LXdpZGdldHMgLmNvbW1lbnQtcm93IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMTRweDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMTBweCAwXHJcbn1cclxuXHJcbi5wLTIge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5jb21tZW50LXRleHQge1xyXG4gIHBhZGRpbmctbGVmdDogMTVweFxyXG59XHJcblxyXG4udy0xMDAge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnRcclxufVxyXG5cclxuLm0tYi0xNSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweFxyXG59XHJcblxyXG4uYnRuLXNtIHtcclxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICBmb250LXNpemU6IDAuNzY1NjNyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBib3JkZXItcmFkaXVzOiAxcHhcclxufVxyXG5cclxuLmJ0bi1jeWFuIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdhOWUzO1xyXG4gIGJvcmRlci1jb2xvcjogIzI3YTllM1xyXG59XHJcblxyXG4uYnRuLWN5YW46aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTkzY2E7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMTk4YmJlXHJcbn1cclxuXHJcbi5jb21tZW50LXdpZGdldHMgLmNvbW1lbnQtcm93OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDUpXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comment-list',
                templateUrl: './comment-list.component.html',
                styleUrls: ['./comment-list.component.css']
            }]
    }], function () { return [{ type: _service_comment_comment_song_service__WEBPACK_IMPORTED_MODULE_1__["CommentSongService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _service_song_song_service__WEBPACK_IMPORTED_MODULE_5__["SongService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "3QLD":
/*!**************************************!*\
  !*** ./src/app/helper/auth-guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");




class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.authService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }
    canActivate(route, state) {
        if (this.currentUser) {
            return true;
        }
        else {
            this.router.navigate(['/login', '/'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }
    canActivateChild(childRoute, state) {
        if (this.currentUser) {
            return true;
        }
        else {
            this.router.navigate(['/login', '/'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "4MTJ":
/*!*******************************************!*\
  !*** ./src/app/helper/jwt-interceptor.ts ***!
  \*******************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");



class JwtInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        const currentUser = this.authService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "4tpU":
/*!*************************************************************!*\
  !*** ./src/app/service/comment/comment-playlist.service.ts ***!
  \*************************************************************/
/*! exports provided: CommentPlaylistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentPlaylistService", function() { return CommentPlaylistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const URL_API = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}`;
class CommentPlaylistService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getCommentByPlaylistId(id) {
        return this.httpClient.get(URL_API + `/comment-playlists/comment/${id}`);
    }
    addComment(commentPlaylist) {
        return this.httpClient.post(URL_API + `/comment-playlists`, commentPlaylist);
    }
}
CommentPlaylistService.ɵfac = function CommentPlaylistService_Factory(t) { return new (t || CommentPlaylistService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CommentPlaylistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommentPlaylistService, factory: CommentPlaylistService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentPlaylistService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "4yZ9":
/*!*********************************************************!*\
  !*** ./src/app/service/comment/comment-song.service.ts ***!
  \*********************************************************/
/*! exports provided: CommentSongService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentSongService", function() { return CommentSongService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const URL_API = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}`;
class CommentSongService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getCommentBySongId(id) {
        return this.httpClient.get(URL_API + `/comment-songs/song/${id}`);
    }
    addComment(commentSong) {
        return this.httpClient.post(URL_API + `/comment-songs`, commentSong);
    }
}
CommentSongService.ɵfac = function CommentSongService_Factory(t) { return new (t || CommentSongService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CommentSongService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommentSongService, factory: CommentSongService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentSongService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "5yS1":
/*!*************************************************************************!*\
  !*** ./src/app/playlist/playlist-details/playlist-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: PlaylistDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistDetailsComponent", function() { return PlaylistDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_song_song_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/song/song.service */ "r1xU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_playList_play_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/playList/play-list.service */ "06Dn");
/* harmony import */ var _service_songPlaylist_song_playlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/songPlaylist/song-playlist.service */ "jjR9");
/* harmony import */ var _service_like_like_song_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/like/like-song.service */ "87Ka");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/user/user.service */ "rwBg");
/* harmony import */ var _service_like_like_playlist_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/like/like-playlist.service */ "Y5Hv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _comment_playlist_comment_playlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../comment-playlist/comment-playlist.component */ "nhcN");












function PlaylistDetailsComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No songs have been added to this playlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlaylistDetailsComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistDetailsComponent_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.likePlaylist(ctx_r4.playlistCurrent.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "like");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlaylistDetailsComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistDetailsComponent_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.likePlaylist(ctx_r6.playlistCurrent.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "unlike");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlaylistDetailsComponent_div_9_div_1_a_17_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistDetailsComponent_div_9_div_1_a_17_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const song_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.likeSong(song_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "like");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlaylistDetailsComponent_div_9_div_1_a_18_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistDetailsComponent_div_9_div_1_a_18_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const song_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.likeSong(song_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "unlike");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/songs/detail", a1]; };
function PlaylistDetailsComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistDetailsComponent_div_9_div_1_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const song_r9 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.playThisSong(song_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PlaylistDetailsComponent_div_9_div_1_a_17_Template, 3, 0, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PlaylistDetailsComponent_div_9_div_1_a_18_Template, 3, 0, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const song_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", song_r9.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, song_r9.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r9.singer.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !song_r9.isLiked && ctx_r8.userCurrent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", song_r9.isLiked && ctx_r8.userCurrent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", song_r9.like, " ");
} }
function PlaylistDetailsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlaylistDetailsComponent_div_9_div_1_Template, 24, 10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.songs);
} }
class PlaylistDetailsComponent {
    constructor(songService, activatedRoute, playlistService, songPlaylistService, likeSongService, authService, userService, likePlaylistService) {
        this.songService = songService;
        this.activatedRoute = activatedRoute;
        this.playlistService = playlistService;
        this.songPlaylistService = songPlaylistService;
        this.likeSongService = likeSongService;
        this.authService = authService;
        this.userService = userService;
        this.likePlaylistService = likePlaylistService;
        this.songs = [];
        this.songLikes = [];
        this.playlistLikes = [];
    }
    ngOnInit() {
        this.authService.currentUser.subscribe(value => {
            this.userCurrent = value;
            this.userService.getUserByUsername(value.username).subscribe(value1 => {
                this.user = value1;
                this.activatedRoute.paramMap.subscribe((param) => {
                    // @ts-ignore
                    this.pl_id = param.get('id');
                    this.getAllSongPlaylist(this.pl_id, this.user.id);
                    this.getPlaylistCurrent(this.user.id);
                });
            });
        });
    }
    getPlaylistCurrent(userId) {
        this.activatedRoute.paramMap.subscribe((param) => {
            // @ts-ignore
            this.pl_id = param.get('id');
            this.playlistService.getOnePlaylist(this.pl_id).subscribe(value => {
                this.playlistCurrent = value;
                this.likePlaylistService.getLikePlaylist(this.pl_id).subscribe(value => {
                    this.playlistCurrent.isLike = false;
                    this.playlistCurrent.like = value;
                });
                this.likePlaylistService.getAllLikeUser(userId).subscribe((data) => {
                    this.playlistLikes = data;
                    for (let j = 0; j < this.playlistLikes.length; j++) {
                        if (this.playlistCurrent.id === this.playlistLikes[j].id) {
                            this.playlistCurrent.isLike = true;
                        }
                    }
                });
            });
        });
    }
    likePlaylist(p_id) {
        this.likePlaylistService.likePlaylist(p_id, this.user.id).subscribe(() => console.log(this.user.id));
        this.getPlaylistCurrent(this.user.id);
    }
    getAllSongPlaylist(p_id, user_id) {
        this.songPlaylistService.getSongByPlaylist(p_id).subscribe((data) => {
            this.songs = data;
            this.songs.map(song => {
                song.isLiked = false;
                this.likeSongService.getLikeSong(song.id).subscribe(value => song.like = value);
            });
            this.likeSongService.getAllLikeUser(user_id).subscribe((data) => {
                this.songLikes = data;
                for (let i = 0; i < this.songs.length; i++) {
                    for (let j = 0; j < this.songLikes.length; j++) {
                        if (this.songs[i].id === this.songLikes[j].id) {
                            this.songs[i].isLiked = true;
                        }
                    }
                }
            });
        });
    }
    playThisSong(id) {
        this.songService.countViews(id).subscribe(() => console.log('ok'));
        this.songService.getSongById(id).subscribe(value => {
            this.song = value;
            localStorage.setItem('songSelected', JSON.stringify(this.song));
            console.log(this.song);
            window.location.reload();
        });
    }
    likeSong(s_id) {
        this.likeSongService.likeSong(s_id, this.user.id).subscribe(() => console.log(this.user.id));
        this.activatedRoute.paramMap.subscribe((param) => {
            // @ts-ignore
            this.pl_id = param.get('id');
            this.getAllSongPlaylist(this.pl_id, this.user.id);
        });
    }
}
PlaylistDetailsComponent.ɵfac = function PlaylistDetailsComponent_Factory(t) { return new (t || PlaylistDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_song_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_playList_play_list_service__WEBPACK_IMPORTED_MODULE_3__["PlayListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_songPlaylist_song_playlist_service__WEBPACK_IMPORTED_MODULE_4__["SongPlaylistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_like_like_song_service__WEBPACK_IMPORTED_MODULE_5__["LikeSongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_like_like_playlist_service__WEBPACK_IMPORTED_MODULE_8__["LikePlaylistService"])); };
PlaylistDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaylistDetailsComponent, selectors: [["app-playlist-details"]], decls: 12, vars: 6, consts: [["style", "color: white; text-align: center; margin-top: 80px", 4, "ngIf"], [3, "click", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-heart", 2, "color", "#FF0099"], [1, "container", 2, "margin-top", "30px"], [4, "ngIf"], [1, "container", "col-sm-6"], [2, "color", "white", "text-align", "center", "margin-top", "80px"], [3, "click"], ["id", "unlike2", "aria-hidden", "true", 1, "fa", "fa-heart"], ["id", "like2", "aria-hidden", "true", 1, "fa", "fa-heart"], ["class", "playlist-next-item flex-space", 4, "ngFor", "ngForOf"], [1, "playlist-next-item", "flex-space"], [1, "playlist-next-item-entry", "flex-space"], [1, "playlist-next-item-entry-info", "flex-space"], [2, "width", "10px"], [1, "playlist-next-item-entry-number", 2, "width", "50px"], [1, "playlist-next-item-entry-info-image"], [2, "height", "50px", "width", "50px", "object-fit", "cover", 3, "src"], [1, "playlist-next-item-entry-info-name", 2, "width", "100px", "word-break", "break-all"], [3, "routerLink"], [2, "width", "200px"], [1, "playlist-next-item-entry-info-name-sub"], [1, "playlist-next-item-entry-icons", "flex-space"], [2, "width", "50px"], ["href", ""], ["id", "add", "aria-hidden", "true", 1, "fa", "fa-plus"], ["id", "unlike1", "aria-hidden", "true", 1, "fa", "fa-heart"], ["id", "like1", "aria-hidden", "true", 1, "fa", "fa-heart"]], template: function PlaylistDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PlaylistDetailsComponent_h2_0_Template, 2, 0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlaylistDetailsComponent_a_3_Template, 3, 0, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlaylistDetailsComponent_a_4_Template, 3, 0, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PlaylistDetailsComponent_div_9_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-comment-playlist", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.songs.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.playlistCurrent.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.playlistCurrent.isLike && ctx.userCurrent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playlistCurrent.isLike && ctx.userCurrent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.playlistCurrent.like, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.songs.length >= 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _comment_playlist_comment_playlist_component__WEBPACK_IMPORTED_MODULE_10__["CommentPlaylistComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["img[_ngcontent-%COMP%]:hover {\r\n  transition: 0.5s;\r\n  box-shadow: 0 0 5px rgba(81, 203, 238, 1);\r\n  border: 1px solid rgba(81, 203, 238, 1);\r\n  cursor: pointer;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  transition: 0.5s;\r\n  width: 200px;\r\n  color: white;\r\n}\r\n\r\np[_ngcontent-%COMP%]:hover {\r\n  font-size: 18px;\r\n  transition: 0.5s;\r\n  text-shadow: 0 0 5px rgba(81, 203, 238, 1);\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  background-color: #0c1027;\r\n  color: var(--main-font-color);\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  min-width: 270px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  display: block;\r\n  border-radius: 5px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n\r\n\r\nheader[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  width: 90%;\r\n  margin: 2em auto;\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%]   .mytext[_ngcontent-%COMP%] {\r\n  transition: 0.2s;\r\n  visibility: hidden;\r\n  width: 140px;\r\n  background-color: #FF4646;\r\n  color: #fff;\r\n  z-index: 1;\r\n  bottom: 100%;\r\n  left: 60%;\r\n  margin-left: -90px;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  padding: 5px 0;\r\n  position: absolute;\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%] {\r\n  transition: 0.2s;\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%]   .mytext[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 50%;\r\n  margin-left: 10px;\r\n  border-width: 7px;\r\n  border-style: solid;\r\n  border-color: red transparent transparent transparent;\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%]:hover   .mytext[_ngcontent-%COMP%] {\r\n  transition: 0.2s;\r\n  visibility: visible;\r\n}\r\n\r\n#delete[_ngcontent-%COMP%]:hover {\r\n  color: #fc4a1a;\r\n  transition: 0.2s;\r\n  text-shadow: 0 0 5px rgba(81, 203, 238, 0.2);\r\n  cursor: pointer;\r\n}\r\n\r\n#edit[_ngcontent-%COMP%]:hover {\r\n  color: #6be585;\r\n  transition: 0.2s;\r\n  text-shadow: 0 0 5px rgba(81, 203, 238, 0.2);\r\n  cursor: pointer;\r\n}\r\n\r\n#add[_ngcontent-%COMP%]:hover {\r\n  color: #0779e4;\r\n  transition: 0.2s;\r\n  text-shadow: 0 0 5px rgba(81, 203, 238, 0.2);\r\n  cursor: pointer;\r\n}\r\n\r\n#like[_ngcontent-%COMP%]:hover {\r\n  color: #FF0099;\r\n  transition: 0.2s;\r\n  text-shadow: 0 0 5px rgba(81, 203, 238, 0.2);\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-col[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.left-col[_ngcontent-%COMP%], .right-col[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\r\n\r\n#header-logo[_ngcontent-%COMP%] {\r\n  font-size: 3rem;\r\n  margin-right: 0.3em;\r\n}\r\n\r\n.header-title[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  margin-right: 5rem;\r\n}\r\n\r\n.header-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.nav-col[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%] {\r\n  background: #12193e;\r\n  margin-right: 1em;\r\n  padding: 0.5em 1em;\r\n  border-radius: 50px;\r\n  width: 70%;\r\n  min-width: 100px;\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  border: none;\r\n  background: none;\r\n  outline: none;\r\n  padding: 0 1em;\r\n  color: white;\r\n  width: 65%;\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  float: right;\r\n}\r\n\r\n#notif[_ngcontent-%COMP%] {\r\n  font-size: 1.25rem;\r\n  margin-right: 2em;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n  .header-title[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], #notif[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .left-col[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n  }\r\n\r\n  .right-col[_ngcontent-%COMP%] {\r\n    width: 75%;\r\n  }\r\n\r\n  .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 475px) {\r\n\r\n  #header-logo[_ngcontent-%COMP%] {\r\n    float: left;\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .search-box[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n  }\r\n\r\n  .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n  }\r\n\r\n  .user-img[_ngcontent-%COMP%] {\r\n    width: 2rem;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  max-width: 900px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.container-flex[_ngcontent-%COMP%], .flex-space[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.container-flex[_ngcontent-%COMP%] {\r\n  margin-bottom: 6em;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  width: 75%;\r\n}\r\n\r\naside[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n}\r\n\r\n.article-image[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n}\r\n\r\n\r\n\r\n.latest-release-col[_ngcontent-%COMP%] {\r\n  width: 47.5%;\r\n}\r\n\r\n.latest-release-entry[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.8em;\r\n}\r\n\r\n.latest-release-image[_ngcontent-%COMP%] {\r\n  width: 25%;\r\n}\r\n\r\n.latest-release-info[_ngcontent-%COMP%] {\r\n  margin: auto 0;\r\n}\r\n\r\n.latest-release-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-bottom: 0.5em;\r\n}\r\n\r\n.latest-release-options[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-top: 0.5em;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.latest-release-sub[_ngcontent-%COMP%] {\r\n  font-weight: 1;\r\n  font-size: 0.75rem;\r\n  color: #9c9da7;\r\n}\r\n\r\n\r\n\r\n.popular-artist-entry[_ngcontent-%COMP%] {\r\n  width: 16%;\r\n}\r\n\r\n.popular-artist-entry[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n}\r\n\r\n.popular-artist-entry[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-top: 0.4em;\r\n  margin-bottom: 0;\r\n  text-align: center;\r\n  font-size: 0.73rem;\r\n}\r\n\r\n\r\n\r\n.stations[_ngcontent-%COMP%] {\r\n  margin-top: 2em;\r\n  padding: 1em;\r\n  background: #101642;\r\n}\r\n\r\n.stations-entry[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 13.5%;\r\n}\r\n\r\n.stations-entry[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n}\r\n\r\n.stations-centered[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  font-size: 0.73rem;\r\n}\r\n\r\n.mid-featured-font[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n  font-size: 1rem;\r\n}\r\n\r\n.article-image[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.middle-featured[_ngcontent-%COMP%] {\r\n  margin-top: 2em;\r\n}\r\n\r\n\r\n\r\n.language-song-entry[_ngcontent-%COMP%] {\r\n  width: 16%;\r\n}\r\n\r\n.language-song-entry[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.language-sub[_ngcontent-%COMP%] {\r\n  font-size: 0.7rem;\r\n  margin-top: 0;\r\n}\r\n\r\n\r\n\r\n.queue-entry[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.queue-number[_ngcontent-%COMP%] {\r\n  width: 10%;\r\n}\r\n\r\n.queue-entry-image[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n}\r\n\r\n.queue-entry-info[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.like-icon[_ngcontent-%COMP%] {\r\n  width: 5%;\r\n}\r\n\r\n.queue-entry-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  margin-bottom: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n@media screen and (max-width: 840px) {\r\n  .queue-entry-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .queue-entry-sub[_ngcontent-%COMP%], .queue-number[_ngcontent-%COMP%] {\r\n    font-size: 0.6rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n  .container-flex[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n  main[_ngcontent-%COMP%], aside[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  aside[_ngcontent-%COMP%] {\r\n    margin-bottom: 6em;\r\n  }\r\n\r\n  .queue-entry-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .queue-entry-sub[_ngcontent-%COMP%], .queue-number[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 520px) {\r\n  .display-none[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .latest-release-col[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .popular-artist-entry[_ngcontent-%COMP%] {\r\n    width: 23%;\r\n  }\r\n\r\n  .stations-entry[_ngcontent-%COMP%] {\r\n    width: 18%;\r\n  }\r\n\r\n  .language-song-entry[_ngcontent-%COMP%] {\r\n    width: 32%;\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n.playlist-aside[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n}\r\n\r\n.similar-artists[_ngcontent-%COMP%], .recently-played[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.similar-artists-title[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n}\r\n\r\n.similar-artists-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 1em;\r\n  margin-bottom: 0.5em;\r\n  padding: 0;\r\n  font-size: 1.2rem;\r\n  white-space: nowrap;\r\n  width: 70%;\r\n}\r\n\r\n.similar-artists-sub[_ngcontent-%COMP%] {\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 1em;\r\n  margin-bottom: 0.5em;\r\n  padding: 0;\r\n  font-size: 0.7rem;\r\n  color: #9c9da7;\r\n  white-space: nowrap;\r\n  width: 25%;\r\n}\r\n\r\n.similar-artists-entry[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  align-items: center;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.similar-artists-image[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n}\r\n\r\n.similar-artists-info[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n}\r\n\r\n.similar-artists-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.similar-artists-info-sub[_ngcontent-%COMP%] {\r\n  color: #9c9da7;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.similar-artists-options[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  color: #9c9da7;\r\n  font-size: 0.7rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.similar-artists-options-menu[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.2em;\r\n}\r\n\r\n.similar-artists-options[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\n.recently-played-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 1.08rem;\r\n}\r\n\r\n\r\n\r\n.featured-playlist[_ngcontent-%COMP%] {\r\n  background: #141b41;\r\n}\r\n\r\n.featured-playlist-image[_ngcontent-%COMP%] {\r\n  width: 45%;\r\n}\r\n\r\n.featured-playlist-image[_ngcontent-%COMP%]::after {\r\n  display: block;\r\n  position: relative;\r\n  background-image: linear-gradient(to bottom, transparent 0%, #141b41 150%);\r\n  margin-top: -150px;\r\n  height: 150px;\r\n  width: 100%;\r\n  content: '';\r\n}\r\n\r\n.featured-playlist-details[_ngcontent-%COMP%] {\r\n  width: 52.5%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n.featured-playlist-info-name[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.featured-playlist-info-top[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n}\r\n\r\n.featured-playlist[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 0.8rem;\r\n  color: #9c9da7;\r\n}\r\n\r\n.followers[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 0.6rem;\r\n}\r\n\r\n.featured-playlist-buttons[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.play-all-button[_ngcontent-%COMP%] {\r\n  margin-right: 5px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.play-all-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  background-image: linear-gradient(to right, #4327b4, #be46dd);\r\n  color: white;\r\n  border: none;\r\n  padding: 0.5em 3em;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  margin-bottom: 0.2em;\r\n}\r\n\r\n.play-all-button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 0.7rem;\r\n}\r\n\r\n\r\n\r\n.playlist-next-item[_ngcontent-%COMP%] {\r\n  flex-direction: column;\r\n}\r\n\r\n.playlist-next-item-entry[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background: #1a1e33;\r\n  padding: 0.5em 0;\r\n  margin: 0.5em 0;\r\n}\r\n\r\n.playlist-next-item-entry[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.playlist-next-item-entry-info[_ngcontent-%COMP%] {\r\n  width: 35%;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.playlist-next-item-entry-info-image[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n}\r\n\r\n.playlist-next-item-entry-icons[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  width: 20%;\r\n  justify-content: space-around;\r\n}\r\n\r\n.playlist-next-item-entry-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #9c9da7;\r\n}\r\n\r\n.playlist-next-item-entry-number[_ngcontent-%COMP%], .playlist-next-item-entry-info-name-sub[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  color: #9c9da7;\r\n}\r\n\r\n@media screen and (max-width: 960px) and (min-width: 650px) {\r\n  .display-none-960[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 750px) {\r\n  .similar-artists-info-name[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 750px) and (min-width: 651px) {\r\n  .featured-playlist-writeup[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 0.6rem;\r\n  }\r\n\r\n  .playlist-next-item-entry-info[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n  .playlist-aside[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .similar-artists-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .similar-artists-sub[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .similar-artists-info-name[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n  }\r\n\r\n  .similar-artists-info-sub[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 550px) {\r\n  .featured-playlist[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .featured-playlist-image[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .featured-playlist-details[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n  }\r\n\r\n  .featured-playlist-info-top[_ngcontent-%COMP%] {\r\n    margin-top: 0.5em;\r\n  }\r\n\r\n  .featured-playlist-writeup[_ngcontent-%COMP%] {\r\n    margin-top: 0.5em;\r\n  }\r\n\r\n  .featured-playlist-buttons[_ngcontent-%COMP%] {\r\n    margin: 0.5em 0;\r\n  }\r\n\r\n  .playlist-next-item-entry-info[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 365px) {\r\n  .similar-artists-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .playlist-next-item-entry-info[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXlsaXN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsdUNBQXVDO0VBQ3ZDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMENBQTBDO0FBQzVDOztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3Qix5Q0FBeUM7RUFDekMsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBOzt5QkFFeUI7O0FBR3pCO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIscURBQXFEO0FBQ3ZEOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsNENBQTRDO0VBQzVDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDRDQUE0QztFQUM1QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiw0Q0FBNEM7RUFDNUMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsNENBQTRDO0VBQzVDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztFQUNkLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTs7RUFFRTtJQUNFLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7O3lCQUV5Qjs7QUFHekIsV0FBVzs7QUFFWDtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBR0EsaUJBQWlCOztBQUNqQjtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQSxrQkFBa0I7O0FBQ2xCO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBLFdBQVc7O0FBQ1g7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLGdCQUFnQjs7QUFFaEI7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztBQUVGOztBQUVBOzt5QkFFeUI7O0FBRXpCO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUdBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBLGtCQUFrQjs7QUFDbEI7RUFDRSxrQkFBa0I7QUFDcEI7O0FBR0EsT0FBTzs7QUFDUDtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMEVBQTBFO0VBQzFFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDZEQUE2RDtFQUM3RCxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSxxQkFBcUI7O0FBQ3JCO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUdBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJwbGF5bGlzdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWc6aG92ZXIge1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDgxLCAyMDMsIDIzOCwgMSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg4MSwgMjAzLCAyMzgsIDEpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5wIHtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnA6aG92ZXIge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4IHJnYmEoODEsIDIwMywgMjM4LCAxKTtcclxufVxyXG5cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzEwMjc7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWluLXdpZHRoOiAyNzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuaDIge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdE5BViBCQVJcclxuKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblxyXG5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAyZW0gYXV0bztcclxufVxyXG5cclxuLm15dG9vbHRpcCAubXl0ZXh0IHtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNDY0NjtcclxuICBjb2xvcjogI2ZmZjtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJvdHRvbTogMTAwJTtcclxuICBsZWZ0OiA2MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC05MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5teXRvb2x0aXAge1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubXl0b29sdGlwIC5teXRleHQ6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTAwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgYm9yZGVyLXdpZHRoOiA3cHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IHJlZCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxufVxyXG4ubXl0b29sdGlwOmhvdmVyIC5teXRleHQge1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG4jZGVsZXRlOmhvdmVyIHtcclxuICBjb2xvcjogI2ZjNGExYTtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4IHJnYmEoODEsIDIwMywgMjM4LCAwLjIpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2VkaXQ6aG92ZXIge1xyXG4gIGNvbG9yOiAjNmJlNTg1O1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiYSg4MSwgMjAzLCAyMzgsIDAuMik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jYWRkOmhvdmVyIHtcclxuICBjb2xvcjogIzA3NzllNDtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4IHJnYmEoODEsIDIwMywgMjM4LCAwLjIpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2xpa2U6aG92ZXIge1xyXG4gIGNvbG9yOiAjRkYwMDk5O1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiYSg4MSwgMjAzLCAyMzgsIDAuMik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmF2LWNvbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubGVmdC1jb2wsIC5yaWdodC1jb2wge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbiNoZWFkZXItbG9nbyB7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC4zZW07XHJcbn1cclxuXHJcbi5oZWFkZXItdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogNXJlbTtcclxufVxyXG5cclxuLmhlYWRlci10aXRsZSBwIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5uYXYtY29sIHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc2VhcmNoLWJveCB7XHJcbiAgYmFja2dyb3VuZDogIzEyMTkzZTtcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1pbi13aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IGlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDAgMWVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogNjUlO1xyXG59XHJcblxyXG4uc2VhcmNoLWJveCBhIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbiNub3RpZiB7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMmVtO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5oZWFkZXItdGl0bGUsIHVsLCAjbm90aWYge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5sZWZ0LWNvbCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0LWNvbCB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1ib3ggaW5wdXQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3NXB4KSB7XHJcblxyXG4gICNoZWFkZXItbG9nbyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtYm94IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWJveCBpbnB1dCB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxuXHJcbiAgLnVzZXItaW1nIHtcclxuICAgIHdpZHRoOiAycmVtO1xyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdEJPRFlcclxuKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblxyXG4vKkZlYXR1cmVkKi9cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbGV4LCAuZmxleC1zcGFjZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jb250YWluZXItZmxleCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNmVtO1xyXG59XHJcblxyXG5tYWluIHtcclxuICB3aWR0aDogNzUlO1xyXG59XHJcblxyXG5hc2lkZSB7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLmFydGljbGUtaW1hZ2Uge1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcblxyXG4vKkxhdGVzdCBSZWxlYXNlKi9cclxuLmxhdGVzdC1yZWxlYXNlLWNvbCB7XHJcbiAgd2lkdGg6IDQ3LjUlO1xyXG59XHJcblxyXG4ubGF0ZXN0LXJlbGVhc2UtZW50cnkge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuOGVtO1xyXG59XHJcblxyXG4ubGF0ZXN0LXJlbGVhc2UtaW1hZ2Uge1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbi5sYXRlc3QtcmVsZWFzZS1pbmZvIHtcclxuICBtYXJnaW46IGF1dG8gMDtcclxufVxyXG5cclxuLmxhdGVzdC1yZWxlYXNlLWluZm8gcCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxufVxyXG5cclxuLmxhdGVzdC1yZWxlYXNlLW9wdGlvbnMgcCB7XHJcbiAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmxhdGVzdC1yZWxlYXNlLXN1YiB7XHJcbiAgZm9udC13ZWlnaHQ6IDE7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGNvbG9yOiAjOWM5ZGE3O1xyXG59XHJcblxyXG4vKlBvcHVsYXIgQXJ0aXN0cyovXHJcbi5wb3B1bGFyLWFydGlzdC1lbnRyeSB7XHJcbiAgd2lkdGg6IDE2JTtcclxufVxyXG5cclxuLnBvcHVsYXItYXJ0aXN0LWVudHJ5IGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ucG9wdWxhci1hcnRpc3QtZW50cnkgcCB7XHJcbiAgbWFyZ2luLXRvcDogMC40ZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjczcmVtO1xyXG59XHJcblxyXG4vKlN0YXRpb25zKi9cclxuLnN0YXRpb25zIHtcclxuICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGJhY2tncm91bmQ6ICMxMDE2NDI7XHJcbn1cclxuXHJcbi5zdGF0aW9ucy1lbnRyeSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMy41JTtcclxufVxyXG5cclxuLnN0YXRpb25zLWVudHJ5IGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uc3RhdGlvbnMtY2VudGVyZWQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgZm9udC1zaXplOiAwLjczcmVtO1xyXG59XHJcblxyXG4ubWlkLWZlYXR1cmVkLWZvbnQge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uYXJ0aWNsZS1pbWFnZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWlkZGxlLWZlYXR1cmVkIHtcclxuICBtYXJnaW4tdG9wOiAyZW07XHJcbn1cclxuXHJcbi8qTGFuZ3VhZ2UgU29uZyovXHJcblxyXG4ubGFuZ3VhZ2Utc29uZy1lbnRyeSB7XHJcbiAgd2lkdGg6IDE2JTtcclxufVxyXG5cclxuLmxhbmd1YWdlLXNvbmctZW50cnkgcCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubGFuZ3VhZ2Utc3ViIHtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4vKkFzaWRlIFNlY3Rpb24qL1xyXG5cclxuLnF1ZXVlLWVudHJ5IHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxuLnF1ZXVlLW51bWJlciB7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG5cclxuLnF1ZXVlLWVudHJ5LWltYWdlIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4ucXVldWUtZW50cnktaW5mbyB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxpa2UtaWNvbiB7XHJcbiAgd2lkdGg6IDUlO1xyXG59XHJcblxyXG4ucXVldWUtZW50cnktaW5mbyBwIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg0MHB4KSB7XHJcbiAgLnF1ZXVlLWVudHJ5LWluZm8gcCwgLnF1ZXVlLWVudHJ5LXN1YiwgLnF1ZXVlLW51bWJlciB7XHJcbiAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgLmNvbnRhaW5lci1mbGV4IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgfVxyXG5cclxuICBtYWluLCBhc2lkZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIGFzaWRlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDZlbTtcclxuICB9XHJcblxyXG4gIC5xdWV1ZS1lbnRyeS1pbmZvIHAsIC5xdWV1ZS1lbnRyeS1zdWIsIC5xdWV1ZS1udW1iZXIge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAuZGlzcGxheS1ub25lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubGF0ZXN0LXJlbGVhc2UtY29sIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnBvcHVsYXItYXJ0aXN0LWVudHJ5IHtcclxuICAgIHdpZHRoOiAyMyU7XHJcbiAgfVxyXG5cclxuICAuc3RhdGlvbnMtZW50cnkge1xyXG4gICAgd2lkdGg6IDE4JTtcclxuICB9XHJcblxyXG4gIC5sYW5ndWFnZS1zb25nLWVudHJ5IHtcclxuICAgIHdpZHRoOiAzMiU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFBMQVlMSVNUIFBBR0VcclxuKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5wbGF5bGlzdC1hc2lkZSB7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLnNpbWlsYXItYXJ0aXN0cywgLnJlY2VudGx5LXBsYXllZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4uc2ltaWxhci1hcnRpc3RzLXRpdGxlIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2ltaWxhci1hcnRpc3RzLXRpdGxlIGgyIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4uc2ltaWxhci1hcnRpc3RzLXN1YiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIGNvbG9yOiAjOWM5ZGE3O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLnNpbWlsYXItYXJ0aXN0cy1lbnRyeSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi5zaW1pbGFyLWFydGlzdHMtaW1hZ2Uge1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5zaW1pbGFyLWFydGlzdHMtaW5mbyB7XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuLnNpbWlsYXItYXJ0aXN0cy1pbmZvIHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uc2ltaWxhci1hcnRpc3RzLWluZm8tc3ViIHtcclxuICBjb2xvcjogIzljOWRhNztcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxufVxyXG5cclxuLnNpbWlsYXItYXJ0aXN0cy1vcHRpb25zIHtcclxuICB3aWR0aDogMjAlO1xyXG4gIGNvbG9yOiAjOWM5ZGE3O1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2ltaWxhci1hcnRpc3RzLW9wdGlvbnMtbWVudSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4yZW07XHJcbn1cclxuXHJcbi5zaW1pbGFyLWFydGlzdHMtb3B0aW9ucyBwIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qUmVjZW50bHkgUGxheWVkKi9cclxuLnJlY2VudGx5LXBsYXllZC10aXRsZSBoMiB7XHJcbiAgZm9udC1zaXplOiAxLjA4cmVtO1xyXG59XHJcblxyXG5cclxuLypNQUlOKi9cclxuLmZlYXR1cmVkLXBsYXlsaXN0IHtcclxuICBiYWNrZ3JvdW5kOiAjMTQxYjQxO1xyXG59XHJcblxyXG4uZmVhdHVyZWQtcGxheWxpc3QtaW1hZ2Uge1xyXG4gIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1wbGF5bGlzdC1pbWFnZTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCAwJSwgIzE0MWI0MSAxNTAlKTtcclxuICBtYXJnaW4tdG9wOiAtMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb250ZW50OiAnJztcclxufVxyXG5cclxuLmZlYXR1cmVkLXBsYXlsaXN0LWRldGFpbHMge1xyXG4gIHdpZHRoOiA1Mi41JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1wbGF5bGlzdC1pbmZvLW5hbWUgaDIge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uZmVhdHVyZWQtcGxheWxpc3QtaW5mby10b3Age1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1wbGF5bGlzdCBwIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBjb2xvcjogIzljOWRhNztcclxufVxyXG5cclxuLmZvbGxvd2VycyBwIHtcclxuICBmb250LXNpemU6IDAuNnJlbTtcclxufVxyXG5cclxuLmZlYXR1cmVkLXBsYXlsaXN0LWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wbGF5LWFsbC1idXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnBsYXktYWxsLWJ1dHRvbiBidXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0MzI3YjQsICNiZTQ2ZGQpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMC41ZW0gM2VtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4yZW07XHJcbn1cclxuXHJcbi5wbGF5LWFsbC1idXR0b24gcCB7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbn1cclxuXHJcbi8qUGxheWxpc3QgbmV4dCBpdGVtKi9cclxuLnBsYXlsaXN0LW5leHQtaXRlbSB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnBsYXlsaXN0LW5leHQtaXRlbS1lbnRyeSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzFhMWUzMztcclxuICBwYWRkaW5nOiAwLjVlbSAwO1xyXG4gIG1hcmdpbjogMC41ZW0gMDtcclxufVxyXG5cclxuLnBsYXlsaXN0LW5leHQtaXRlbS1lbnRyeSBwIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnBsYXlsaXN0LW5leHQtaXRlbS1lbnRyeS1pbmZvIHtcclxuICB3aWR0aDogMzUlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5wbGF5bGlzdC1uZXh0LWl0ZW0tZW50cnktaW5mby1pbWFnZSB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLnBsYXlsaXN0LW5leHQtaXRlbS1lbnRyeS1pY29ucyB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMjAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4ucGxheWxpc3QtbmV4dC1pdGVtLWVudHJ5LWljb25zIGEge1xyXG4gIGNvbG9yOiAjOWM5ZGE3O1xyXG59XHJcblxyXG4ucGxheWxpc3QtbmV4dC1pdGVtLWVudHJ5LW51bWJlciwgLnBsYXlsaXN0LW5leHQtaXRlbS1lbnRyeS1pbmZvLW5hbWUtc3ViIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBjb2xvcjogIzljOWRhNztcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSBhbmQgKG1pbi13aWR0aDogNjUwcHgpIHtcclxuICAuZGlzcGxheS1ub25lLTk2MCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcclxuICAuc2ltaWxhci1hcnRpc3RzLWluZm8tbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSBhbmQgKG1pbi13aWR0aDogNjUxcHgpIHtcclxuICAuZmVhdHVyZWQtcGxheWxpc3Qtd3JpdGV1cCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gIH1cclxuXHJcbiAgLnBsYXlsaXN0LW5leHQtaXRlbS1lbnRyeS1pbmZvIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gIC5wbGF5bGlzdC1hc2lkZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5zaW1pbGFyLWFydGlzdHMtdGl0bGUgaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAuc2ltaWxhci1hcnRpc3RzLXN1YiB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG5cclxuICAuc2ltaWxhci1hcnRpc3RzLWluZm8tbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICB9XHJcblxyXG4gIC5zaW1pbGFyLWFydGlzdHMtaW5mby1zdWIge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAuZmVhdHVyZWQtcGxheWxpc3Qge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZmVhdHVyZWQtcGxheWxpc3QtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuZmVhdHVyZWQtcGxheWxpc3QtZGV0YWlscyB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gIH1cclxuXHJcbiAgLmZlYXR1cmVkLXBsYXlsaXN0LWluZm8tdG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gIH1cclxuXHJcbiAgLmZlYXR1cmVkLXBsYXlsaXN0LXdyaXRldXAge1xyXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgfVxyXG5cclxuICAuZmVhdHVyZWQtcGxheWxpc3QtYnV0dG9ucyB7XHJcbiAgICBtYXJnaW46IDAuNWVtIDA7XHJcbiAgfVxyXG5cclxuICAucGxheWxpc3QtbmV4dC1pdGVtLWVudHJ5LWluZm8ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2NXB4KSB7XHJcbiAgLnNpbWlsYXItYXJ0aXN0cy10aXRsZSBoMiB7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICB9XHJcblxyXG4gIC5wbGF5bGlzdC1uZXh0LWl0ZW0tZW50cnktaW5mbyB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaylistDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-playlist-details',
                templateUrl: './playlist-details.component.html',
                styleUrls: ['./playlist-details.component.css']
            }]
    }], function () { return [{ type: _service_song_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _service_playList_play_list_service__WEBPACK_IMPORTED_MODULE_3__["PlayListService"] }, { type: _service_songPlaylist_song_playlist_service__WEBPACK_IMPORTED_MODULE_4__["SongPlaylistService"] }, { type: _service_like_like_song_service__WEBPACK_IMPORTED_MODULE_5__["LikeSongService"] }, { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: _service_like_like_playlist_service__WEBPACK_IMPORTED_MODULE_8__["LikePlaylistService"] }]; }, null); })();


/***/ }),

/***/ "87Ka":
/*!***************************************************!*\
  !*** ./src/app/service/like/like-song.service.ts ***!
  \***************************************************/
/*! exports provided: LikeSongService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeSongService", function() { return LikeSongService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const URL_API = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}`;
class LikeSongService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    likeSong(s_id, u_id) {
        return this.httpClient.post(URL_API + `/like-songs/like/${s_id}/${u_id}`, s_id);
    }
    getAllLikeUser(id) {
        return this.httpClient.get(URL_API + `/songs/all-like/${id}`);
    }
    getSongMostLike() {
        return this.httpClient.get(URL_API + `/songs/most-likes`);
    }
    getLikeSong(id) {
        return this.httpClient.get(URL_API + `/like-songs/${id}`);
    }
}
LikeSongService.ɵfac = function LikeSongService_Factory(t) { return new (t || LikeSongService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
LikeSongService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LikeSongService, factory: LikeSongService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LikeSongService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        // apiKey: 'AIzaSyAaF7cyqh4DoWEU2TkDXnUeFe0Le10uH6A',
        // authDomain: 'sound-wave-9d45d.firebaseapp.com',
        // databaseURL: 'https://sound-wave-9d45d-default-rtdb.firebaseio.com/',
        // projectId: 'sound-wave-9d45d',
        // storageBucket: 'sound-wave-9d45d.appspot.com',
        // messagingSenderId: '368542689977',
        // appId: '1:368542689977:web:2f10c095d4d791959b8968',
        // measurementId: 'G-XKDW7R2CS7'
        apiKey: "AIzaSyADoaN1AaFkzx3AHsQSoBFl3Iv_JLqb0XE",
        authDomain: "sound-wave-cd.firebaseapp.com",
        databaseURL: 'https://sound-wave-cd-default-rtdb.firebaseio.com/',
        projectId: "sound-wave-cd",
        storageBucket: "sound-wave-cd.appspot.com",
        messagingSenderId: "996131844816",
        appId: "1:996131844816:web:641a25610d96cf9452e4d5",
        measurementId: "G-Q84RZCNF5J"
    },
    apiUrl: 'http://localhost:8080'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "G2W0":
/*!************************************************************************!*\
  !*** ./src/app/client/user/update-profile/update-profile.component.ts ***!
  \************************************************************************/
/*! exports provided: UpdateProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileComponent", function() { return UpdateProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/user/user.service */ "rwBg");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/auth/auth.service */ "/AaM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








const _c0 = function () { return ["/profile"]; };
const _c1 = function () { return ["/resetpassword"]; };
// @ts-ignore
class UpdateProfileComponent {
    constructor(storage, userService, authService, fb, router) {
        this.storage = storage;
        this.userService = userService;
        this.authService = authService;
        this.fb = fb;
        this.router = router;
        this.avatar = '';
    }
    ngOnInit() {
        this.updateUserForm = this.fb.group({
            username: [''],
            fullName: [''],
            phoneNumber: [''],
            email: [''],
            address: ['']
        });
        this.authService.currentUser.subscribe(value => {
            this.currentUser = value;
            this.userService.getUserByUsername(value.username).subscribe(value1 => {
                this.user = value1;
                this.updateUserForm.setValue({
                    username: this.user.username,
                    fullName: this.user.fullName,
                    phoneNumber: this.user.phoneNumber,
                    email: this.user.email,
                    address: this.user.address
                });
            });
        });
    }
    updateUser() {
        this.user.username = this.updateUserForm.value.username;
        this.user.fullName = this.updateUserForm.value.fullName;
        this.user.phoneNumber = this.updateUserForm.value.phoneNumber;
        this.user.email = this.updateUserForm.value.email;
        this.user.address = this.updateUserForm.value.address;
        if (!this.avatar == null) {
            this.user.avatar = this.avatar;
        }
        this.userService.updateUser(this.user).subscribe(() => {
            alert('Cập nhật User thành công!');
            this.router.navigate(['/profile']);
        }, error => {
            alert('Lỗi!');
        });
    }
    loadFile(event) {
        const output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = () => {
            URL.revokeObjectURL(output.src);
        };
        const n = Date.now();
        const file = event.target.files[0];
        const filePath = `RoomsImages/${n}`;
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(`RoomsImages/${n}`, file);
        task
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
                if (url) {
                    this.user.avatar = url;
                }
                console.log(this.fb);
            });
        })).subscribe(url => {
            if (url) {
                console.log(url);
            }
        });
    }
}
UpdateProfileComponent.ɵfac = function UpdateProfileComponent_Factory(t) { return new (t || UpdateProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
UpdateProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateProfileComponent, selectors: [["app-update-profile"]], decls: 59, vars: 11, consts: [[3, "formGroup", "ngSubmit"], [1, "wrapper", "bg-white", "mt-sm-5"], [1, "pb-4", "border-bottom"], ["id", "box", 1, "d-flex", "align-items-start", "py-3", "border-bottom"], ["id", "output", "alt", "User's Avatar", 1, "img", 3, "src"], ["id", "img-section", 1, "pl-sm-4", "pl-2"], ["data-browse-on-zone", "true", "type", "file", "accept", "image/*", 2, "color", "#0c1027", 3, "change"], [1, "py-2"], [1, "row", "py-2"], [1, "col-md-6"], ["type", "text", "formControlName", "username", "readonly", "readonly", 1, "bg-light", "form-control", 3, "value"], [1, "col-md-6", "pt-md-0", "pt-3"], ["type", "text", "formControlName", "fullName", 1, "bg-light", "form-control", 3, "value"], ["formControlName", "phoneNumber", "type", "number", 1, "bg-light", "form-control", 3, "value"], ["type", "text", "formControlName", "email", 1, "bg-light", "form-control", 3, "value"], [1, "col-md-12"], ["type", "text", "formControlName", "address", 1, "bg-light", "form-control", 3, "value"], [1, "py-3", "pb-4", "border-bottom"], ["type", "submit", 1, "btn", "btn-success"], [1, "btn", "btn-outline-light", 2, "color", "black", 3, "routerLink"], ["id", "resetpassword", 1, "d-sm-flex", "align-items-center", "pt-3"], [1, "ml-auto"], [1, "btn", "btn-outline-primary", 3, "routerLink"], ["id", "deactivate", 1, "d-sm-flex", "align-items-center", "pt-3"], [1, "btn", "btn-outline-danger"]], template: function UpdateProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateProfileComponent_Template_form_ngSubmit_0_listener() { return ctx.updateUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Account settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Profile Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Accepted file type .png. Less than 1MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdateProfileComponent_Template_input_change_11_listener($event) { return ctx.loadFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Reset Your Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Click button if you want to change your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Deactivate your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Details about your company account and password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Deactivate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateUserForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.user.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.user.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.user.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: 'Poppins', sans-serif;\r\n  background-color: aliceblue\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  padding: 30px 50px;\r\n  border: 1px solid #ddd;\r\n  border-radius: 15px;\r\n  margin: 10px auto;\r\n  max-width: 600px\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n  color: black;\r\n  letter-spacing: -1px;\r\n  font-weight: 400\r\n}\r\n\r\n#box[_ngcontent-%COMP%]:hover   #image[_ngcontent-%COMP%] {\r\n  opacity: 0.3;\r\n}\r\n\r\n.img[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  display: block;\r\n  transition: .5s ease;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 6px;\r\n  object-fit: cover\r\n}\r\n\r\n#img-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #deactivate[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #resetpassword[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  color: #777;\r\n  margin-bottom: 10px;\r\n  text-align: justify\r\n}\r\n\r\n#img-section[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], #img-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #deactivate[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], #resetpassword[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  color: #0c1027;\r\n  font-size: 14px\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  color: #777;\r\n  padding-left: 3px\r\n}\r\n\r\ninput[placeholder][_ngcontent-%COMP%] {\r\n  font-weight: 500\r\n}\r\n\r\n@media (max-width: 576px) {\r\n  .wrapper[_ngcontent-%COMP%] {\r\n    padding: 25px 20px\r\n  }\r\n\r\n  #deactivate[_ngcontent-%COMP%] {\r\n    line-height: 18px\r\n  }\r\n\r\n  #resetpassword[_ngcontent-%COMP%] {\r\n    line-height: 18px\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQTRFOztBQUU1RTtFQUNFLGtDQUFrQztFQUNsQztBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCO0FBQ0Y7O0FBRUE7OztFQUdFLGVBQWU7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CO0FBQ0Y7O0FBRUE7Ozs7RUFJRSxjQUFjO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWDtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0lBQ0U7RUFDRjs7RUFFQTtJQUNFO0VBQ0Y7O0VBRUE7SUFDRTtFQUNGO0FBQ0YiLCJmaWxlIjoidXBkYXRlLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZVxyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgcGFkZGluZzogMzBweCA1MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICBtYXgtd2lkdGg6IDYwMHB4XHJcbn1cclxuXHJcbmg0IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMFxyXG59XHJcblxyXG4jYm94OmhvdmVyICNpbWFnZSB7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4uaW1nIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyXHJcbn1cclxuXHJcbiNpbWctc2VjdGlvbiBwLFxyXG4jZGVhY3RpdmF0ZSBwLFxyXG4jcmVzZXRwYXNzd29yZCBwIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5XHJcbn1cclxuXHJcbiNpbWctc2VjdGlvbiBiLFxyXG4jaW1nLXNlY3Rpb24gYnV0dG9uLFxyXG4jZGVhY3RpdmF0ZSBiLFxyXG4jcmVzZXRwYXNzd29yZCBiIHtcclxuICBjb2xvcjogIzBjMTAyNztcclxuICBmb250LXNpemU6IDE0cHhcclxufVxyXG5cclxubGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbiAgcGFkZGluZy1sZWZ0OiAzcHhcclxufVxyXG5cclxuaW5wdXRbcGxhY2Vob2xkZXJdIHtcclxuICBmb250LXdlaWdodDogNTAwXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC53cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDI1cHggMjBweFxyXG4gIH1cclxuXHJcbiAgI2RlYWN0aXZhdGUge1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHhcclxuICB9XHJcblxyXG4gICNyZXNldHBhc3N3b3JkIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-profile',
                templateUrl: './update-profile.component.html',
                styleUrls: ['./update-profile.component.css']
            }]
    }], function () { return [{ type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] }, { type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "My5X":
/*!***********************************************************!*\
  !*** ./src/app/song/update-song/update-song.component.ts ***!
  \***********************************************************/
/*! exports provided: UpdateSongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSongComponent", function() { return UpdateSongComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/user/user.service */ "rwBg");
/* harmony import */ var _service_song_song_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/song/song.service */ "r1xU");
/* harmony import */ var _service_singer_singer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/singer/singer.service */ "zXpw");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/category/category.service */ "00Ag");
/* harmony import */ var _service_album_album_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/album/album.service */ "WQHl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");

// @ts-ignore














function UpdateSongComponent_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", s_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r3.name, " ");
} }
function UpdateSongComponent_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", c_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", c_r4.name, " ");
} }
function UpdateSongComponent_option_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", a_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", a_r5.name, " ");
} }
// @ts-ignore
class UpdateSongComponent {
    constructor(storage, fbd, router, authService, userService, songService, singerService, categoryService, albumService, activatedRoute) {
        this.storage = storage;
        this.fbd = fbd;
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.songService = songService;
        this.singerService = singerService;
        this.categoryService = categoryService;
        this.albumService = albumService;
        this.activatedRoute = activatedRoute;
        this.name = '';
        this.description = '';
        this.urlMp3 = '';
        this.avatar = '';
        this.musician = '';
        this.views = 0;
        this.title = 'cloudsSorage';
        // @ts-ignore
        this.selectedFile = null;
        this.singers = [];
        this.categories = [];
        this.albums = [];
        this.failMessage = '';
        this.songForm = this.fbd.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            musician: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            views: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            singer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            album: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            avatar: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            urlMp3: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        this.getAllSinger();
        this.getAllCategory();
        this.getAllAlbum();
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((param) => {
            // @ts-ignore
            this.id = param.get('id');
            console.log(this.id);
            this.songService.getSong(this.id).subscribe(result => {
                this.songCurrent = result;
                console.log(result);
                this.songForm.patchValue(this.songCurrent);
                console.log(this.songCurrent);
            }, error => {
                console.log('loi');
                console.log(error);
            });
        });
    }
    saveUrlMp3(event) {
        const n = Date.now();
        const file = event.target.files[0];
        const filePath = `RoomsImages/${n}`;
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(`RoomsImages/${n}`, file);
        task
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
                var _a;
                if (url !== '') {
                    this.urlMp3 = url;
                }
                else {
                    this.urlMp3 = (_a = this.songForm.get('urlMp3')) === null || _a === void 0 ? void 0 : _a.value;
                }
            });
        })).subscribe(url => {
            if (url) {
                console.log(url);
            }
        });
    }
    saveAvatar(event) {
        const n = Date.now();
        const file = event.target.files[0];
        const filePath = `RoomsImages/${n}`;
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(`RoomsImages/${n}`, file);
        task
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
                var _a;
                if (url !== '') {
                    this.avatar = url;
                }
                else {
                    this.avatar = (_a = this.songForm.get('avatar')) === null || _a === void 0 ? void 0 : _a.value;
                }
            });
        })).subscribe(url => {
            if (url) {
                console.log(url);
            }
        });
    }
    setNewSong() {
        var _a, _b, _c, _d, _e;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.getUserFromDB();
            const singer = yield this.getSinger();
            const category = yield this.getCategory();
            const album = yield this.getOneAlbum();
            let newUrlMp3;
            let newAvatar;
            if (this.urlMp3 != "") {
                newUrlMp3 = this.urlMp3;
                console.log(newUrlMp3);
            }
            else {
                newUrlMp3 = (_a = this.songForm.get('urlMp3')) === null || _a === void 0 ? void 0 : _a.value;
                console.log(newUrlMp3);
            }
            if (this.avatar != "") {
                newAvatar = this.avatar;
                console.log(newAvatar);
            }
            else {
                newAvatar = (_b = this.songForm.get('avatar')) === null || _b === void 0 ? void 0 : _b.value;
                console.log(newAvatar);
            }
            const song = {
                id: this.songCurrent.id,
                name: (_c = this.songForm.get('name')) === null || _c === void 0 ? void 0 : _c.value,
                description: (_d = this.songForm.get('description')) === null || _d === void 0 ? void 0 : _d.value,
                urlMp3: newUrlMp3,
                avatar: newAvatar,
                musician: (_e = this.songForm.get('musician')) === null || _e === void 0 ? void 0 : _e.value
            };
            if (user != null) {
                song.user = user;
            }
            if (singer != null) {
                song.singer = singer;
            }
            if (category != null) {
                song.category = category;
            }
            if (album != null) {
                song.album = album;
            }
            return song;
        });
    }
    update() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const newS = yield this.setNewSong();
            console.log(newS);
            this.songService.updateSong(newS).subscribe(() => {
                alert('update song successful');
                this.router.navigate(['/profile']);
                console.log(this.urlMp3);
            });
        });
    }
    getUserFromDB() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userFromLocalStorage = this.authService.currentUserValue;
            return this.userService.getUserByUsername(userFromLocalStorage.username).toPromise();
        });
    }
    // @ts-ignore
    getAllSinger() {
        this.singerService.getAllSinger().subscribe(value => {
            this.singers = value;
        });
    }
    getSinger() {
        var _a;
        // tslint:disable-next-line:variable-name
        const singer_id = +((_a = this.songForm.get('singer')) === null || _a === void 0 ? void 0 : _a.value);
        return this.singerService.getOneSinger(singer_id).toPromise();
    }
    // @ts-ignore
    getAllCategory() {
        this.categoryService.getAllCategory().subscribe(value => this.categories = value);
    }
    // tslint:disable-next-line:typedef
    getCategory() {
        var _a;
        // tslint:disable-next-line:variable-name
        const category_id = +((_a = this.songForm.get('category')) === null || _a === void 0 ? void 0 : _a.value);
        return this.categoryService.getCategory(category_id).toPromise();
    }
    // @ts-ignore
    getAllAlbum() {
        this.albumService.getAllAlbum().subscribe(value => this.albums = value);
    }
    getOneAlbum() {
        var _a;
        const album_id = +((_a = this.songForm.get('album')) === null || _a === void 0 ? void 0 : _a.value);
        // @ts-ignore
        return this.albumService.getOneAlbum(album_id).toPromise();
    }
}
UpdateSongComponent.ɵfac = function UpdateSongComponent_Factory(t) { return new (t || UpdateSongComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_song_song_service__WEBPACK_IMPORTED_MODULE_8__["SongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_singer_singer_service__WEBPACK_IMPORTED_MODULE_9__["SingerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_category_category_service__WEBPACK_IMPORTED_MODULE_10__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_album_album_service__WEBPACK_IMPORTED_MODULE_11__["AlbumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
UpdateSongComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UpdateSongComponent, selectors: [["app-update-song"]], decls: 69, vars: 10, consts: [[1, "page-wrapper", "p-t-100", "p-b-50"], [1, "wrapper", "wrapper--w900"], [1, "card", "card-6"], [1, "card-heading"], [1, "title", "text-center"], [3, "formGroup", "ngSubmit"], [1, "card-body", 2, "color", "#1b1b1b", "border-radius", "20px"], [1, "text-center"], [1, "form-row"], [1, "name"], ["id", "output", "alt", "Song's Cover", 1, "img", 2, "width", "150px", "height", "150px", "border-radius", "10px", "object-fit", "cover", 3, "src"], [1, "value"], [1, "input-group", "js-input-file"], ["type", "file", "accept", "image/*", "formControlName", "avatar", 2, "margin-top", "50px", 3, "value", "change"], [1, "label--desc"], ["formControlName", "urlMp3", "type", "file", "id", "file", "name", "mp3", "autocomplete", "off", 3, "value", "change"], ["type", "text", "formControlName", "name", 1, "input--style-6", 3, "value"], ["formControlName", "singer", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "category", 1, "form-control"], ["formControlName", "album", 1, "form-control"], ["type", "text", "formControlName", "musician", 1, "input--style-6", 3, "value"], [1, "input-group"], ["formControlName", "description", "name", "desc", "placeholder", "Something...", 1, "textarea--style-6", 3, "value"], ["type", "submit", 1, "btn", "btn-outline-success", "btn--radius", 2, "border", "solid", "color", "#1b1b1b", "border-radius", "5px"], [1, "value", 2, "margin-top", "20px"], [1, "form-group", "col-12", "text-center", 2, "height", "100px"], [3, "value"]], template: function UpdateSongComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Update Song");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UpdateSongComponent_Template_form_ngSubmit_6_listener() { return ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UpdateSongComponent_Template_input_change_14_listener($event) { return ctx.saveAvatar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Upload your audio for the world");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Upload Audio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UpdateSongComponent_Template_input_change_22_listener($event) { return ctx.saveUrlMp3($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Upload your audio for the world");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Song Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Singer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, UpdateSongComponent_option_35_Template, 2, 2, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, UpdateSongComponent_option_41_Template, 2, 2, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Album");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, UpdateSongComponent_option_47_Template, 2, 2, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Musician");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "All * fields are required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Copyright Soundwave - Case Study Module 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.songForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.songCurrent.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.songCurrent.avatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.songCurrent.urlMp3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.songCurrent.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.singers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.albums);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.songCurrent.musician);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.songCurrent.description);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: [".font-robo[_ngcontent-%COMP%] {\r\n  font-family: \"Roboto\", \"Arial\", \"Helvetica Neue\", sans-serif;\r\n}\r\n.font-poppins[_ngcontent-%COMP%] {\r\n  font-family: \"Poppins\", \"Arial\", \"Helvetica Neue\", sans-serif;\r\n}\r\n.font-opensans[_ngcontent-%COMP%] {\r\n  font-family: \"Open Sans\", \"Arial\", \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n.row[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]:last-child   .input-group-desc[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n}\r\n.row-space[_ngcontent-%COMP%] {\r\n  justify-content: space-between;\r\n}\r\n.row-refine[_ngcontent-%COMP%] {\r\n  margin: 0 -15px;\r\n}\r\n.row-refine[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%]   .input-group-desc[_ngcontent-%COMP%], .row-refine[_ngcontent-%COMP%]   .col-9[_ngcontent-%COMP%]   .input-group-desc[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n}\r\n.col-2[_ngcontent-%COMP%] {\r\n  width: calc((100% - 30px) / 2);\r\n}\r\n@media (max-width: 767px) {\r\n  .col-2[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\r\n.form-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: flex-start;\r\n  padding: 24px 55px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n}\r\n.form-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\r\n  width: 188px;\r\n  color: #333;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  margin-top: 11px;\r\n}\r\n.form-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\r\n  width: calc(100% - 188px);\r\n}\r\n@media (max-width: 767px) {\r\n  .form-row[_ngcontent-%COMP%] {\r\n    display: block;\r\n    padding: 24px 30px;\r\n  }\r\n  .form-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n  }\r\n  .form-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-bottom: 12px;\r\n  }\r\n}\r\n\r\n\r\n*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\r\n  box-sizing: inherit;\r\n}\r\n\r\n\r\nbody[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], legend[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nli[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%], li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\nfieldset[_ngcontent-%COMP%] {\r\n  min-width: 0;\r\n  \r\n  border: 0;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  outline: none;\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n.page-wrapper[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: \"Open Sans\", \"Arial\", \"Helvetica Neue\", sans-serif;\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n}\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n  font-size: 36px;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n}\r\nh3[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n}\r\nh4[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n}\r\nh5[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n}\r\nh6[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n}\r\n\r\n.p-t-100[_ngcontent-%COMP%] {\r\n  padding-top: 100px;\r\n}\r\n.p-t-130[_ngcontent-%COMP%] {\r\n  padding-top: 130px;\r\n}\r\n.p-t-180[_ngcontent-%COMP%] {\r\n  padding-top: 180px;\r\n}\r\n.p-t-45[_ngcontent-%COMP%] {\r\n  padding-top: 45px;\r\n}\r\n.p-t-20[_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n}\r\n.p-t-15[_ngcontent-%COMP%] {\r\n  padding-top: 15px;\r\n}\r\n.p-t-10[_ngcontent-%COMP%] {\r\n  padding-top: 10px;\r\n}\r\n.p-t-30[_ngcontent-%COMP%] {\r\n  padding-top: 30px;\r\n}\r\n.p-b-100[_ngcontent-%COMP%] {\r\n  padding-bottom: 100px;\r\n}\r\n.p-b-50[_ngcontent-%COMP%] {\r\n  padding-bottom: 50px;\r\n}\r\n.m-r-45[_ngcontent-%COMP%] {\r\n  margin-right: 45px;\r\n}\r\n.m-r-55[_ngcontent-%COMP%] {\r\n  margin-right: 55px;\r\n}\r\n.m-b-55[_ngcontent-%COMP%] {\r\n  margin-bottom: 55px;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n}\r\n.wrapper--w960[_ngcontent-%COMP%] {\r\n  max-width: 960px;\r\n}\r\n.wrapper--w900[_ngcontent-%COMP%] {\r\n  max-width: 900px;\r\n}\r\n.wrapper--w790[_ngcontent-%COMP%] {\r\n  max-width: 790px;\r\n}\r\n.wrapper--w780[_ngcontent-%COMP%] {\r\n  max-width: 780px;\r\n}\r\n.wrapper--w680[_ngcontent-%COMP%] {\r\n  max-width: 680px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  line-height: 50px;\r\n  padding: 0 30px;\r\n  transition: all 0.4s ease;\r\n  cursor: pointer;\r\n  font-size: 15px;\r\n  text-transform: capitalize;\r\n  font-weight: 700;\r\n  color: #fff;\r\n  font-family: inherit;\r\n}\r\n.btn--radius[_ngcontent-%COMP%] {\r\n  border-radius: 3px;\r\n}\r\n.btn--radius-2[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n}\r\n.btn--pill[_ngcontent-%COMP%] {\r\n  border-radius: 20px;\r\n}\r\n.btn--green[_ngcontent-%COMP%] {\r\n  background: #57b846;\r\n}\r\n.btn--green[_ngcontent-%COMP%]:hover {\r\n  background: #4dae3c;\r\n}\r\n.btn--blue[_ngcontent-%COMP%] {\r\n  background: #4272d7;\r\n}\r\n.btn--blue[_ngcontent-%COMP%]:hover {\r\n  background: #3868cd;\r\n}\r\n.btn--blue-2[_ngcontent-%COMP%] {\r\n  background: #2c6ed5;\r\n}\r\n.btn--blue-2[_ngcontent-%COMP%]:hover {\r\n  background: #185ac1;\r\n}\r\n.btn--red[_ngcontent-%COMP%] {\r\n  background: #ff4b5a;\r\n}\r\n.btn--red[_ngcontent-%COMP%]:hover {\r\n  background: #eb3746;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  outline: none;\r\n  margin: 0;\r\n  border: none;\r\n  box-shadow: none;\r\n  width: 100%;\r\n  font-size: 14px;\r\n  font-family: inherit;\r\n}\r\ntextarea[_ngcontent-%COMP%] {\r\n  resize: none;\r\n}\r\n.input-group[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin: 0;\r\n}\r\n.input--style-6[_ngcontent-%COMP%], .textarea--style-6[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  line-height: 38px;\r\n  border: 1px solid #cccccc;\r\n  border-radius: 3px;\r\n  color: #666;\r\n  font-size: 15px;\r\n  transition: all 0.4s ease;\r\n  padding: 0 20px;\r\n}\r\n.input--style-6[_ngcontent-%COMP%]::-webkit-input-placeholder, .textarea--style-6[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n  \r\n  color: #999;\r\n}\r\n.input--style-6[_ngcontent-%COMP%]:-moz-placeholder, .textarea--style-6[_ngcontent-%COMP%]:-moz-placeholder {\r\n  \r\n  color: #999;\r\n  opacity: 1;\r\n}\r\n.input--style-6[_ngcontent-%COMP%]::-moz-placeholder, .textarea--style-6[_ngcontent-%COMP%]::-moz-placeholder {\r\n  \r\n  color: #999;\r\n  opacity: 1;\r\n}\r\n.input--style-6[_ngcontent-%COMP%]:-ms-input-placeholder, .textarea--style-6[_ngcontent-%COMP%]:-ms-input-placeholder {\r\n  \r\n  color: #999;\r\n}\r\n.input--style-6[_ngcontent-%COMP%]:-ms-input-placeholder, .textarea--style-6[_ngcontent-%COMP%]:-ms-input-placeholder {\r\n  \r\n  color: #999;\r\n}\r\n.input--style-6[_ngcontent-%COMP%]:focus, .textarea--style-6[_ngcontent-%COMP%]:focus {\r\n  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);\r\n  transform: translateY(-3px);\r\n}\r\n.textarea--style-6[_ngcontent-%COMP%] {\r\n  line-height: 1.2;\r\n  min-height: 120px;\r\n  padding: 10px 20px;\r\n}\r\n.label--desc[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  color: #999;\r\n  margin-top: 10px;\r\n}\r\n@media (max-width: 767px) {\r\n  .label--desc[_ngcontent-%COMP%] {\r\n    margin-top: 14px;\r\n  }\r\n}\r\n.input-file[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n.input-file[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  color: #fff;\r\n  color: white;\r\n  line-height: 40px;\r\n  background-color: #666666;\r\n  padding: 0 20px;\r\n  border-radius: 3px;\r\n  display: inline-block;\r\n  margin-right: 15px;\r\n  transition: all 0.4s ease;\r\n  cursor: pointer;\r\n}\r\n.input-file[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .input-file[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:hover {\r\n  background: #1b1b1b;\r\n}\r\n.input-file__info[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  color: #666;\r\n}\r\n@media (max-width: 767px) {\r\n  .input-file__info[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-top: 6px;\r\n  }\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-size: 36px;\r\n  font-weight: 700;\r\n  text-align: left;\r\n  color: #fff;\r\n  margin-bottom: 24px;\r\n}\r\n@media (max-width: 767px) {\r\n  .title[_ngcontent-%COMP%] {\r\n    padding: 0 15px;\r\n  }\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border-radius: 3px;\r\n  background: #fff;\r\n}\r\n.card-6[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n}\r\n.card-6[_ngcontent-%COMP%]   .card-heading[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n}\r\n.card-6[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  position: relative;\r\n  border-bottom: none;\r\n  padding: 30px 0;\r\n  padding-bottom: 0;\r\n}\r\n.card-6[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]:before {\r\n  bottom: 100%;\r\n  left: 75px;\r\n  content: \"\";\r\n  height: 0;\r\n  width: 0;\r\n  position: absolute;\r\n  border-color: rgba(255, 255, 255, 0);\r\n  border-bottom-color: #fff;\r\n  border-width: 10px;\r\n}\r\n.card-6[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\r\n  border: 1px solid #e5e5e5;\r\n  border-top: none;\r\n  text-align: center;\r\n}\r\n@media (max-width: 767px) {\r\n  .card-6[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\r\n    padding: 50px 30px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1zb25nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQWE7QUFDYix3QkFBd0I7QUFDeEIsNEJBQTRCO0FBQzVCLHlCQUF5QjtBQUN6Qix1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCLElBQUk7QUFHSjs7K0VBRStFO0FBQy9FO0VBQ0UsNERBQTREO0FBQzlEO0FBRUE7RUFDRSw2REFBNkQ7QUFDL0Q7QUFFQTtFQUNFLCtEQUErRDtBQUNqRTtBQUVBOzsrRUFFK0U7QUFDL0U7RUFLRSxhQUFhO0VBR2IsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFLRSw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUdFLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRjtBQUVBO0VBS0UsYUFBYTtFQUdiLGVBQWU7RUFLZix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBR0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7RUFDQTs7SUFFRSxjQUFjO0lBQ2QsV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFFQTs7K0VBRStFO0FBQy9FOzs7RUFHRTtBQUdGO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDtBQUVBO0VBR0UsbUJBQW1CO0FBQ3JCO0FBRUE7OytFQUUrRTtBQUMvRTs7RUFFRTtBQUNGOzs7Ozs7O0VBT0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUVBOztFQUVFO0FBQ0Y7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBRUE7O0VBRUU7QUFDRjtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7QUFFQTs7O0VBR0U7QUFDRjtFQUNFLFlBQVk7RUFDWixRQUFRO0VBQ1IsU0FBUztBQUNYO0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUVBOzsrRUFFK0U7QUFDL0U7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLCtEQUErRDtFQUMvRCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7OytFQUUrRTtBQUMvRTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBOzsrRUFFK0U7QUFDL0U7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBOzsrRUFFK0U7QUFDL0U7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFJZix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7QUFFQTtFQUdFLGtCQUFrQjtBQUNwQjtBQUVBO0VBR0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFHRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7OytFQUUrRTtBQUMvRTs7RUFFRSxhQUFhO0VBQ2IsU0FBUztFQUNULFlBQVk7RUFHWixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDtBQUVBOztFQUVFLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIseUJBQXlCO0VBR3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUlmLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCO0FBRUE7O0VBRUUsd0JBQXdCO0VBQ3hCLFdBQVc7QUFDYjtBQUVBOztFQUVFLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsVUFBVTtBQUNaO0FBRUE7O0VBRUUsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFFQTs7RUFFRSw0QkFBNEI7RUFDNUIsV0FBVztBQUNiO0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUVBOztFQUlFLCtDQUErQztFQUsvQywyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGVBQWU7RUFHZixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUlsQix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjtBQUVBOztFQUVFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUVBO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjtBQUNGO0FBR0E7OytFQUUrRTtBQUMvRTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGO0FBRUE7OytFQUUrRTtBQUMvRTtFQUdFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7RUFDWCxTQUFTO0VBQ1QsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoidXBkYXRlLXNvbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKi53cmFwcGVyIHsqL1xyXG4vKiAgcGFkZGluZzogMzBweCA1MHB4OyovXHJcbi8qICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyovXHJcbi8qICBib3JkZXItcmFkaXVzOiAxNXB4OyovXHJcbi8qICBtYXJnaW46IDEwcHggYXV0bzsqL1xyXG4vKiAgbWF4LXdpZHRoOiA4MDBweCovXHJcbi8qfSovXHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgI0ZPTlRcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLmZvbnQtcm9ibyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiQXJpYWxcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZm9udC1wb3BwaW5zIHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIFwiQXJpYWxcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZm9udC1vcGVuc2FucyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIFwiQXJpYWxcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAjR1JJRFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4ucm93IHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcclxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnJvdyAuY29sLTI6bGFzdC1jaGlsZCAuaW5wdXQtZ3JvdXAtZGVzYyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnJvdy1zcGFjZSB7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAtbW96LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ucm93LXJlZmluZSB7XHJcbiAgbWFyZ2luOiAwIC0xNXB4O1xyXG59XHJcblxyXG4ucm93LXJlZmluZSAuY29sLTMgLmlucHV0LWdyb3VwLWRlc2MsXHJcbi5yb3ctcmVmaW5lIC5jb2wtOSAuaW5wdXQtZ3JvdXAtZGVzYyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmNvbC0yIHtcclxuICB3aWR0aDogLXdlYmtpdC1jYWxjKCgxMDAlIC0gMzBweCkgLyAyKTtcclxuICB3aWR0aDogLW1vei1jYWxjKCgxMDAlIC0gMzBweCkgLyAyKTtcclxuICB3aWR0aDogY2FsYygoMTAwJSAtIDMwcHgpIC8gMik7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5jb2wtMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLXJvdyB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgLW1vei1ib3gtYWxpZ246IHN0YXJ0O1xyXG4gIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBwYWRkaW5nOiAyNHB4IDU1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbn1cclxuXHJcbi5mb3JtLXJvdyAubmFtZSB7XHJcbiAgd2lkdGg6IDE4OHB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi10b3A6IDExcHg7XHJcbn1cclxuXHJcbi5mb3JtLXJvdyAudmFsdWUge1xyXG4gIHdpZHRoOiAtd2Via2l0LWNhbGMoMTAwJSAtIDE4OHB4KTtcclxuICB3aWR0aDogLW1vei1jYWxjKDEwMCUgLSAxODhweCk7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE4OHB4KTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmZvcm0tcm93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMjRweCAzMHB4O1xyXG4gIH1cclxuICAuZm9ybS1yb3cgLm5hbWUsXHJcbiAgLmZvcm0tcm93IC52YWx1ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuZm9ybS1yb3cgLm5hbWUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAjQk9YLVNJWklOR1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4vKipcclxuICogTW9yZSBzZW5zaWJsZSBkZWZhdWx0IGJveC1zaXppbmc6XHJcbiAqIGNzcy10cmlja3MuY29tL2luaGVyaXRpbmctYm94LXNpemluZy1wcm9iYWJseS1zbGlnaHRseS1iZXR0ZXItYmVzdC1wcmFjdGljZVxyXG4gKi9cclxuXHJcblxyXG4qIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogaW5oZXJpdDtcclxuICAtbW96LWJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgYm94LXNpemluZzogaW5oZXJpdDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgI1JFU0VUXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi8qKlxyXG4gKiBBIHZlcnkgc2ltcGxlIHJlc2V0IHRoYXQgc2l0cyBvbiB0b3Agb2YgTm9ybWFsaXplLmNzcy5cclxuICovXHJcbmJvZHksXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsXHJcbmJsb2NrcXVvdGUsIHAsIHByZSxcclxuZGwsIGRkLCBvbCwgdWwsXHJcbmZpZ3VyZSxcclxuaHIsXHJcbmZpZWxkc2V0LCBsZWdlbmQge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRyYWlsaW5nIG1hcmdpbnMgZnJvbSBuZXN0ZWQgbGlzdHMuXHJcbiAqL1xyXG5saSA+IG9sLFxyXG5saSA+IHVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlIGRlZmF1bHQgdGFibGUgc3BhY2luZy5cclxuICovXHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG4vKipcclxuICogMS4gUmVzZXQgQ2hyb21lIGFuZCBGaXJlZm94IGJlaGF2aW91ciB3aGljaCBzZXRzIGEgYG1pbi13aWR0aDogbWluLWNvbnRlbnQ7YFxyXG4gKiAgICBvbiBmaWVsZHNldHMuXHJcbiAqL1xyXG5maWVsZHNldCB7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIC8qIFsxXSAqL1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAjUEFHRSBXUkFQUEVSXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5wYWdlLXdyYXBwZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgXCJBcmlhbFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbmgzIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbmg0IHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbmg1IHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbmg2IHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICNTUEFDSU5HXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5wLXQtMTAwIHtcclxuICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5wLXQtMTMwIHtcclxuICBwYWRkaW5nLXRvcDogMTMwcHg7XHJcbn1cclxuXHJcbi5wLXQtMTgwIHtcclxuICBwYWRkaW5nLXRvcDogMTgwcHg7XHJcbn1cclxuXHJcbi5wLXQtNDUge1xyXG4gIHBhZGRpbmctdG9wOiA0NXB4O1xyXG59XHJcblxyXG4ucC10LTIwIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLnAtdC0xNSB7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5wLXQtMTAge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ucC10LTMwIHtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuLnAtYi0xMDAge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuLnAtYi01MCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5tLXItNDUge1xyXG4gIG1hcmdpbi1yaWdodDogNDVweDtcclxufVxyXG5cclxuLm0tci01NSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1NXB4O1xyXG59XHJcblxyXG4ubS1iLTU1IHtcclxuICBtYXJnaW4tYm90dG9tOiA1NXB4O1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAjV1JBUFBFUlxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4ud3JhcHBlciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi53cmFwcGVyLS13OTYwIHtcclxuICBtYXgtd2lkdGg6IDk2MHB4O1xyXG59XHJcblxyXG4ud3JhcHBlci0tdzkwMCB7XHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxufVxyXG5cclxuLndyYXBwZXItLXc3OTAge1xyXG4gIG1heC13aWR0aDogNzkwcHg7XHJcbn1cclxuXHJcbi53cmFwcGVyLS13NzgwIHtcclxuICBtYXgtd2lkdGg6IDc4MHB4O1xyXG59XHJcblxyXG4ud3JhcHBlci0tdzY4MCB7XHJcbiAgbWF4LXdpZHRoOiA2ODBweDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgI0JVVFRPTlxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4uYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZzogMCAzMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxufVxyXG5cclxuLmJ0bi0tcmFkaXVzIHtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5idG4tLXJhZGl1cy0yIHtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5idG4tLXBpbGwge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmJ0bi0tZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQ6ICM1N2I4NDY7XHJcbn1cclxuXHJcbi5idG4tLWdyZWVuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNGRhZTNjO1xyXG59XHJcblxyXG4uYnRuLS1ibHVlIHtcclxuICBiYWNrZ3JvdW5kOiAjNDI3MmQ3O1xyXG59XHJcblxyXG4uYnRuLS1ibHVlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMzg2OGNkO1xyXG59XHJcblxyXG4uYnRuLS1ibHVlLTIge1xyXG4gIGJhY2tncm91bmQ6ICMyYzZlZDU7XHJcbn1cclxuXHJcbi5idG4tLWJsdWUtMjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzE4NWFjMTtcclxufVxyXG5cclxuLmJ0bi0tcmVkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmY0YjVhO1xyXG59XHJcblxyXG4uYnRuLS1yZWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlYjM3NDY7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICNGT1JNXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmlucHV0LFxyXG50ZXh0YXJlYSB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmlucHV0LS1zdHlsZS02LFxyXG4udGV4dGFyZWEtLXN0eWxlLTYge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC0tc3R5bGUtNjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcclxuLnRleHRhcmVhLS1zdHlsZS02Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAvKiBXZWJLaXQsIEJsaW5rLCBFZGdlICovXHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi5pbnB1dC0tc3R5bGUtNjotbW96LXBsYWNlaG9sZGVyLFxyXG4udGV4dGFyZWEtLXN0eWxlLTY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgLyogTW96aWxsYSBGaXJlZm94IDQgdG8gMTggKi9cclxuICBjb2xvcjogIzk5OTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uaW5wdXQtLXN0eWxlLTY6Oi1tb3otcGxhY2Vob2xkZXIsXHJcbi50ZXh0YXJlYS0tc3R5bGUtNjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgLyogTW96aWxsYSBGaXJlZm94IDE5KyAqL1xyXG4gIGNvbG9yOiAjOTk5O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5pbnB1dC0tc3R5bGUtNjotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXHJcbi50ZXh0YXJlYS0tc3R5bGUtNjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi5pbnB1dC0tc3R5bGUtNjotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXHJcbi50ZXh0YXJlYS0tc3R5bGUtNjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi5pbnB1dC0tc3R5bGUtNjpmb2N1cyxcclxuLnRleHRhcmVhLS1zdHlsZS02OmZvY3VzIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG59XHJcblxyXG4udGV4dGFyZWEtLXN0eWxlLTYge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgbWluLWhlaWdodDogMTIwcHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG59XHJcblxyXG4ubGFiZWwtLWRlc2Mge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogIzk5OTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAubGFiZWwtLWRlc2Mge1xyXG4gICAgbWFyZ2luLXRvcDogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dC1maWxlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uaW5wdXQtZmlsZSArIGxhYmVsIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjY2NjY7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmlucHV0LWZpbGU6Zm9jdXMgKyBsYWJlbCxcclxuLmlucHV0LWZpbGUgKyBsYWJlbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzFiMWIxYjtcclxufVxyXG5cclxuLmlucHV0LWZpbGVfX2luZm8ge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmlucHV0LWZpbGVfX2luZm8ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgI1RJVExFXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAudGl0bGUge1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgI0NBUkRcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLmNhcmQge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4uY2FyZC02IHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmNhcmQtNiAuY2FyZC1oZWFkaW5nIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmNhcmQtNiAuY2FyZC1ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIHBhZGRpbmc6IDMwcHggMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmNhcmQtNiAuY2FyZC1ib2R5OmJlZm9yZSB7XHJcbiAgYm90dG9tOiAxMDAlO1xyXG4gIGxlZnQ6IDc1cHg7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci13aWR0aDogMTBweDtcclxufVxyXG5cclxuLmNhcmQtNiAuY2FyZC1mb290ZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5jYXJkLTYgLmNhcmQtZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDUwcHggMzBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UpdateSongComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-update-song',
                templateUrl: './update-song.component.html',
                styleUrls: ['./update-song.component.css']
            }]
    }], function () { return [{ type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: _service_song_song_service__WEBPACK_IMPORTED_MODULE_8__["SongService"] }, { type: _service_singer_singer_service__WEBPACK_IMPORTED_MODULE_9__["SingerService"] }, { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_10__["CategoryService"] }, { type: _service_album_album_service__WEBPACK_IMPORTED_MODULE_11__["AlbumService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "N06k":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/footer/footer.component.ts ***!
  \*********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _service_song_song_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/song/song.service */ "r1xU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function FooterComponent_footer_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_footer_0_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.backSong(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "iframe", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "audio", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ended", function FooterComponent_footer_0_Template_audio_ended_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.nextSong(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "source", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "source", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Your browser does not support the audio element. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_footer_0_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.nextSong(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.song.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.song.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.song.singer.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.song.urlMp3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.song.urlMp3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.song.urlMp3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.song.urlMp3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class FooterComponent {
    constructor(songService) {
        this.songService = songService;
        // songCurrentObject: BehaviorSubject<number> = new BehaviorSubject<number>(JSON.parse(localStorage.getItem('songSelected')));
        this.songCurrentObject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('songSelected')));
    }
    ngOnInit() {
        // if (this.songCurrentObject.value !== null) {
        //   this.songService.getSongById(this.songCurrentObject.value).subscribe(value => {
        //     this.song = value;
        //   });
        // }
        this.songService.getAllSong().subscribe(value => this.allId = value.length);
        this.songService.getAllSong().subscribe(value => this.allSong = value);
        if (this.songCurrentObject.value !== null) {
            this.song = this.songCurrentObject.value;
        }
    }
    nextSong() {
        for (let j = 0; j < this.allSong.length; j++) {
            if (this.songCurrentObject.value.id === this.allSong[j].id) {
                this.song = this.allSong[j + 1];
                console.log(this.song);
            }
            if (this.songCurrentObject.value.id === this.allSong[this.allSong.length - 1].id) {
                this.song = this.allSong[0];
                console.log(this.song);
            }
        }
        localStorage.setItem('songSelected', JSON.stringify(this.song));
        window.location.reload();
    }
    backSong() {
        for (let j = 0; j < this.allSong.length; j++) {
            if (this.songCurrentObject.value.id === this.allSong[j].id) {
                this.song = this.allSong[j - 1];
                console.log(this.song);
            }
            if (this.songCurrentObject.value.id === this.allSong[0].id) {
                this.song = this.allSong[this.allSong.length - 1];
                console.log(this.song);
            }
        }
        localStorage.setItem('songSelected', JSON.stringify(this.song));
        window.location.reload();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_song_song_service__WEBPACK_IMPORTED_MODULE_2__["SongService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 1, vars: 1, consts: [["style", "outline: none", 4, "ngIf"], [2, "outline", "none"], [1, "container"], [1, "footer-container", "container", "flex-space"], [1, "music-info", "flex-space"], ["id", "imageSong"], [1, "rotate", 3, "src"], [1, "music-info-name", 2, "margin-left", "50px"], [2, "background-color", "#f1f3f4", "border-radius", "50px"], [2, "border", "none", "padding-left", "20px", "border-radius", "25%", "outline", "none", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-step-backward"], ["allow", "autoplay", "id", "audio", 2, "display", "none", 3, "src"], ["autoplay", "", "controls", "", "id", "player", 3, "src", "ended"], ["type", "audio/ogg", 3, "src"], ["type", "audio/mpeg", 3, "src"], [2, "border", "none", "padding-right", "20px", "border-radius", "25%", "outline", "none", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-step-forward"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterComponent_footer_0_Template, 27, 7, "footer", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.song);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".rotate[_ngcontent-%COMP%] {\r\n  animation: rotation 8s infinite linear;\r\n  border-radius: 50%;\r\n  object-fit: cover;\r\n  width: 80px;\r\n  height: 80px;\r\n  transition: 0.5s;\r\n}\r\n\r\n.rotate[_ngcontent-%COMP%]:hover{\r\n  cursor: pointer;\r\n  transition: 0.5s;\r\n  box-shadow: 0 0 5px rgba(81, 203, 238, 1);\r\n  border: 1px solid rgba(81, 203, 238, 1);\r\n}\r\n\r\n@keyframes rotation {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  width:90%;\r\n  max-width:900px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.container-flex[_ngcontent-%COMP%], .flex-space[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.container-flex[_ngcontent-%COMP%]{\r\n  margin-bottom: 6em;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n  z-index: 1;\r\n  background-image: linear-gradient(#282828, black);\r\n  padding: 1em 0;\r\n  margin-top: auto;\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  color: #b3b3b3;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #b3b3b3;\r\n}\r\n\r\n.footer-container[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n  .display-none-footer[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 520px) {\r\n  .music-info-name[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n  }\r\n\r\n  .music-info-sub[_ngcontent-%COMP%] {\r\n    font-size: 0.6rem;\r\n    white-space: nowrap;\r\n  }\r\n\r\n  .display-none-520[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 365px) {\r\n  .display-none-365[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .music-player[_ngcontent-%COMP%] {\r\n    width: 65%;\r\n  }\r\n}\r\n\r\naudio[_ngcontent-%COMP%]:focus {\r\n  outline: none !important;\r\n  border: none !important;\r\n}\r\n\r\naudio[_ngcontent-%COMP%]:hover {\r\n  outline: none !important;\r\n  border: none !important;\r\n}\r\n\r\naudio[_ngcontent-%COMP%]{\r\n  outline: none !important;\r\n  border: none !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlDQUF5QztFQUN6Qyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaURBQWlEO0VBQ2pELGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3RhdGUge1xyXG4gIGFuaW1hdGlvbjogcm90YXRpb24gOHMgaW5maW5pdGUgbGluZWFyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLnJvdGF0ZTpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoODEsIDIwMywgMjM4LCAxKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDgxLCAyMDMsIDIzOCwgMSk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRpb24ge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKkZlYXR1cmVkKi9cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgd2lkdGg6OTAlO1xyXG4gIG1heC13aWR0aDo5MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbGV4LCAuZmxleC1zcGFjZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbGV4e1xyXG4gIG1hcmdpbi1ib3R0b206IDZlbTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMjgyODI4LCBibGFjayk7XHJcbiAgcGFkZGluZzogMWVtIDA7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICNiM2IzYjM7XHJcbn1cclxuXHJcbmZvb3RlciBhIHtcclxuICBjb2xvcjogI2IzYjNiMztcclxufVxyXG5cclxuLmZvb3Rlci1jb250YWluZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmRpc3BsYXktbm9uZS1mb290ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgLm11c2ljLWluZm8tbmFtZSB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gIH1cclxuXHJcbiAgLm11c2ljLWluZm8tc3ViIHtcclxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcblxyXG4gIC5kaXNwbGF5LW5vbmUtNTIwIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjVweCkge1xyXG4gIC5kaXNwbGF5LW5vbmUtMzY1IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubXVzaWMtcGxheWVyIHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgfVxyXG59XHJcblxyXG5hdWRpbzpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hdWRpbzpob3ZlciB7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hdWRpb3tcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return [{ type: _service_song_song_service__WEBPACK_IMPORTED_MODULE_2__["SongService"] }]; }, null); })();


/***/ }),

/***/ "NBmG":
/*!***********************************************************!*\
  !*** ./src/app/song/search-song/search-song.component.ts ***!
  \***********************************************************/
/*! exports provided: SearchSongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSongComponent", function() { return SearchSongComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_song_song_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/song/song.service */ "r1xU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function SearchSongComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kh\u00F4ng t\u00ECm th\u1EA5y k\u1EBFt qu\u1EA3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchSongComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Top Result: \"", ctx_r1.nameSearch, "\"");
} }
const _c0 = function (a1) { return ["/songs/detail", a1]; };
function SearchSongComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchSongComponent_div_3_div_1_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const song_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.playThisSong(song_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const song_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", song_r4.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, song_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r4.singer.name);
} }
function SearchSongComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchSongComponent_div_3_div_1_Template, 19, 7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.songs);
} }
class SearchSongComponent {
    constructor(songService, activatedRoute) {
        this.songService = songService;
        this.activatedRoute = activatedRoute;
        this.songs = [];
        this.name = '';
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((param) => {
            this.name = param.get('name');
            this.getAllSongSearch(this.name);
            this.nameSearch = this.name;
            console.log(this.name);
        });
    }
    getAllSongSearch(name) {
        this.songService.searchSong(name).subscribe((data) => {
            this.songs = data;
        });
    }
    playThisSong(id) {
        this.songService.countViews(id).subscribe(() => console.log('ok'));
        this.songService.getSongById(id).subscribe(value => {
            this.song = value;
            localStorage.setItem('songSelected', JSON.stringify(this.song));
            console.log(this.song);
            window.location.reload();
        });
    }
}
SearchSongComponent.ɵfac = function SearchSongComponent_Factory(t) { return new (t || SearchSongComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_song_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
SearchSongComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchSongComponent, selectors: [["app-search-song"]], decls: 4, vars: 3, consts: [["style", "color: white; text-align: center; margin-top: 80px", 4, "ngIf"], ["style", "color: white; text-align: center; margin-top: 20px", 4, "ngIf"], [1, "container", 2, "margin-top", "30px"], [4, "ngIf"], [2, "color", "white", "text-align", "center", "margin-top", "80px"], [2, "color", "white", "text-align", "center", "margin-top", "20px"], ["class", "playlist-next-item flex-space", 4, "ngFor", "ngForOf"], [1, "playlist-next-item", "flex-space"], [1, "playlist-next-item-entry", "flex-space"], [1, "playlist-next-item-entry-info", "flex-space"], [2, "width", "10px"], [1, "playlist-next-item-entry-number", 2, "width", "50px"], [1, "playlist-next-item-entry-info-image"], [3, "click"], [2, "height", "50px", "width", "50px", "object-fit", "cover", 3, "src"], [1, "playlist-next-item-entry-info-name", 2, "width", "100px", "word-break", "break-all"], [3, "routerLink"], [2, "width", "200px"], [1, "playlist-next-item-entry-info-name-sub"], [1, "playlist-next-item-entry-icons", "flex-space"], ["href", ""], ["id", "add", "aria-hidden", "true", 1, "fa", "fa-plus"]], template: function SearchSongComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SearchSongComponent_h2_0_Template, 2, 0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchSongComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchSongComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.songs.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.songs.length >= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.songs.length >= 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["img[_ngcontent-%COMP%]:hover {\r\n  transition: 0.5s;\r\n  box-shadow: 0 0 5px rgba(81, 203, 238, 1);\r\n  border: 1px solid rgba(81, 203, 238, 1);\r\n  cursor: pointer;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  transition: 0.5s;\r\n  width: 200px;\r\n  color: white;\r\n}\r\n\r\np[_ngcontent-%COMP%]:hover {\r\n  font-size: 18px;\r\n  transition: 0.5s;\r\n  text-shadow: 0 0 5px rgba(81, 203, 238, 1);\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  background-color: #0c1027;\r\n  color: var(--main-font-color);\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  min-width: 270px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  display: block;\r\n  border-radius: 5px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n\r\n\r\nheader[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  width: 90%;\r\n  margin: 2em auto;\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%]   .mytext[_ngcontent-%COMP%] {\r\n  transition: 0.2s;\r\n  visibility: hidden;\r\n  width: 140px;\r\n  background-color: #FF4646;\r\n  color: #fff;\r\n  z-index: 1;\r\n  bottom: 100%;\r\n  left: 60%;\r\n  margin-left: -90px;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  padding: 5px 0;\r\n  position: absolute;\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%] {\r\n  transition: 0.2s;\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%]   .mytext[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 50%;\r\n  margin-left: 10px;\r\n  border-width: 7px;\r\n  border-style: solid;\r\n  border-color: red transparent transparent transparent;\r\n}\r\n\r\n.mytooltip[_ngcontent-%COMP%]:hover   .mytext[_ngcontent-%COMP%] {\r\n  transition: 0.2s;\r\n  visibility: visible;\r\n}\r\n\r\n#delete[_ngcontent-%COMP%]:hover {\r\n  color: #fc4a1a;\r\n  transition: 0.2s;\r\n  text-shadow: 0 0 5px rgba(81, 203, 238, 0.2);\r\n  cursor: pointer;\r\n}\r\n\r\n#edit[_ngcontent-%COMP%]:hover {\r\n  color: #6be585;\r\n  transition: 0.2s;\r\n  text-shadow: 0 0 5px rgba(81, 203, 238, 0.2);\r\n  cursor: pointer;\r\n}\r\n\r\n#add[_ngcontent-%COMP%]:hover {\r\n  color: #0779e4;\r\n  transition: 0.2s;\r\n  text-shadow: 0 0 5px rgba(81, 203, 238, 0.2);\r\n  cursor: pointer;\r\n}\r\n\r\n#like[_ngcontent-%COMP%]:hover {\r\n  color: #FF0099;\r\n  transition: 0.2s;\r\n  text-shadow: 0 0 5px rgba(81, 203, 238, 0.2);\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-col[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.left-col[_ngcontent-%COMP%], .right-col[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\r\n\r\n#header-logo[_ngcontent-%COMP%] {\r\n  font-size: 3rem;\r\n  margin-right: 0.3em;\r\n}\r\n\r\n.header-title[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  margin-right: 5rem;\r\n}\r\n\r\n.header-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.nav-col[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%] {\r\n  background: #12193e;\r\n  margin-right: 1em;\r\n  padding: 0.5em 1em;\r\n  border-radius: 50px;\r\n  width: 70%;\r\n  min-width: 100px;\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  border: none;\r\n  background: none;\r\n  outline: none;\r\n  padding: 0 1em;\r\n  color: white;\r\n  width: 65%;\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  float: right;\r\n}\r\n\r\n#notif[_ngcontent-%COMP%] {\r\n  font-size: 1.25rem;\r\n  margin-right: 2em;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n  .header-title[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], #notif[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .left-col[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n  }\r\n\r\n  .right-col[_ngcontent-%COMP%] {\r\n    width: 75%;\r\n  }\r\n\r\n  .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 475px) {\r\n\r\n  #header-logo[_ngcontent-%COMP%] {\r\n    float: left;\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .search-box[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n  }\r\n\r\n  .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n  }\r\n\r\n  .user-img[_ngcontent-%COMP%] {\r\n    width: 2rem;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  max-width: 900px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.container-flex[_ngcontent-%COMP%], .flex-space[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.container-flex[_ngcontent-%COMP%] {\r\n  margin-bottom: 6em;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  width: 75%;\r\n}\r\n\r\naside[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n}\r\n\r\n.article-image[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n}\r\n\r\n\r\n\r\n.latest-release-col[_ngcontent-%COMP%] {\r\n  width: 47.5%;\r\n}\r\n\r\n.latest-release-entry[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.8em;\r\n}\r\n\r\n.latest-release-image[_ngcontent-%COMP%] {\r\n  width: 25%;\r\n}\r\n\r\n.latest-release-info[_ngcontent-%COMP%] {\r\n  margin: auto 0;\r\n}\r\n\r\n.latest-release-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-bottom: 0.5em;\r\n}\r\n\r\n.latest-release-options[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-top: 0.5em;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.latest-release-sub[_ngcontent-%COMP%] {\r\n  font-weight: 1;\r\n  font-size: 0.75rem;\r\n  color: #9c9da7;\r\n}\r\n\r\n\r\n\r\n.popular-artist-entry[_ngcontent-%COMP%] {\r\n  width: 16%;\r\n}\r\n\r\n.popular-artist-entry[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n}\r\n\r\n.popular-artist-entry[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-top: 0.4em;\r\n  margin-bottom: 0;\r\n  text-align: center;\r\n  font-size: 0.73rem;\r\n}\r\n\r\n\r\n\r\n.stations[_ngcontent-%COMP%] {\r\n  margin-top: 2em;\r\n  padding: 1em;\r\n  background: #101642;\r\n}\r\n\r\n.stations-entry[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 13.5%;\r\n}\r\n\r\n.stations-entry[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n}\r\n\r\n.stations-centered[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  font-size: 0.73rem;\r\n}\r\n\r\n.mid-featured-font[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n  font-size: 1rem;\r\n}\r\n\r\n.article-image[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.middle-featured[_ngcontent-%COMP%] {\r\n  margin-top: 2em;\r\n}\r\n\r\n\r\n\r\n.language-song-entry[_ngcontent-%COMP%] {\r\n  width: 16%;\r\n}\r\n\r\n.language-song-entry[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.language-sub[_ngcontent-%COMP%] {\r\n  font-size: 0.7rem;\r\n  margin-top: 0;\r\n}\r\n\r\n\r\n\r\n.queue-entry[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.queue-number[_ngcontent-%COMP%] {\r\n  width: 10%;\r\n}\r\n\r\n.queue-entry-image[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n}\r\n\r\n.queue-entry-info[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.like-icon[_ngcontent-%COMP%] {\r\n  width: 5%;\r\n}\r\n\r\n.queue-entry-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  margin-bottom: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n@media screen and (max-width: 840px) {\r\n  .queue-entry-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .queue-entry-sub[_ngcontent-%COMP%], .queue-number[_ngcontent-%COMP%] {\r\n    font-size: 0.6rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n  .container-flex[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n  main[_ngcontent-%COMP%], aside[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  aside[_ngcontent-%COMP%] {\r\n    margin-bottom: 6em;\r\n  }\r\n\r\n  .queue-entry-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .queue-entry-sub[_ngcontent-%COMP%], .queue-number[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 520px) {\r\n  .display-none[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .latest-release-col[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .popular-artist-entry[_ngcontent-%COMP%] {\r\n    width: 23%;\r\n  }\r\n\r\n  .stations-entry[_ngcontent-%COMP%] {\r\n    width: 18%;\r\n  }\r\n\r\n  .language-song-entry[_ngcontent-%COMP%] {\r\n    width: 32%;\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n.playlist-aside[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n}\r\n\r\n.similar-artists[_ngcontent-%COMP%], .recently-played[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.similar-artists-title[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n}\r\n\r\n.similar-artists-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 1em;\r\n  margin-bottom: 0.5em;\r\n  padding: 0;\r\n  font-size: 1.2rem;\r\n  white-space: nowrap;\r\n  width: 70%;\r\n}\r\n\r\n.similar-artists-sub[_ngcontent-%COMP%] {\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 1em;\r\n  margin-bottom: 0.5em;\r\n  padding: 0;\r\n  font-size: 0.7rem;\r\n  color: #9c9da7;\r\n  white-space: nowrap;\r\n  width: 25%;\r\n}\r\n\r\n.similar-artists-entry[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  align-items: center;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.similar-artists-image[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n}\r\n\r\n.similar-artists-info[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n}\r\n\r\n.similar-artists-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.similar-artists-info-sub[_ngcontent-%COMP%] {\r\n  color: #9c9da7;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.similar-artists-options[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  color: #9c9da7;\r\n  font-size: 0.7rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.similar-artists-options-menu[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.2em;\r\n}\r\n\r\n.similar-artists-options[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\n.recently-played-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 1.08rem;\r\n}\r\n\r\n\r\n\r\n.featured-playlist[_ngcontent-%COMP%] {\r\n  background: #141b41;\r\n}\r\n\r\n.featured-playlist-image[_ngcontent-%COMP%] {\r\n  width: 45%;\r\n}\r\n\r\n.featured-playlist-image[_ngcontent-%COMP%]::after {\r\n  display: block;\r\n  position: relative;\r\n  background-image: linear-gradient(to bottom, transparent 0%, #141b41 150%);\r\n  margin-top: -150px;\r\n  height: 150px;\r\n  width: 100%;\r\n  content: '';\r\n}\r\n\r\n.featured-playlist-details[_ngcontent-%COMP%] {\r\n  width: 52.5%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n.featured-playlist-info-name[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.featured-playlist-info-top[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n}\r\n\r\n.featured-playlist[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 0.8rem;\r\n  color: #9c9da7;\r\n}\r\n\r\n.followers[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 0.6rem;\r\n}\r\n\r\n.featured-playlist-buttons[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.play-all-button[_ngcontent-%COMP%] {\r\n  margin-right: 5px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.play-all-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  background-image: linear-gradient(to right, #4327b4, #be46dd);\r\n  color: white;\r\n  border: none;\r\n  padding: 0.5em 3em;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  margin-bottom: 0.2em;\r\n}\r\n\r\n.play-all-button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 0.7rem;\r\n}\r\n\r\n\r\n\r\n.playlist-next-item[_ngcontent-%COMP%] {\r\n  flex-direction: column;\r\n}\r\n\r\n.playlist-next-item-entry[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background: #1a1e33;\r\n  padding: 0.5em 0;\r\n  margin: 0.5em 0;\r\n}\r\n\r\n.playlist-next-item-entry[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.playlist-next-item-entry-info[_ngcontent-%COMP%] {\r\n  width: 35%;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.playlist-next-item-entry-info-image[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n}\r\n\r\n.playlist-next-item-entry-icons[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  width: 20%;\r\n  justify-content: space-around;\r\n}\r\n\r\n.playlist-next-item-entry-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #9c9da7;\r\n}\r\n\r\n.playlist-next-item-entry-number[_ngcontent-%COMP%], .playlist-next-item-entry-info-name-sub[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  color: #9c9da7;\r\n}\r\n\r\n@media screen and (max-width: 960px) and (min-width: 650px) {\r\n  .display-none-960[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 750px) {\r\n  .similar-artists-info-name[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 750px) and (min-width: 651px) {\r\n  .featured-playlist-writeup[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 0.6rem;\r\n  }\r\n\r\n  .playlist-next-item-entry-info[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n  .playlist-aside[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .similar-artists-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .similar-artists-sub[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .similar-artists-info-name[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n  }\r\n\r\n  .similar-artists-info-sub[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 550px) {\r\n  .featured-playlist[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .featured-playlist-image[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .featured-playlist-details[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n  }\r\n\r\n  .featured-playlist-info-top[_ngcontent-%COMP%] {\r\n    margin-top: 0.5em;\r\n  }\r\n\r\n  .featured-playlist-writeup[_ngcontent-%COMP%] {\r\n    margin-top: 0.5em;\r\n  }\r\n\r\n  .featured-playlist-buttons[_ngcontent-%COMP%] {\r\n    margin: 0.5em 0;\r\n  }\r\n\r\n  .playlist-next-item-entry-info[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 365px) {\r\n  .similar-artists-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .playlist-next-item-entry-info[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1zb25nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIseUNBQXlDO0VBQ3pDLHVDQUF1QztFQUN2QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDBDQUEwQztBQUM1Qzs7QUFHQTtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IseUNBQXlDO0VBQ3pDLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTs7eUJBRXlCOztBQUd6QjtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHFEQUFxRDtBQUN2RDs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDRDQUE0QztFQUM1QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiw0Q0FBNEM7RUFDNUMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsNENBQTRDO0VBQzVDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDRDQUE0QztFQUM1QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7O0VBRUU7SUFDRSxXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBOzt5QkFFeUI7O0FBR3pCLFdBQVc7O0FBRVg7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUdBLGlCQUFpQjs7QUFDakI7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUEsa0JBQWtCOztBQUNsQjtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQSxXQUFXOztBQUNYO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUEsZ0JBQWdCOztBQUVoQjtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7QUFFRjs7QUFFQTs7eUJBRXlCOztBQUV6QjtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFHQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQSxrQkFBa0I7O0FBQ2xCO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUdBLE9BQU87O0FBQ1A7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDBFQUEwRTtFQUMxRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw2REFBNkQ7RUFDN0QsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEscUJBQXFCOztBQUNyQjtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFHQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoic2VhcmNoLXNvbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZzpob3ZlciB7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoODEsIDIwMywgMjM4LCAxKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDgxLCAyMDMsIDIzOCwgMSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbnAge1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxucDpob3ZlciB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiYSg4MSwgMjAzLCAyMzgsIDEpO1xyXG59XHJcblxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMTAyNztcclxuICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBtaW4td2lkdGg6IDI3MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0TkFWIEJBUlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHJcbmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDJlbSBhdXRvO1xyXG59XHJcblxyXG4ubXl0b29sdGlwIC5teXRleHQge1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHdpZHRoOiAxNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY0NjQ2O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYm90dG9tOiAxMDAlO1xyXG4gIGxlZnQ6IDYwJTtcclxuICBtYXJnaW4tbGVmdDogLTkwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBwYWRkaW5nOiA1cHggMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLm15dG9vbHRpcCB7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5teXRvb2x0aXAgLm15dGV4dDphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBib3JkZXItd2lkdGg6IDdweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogcmVkIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG59XHJcbi5teXRvb2x0aXA6aG92ZXIgLm15dGV4dCB7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcbiNkZWxldGU6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmM0YTFhO1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiYSg4MSwgMjAzLCAyMzgsIDAuMik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jZWRpdDpob3ZlciB7XHJcbiAgY29sb3I6ICM2YmU1ODU7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxuICB0ZXh0LXNoYWRvdzogMCAwIDVweCByZ2JhKDgxLCAyMDMsIDIzOCwgMC4yKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNhZGQ6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDc3OWU0O1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiYSg4MSwgMjAzLCAyMzgsIDAuMik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jbGlrZTpob3ZlciB7XHJcbiAgY29sb3I6ICNGRjAwOTk7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxuICB0ZXh0LXNoYWRvdzogMCAwIDVweCByZ2JhKDgxLCAyMDMsIDIzOCwgMC4yKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXYtY29sIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sZWZ0LWNvbCwgLnJpZ2h0LWNvbCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuI2hlYWRlci1sb2dvIHtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjNlbTtcclxufVxyXG5cclxuLmhlYWRlci10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxlIHAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLm5hdi1jb2wgdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IHtcclxuICBiYWNrZ3JvdW5kOiAjMTIxOTNlO1xyXG4gIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWluLXdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLnNlYXJjaC1ib3ggaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiA2NSU7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IGEge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuI25vdGlmIHtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmhlYWRlci10aXRsZSwgdWwsICNub3RpZiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmxlZnQtY29sIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG5cclxuICAucmlnaHQtY29sIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWJveCBpbnB1dCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc1cHgpIHtcclxuXHJcbiAgI2hlYWRlci1sb2dvIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1ib3gge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtYm94IGlucHV0IHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG5cclxuICAudXNlci1pbWcge1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0Qk9EWVxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHJcbi8qRmVhdHVyZWQqL1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsZXgsIC5mbGV4LXNwYWNlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbGV4IHtcclxuICBtYXJnaW4tYm90dG9tOiA2ZW07XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIHdpZHRoOiA3NSU7XHJcbn1cclxuXHJcbmFzaWRlIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4uYXJ0aWNsZS1pbWFnZSB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuXHJcbi8qTGF0ZXN0IFJlbGVhc2UqL1xyXG4ubGF0ZXN0LXJlbGVhc2UtY29sIHtcclxuICB3aWR0aDogNDcuNSU7XHJcbn1cclxuXHJcbi5sYXRlc3QtcmVsZWFzZS1lbnRyeSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC44ZW07XHJcbn1cclxuXHJcbi5sYXRlc3QtcmVsZWFzZS1pbWFnZSB7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLmxhdGVzdC1yZWxlYXNlLWluZm8ge1xyXG4gIG1hcmdpbjogYXV0byAwO1xyXG59XHJcblxyXG4ubGF0ZXN0LXJlbGVhc2UtaW5mbyBwIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG59XHJcblxyXG4ubGF0ZXN0LXJlbGVhc2Utb3B0aW9ucyBwIHtcclxuICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ubGF0ZXN0LXJlbGVhc2Utc3ViIHtcclxuICBmb250LXdlaWdodDogMTtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgY29sb3I6ICM5YzlkYTc7XHJcbn1cclxuXHJcbi8qUG9wdWxhciBBcnRpc3RzKi9cclxuLnBvcHVsYXItYXJ0aXN0LWVudHJ5IHtcclxuICB3aWR0aDogMTYlO1xyXG59XHJcblxyXG4ucG9wdWxhci1hcnRpc3QtZW50cnkgaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5wb3B1bGFyLWFydGlzdC1lbnRyeSBwIHtcclxuICBtYXJnaW4tdG9wOiAwLjRlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuNzNyZW07XHJcbn1cclxuXHJcbi8qU3RhdGlvbnMqL1xyXG4uc3RhdGlvbnMge1xyXG4gIG1hcmdpbi10b3A6IDJlbTtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgYmFja2dyb3VuZDogIzEwMTY0MjtcclxufVxyXG5cclxuLnN0YXRpb25zLWVudHJ5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEzLjUlO1xyXG59XHJcblxyXG4uc3RhdGlvbnMtZW50cnkgaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5zdGF0aW9ucy1jZW50ZXJlZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBmb250LXNpemU6IDAuNzNyZW07XHJcbn1cclxuXHJcbi5taWQtZmVhdHVyZWQtZm9udCB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5hcnRpY2xlLWltYWdlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5taWRkbGUtZmVhdHVyZWQge1xyXG4gIG1hcmdpbi10b3A6IDJlbTtcclxufVxyXG5cclxuLypMYW5ndWFnZSBTb25nKi9cclxuXHJcbi5sYW5ndWFnZS1zb25nLWVudHJ5IHtcclxuICB3aWR0aDogMTYlO1xyXG59XHJcblxyXG4ubGFuZ3VhZ2Utc29uZy1lbnRyeSBwIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5sYW5ndWFnZS1zdWIge1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi8qQXNpZGUgU2VjdGlvbiovXHJcblxyXG4ucXVldWUtZW50cnkge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4ucXVldWUtbnVtYmVyIHtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4ucXVldWUtZW50cnktaW1hZ2Uge1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5xdWV1ZS1lbnRyeS1pbmZvIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubGlrZS1pY29uIHtcclxuICB3aWR0aDogNSU7XHJcbn1cclxuXHJcbi5xdWV1ZS1lbnRyeS1pbmZvIHAge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQwcHgpIHtcclxuICAucXVldWUtZW50cnktaW5mbyBwLCAucXVldWUtZW50cnktc3ViLCAucXVldWUtbnVtYmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAuY29udGFpbmVyLWZsZXgge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcblxyXG4gIG1haW4sIGFzaWRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgYXNpZGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNmVtO1xyXG4gIH1cclxuXHJcbiAgLnF1ZXVlLWVudHJ5LWluZm8gcCwgLnF1ZXVlLWVudHJ5LXN1YiwgLnF1ZXVlLW51bWJlciB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gIC5kaXNwbGF5LW5vbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5sYXRlc3QtcmVsZWFzZS1jb2wge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAucG9wdWxhci1hcnRpc3QtZW50cnkge1xyXG4gICAgd2lkdGg6IDIzJTtcclxuICB9XHJcblxyXG4gIC5zdGF0aW9ucy1lbnRyeSB7XHJcbiAgICB3aWR0aDogMTglO1xyXG4gIH1cclxuXHJcbiAgLmxhbmd1YWdlLXNvbmctZW50cnkge1xyXG4gICAgd2lkdGg6IDMyJTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0UExBWUxJU1QgUEFHRVxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLnBsYXlsaXN0LWFzaWRlIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4uc2ltaWxhci1hcnRpc3RzLCAucmVjZW50bHktcGxheWVkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5zaW1pbGFyLWFydGlzdHMtdGl0bGUge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaW1pbGFyLWFydGlzdHMtdGl0bGUgaDIge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5zaW1pbGFyLWFydGlzdHMtc3ViIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgY29sb3I6ICM5YzlkYTc7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4uc2ltaWxhci1hcnRpc3RzLWVudHJ5IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxuLnNpbWlsYXItYXJ0aXN0cy1pbWFnZSB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLnNpbWlsYXItYXJ0aXN0cy1pbmZvIHtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4uc2ltaWxhci1hcnRpc3RzLWluZm8gcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5zaW1pbGFyLWFydGlzdHMtaW5mby1zdWIge1xyXG4gIGNvbG9yOiAjOWM5ZGE3O1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG59XHJcblxyXG4uc2ltaWxhci1hcnRpc3RzLW9wdGlvbnMge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgY29sb3I6ICM5YzlkYTc7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaW1pbGFyLWFydGlzdHMtb3B0aW9ucy1tZW51IHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcclxufVxyXG5cclxuLnNpbWlsYXItYXJ0aXN0cy1vcHRpb25zIHAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLypSZWNlbnRseSBQbGF5ZWQqL1xyXG4ucmVjZW50bHktcGxheWVkLXRpdGxlIGgyIHtcclxuICBmb250LXNpemU6IDEuMDhyZW07XHJcbn1cclxuXHJcblxyXG4vKk1BSU4qL1xyXG4uZmVhdHVyZWQtcGxheWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6ICMxNDFiNDE7XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1wbGF5bGlzdC1pbWFnZSB7XHJcbiAgd2lkdGg6IDQ1JTtcclxufVxyXG5cclxuLmZlYXR1cmVkLXBsYXlsaXN0LWltYWdlOjphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50IDAlLCAjMTQxYjQxIDE1MCUpO1xyXG4gIG1hcmdpbi10b3A6IC0xNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG59XHJcblxyXG4uZmVhdHVyZWQtcGxheWxpc3QtZGV0YWlscyB7XHJcbiAgd2lkdGg6IDUyLjUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmZlYXR1cmVkLXBsYXlsaXN0LWluZm8tbmFtZSBoMiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1wbGF5bGlzdC1pbmZvLXRvcCB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZlYXR1cmVkLXBsYXlsaXN0IHAge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGNvbG9yOiAjOWM5ZGE3O1xyXG59XHJcblxyXG4uZm9sbG93ZXJzIHAge1xyXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xyXG59XHJcblxyXG4uZmVhdHVyZWQtcGxheWxpc3QtYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBsYXktYWxsLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ucGxheS1hbGwtYnV0dG9uIGJ1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQzMjdiNCwgI2JlNDZkZCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwLjVlbSAzZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcclxufVxyXG5cclxuLnBsYXktYWxsLWJ1dHRvbiBwIHtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxufVxyXG5cclxuLypQbGF5bGlzdCBuZXh0IGl0ZW0qL1xyXG4ucGxheWxpc3QtbmV4dC1pdGVtIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucGxheWxpc3QtbmV4dC1pdGVtLWVudHJ5IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMWExZTMzO1xyXG4gIHBhZGRpbmc6IDAuNWVtIDA7XHJcbiAgbWFyZ2luOiAwLjVlbSAwO1xyXG59XHJcblxyXG4ucGxheWxpc3QtbmV4dC1pdGVtLWVudHJ5IHAge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucGxheWxpc3QtbmV4dC1pdGVtLWVudHJ5LWluZm8ge1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLnBsYXlsaXN0LW5leHQtaXRlbS1lbnRyeS1pbmZvLWltYWdlIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4ucGxheWxpc3QtbmV4dC1pdGVtLWVudHJ5LWljb25zIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5wbGF5bGlzdC1uZXh0LWl0ZW0tZW50cnktaWNvbnMgYSB7XHJcbiAgY29sb3I6ICM5YzlkYTc7XHJcbn1cclxuXHJcbi5wbGF5bGlzdC1uZXh0LWl0ZW0tZW50cnktbnVtYmVyLCAucGxheWxpc3QtbmV4dC1pdGVtLWVudHJ5LWluZm8tbmFtZS1zdWIge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGNvbG9yOiAjOWM5ZGE3O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xyXG4gIC5kaXNwbGF5LW5vbmUtOTYwIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gIC5zaW1pbGFyLWFydGlzdHMtaW5mby1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIGFuZCAobWluLXdpZHRoOiA2NTFweCkge1xyXG4gIC5mZWF0dXJlZC1wbGF5bGlzdC13cml0ZXVwIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgfVxyXG5cclxuICAucGxheWxpc3QtbmV4dC1pdGVtLWVudHJ5LWluZm8ge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgLnBsYXlsaXN0LWFzaWRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnNpbWlsYXItYXJ0aXN0cy10aXRsZSBoMiB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5zaW1pbGFyLWFydGlzdHMtc3ViIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcblxyXG4gIC5zaW1pbGFyLWFydGlzdHMtaW5mby1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIH1cclxuXHJcbiAgLnNpbWlsYXItYXJ0aXN0cy1pbmZvLXN1YiB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gIC5mZWF0dXJlZC1wbGF5bGlzdCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5mZWF0dXJlZC1wbGF5bGlzdC1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5mZWF0dXJlZC1wbGF5bGlzdC1kZXRhaWxzIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgfVxyXG5cclxuICAuZmVhdHVyZWQtcGxheWxpc3QtaW5mby10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgfVxyXG5cclxuICAuZmVhdHVyZWQtcGxheWxpc3Qtd3JpdGV1cCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICB9XHJcblxyXG4gIC5mZWF0dXJlZC1wbGF5bGlzdC1idXR0b25zIHtcclxuICAgIG1hcmdpbjogMC41ZW0gMDtcclxuICB9XHJcblxyXG4gIC5wbGF5bGlzdC1uZXh0LWl0ZW0tZW50cnktaW5mbyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzY1cHgpIHtcclxuICAuc2ltaWxhci1hcnRpc3RzLXRpdGxlIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIH1cclxuXHJcbiAgLnBsYXlsaXN0LW5leHQtaXRlbS1lbnRyeS1pbmZvIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchSongComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-song',
                templateUrl: './search-song.component.html',
                styleUrls: ['./search-song.component.css']
            }]
    }], function () { return [{ type: _service_song_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "SxEB":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _service_song_song_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/song/song.service */ "r1xU");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/user/user.service */ "rwBg");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth/auth.service */ "/AaM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");










function HeaderComponent_div_12_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 28);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return ["/profile"]; };
const _c1 = function () { return ["/profile/update"]; };
function HeaderComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_12_img_2_Template, 1, 1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_12_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Log Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.currentUser.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
} }
const _c2 = function () { return ["/login"]; };
function HeaderComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
const _c3 = function () { return ["/register"]; };
function HeaderComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c3));
} }
const _c4 = function () { return [""]; };
class HeaderComponent {
    constructor(songService, userService, authService, router, fb) {
        this.songService = songService;
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.songs = [];
        this.searchForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    }
    ngOnInit() {
        this.authService.currentUser.subscribe(value => {
            this.currentUser = value;
            this.userService.getUserByUsername(value.username).subscribe(value1 => {
                this.user = value1;
            });
        });
    }
    searchSong() {
        let name = this.searchForm.value.name;
        this.router.navigate([`/songs/search/${name}`]);
    }
    logout() {
        this.authService.logout();
        localStorage.removeItem('songSelected');
        window.location.replace('');
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_song_song_service__WEBPACK_IMPORTED_MODULE_2__["SongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 17, vars: 6, consts: [[2, "height", "5px"], [1, "nav-col", "left-col"], [1, "header-title"], [3, "routerLink"], ["id", "logoWeb", "src", "assets/img/logo.png", 2, "border-radius", "20px", "height", "70px", "width", "auto", "object-fit", "cover"], [1, "nav-col", "right-col"], [1, "search-box", 2, "width", "400px"], [3, "formGroup", "ngSubmit"], ["formControlName", "name", "type", "text", "placeholder", "Search..."], ["type", "submit", 2, "height", "10px"], ["aria-hidden", "true", 1, "fa", "fa-search", 2, "margin-left", "100px", "height", "20px", "width", "20px"], [1, "col"], ["ngbDropdown", "", "class", "d-inline-flex", 4, "ngIf"], ["class", "btn btn-outline-light", 3, "routerLink", 4, "ngIf"], [2, "visibility", "hidden"], ["class", "btn btn-outline-primary", 3, "routerLink", 4, "ngIf"], ["ngbDropdown", "", 1, "d-inline-flex"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 2, "padding-left", "200%"], ["class", "user-img", 3, "src", 4, "ngIf"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], ["ngbDropdownItem", "", 1, "btn", "btn-outline-light", 3, "routerLink"], ["viewBox", "0 0 20 20", 1, "svg-icon", 2, "width", "20px", "height", "20px"], ["d", "M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"], ["d", "M10.032,8.367c-1.112,0-2.016,0.905-2.016,2.018c0,1.111,0.904,2.014,2.016,2.014c1.111,0,2.014-0.902,2.014-2.014C12.046,9.271,11.143,8.367,10.032,8.367z M10.032,11.336c-0.525,0-0.953-0.427-0.953-0.951c0-0.526,0.427-0.955,0.953-0.955c0.524,0,0.951,0.429,0.951,0.955C10.982,10.909,10.556,11.336,10.032,11.336z"], ["d", "M17.279,8.257h-0.785c-0.107-0.322-0.237-0.635-0.391-0.938l0.555-0.556c0.208-0.208,0.208-0.544,0-0.751l-2.254-2.257c-0.199-0.2-0.552-0.2-0.752,0l-0.556,0.557c-0.304-0.153-0.617-0.284-0.939-0.392V3.135c0-0.294-0.236-0.532-0.531-0.532H8.435c-0.293,0-0.531,0.237-0.531,0.532v0.784C7.582,4.027,7.269,4.158,6.966,4.311L6.409,3.754c-0.1-0.1-0.234-0.155-0.376-0.155c-0.141,0-0.275,0.055-0.375,0.155L3.403,6.011c-0.208,0.207-0.208,0.543,0,0.751l0.556,0.556C3.804,7.622,3.673,7.935,3.567,8.257H2.782c-0.294,0-0.531,0.238-0.531,0.531v3.19c0,0.295,0.237,0.531,0.531,0.531h0.787c0.105,0.318,0.236,0.631,0.391,0.938l-0.556,0.559c-0.208,0.207-0.208,0.545,0,0.752l2.254,2.254c0.208,0.207,0.544,0.207,0.751,0l0.558-0.559c0.303,0.154,0.616,0.285,0.938,0.391v0.787c0,0.293,0.238,0.531,0.531,0.531h3.191c0.295,0,0.531-0.238,0.531-0.531v-0.787c0.322-0.105,0.636-0.236,0.938-0.391l0.56,0.559c0.208,0.205,0.546,0.207,0.752,0l2.252-2.254c0.208-0.207,0.208-0.545,0.002-0.752l-0.559-0.559c0.153-0.303,0.285-0.615,0.389-0.938h0.789c0.295,0,0.532-0.236,0.532-0.531v-3.19C17.812,8.495,17.574,8.257,17.279,8.257z M16.747,11.447h-0.653c-0.241,0-0.453,0.164-0.514,0.398c-0.129,0.496-0.329,0.977-0.594,1.426c-0.121,0.209-0.089,0.473,0.083,0.645l0.463,0.465l-1.502,1.504l-0.465-0.463c-0.174-0.174-0.438-0.207-0.646-0.082c-0.447,0.262-0.927,0.463-1.427,0.594c-0.234,0.061-0.397,0.271-0.397,0.514V17.1H8.967v-0.652c0-0.242-0.164-0.453-0.397-0.514c-0.5-0.131-0.98-0.332-1.428-0.594c-0.207-0.123-0.472-0.09-0.646,0.082l-0.463,0.463L4.53,14.381l0.461-0.463c0.169-0.172,0.204-0.434,0.083-0.643c-0.266-0.461-0.467-0.939-0.596-1.43c-0.06-0.234-0.272-0.398-0.514-0.398H3.313V9.319h0.652c0.241,0,0.454-0.162,0.514-0.397c0.131-0.498,0.33-0.979,0.595-1.43c0.122-0.208,0.088-0.473-0.083-0.645L4.53,6.386l1.503-1.504l0.46,0.462c0.173,0.172,0.437,0.204,0.646,0.083c0.45-0.265,0.931-0.464,1.433-0.597c0.233-0.062,0.396-0.274,0.396-0.514V3.667h2.128v0.649c0,0.24,0.161,0.452,0.396,0.514c0.502,0.133,0.982,0.333,1.433,0.597c0.211,0.12,0.475,0.089,0.646-0.083l0.459-0.462l1.504,1.504l-0.463,0.463c-0.17,0.171-0.202,0.438-0.081,0.646c0.263,0.448,0.463,0.928,0.594,1.427c0.061,0.235,0.272,0.397,0.514,0.397h0.651V11.447z"], ["ngbDropdownItem", "", 1, "btn", "btn-outline-light", 3, "click"], ["viewBox", "0 0 20 20", 1, "svg-icon", 2, "height", "20px", "width", "20px", "rotation", "180deg"], ["d", "M8.416,3.943l1.12-1.12v9.031c0,0.257,0.208,0.464,0.464,0.464c0.256,0,0.464-0.207,0.464-0.464V2.823l1.12,1.12c0.182,0.182,0.476,0.182,0.656,0c0.182-0.181,0.182-0.475,0-0.656l-1.744-1.745c-0.018-0.081-0.048-0.16-0.112-0.224C10.279,1.214,10.137,1.177,10,1.194c-0.137-0.017-0.279,0.02-0.384,0.125C9.551,1.384,9.518,1.465,9.499,1.548L7.76,3.288c-0.182,0.181-0.182,0.475,0,0.656C7.941,4.125,8.234,4.125,8.416,3.943z M15.569,6.286h-2.32v0.928h2.32c0.512,0,0.928,0.416,0.928,0.928v8.817c0,0.513-0.416,0.929-0.928,0.929H4.432c-0.513,0-0.928-0.416-0.928-0.929V8.142c0-0.513,0.416-0.928,0.928-0.928h2.32V6.286h-2.32c-1.025,0-1.856,0.831-1.856,1.856v8.817c0,1.025,0.832,1.856,1.856,1.856h11.138c1.024,0,1.855-0.831,1.855-1.856V8.142C17.425,7.117,16.594,6.286,15.569,6.286z"], [1, "user-img", 3, "src"], [1, "btn", "btn-outline-light", 3, "routerLink"], [1, "btn", "btn-outline-primary", 3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HeaderComponent_Template_form_ngSubmit_7_listener() { return ctx.searchSong(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_div_12_Template, 17, 6, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_button_13_Template, 2, 2, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "==");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_button_16_Template, 2, 2, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownItem"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".svg-icon[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  box-shadow: 0px 0px 10px #fff;\r\n  border-radius: 50%;\r\n  fill: #0779e4;\r\n  transition: 0.5s;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%] {\r\n  transition: 0.5s;\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%]:hover {\r\n  transition: 0.5s;\r\n  box-shadow: 0 0 5px rgba(81, 203, 238, 1);\r\n  border: 1px solid rgba(81, 203, 238, 1);\r\n}\r\n\r\n.user-img[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  width: 50px;\r\n  object-fit: cover;\r\n  border-radius: 50%;\r\n}\r\n\r\n.user-img[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  transition: 0.5s;\r\n  box-shadow: 0 0 5px rgba(81, 203, 238, 1);\r\n  border: 1px solid rgba(81, 203, 238, 1);\r\n}\r\n\r\n.dropdown-toggle[_ngcontent-%COMP%]::after {\r\n  display: none;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n#logoWeb[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  background-color: Transparent;\r\n  position: relative;\r\n  height: 50px;\r\n  width: 100px;\r\n  border: none;\r\n  outline: none;\r\n  color: white;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  font-size: 18px;\r\n  font-family: 'Raleway', sans-serif\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:before {\r\n  position: absolute;\r\n  content: '';\r\n  top: -2px;\r\n  left: -2px;\r\n  height: calc(100% + 4px);\r\n  width: calc(100% + 4px);\r\n  border-radius: 5px;\r\n  z-index: -1;\r\n  opacity: 0;\r\n  filter: blur(5px);\r\n  background: linear-gradient(#aa4b6b, #6b6b83, #3b8d99);\r\n  background-size: 400%;\r\n  transition: opacity .3s ease-in-out;\r\n  animation: animate 20s linear infinite\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover:before {\r\n  opacity: 1;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover:active {\r\n  background: none;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover:active:before {\r\n  filter: blur(2px);\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  width: 90%;\r\n  margin: 2em auto;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: #6872f0;\r\n}\r\n\r\n.nav-col[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.left-col[_ngcontent-%COMP%], .right-col[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\r\n\r\n#header-logo[_ngcontent-%COMP%] {\r\n  font-size: 3rem;\r\n  margin-right: 0.3em;\r\n}\r\n\r\n.header-title[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  margin-right: 5rem;\r\n}\r\n\r\n.header-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.nav-col[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%] {\r\n  background: #12193e;\r\n  margin-right: 1em;\r\n  padding: 0.5em 1em;\r\n  border-radius: 50px;\r\n  width: 70%;\r\n  min-width: 100px;\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  border: none;\r\n  background: none;\r\n  outline: none;\r\n  padding: 0 1em;\r\n  color: white;\r\n  width: 65%;\r\n}\r\n\r\n.search-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  float: right;\r\n}\r\n\r\n#notif[_ngcontent-%COMP%] {\r\n  font-size: 1.25rem;\r\n  margin-right: 2em;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n  .header-title[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], #notif[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .left-col[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n  }\r\n\r\n  .right-col[_ngcontent-%COMP%] {\r\n    width: 75%;\r\n  }\r\n\r\n  .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 475px) {\r\n\r\n  #header-logo[_ngcontent-%COMP%] {\r\n    float: left;\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .search-box[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n  }\r\n\r\n  .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 840px) {\r\n  .queue-entry-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .queue-entry-sub[_ngcontent-%COMP%], .queue-number[_ngcontent-%COMP%] {\r\n    font-size: 0.6rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n  .container-flex[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n  main[_ngcontent-%COMP%], aside[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  aside[_ngcontent-%COMP%] {\r\n    margin-bottom: 6em;\r\n  }\r\n\r\n  .queue-entry-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .queue-entry-sub[_ngcontent-%COMP%], .queue-number[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 520px) {\r\n  .display-none[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .latest-release-col[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .popular-artist-entry[_ngcontent-%COMP%] {\r\n    width: 23%;\r\n  }\r\n\r\n  .stations-entry[_ngcontent-%COMP%] {\r\n    width: 18%;\r\n  }\r\n\r\n  .language-song-entry[_ngcontent-%COMP%] {\r\n    width: 32%;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUNBQXlDO0VBQ3pDLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUNBQXlDO0VBQ3pDLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixzREFBc0Q7RUFDdEQscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQztBQUNGOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUdBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixjQUFjO0VBQ2QsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBOztFQUVFO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7QUFFRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdmctaWNvbjpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmaWxsOiAjMDc3OWU0O1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbiNsb2dvOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IHtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uc2VhcmNoLWJveDpob3ZlciB7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoODEsIDIwMywgMjM4LCAxKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDgxLCAyMDMsIDIzOCwgMSk7XHJcbn1cclxuXHJcbi51c2VyLWltZyB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnVzZXItaW1nOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoODEsIDIwMywgMjM4LCAxKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDgxLCAyMDMsIDIzOCwgMSk7XHJcbn1cclxuXHJcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4jbG9nb1dlYjpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IFRyYW5zcGFyZW50O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmXHJcbn1cclxuXHJcbmJ1dHRvbjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiAnJztcclxuICB0b3A6IC0ycHg7XHJcbiAgbGVmdDogLTJweDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDRweCk7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDRweCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgZmlsdGVyOiBibHVyKDVweCk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNhYTRiNmIsICM2YjZiODMsICMzYjhkOTkpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNDAwJTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBlYXNlLWluLW91dDtcclxuICBhbmltYXRpb246IGFuaW1hdGUgMjBzIGxpbmVhciBpbmZpbml0ZVxyXG59XHJcblxyXG5idXR0b246aG92ZXI6YmVmb3JlIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5idXR0b246aG92ZXI6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG5idXR0b246aG92ZXI6YWN0aXZlOmJlZm9yZSB7XHJcbiAgZmlsdGVyOiBibHVyKDJweCk7XHJcbn1cclxuXHJcblxyXG5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAyZW0gYXV0bztcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICM2ODcyZjA7XHJcbn1cclxuXHJcbi5uYXYtY29sIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sZWZ0LWNvbCwgLnJpZ2h0LWNvbCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuI2hlYWRlci1sb2dvIHtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjNlbTtcclxufVxyXG5cclxuLmhlYWRlci10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxlIHAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLm5hdi1jb2wgdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IHtcclxuICBiYWNrZ3JvdW5kOiAjMTIxOTNlO1xyXG4gIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWluLXdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLnNlYXJjaC1ib3ggaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiA2NSU7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IGEge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuI25vdGlmIHtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmhlYWRlci10aXRsZSwgdWwsICNub3RpZiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmxlZnQtY29sIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG5cclxuICAucmlnaHQtY29sIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWJveCBpbnB1dCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc1cHgpIHtcclxuXHJcbiAgI2hlYWRlci1sb2dvIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1ib3gge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtYm94IGlucHV0IHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDBweCkge1xyXG4gIC5xdWV1ZS1lbnRyeS1pbmZvIHAsIC5xdWV1ZS1lbnRyeS1zdWIsIC5xdWV1ZS1udW1iZXIge1xyXG4gICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gIC5jb250YWluZXItZmxleCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuXHJcbiAgbWFpbiwgYXNpZGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBhc2lkZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2ZW07XHJcbiAgfVxyXG5cclxuICAucXVldWUtZW50cnktaW5mbyBwLCAucXVldWUtZW50cnktc3ViLCAucXVldWUtbnVtYmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgLmRpc3BsYXktbm9uZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmxhdGVzdC1yZWxlYXNlLWNvbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5wb3B1bGFyLWFydGlzdC1lbnRyeSB7XHJcbiAgICB3aWR0aDogMjMlO1xyXG4gIH1cclxuXHJcbiAgLnN0YXRpb25zLWVudHJ5IHtcclxuICAgIHdpZHRoOiAxOCU7XHJcbiAgfVxyXG5cclxuICAubGFuZ3VhZ2Utc29uZy1lbnRyeSB7XHJcbiAgICB3aWR0aDogMzIlO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _service_song_song_service__WEBPACK_IMPORTED_MODULE_2__["SongService"] }, { type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _landing_page_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page/header/header.component */ "SxEB");
/* harmony import */ var _landing_page_playing_songs_playing_songs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-page/playing-songs/playing-songs.component */ "cTPe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _landing_page_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-page/footer/footer.component */ "N06k");






// @ts-ignore
class AppComponent {
    constructor() {
        this.title = 'Sound Wave - Online Audio Streaming';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-playing-songs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_landing_page_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _landing_page_playing_songs_playing_songs_component__WEBPACK_IMPORTED_MODULE_2__["PlayingSongsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _landing_page_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "WQHl":
/*!************************************************!*\
  !*** ./src/app/service/album/album.service.ts ***!
  \************************************************/
/*! exports provided: AlbumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumService", function() { return AlbumService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Project_Sound_Wave_FrontEnd_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../Project_Sound_Wave_FrontEnd/src/environments/environment */ "eCOg");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const urlApi = `${_Project_Sound_Wave_FrontEnd_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}`;
class AlbumService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllAlbum() {
        return this.httpClient.get(urlApi + '/albums');
    }
    getOneAlbum(id) {
        return this.httpClient.get(urlApi + '/albums' + `/${id}`);
    }
}
AlbumService.ɵfac = function AlbumService_Factory(t) { return new (t || AlbumService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AlbumService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlbumService, factory: AlbumService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlbumService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Y5Hv":
/*!*******************************************************!*\
  !*** ./src/app/service/like/like-playlist.service.ts ***!
  \*******************************************************/
/*! exports provided: LikePlaylistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikePlaylistService", function() { return LikePlaylistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const URL_API = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}`;
class LikePlaylistService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    likePlaylist(p_id, u_id) {
        return this.httpClient.post(URL_API + `/like-playlists/like/${p_id}/${u_id}`, p_id);
    }
    getAllLikeUser(id) {
        return this.httpClient.get(URL_API + `/playlists/all-like/${id}`);
    }
    // getSongMostLike(): Observable<any> {
    //   return this.httpClient.get<Playlist[]>(URL_API + `/like-playlists/most-likes`);
    // }
    getLikePlaylist(id) {
        return this.httpClient.get(URL_API + `/like-playlists/like/${id}`);
    }
}
LikePlaylistService.ɵfac = function LikePlaylistService_Factory(t) { return new (t || LikePlaylistService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
LikePlaylistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LikePlaylistService, factory: LikePlaylistService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LikePlaylistService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _client_user_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client/user/my-profile/my-profile.component */ "omAJ");
/* harmony import */ var _client_user_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client/user/update-profile/update-profile.component */ "G2W0");
/* harmony import */ var _song_create_song_create_song_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./song/create-song/create-song.component */ "dHQU");
/* harmony import */ var _song_list_song_list_song_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./song/list-song/list-song.component */ "lOzJ");
/* harmony import */ var _song_update_song_update_song_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./song/update-song/update-song.component */ "My5X");
/* harmony import */ var _visiter_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./visiter/login/login.component */ "eYOR");
/* harmony import */ var _visiter_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./visiter/register/register.component */ "opFN");
/* harmony import */ var _client_user_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./client/user/resetpassword/resetpassword.component */ "o5Wg");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _landing_page_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./landing-page/header/header.component */ "SxEB");
/* harmony import */ var _landing_page_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./landing-page/footer/footer.component */ "N06k");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _helper_jwt_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./helper/jwt-interceptor */ "4MTJ");
/* harmony import */ var _helper_error_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./helper/error-interceptor */ "dmcY");
/* harmony import */ var _landing_page_home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./landing-page/home/home.component */ "/XLG");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _song_search_song_search_song_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./song/search-song/search-song.component */ "NBmG");
/* harmony import */ var _song_detail_song_detail_song_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./song/detail-song/detail-song.component */ "bZLO");
/* harmony import */ var _playlist_playlist_details_playlist_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./playlist/playlist-details/playlist-details.component */ "5yS1");
/* harmony import */ var _landing_page_playing_songs_playing_songs_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./landing-page/playing-songs/playing-songs.component */ "cTPe");
/* harmony import */ var _landing_page_menu_menu_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./landing-page/menu/menu.component */ "yewD");
/* harmony import */ var _song_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./song/comment-list/comment-list.component */ "27X8");
/* harmony import */ var _client_user_term_of_user_term_of_user_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./client/user/term-of-user/term-of-user.component */ "a5im");
/* harmony import */ var _playlist_comment_playlist_comment_playlist_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./playlist/comment-playlist/comment-playlist.component */ "nhcN");

































// @ts-ignore
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"], useClass: _helper_jwt_interceptor__WEBPACK_IMPORTED_MODULE_19__["JwtInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"], useClass: _helper_error_interceptor__WEBPACK_IMPORTED_MODULE_20__["ErrorInterceptor"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__["AngularFireStorageModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebaseConfig, 'cloud'),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _client_user_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_3__["MyProfileComponent"],
        _client_user_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_4__["UpdateProfileComponent"],
        _song_create_song_create_song_component__WEBPACK_IMPORTED_MODULE_5__["CreateSongComponent"],
        _song_list_song_list_song_component__WEBPACK_IMPORTED_MODULE_6__["ListSongComponent"],
        _song_update_song_update_song_component__WEBPACK_IMPORTED_MODULE_7__["UpdateSongComponent"],
        _visiter_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _visiter_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
        _client_user_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_10__["ResetpasswordComponent"],
        _landing_page_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
        _landing_page_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
        _landing_page_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
        _song_search_song_search_song_component__WEBPACK_IMPORTED_MODULE_23__["SearchSongComponent"],
        _song_detail_song_detail_song_component__WEBPACK_IMPORTED_MODULE_24__["DetailSongComponent"],
        _song_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_28__["CommentListComponent"],
        _landing_page_playing_songs_playing_songs_component__WEBPACK_IMPORTED_MODULE_26__["PlayingSongsComponent"],
        _landing_page_menu_menu_component__WEBPACK_IMPORTED_MODULE_27__["MenuComponent"],
        _playlist_playlist_details_playlist_details_component__WEBPACK_IMPORTED_MODULE_25__["PlaylistDetailsComponent"],
        _playlist_comment_playlist_comment_playlist_component__WEBPACK_IMPORTED_MODULE_30__["CommentPlaylistComponent"],
        _client_user_term_of_user_term_of_user_component__WEBPACK_IMPORTED_MODULE_29__["TermOfUserComponent"],
        _playlist_comment_playlist_comment_playlist_component__WEBPACK_IMPORTED_MODULE_30__["CommentPlaylistComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__["AngularFireStorageModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbDropdownModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _client_user_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_3__["MyProfileComponent"],
                    _client_user_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_4__["UpdateProfileComponent"],
                    _song_create_song_create_song_component__WEBPACK_IMPORTED_MODULE_5__["CreateSongComponent"],
                    _song_list_song_list_song_component__WEBPACK_IMPORTED_MODULE_6__["ListSongComponent"],
                    _song_update_song_update_song_component__WEBPACK_IMPORTED_MODULE_7__["UpdateSongComponent"],
                    _visiter_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _visiter_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                    _client_user_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_10__["ResetpasswordComponent"],
                    _landing_page_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                    _landing_page_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                    _landing_page_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
                    _song_search_song_search_song_component__WEBPACK_IMPORTED_MODULE_23__["SearchSongComponent"],
                    _song_detail_song_detail_song_component__WEBPACK_IMPORTED_MODULE_24__["DetailSongComponent"],
                    _song_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_28__["CommentListComponent"],
                    _landing_page_playing_songs_playing_songs_component__WEBPACK_IMPORTED_MODULE_26__["PlayingSongsComponent"],
                    _landing_page_menu_menu_component__WEBPACK_IMPORTED_MODULE_27__["MenuComponent"],
                    _playlist_playlist_details_playlist_details_component__WEBPACK_IMPORTED_MODULE_25__["PlaylistDetailsComponent"],
                    _playlist_comment_playlist_comment_playlist_component__WEBPACK_IMPORTED_MODULE_30__["CommentPlaylistComponent"],
                    _client_user_term_of_user_term_of_user_component__WEBPACK_IMPORTED_MODULE_29__["TermOfUserComponent"],
                    _playlist_comment_playlist_comment_playlist_component__WEBPACK_IMPORTED_MODULE_30__["CommentPlaylistComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__["AngularFireStorageModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebaseConfig, 'cloud'),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbDropdownModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbModule"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"], useClass: _helper_jwt_interceptor__WEBPACK_IMPORTED_MODULE_19__["JwtInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"], useClass: _helper_error_interceptor__WEBPACK_IMPORTED_MODULE_20__["ErrorInterceptor"], multi: true }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "a5im":
/*!********************************************************************!*\
  !*** ./src/app/client/user/term-of-user/term-of-user.component.ts ***!
  \********************************************************************/
/*! exports provided: TermOfUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermOfUserComponent", function() { return TermOfUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TermOfUserComponent {
    constructor() { }
    ngOnInit() {
    }
}
TermOfUserComponent.ɵfac = function TermOfUserComponent_Factory(t) { return new (t || TermOfUserComponent)(); };
TermOfUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermOfUserComponent, selectors: [["app-term-of-user"]], decls: 437, vars: 0, consts: [["href", "http://zaloapp.com/zalo/dieukhoan/"], ["start", "4"]], template: function TermOfUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "TH\u1ECEA THU\u1EACN CUNG C\u1EA4P V\u00C0 S\u1EEC D\u1EE4NG D\u1ECACH V\u1EE4 NGHE NH\u1EA0C TR\u1EF0C TUY\u1EBEN SOUND WAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "(C\u1EADp nh\u1EADt th\u00E1ng 03/2020)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0110i\u1EC1u 1: Gi\u1EA3i th\u00EDch t\u1EEB ng\u1EEF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sound Wave: l\u00E0 d\u1ECBch v\u1EE5 nghe nh\u1EA1c tr\u1EF1c tuy\u1EBFn do C\u00F4ng Ty C\u1ED5 Ph\u1EA7n AVENGERS l\u00E0 ch\u1EE7 qu\u1EA3n c\u00F3 th\u1EC3 truy c\u1EADp qua website soundwave.vn, \u1EE9ng d\u1EE5ng Sound Wave ho\u1EB7c b\u1EA5t k\u1EF3 c\u00E1ch truy c\u1EADp kh\u1EA3 d\u1EE5ng n\u00E0o kh\u00E1c.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Th\u1ECFa Thu\u1EADn: l\u00E0 th\u1ECFa thu\u1EADn cung c\u1EA5p v\u00E0 s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5 nghe nh\u1EA1c tr\u1EF1c tuy\u1EBFn Sound Wave, c\u00F9ng v\u1EDBi t\u1EA5t c\u1EA3 c\u00E1c b\u1EA3n s\u1EEDa \u0111\u1ED5i, b\u1ED5 sung, c\u1EADp nh\u1EADt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "AVENGERS: l\u00E0 C\u00F4ng Ty C\u1ED5 Ph\u1EA7n AVENGERS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Th\u00F4ng Tin C\u00E1 Nh\u00E2n: l\u00E0 th\u00F4ng tin g\u1EAFn li\u1EC1n v\u1EDBi vi\u1EC7c x\u00E1c \u0111\u1ECBnh danh t\u00EDnh, nh\u00E2n th\u00E2n c\u1EE7a c\u00E1 nh\u00E2n bao g\u1ED3m t\u00EAn, tu\u1ED5i, \u0111\u1ECBa ch\u1EC9, s\u1ED1 ch\u1EE9ng minh nh\u00E2n d\u00E2n, s\u1ED1 \u0111i\u1EC7n tho\u1EA1i, \u0111\u1ECBa ch\u1EC9 th\u01B0 \u0111i\u1EC7n t\u1EED, t\u00E0i kho\u1EA3n ng\u00E2n h\u00E0ng c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng v\u00E0 m\u1ED9t s\u1ED1 th\u00F4ng tin kh\u00E1c theo quy \u0111\u1ECBnh c\u1EE7a ph\u00E1p lu\u1EADt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Zalo ID: l\u00E0 t\u00E0i kho\u1EA3n \u0111\u1EC3 Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng \u0111\u0103ng nh\u1EADp, upload n\u1ED9i dung l\u00EAn Sound Wave v\u00E0 s\u1EED d\u1EE5ng c\u00E1c t\u00EDnh n\u0103ng n\u00E2ng cao kh\u00E1c.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng: l\u00E0 b\u00EAn truy c\u1EADp Sound Wave kh\u00F4ng ph\u1EE5 thu\u1ED9c c\u00F3 hay kh\u00F4ng c\u00F3 Zalo ID.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "S\u1EDF H\u1EEFu Tr\u00ED Tu\u1EC7: l\u00E0 nh\u1EEFng s\u00E1ng ch\u1EBF, c\u1EA3i ti\u1EBFn, thi\u1EBFt k\u1EBF, quy tr\u00ECnh, c\u00F4ng th\u1EE9c, ph\u01B0\u01A1ng ph\u00E1p, c\u01A1 s\u1EDF d\u1EEF li\u1EC7u, th\u00F4ng tin, b\u1EA3n v\u1EBD, m\u00E3, ch\u01B0\u01A1ng tr\u00ECnh m\u00E1y t\u00EDnh, t\u00E1c ph\u1EA9m c\u00F3 b\u1EA3n quy\u1EC1n (hi\u1EC7n t\u1EA1i v\u00E0 t\u01B0\u01A1ng lai), thi\u1EBFt k\u1EBF m\u1EA1ch t\u00EDch h\u1EE3p b\u00E1n d\u1EABn, th\u01B0\u01A1ng hi\u1EC7u, nh\u00E3n hi\u1EC7u (d\u00F9 \u0111\u00E3 \u0111\u0103ng k\u00FD hay ch\u01B0a \u0111\u0103ng k\u00FD) t\u00EAn th\u01B0\u01A1ng m\u1EA1i v\u00E0 (thi\u1EBFt k\u1EBF) bao b\u00EC th\u01B0\u01A1ng ph\u1EA9m.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0110i\u1EC1u 2: N\u1ED9i dung d\u1ECBch v\u1EE5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sound Wave l\u00E0 nghe nh\u1EA1c tr\u1EF1c tuy\u1EBFn chia s\u1EBB th\u00F4ng tin v\u1EC1 \u00E2m nh\u1EA1c, cho ph\u00E9p nghe nh\u1EA1c tr\u1EF1c tuy\u1EBFn, xem video clip, music video (MV) bao g\u1ED3m nhi\u1EC1u th\u1EC3 lo\u1EA1i kh\u00E1c nhau v\u00E0/ho\u1EB7c nh\u1EEFng n\u1ED9i dung kh\u00E1c \u0111\u01B0\u1EE3c Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng \u0111\u0103ng t\u1EA3i.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Th\u00F4ng qua Sound Wave, ch\u1EE7 th\u1EC3 b\u1EA3n quy\u1EC1n c\u00F3 th\u1EC3 \u0111\u1EC3 \u0111\u0103ng t\u1EA3i b\u00E0i h\u00E1t / video clip, MV ch\u1EA5t l\u01B0\u1EE3ng \u0111\u1EC3 truy\u1EC1n \u0111\u1EA1t t\u1EDBi Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng c\u00F3 th\u1EC3 nghe tr\u1EF1c tuy\u1EBFn ho\u1EB7c t\u1EA3i v\u1EC1 t\u1EEB website ho\u1EB7c t\u1EEB \u1EE9ng d\u1EE5ng MP3 \u0111\u01B0\u1EE3c ph\u00E1t tri\u1EC3n tr\u00EAn n\u1EC1n t\u1EA3ng di \u0111\u1ED9ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Sound Wave cho ph\u00E9p Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng trao \u0111\u1ED5i, th\u1EA3o lu\u1EADn v\u00E0 ph\u1EA3n h\u1ED3i th\u00F4ng qua c\u00F4ng c\u1EE5 chat b\u1EB1ng k\u00ED t\u1EF1 ch\u1EEF v\u1EC1 nh\u1EEFng n\u1ED9i dung \u0111\u01B0\u1EE3c cung c\u1EA5p tr\u00EAn Sound Wave.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng Sound Wave c\u00F3 th\u1EC3 s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5 tr\u00EAn Website ho\u1EB7c/v\u00E0 c\u00E1c \u1EE9ng d\u1EE5ng Sound Wave ph\u00E1t tri\u1EC3n tr\u00EAn thi\u1EBFt b\u1ECB di \u0111\u1ED9ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Th\u00F4ng qua Sound Wave, AVENGERS cung c\u1EA5p d\u1ECBch v\u1EE5 qu\u1EA3ng c\u00E1o tr\u00EAn Wesite v\u00E0/ho\u1EB7c tr\u00EAn \u1EE9ng d\u1EE5ng Sound Wave ph\u00E1t tri\u1EC3n tr\u00EAn thi\u1EBFt b\u1ECB di \u0111\u1ED9ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u0110i\u1EC1u 3: Ch\u1EA5p nh\u1EADn \u0111i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng v\u00E0 s\u1EEDa \u0111\u1ED5i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Khi s\u1EED d\u1EE5ng D\u1ECBch v\u1EE5 Sound Wave, Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng m\u1EB7c \u0111\u1ECBnh ph\u1EA3i \u0111\u1ED3ng \u00FD v\u00E0 tu\u00E2n theo c\u00E1c \u0111i\u1EC1u kho\u1EA3n \u0111\u01B0\u1EE3c quy \u0111\u1ECBnh t\u1EA1i Th\u1ECFa Thu\u1EADn n\u00E0y v\u00E0 quy \u0111\u1ECBnh, quy ch\u1EBF m\u00E0 Sound Wave li\u00EAn k\u1EBFt, t\u00EDch h\u1EE3p (n\u00EAu c\u00F3) bao g\u1ED3m nh\u01B0ng kh\u00F4ng gi\u1EDBi h\u1EA1n Zalo ID t\u1EA1i\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "http://zaloapp.com/zalo/dieukhoan/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Khi truy c\u1EADp, s\u1EED d\u1EE5ng Sound Wave b\u1EB1ng b\u1EA5t c\u1EE9 ph\u01B0\u01A1ng ti\u1EC7n (m\u00E1y t\u00EDnh, \u0111i\u1EC7n tho\u1EA1i, tivi thi\u1EBFt b\u1ECB k\u1EBFt n\u1ED1i internet) ho\u1EB7c s\u1EED d\u1EE5ng \u1EE9ng d\u1EE5ng Sound Wave m\u00E0 AVENGERS ph\u00E1t tri\u1EC3n th\u00EC Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng c\u0169ng ph\u1EA3i tu\u00E2n theo Quy ch\u1EBF n\u00E0y.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u0110\u1EC3 \u0111\u00E1p \u1EE9ng nhu c\u1EA7u s\u1EED d\u1EE5ng c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng, Sound Wave kh\u00F4ng ng\u1EEBng ho\u00E0n thi\u1EC7n v\u00E0 ph\u00E1t tri\u1EC3n, v\u00EC v\u1EADy c\u00E1c \u0111i\u1EC1u kho\u1EA3n quy \u0111\u1ECBnh t\u1EA1i Th\u1ECFa thu\u1EADn cung c\u1EA5p v\u00E0 s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5 nghe nh\u1EA1c tr\u1EF1c tuy\u1EBFn Sound Wave n\u00E0y, Quy ch\u1EBF Zalo ID c\u00F3 th\u1EC3 \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt, ch\u1EC9nh s\u1EEDa b\u1EA5t c\u1EE9 l\u00FAc n\u00E0o m\u00E0 kh\u00F4ng c\u1EA7n ph\u1EA3i th\u00F4ng b\u00E1o tr\u01B0\u1EDBc t\u1EDBi Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng. Sound Wave s\u1EBD c\u00F4ng b\u1ED1 r\u00F5 tr\u00EAn Website, di\u1EC5n \u0111\u00E0n v\u1EC1 nh\u1EEFng thay \u0111\u1ED5i, b\u1ED5 sung \u0111\u00F3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Trong tr\u01B0\u1EDDng h\u1EE3p m\u1ED9t ho\u1EB7c m\u1ED9t s\u1ED1 \u0111i\u1EC1u kho\u1EA3n Quy ch\u1EBF n\u00E0y xung \u0111\u1ED9t v\u1EDBi c\u00E1c quy \u0111\u1ECBnh c\u1EE7a lu\u1EADt ph\u00E1p, \u0111i\u1EC1u kho\u1EA3n \u0111\u00F3 s\u1EBD \u0111\u01B0\u1EE3c ch\u1EC9nh s\u1EEDa cho ph\u00F9 h\u1EE3p v\u1EDBi quy \u0111\u1ECBnh ph\u00E1p lu\u1EADt hi\u1EC7n h\u00E0nh, v\u00E0 ph\u1EA7n c\u00F2n l\u1EA1i c\u1EE7a Quy ch\u1EBF s\u1EED d\u1EE5ng v\u1EABn gi\u1EEF nguy\u00EAn gi\u00E1 tr\u1ECB.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u0110i\u1EC1u 4: \u0110\u0103ng k\u00FD t\u00E0i kho\u1EA3n v\u00E0 s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng ph\u1EA3i \u0111\u1EE7 n\u0103ng l\u1EF1c h\u00E0nh vi d\u00E2n s\u1EF1 v\u00E0 \u0111\u1EE7 13 tu\u1ED5i tr\u1EDF l\u00EAn m\u1EDBi \u0111\u01B0\u1EE3c ph\u00E9p \u0111\u0103ng k\u00FD Zalo ID v\u00E0/ho\u1EB7c s\u1EED d\u1EE5ng Sound Wave.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Kh\u00E1ch h\u00E0ng s\u1EED d\u1EE5ng t\u00E0i kho\u1EA3n Zalo ID \u0111\u1EC3 truy c\u1EADp Sound Wave. Kh\u00E1ch h\u00E0ng c\u0169ng c\u00F3 th\u1EC3 \u0111\u0103ng nh\u1EADp Sound Wave t\u1EEB t\u00E0i kho\u1EA3n li\u00EAn k\u1EBFt m\u00E0 Sound Wave cho ph\u00E9p.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "M\u1ED9t s\u1ED1 t\u00EDnh n\u0103ng c\u1EE7a Sound Wave y\u00EAu c\u1EA7u Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng ph\u1EA3i \u0111\u0103ng k\u00FD, \u0111\u0103ng nh\u1EADp \u0111\u1EC3 s\u1EED d\u1EE5ng. N\u1EBFu Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng kh\u00F4ng \u0111\u0103ng k\u00FD, \u0111\u0103ng nh\u1EADp th\u00EC ch\u1EC9 s\u1EED d\u1EE5ng Sound Wave v\u1EDBi c\u00E1c t\u00EDnh n\u0103ng th\u00F4ng th\u01B0\u1EDDng. Ch\u00FAng t\u00F4i khuy\u1EBFn kh\u00EDch Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng \u0111\u0103ng k\u00FD t\u00E0i kho\u1EA3n \u0111\u1EC3 s\u1EED d\u1EE5ng Sound Wave \u0111\u01B0\u1EE3c t\u1ED1t nh\u1EA5t.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Tr\u00EAn Website/\u1EE9ng d\u1EE5ng Sound Wave xu\u1EA5t hi\u1EC7n link website, ho\u1EB7c bi\u1EC3u t\u01B0\u1EE3ng website kh\u00E1c, b\u1EA1n kh\u00F4ng n\u00EAn suy lu\u1EADn r\u1EB1ng Sound Wave ho\u1EA1t \u0111\u1ED9ng, ki\u1EC3m so\u00E1t ho\u1EB7c s\u1EDF h\u1EEFu v\u1EDBi nh\u1EEFng website n\u00E0y. Vi\u1EC7c truy c\u1EADp t\u1EDBi c\u00E1c trang n\u00E0y kh\u00E1c ho\u00E0n to\u00E0n c\u00F3 th\u1EC3 g\u1EB7p r\u1EE7i ro, nguy hi\u1EC3m. Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng ho\u00E0n to\u00E0n ch\u1ECBu tr\u00E1ch nhi\u1EC7m r\u1EE7i ro khi s\u1EED d\u1EE5ng website li\u00EAn k\u1EBFt n\u00E0y. Sound Wave kh\u00F4ng ch\u1ECBu tr\u00E1ch nhi\u1EC7m v\u1EC1 n\u1ED9i dung c\u1EE7a b\u1EA5t k\u00EC website ho\u1EB7c \u0111i\u1EC3m \u0111\u1EBFn n\u00E0o ngo\u00E0i trang Sound Wave.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Sound Wave cho ph\u00E9p Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng cung c\u1EA5p, chia s\u1EBB video, clip thu\u1ED9c c\u00E1c th\u1EC3 lo\u1EA1i m\u00E0 Sound Wave \u0111\u1ECBnh h\u01B0\u1EDBng. Sound Wave s\u1EBD th\u1EA9m tra s\u01A1 b\u1ED9 v\u1EC1 k\u1EF9 thu\u1EADt v\u00E0 n\u1ED9i dung video, v\u00E0 nh\u01B0 v\u1EADy video, n\u1ED9i dung cung c\u1EA5p c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng c\u00F3 th\u1EC3 kh\u00F4ng \u0111\u01B0\u1EE3c \u0111\u0103ng t\u1EA3i l\u00EAn ngay l\u1EADp t\u1EE9c.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "B\u00E0i vi\u1EBFt \u0111\u00E1nh gi\u00E1 \u00FD ki\u1EBFn c\u1EE7a b\u1EA1n l\u00E0 m\u1ED9t ph\u1EA7n D\u1ECBch v\u1EE5 Sound Wave. Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng c\u00F3 th\u1EC3 xu\u1EA5t b\u1EA3n, truy\u1EC1n t\u1EA3i, g\u1EEDi \u0111i nh\u1EEFng \u0111\u00E1nh gi\u00E1, \u00FD ki\u1EBFn, ho\u1EB7c nh\u1EEFng t\u00E0i li\u1EC7u kh\u00E1c l\u00EAn Sound Wave. Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng ph\u1EA3i \u0111\u1EA3m b\u1EA3o b\u00E0i vi\u1EBFt, \u0111\u00E1nh gi\u00E1 c\u1EE7a m\u00ECnh ph\u00F9 h\u1EE3p v\u1EDBi gi\u1EDBi h\u1EA1n ng\u00F4n t\u1EEB v\u00E0 n\u1ED9i dung.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u0110i\u1EC1u 5. C\u00E1c n\u1ED9i dung c\u1EA5m trao \u0111\u1ED5i v\u00E0 chia s\u1EBB tr\u00EAn nghe nh\u1EA1c tr\u1EF1c tuy\u1EBFn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Khi s\u1EED d\u1EE5ng s\u1EA3n ph\u1EA9m Sound Wave, nghi\u00EAm c\u1EA5m kh\u00E1ch h\u00E0ng m\u1ED9t s\u1ED1 h\u00E0nh vi bao g\u1ED3m nh\u01B0ng kh\u00F4ng gi\u1EDBi h\u1EA1n sau:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "L\u1EE3i d\u1EE5ng vi\u1EC7c cung c\u1EA5p, trao \u0111\u1ED5i, s\u1EED d\u1EE5ng th\u00F4ng tin tr\u00EAn Sound Wave nh\u1EB1m m\u1EE5c \u0111\u00EDch:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Ch\u1ED1ng l\u1EA1i Nh\u00E0 n\u01B0\u1EDBc C\u1ED9ng ho\u00E0 x\u00E3 h\u1ED9i ch\u1EE7 ngh\u0129a Vi\u1EC7t Nam; g\u00E2y ph\u01B0\u01A1ng h\u1EA1i \u0111\u1EBFn an ninh qu\u1ED1c gia, tr\u1EADt t\u1EF1, an to\u00E0n x\u00E3 h\u1ED9i; ph\u00E1 ho\u1EA1i kh\u1ED1i \u0111\u1EA1i \u0111o\u00E0n k\u1EBFt to\u00E0n d\u00E2n; tuy\u00EAn truy\u1EC1n chi\u1EBFn tranh x\u00E2m l\u01B0\u1EE3c, kh\u1EE7ng b\u1ED1; g\u00E2y h\u1EADn th\u00F9, m\u00E2u thu\u1EABn gi\u1EEFa c\u00E1c d\u00E2n t\u1ED9c, s\u1EAFc t\u1ED9c, ch\u1EE7ng t\u1ED9c, t\u00F4n gi\u00E1o;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " b. Tuy\u00EAn truy\u1EC1n, k\u00EDch \u0111\u1ED9ng b\u1EA1o l\u1EF1c, d\u00E2m \u00F4, \u0111\u1ED3i tr\u1EE5y, t\u1ED9i \u00E1c, t\u1EC7 n\u1EA1n x\u00E3 h\u1ED9i, m\u00EA t\u00EDn d\u1ECB \u0111oan, ph\u00E1 ho\u1EA1i thu\u1EA7n phong, m\u1EF9 t\u1EE5c c\u1EE7a d\u00E2n t\u1ED9c.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " c. Tuy\u1EC7t \u0111\u1ED1i kh\u00F4ng b\u00E0n lu\u1EADn, \u0111\u0103ng t\u1EA3i c\u00E1c n\u1ED9i dung v\u1EC1 c\u00E1c v\u1EA5n \u0111\u1EC1 ch\u00EDnh tr\u1ECB.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng l\u1EE3i d\u1EE5ng vi\u1EC7c s\u1EED d\u1EE5ng Sound Wave nh\u1EB1m ti\u1EBFt l\u1ED9 b\u00ED m\u1EADt nh\u00E0 n\u01B0\u1EDBc, b\u00ED m\u1EADt qu\u00E2n s\u1EF1, an ninh, kinh t\u1EBF, \u0111\u1ED1i ngo\u1EA1i v\u00E0 nh\u1EEFng b\u00ED m\u1EADt kh\u00E1c do ph\u00E1p lu\u1EADt quy \u0111\u1ECBnh b\u1EB1ng b\u1EA5t c\u1EE9 h\u00ECnh th\u1EE9c n\u00E0o tr\u00EAn Sound Wave.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Qu\u1EA3ng c\u00E1o, tuy\u00EAn truy\u1EC1n, mua b\u00E1n h\u00E0ng ho\u00E1, d\u1ECBch v\u1EE5 b\u1ECB c\u1EA5m ho\u1EB7c truy\u1EC1n b\u00E1 t\u00E1c ph\u1EA9m b\u00E1o ch\u00ED, v\u0103n h\u1ECDc, ngh\u1EC7 thu\u1EADt, xu\u1EA5t b\u1EA3n ph\u1EA9m b\u1ECB c\u1EA5m tr\u00EAn Sound Wave.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Khi giao ti\u1EBFp v\u1EDBi ng\u01B0\u1EDDi d\u00F9ng kh\u00E1c, Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng qu\u1EA5y r\u1ED1i, ch\u1EEDi b\u1EDBi, l\u00E0m phi\u1EC1n hay c\u00F3 b\u1EA5t k\u1EF3 h\u00E0nh vi thi\u1EBFu v\u0103n ho\u00E1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng c\u00F3 quy\u1EC1n s\u1EED d\u1EE5ng \u0111\u1ED1i v\u1EDBi h\u00ECnh \u1EA3nh c\u1EE7a m\u00ECnh. Khi s\u1EED d\u1EE5ng h\u00ECnh \u1EA3nh c\u1EE7a c\u00E1 nh\u00E2n kh\u00E1c, Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng ph\u1EA3i \u0111\u01B0\u1EE3c s\u1EF1 \u0111\u1ED3ng \u00FD c\u1EE7a c\u00E1 nh\u00E2n \u0111\u00F3. Nghi\u00EAm c\u1EA5m vi\u1EC7c s\u1EED d\u1EE5ng h\u00ECnh \u1EA3nh c\u1EE7a ng\u01B0\u1EDDi kh\u00E1c m\u00E0 x\u00E2m ph\u1EA1m danh d\u1EF1, nh\u00E2n ph\u1EA9m, uy t\u00EDn c\u1EE7a ng\u01B0\u1EDDi c\u00F3 h\u00ECnh \u1EA3nh.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "L\u1EE3i d\u1EE5ng nghe nh\u1EA1c tr\u1EF1c tuy\u1EBFn Sound Wave \u0111\u1EC3 thu th\u1EADp th\u00F4ng tin c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng, c\u00F4ng b\u1ED1 th\u00F4ng tin, t\u01B0 li\u1EC7u v\u1EC1 \u0111\u1EDDi t\u01B0 c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng kh\u00E1c.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\u0110\u1EB7t t\u00E0i kho\u1EA3n theo t\u00EAn c\u1EE7a danh nh\u00E2n, t\u00EAn c\u00E1c v\u1ECB l\u00E3nh \u0111\u1EA1o c\u1EE7a \u0110\u1EA3ng v\u00E0 Nh\u00E0 n\u01B0\u1EDBc, t\u00EAn c\u1EE7a c\u00E1 nh\u00E2n, t\u1ED5 ch\u1EE9c t\u1ED9i ph\u1EA1m, ph\u1EA3n \u0111\u1ED9ng, kh\u1EE7ng b\u1ED1 ho\u1EB7c t\u00E0i kho\u1EA3n c\u00F3 \u00FD ngh\u0129a kh\u00F4ng l\u00E0nh m\u1EA1nh, tr\u00E1i v\u1EDBi thu\u1EA7n phong m\u1EF9 t\u1EE5c.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\u0110\u01B0a th\u00F4ng tin xuy\u00EAn t\u1EA1c, vu kh\u1ED1ng, nh\u1EA1o b\u00E1ng, x\u00FAc ph\u1EA1m uy t\u00EDn t\u1EDBi t\u1ED5 ch\u1EE9c, c\u00E1 nh\u00E2n d\u01B0\u1EDBi b\u1EA5t k\u1EF3 h\u00ECnh th\u1EE9c n\u00E0o (nh\u1EA1o b\u00E1ng, ch\u00EA bai, k\u1EF3 th\u1ECB t\u00F4n gi\u00E1o, gi\u1EDBi t\u00EDnh, s\u1EAFc t\u1ED9c\u2026.).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "H\u00E0nh vi, th\u00E1i \u0111\u1ED9 l\u00E0m t\u1ED5n h\u1EA1i \u0111\u1EBFn uy t\u00EDn Sound Wave ho\u1EB7c AVENGERS d\u01B0\u1EDBi b\u1EA5t k\u1EF3 h\u00ECnh th\u1EE9c ho\u1EB7c ph\u01B0\u01A1ng th\u1EE9c n\u00E0o.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Nghi\u00EAm c\u1EA5m qu\u1EA3ng b\u00E1 b\u1EA5t k\u1EF3 s\u1EA3n ph\u1EA9m d\u01B0\u1EDBi b\u1EA5t k\u1EF3 h\u00ECnh th\u1EE9c n\u00E0o, bao g\u1ED3m nh\u01B0ng kh\u00F4ng gi\u1EDBi h\u1EA1n vi\u1EC7c g\u1EEDi, truy\u1EC1n b\u1EA5t k\u1EF3 th\u00F4ng \u0111i\u1EC7p n\u00E0o mang t\u00EDnh qu\u1EA3ng c\u00E1o, m\u1EDDi g\u1ECDi, th\u01B0 d\u00E2y truy\u1EC1n, c\u01A1 h\u1ED9i \u0111\u1EA7u t\u01B0 tr\u00EAn Sound Wave m\u00E0 kh\u00F4ng c\u00F3 s\u1EF1 \u0111\u1ED3ng \u00FD b\u1EB1ng v\u0103n b\u1EA3n c\u1EE7a AVENGERS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "L\u1EE3i d\u1EE5ng Sound Wave \u0111\u1EC3 t\u1ED5 ch\u1EE9c c\u00E1c h\u00ECnh th\u1EE9c c\u00E1 c\u01B0\u1EE3c, c\u1EDD b\u1EA1c ho\u1EB7c c\u00E1c th\u1ECFa thu\u1EADn li\u00EAn quan \u0111\u1EBFn ti\u1EC1n, hi\u1EC7n kim, hi\u1EC7n v\u1EADt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "C\u1EA3n tr\u1EDF tr\u00E1i ph\u00E1p lu\u1EADt, g\u00E2y r\u1ED1i, ph\u00E1 ho\u1EA1i h\u1EC7 th\u1ED1ng m\u00E1y ch\u1EE7; C\u1EA3n tr\u1EDF vi\u1EC7c truy c\u1EADp th\u00F4ng tin v\u00E0 s\u1EED d\u1EE5ng c\u00E1c d\u1ECBch v\u1EE5 h\u1EE3p ph\u00E1p tr\u00EAn Sound Wave.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "S\u1EED d\u1EE5ng tr\u00E1i ph\u00E9p m\u1EADt kh\u1EA9u, kho\u00E1 m\u1EADt m\u00E3 c\u1EE7a c\u00E1c t\u1ED5 ch\u1EE9c, c\u00E1 nh\u00E2n, th\u00F4ng tin ri\u00EAng, th\u00F4ng tin c\u00E1 nh\u00E2n v\u00E0 t\u00E0i nguy\u00EAn Internet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Tr\u1EF1c ti\u1EBFp ho\u1EB7c gi\u00E1n ti\u1EBFp s\u1EED d\u1EE5ng b\u1EA5t k\u1EF3 thi\u1EBFt b\u1ECB, ph\u1EA7n m\u1EC1m, trang web internet, d\u1ECBch v\u1EE5 d\u1EF1a tr\u00EAn web, ho\u1EB7c c\u00E1c ph\u01B0\u01A1ng ti\u1EC7n kh\u00E1c \u0111\u1EC3 g\u1EE1 b\u1ECF, thay \u0111\u1ED5i, b\u1ECF qua, l\u1EA9n tr\u00E1nh, c\u1EA3n tr\u1EDF, ho\u1EB7c ph\u00E1 ho\u1EA1i b\u1EA5t k\u1EF3 b\u1EA3n quy\u1EC1n, th\u01B0\u01A1ng hi\u1EC7u, ho\u1EB7c c\u00E1c d\u1EA5u hi\u1EC7u v\u1EC1 quy\u1EC1n s\u1EDF h\u1EEFu kh\u00E1c \u0111\u01B0\u1EE3c \u0111\u00E1nh d\u1EA5u tr\u00EAn N\u1ED9i dung (nh\u01B0 logo) ho\u1EB7c b\u1EA5t k\u1EF3 h\u1EC7 th\u1ED1ng ki\u1EC3m so\u00E1t d\u1EEF li\u1EC7u, thi\u1EBFt b\u1ECB, bi\u1EC7n ph\u00E1p b\u1EA3o v\u1EC7 n\u1ED9i dung kh\u00E1c c\u0169ng nh\u01B0 c\u00E1c bi\u1EC7n ph\u00E1p h\u1EA1n ch\u1EBF truy c\u1EADp t\u1EEB c\u00E1c v\u00F9ng \u0111\u1ECBa l\u00FD kh\u00E1c nhau.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Tr\u1EF1c ti\u1EBFp ho\u1EB7c gi\u00E1n ti\u1EBFp th\u00F4ng qua b\u1EA5t k\u1EF3 thi\u1EBFt b\u1ECB, ph\u1EA7n m\u1EC1m, trang web internet, d\u1ECBch v\u1EE5 d\u1EF1a tr\u00EAn web, ho\u1EB7c c\u00E1c ph\u01B0\u01A1ng ti\u1EC7n kh\u00E1c \u0111\u1EC3 sao ch\u00E9p, t\u1EA3i v\u1EC1, ch\u1EE5p l\u1EA1i, s\u1EA3n xu\u1EA5t l\u1EA1i, nh\u00E2n b\u1EA3n, l\u01B0u tr\u1EEF, ph\u00E2n ph\u1ED1i, t\u1EA3i l\u00EAn, xu\u1EA5t b\u1EA3n, s\u1EEDa \u0111\u1ED5i, d\u1ECBch thu\u1EADt, ph\u00E1t s\u00F3ng, tr\u00ECnh chi\u1EBFu, hi\u1EC3n th\u1ECB, b\u00E1n, truy\u1EC1n t\u1EA3i ho\u1EB7c truy\u1EC1n l\u1EA1i n\u1ED9i dung tr\u1EEB khi \u0111\u01B0\u1EE3c s\u1EF1 cho ph\u00E9p c\u1EE7a Sound Wave b\u1EB1ng v\u0103n b\u1EA3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "T\u1EA1o ra, t\u00E1i t\u1EA1o, ph\u00E2n ph\u1ED1i hay qu\u1EA3ng c\u00E1o m\u1ED9t chi ti\u1EBFt c\u1EE7a b\u1EA5t k\u1EF3 n\u1ED9i dung tr\u1EEB khi \u0111\u01B0\u1EE3c ph\u00E9p c\u1EE7a Sound Wave. B\u1EA1n kh\u00F4ng \u0111\u01B0\u1EE3c ph\u00E9p x\u00E2y d\u1EF1ng m\u00F4 h\u00ECnh kinh doanh s\u1EED d\u1EE5ng c\u00E1c N\u1ED9i dung cho d\u00F9 l\u00E0 c\u00F3 ho\u1EB7c kh\u00F4ng v\u00EC l\u1EE3i nhu\u1EADn. N\u1ED9i dung \u0111\u01B0\u1EE3c \u0111\u1EC1 c\u1EADp t\u1EA1i Sound Wave bao g\u1ED3m nh\u01B0ng kh\u00F4ng gi\u1EDBi h\u1EA1n b\u1EA5t k\u1EF3 v\u0103n b\u1EA3n, \u0111\u1ED3 h\u1ECDa, h\u00ECnh \u1EA3nh, b\u1ED1 tr\u00ED, giao di\u1EC7n, bi\u1EC3u t\u01B0\u1EE3ng, h\u00ECnh \u1EA3nh, t\u00E0i li\u1EC7u \u00E2m thanh v\u00E0 video, v\u00E0 \u1EA3nh t\u0129nh. Ngo\u00E0i ra, ch\u00FAng t\u00F4i nghi\u00EAm c\u1EA5m vi\u1EC7c t\u1EA1o ra c\u00E1c s\u1EA3n ph\u1EA9m ph\u00E1t sinh ho\u1EB7c v\u1EADt li\u1EC7u c\u00F3 ngu\u1ED3n g\u1ED1c t\u1EEB ho\u1EB7c d\u1EF1a tr\u00EAn b\u1EA5t k\u00EC n\u1ED9i dung n\u00E0o bao g\u1ED3m d\u1EF1ng phim, l\u00E0m video t\u01B0\u01A1ng t\u1EF1, h\u00ECnh n\u1EC1n, ch\u1EE7 \u0111\u1EC1 m\u00E1y t\u00EDnh, thi\u1EC7p ch\u00FAc m\u1EEBng, v\u00E0 h\u00E0ng h\u00F3a, tr\u1EEB khi n\u00F3 \u0111\u01B0\u1EE3c s\u1EF1 cho ph\u00E9p c\u1EE7a Sound Wave b\u1EB1ng v\u0103n b\u1EA3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Gi\u1EA3 m\u1EA1o t\u1ED5 ch\u1EE9c, c\u00E1 nh\u00E2n v\u00E0 ph\u00E1t t\u00E1n th\u00F4ng tin gi\u1EA3 m\u1EA1o, th\u00F4ng tin sai s\u1EF1 th\u1EADt tr\u00EAn Sound Wave x\u00E2m h\u1EA1i \u0111\u1EBFn quy\u1EC1n v\u00E0 l\u1EE3i \u00EDch h\u1EE3p ph\u00E1p c\u1EE7a t\u1ED5 ch\u1EE9c, c\u00E1 nh\u00E2n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "T\u1EA1o \u0111\u01B0\u1EDDng d\u1EABn tr\u00E1i t\u1EDBi t\u00EAn mi\u1EC1n h\u1EE3p ph\u00E1p c\u1EE7a t\u1ED5 ch\u1EE9c, c\u00E1 nh\u00E2n. T\u1EA1o, c\u00E0i \u0111\u1EB7t, ph\u00E1t t\u00E1n c\u00E1c ph\u1EA7n m\u1EC1m \u0111\u1ED9c h\u1EA1i, vi r\u00FAt m\u00E1y t\u00EDnh; x\u00E2m nh\u1EADp tr\u00E1i ph\u00E9p, chi\u1EBFm quy\u1EC1n \u0111i\u1EC1u khi\u1EC3n h\u1EC7 th\u1ED1ng th\u00F4ng tin, t\u1EA1o l\u1EADp c\u00F4ng c\u1EE5 t\u1EA5n c\u00F4ng tr\u00EAn Internet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Tuy\u1EC7t \u0111\u1ED1i kh\u00F4ng s\u1EED d\u1EE5ng b\u1EA5t k\u1EF3 ch\u01B0\u01A1ng tr\u00ECnh, c\u00F4ng c\u1EE5 hay h\u00ECnh th\u1EE9c n\u00E0o kh\u00E1c \u0111\u1EC3 can thi\u1EC7p v\u00E0o Sound Wave");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Nghi\u00EAm c\u1EA5m vi\u1EC7c ph\u00E1t t\u00E1n, truy\u1EC1n b\u00E1 hay c\u1ED5 v\u0169 cho b\u1EA5t k\u1EF3 ho\u1EA1t \u0111\u1ED9ng n\u00E0o nh\u1EB1m can thi\u1EC7p, ph\u00E1 ho\u1EA1i hay x\u00E2m nh\u1EADp v\u00E0o d\u1EEF li\u1EC7u c\u1EE7a s\u1EA3n ph\u1EA9m cung c\u1EA5p ho\u1EB7c h\u1EC7 th\u1ED1ng m\u00E1y ch\u1EE7 Sound Wave.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Kh\u00F4ng \u0111\u01B0\u1EE3c c\u00F3 b\u1EA5t k\u1EF3 h\u00E0nh vi n\u00E0o nh\u1EB1m \u0111\u0103ng nh\u1EADp tr\u00E1i ph\u00E9p ho\u1EB7c t\u00ECm c\u00E1ch \u0111\u0103ng nh\u1EADp tr\u00E1i ph\u00E9p ho\u1EB7c g\u00E2y thi\u1EC7t h\u1EA1i cho h\u1EC7 th\u1ED1ng m\u00E1y ch\u1EE7 Sound Wave");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Nghi\u00EAm c\u1EA5m m\u1ECDi h\u00E0nh vi x\u00E2m ph\u1EA1m kh\u00E1c d\u01B0\u1EDBi m\u1ECDi h\u00ECnh th\u1EE9c t\u1EDBi s\u1EA3n ph\u1EA9m, t\u00E0i s\u1EA3n v\u00E0 uy t\u00EDn c\u1EE7a AVENGERS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "\u0110i\u1EC1u 6. N\u1ED9i dung cung c\u1EA5p trao \u0111\u1ED5i th\u00F4ng tin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Khi \u0111\u0103ng k\u00ED s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5 Sound Wave, Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng c\u00F3 th\u1EC3 upload n\u1ED9i dung l\u00EAn Sound Wave. N\u1ED9i d\u1EE5ng upload l\u00EAn Sound Wave ph\u1EA3i ph\u00F9 h\u1EE3p v\u1EDBi th\u1EC3 lo\u1EA1i, ti\u00EAu chu\u1EA9n m\u00E0 Sound Wave cho ph\u00E9p.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng ph\u1EA3i ch\u1ECBu tr\u00E1ch nhi\u1EC7m v\u1EC1 n\u1ED9i dung c\u1EE7a vi\u1EC7c \u0111\u0103ng t\u1EA3i tr\u00EAn D\u1ECBch v\u1EE5 Sound Wave. Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng kh\u1EB3ng \u0111\u1ECBnh v\u00E0 \u0111\u1EA3m b\u1EA3o r\u1EB1ng m\u00ECnh s\u1EDF h\u1EEFu ho\u1EB7c/v\u00E0 \u0111\u01B0\u1EE3c s\u1EF1 \u0111\u1ED3ng \u00FD c\u1EE7a ch\u1EE7 s\u1EDF h\u1EEFu v\u1EC1 n\u1ED9i dung m\u00E0 m\u00ECnh \u0111\u0103ng t\u1EA3i \u0111\u1ED3ng th\u1EDDi Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng c\u1EA5p ph\u00E9p cho Sound Wave t\u1EA5t c\u1EA3 b\u1EB1ng s\u00E1ng ch\u1EBF, nh\u00E3n hi\u1EC7u, th\u01B0\u01A1ng m\u1EA1i, b\u00ED m\u1EADt th\u01B0\u01A1ng m\u1EA1i, ho\u1EB7c quy\u1EC1n kh\u00E1c li\u00EAn quan \u0111\u1EBFn n\u1ED9i dung \u0111\u1EC3 ph\u1ED5 bi\u1EBFn n\u1ED9i dung tr\u00EAn d\u1ECBch v\u1EE5 Sound Wave theo c\u00E1c \u0110i\u1EC1u kho\u1EA3n D\u1ECBch v\u1EE5.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Ngo\u00E0i nh\u1EEFng n\u1ED9i dung Sound Wave ch\u1EE7 \u0111\u1ED9ng \u0111\u0103ng t\u1EA3i, Sound Wave kh\u00F4ng ch\u1EE9ng th\u1EF1c b\u1EA5t k\u1EF3 n\u1ED9i dung n\u00E0o \u0111\u01B0\u1EE3c \u0111\u0103ng t\u1EA3i, s\u1EED d\u1EE5ng b\u1EDFi b\u1EA5t k\u1EF3 Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng n\u00E0o. Sound Wave kh\u00F4ng cho ph\u00E9p c\u00E1c ho\u1EA1t \u0111\u1ED9ng vi ph\u1EA1m b\u1EA3n quy\u1EC1n v\u00E0 x\u00E2m ph\u1EA1m quy\u1EC1n s\u1EDF h\u1EEFu tr\u00ED tu\u1EC7 tr\u00EAn D\u1ECBch v\u1EE5. Sound Wave s\u1EBD ch\u1EE7 \u0111\u1ED9ng lo\u1EA1i b\u1ECF t\u1EA5t c\u1EA3 c\u00E1c n\u1ED9i dung Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng \u0111\u0103ng t\u1EA3i m\u00E0 kh\u00F4ng c\u1EA7n b\u00E1o tr\u01B0\u1EDBc n\u1EBFu Sound Wave nh\u1EADn \u0111\u1ECBnh ho\u1EB7c nh\u1EADn \u0111\u01B0\u1EE3c th\u00F4ng b\u00E1o r\u1EB1ng Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng \u0111\u00E3 \u0111\u0103ng t\u1EA3i nh\u1EEFng n\u1ED9i dung vi ph\u1EA1m quy\u1EC1n s\u1EDF h\u1EEFu tr\u00ED tu\u1EC7.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "\u0110\u00E2y l\u00E0 website nghe nh\u1EA1c tr\u1EF1c tuy\u1EBFn Sound Wave thu\u1ED9c quy\u1EC1n s\u1EDF h\u1EEFu c\u1EE7a AVENGERS, AVENGERS cho ph\u00E9p Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng \u0111\u0103ng t\u1EA3i, cung c\u1EA5p, trao \u0111\u1ED5i c\u00E1c th\u00F4ng tin, h\u00ECnh \u1EA3nh ho\u1EB7c c\u00E1c n\u1ED9i dung kh\u00E1c l\u00EAn tr\u00EAn website tr\u1EEB nh\u1EEFng n\u1ED9i dung c\u1EA5m \u0111\u01B0\u1EE3c quy \u0111\u1ECBnh trong b\u1EA3n Quy ch\u1EBF n\u00E0y v\u00E0 c\u00E1c v\u0103n b\u1EA3n ph\u00E1p lu\u1EADt li\u00EAn quan.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng \u0111\u01B0\u1EE3c \u0111\u0103ng t\u1EA3i b\u00E0i h\u00E1t, MV, clip ng\u1EAFn v\u00E0/ho\u1EB7c nh\u1EEFng n\u1ED9i dung kh\u00E1c ph\u00F9 h\u1EE3p v\u1EDBi ti\u00EAu ch\u00ED c\u1EE7a Sound Wave. B\u1EA1n \u0111\u1ED3ng \u00FD r\u1EB1ng b\u1EA1n s\u1EBD kh\u00F4ng \u0111\u0103ng t\u1EA3i l\u00EAn Sound Wave c\u00E1c n\u1ED9i dung \u0111\u00E3 c\u00F3 b\u1EA3n quy\u1EC1n, c\u00E1c b\u00ED m\u1EADt th\u01B0\u01A1ng m\u1EA1i ho\u1EB7c c\u00E1c n\u1ED9i dung kh\u00E1c li\u00EAn quan t\u1EDBi c\u00E1c quy\u1EC1n s\u1EDF h\u1EEFu tr\u00ED tu\u1EC7 c\u1EE7a b\u00EAn th\u1EE9 ba, tr\u1EEB tr\u01B0\u1EDDng h\u1EE3p b\u1EA1n l\u00E0 ch\u1EE7 s\u1EDF h\u1EEFu h\u1EE3p ph\u00E1p c\u1EE7a c\u00E1c n\u1ED9i dung n\u00E0y ho\u1EB7c c\u00F3 s\u1EF1 ch\u1EA5p thu\u1EADn t\u1EEB ch\u1EE7 s\u1EDF h\u1EEFu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "B\u1EA1n \u0111\u1ED3ng \u00FD \u0111\u1EC3 ch\u00FAng t\u00F4i t\u1EF1 do kinh doanh, s\u1EED d\u1EE5ng, ph\u00E1t t\u00E1n, tr\u00ECnh chi\u1EBFu, ch\u1EC9nh s\u1EEDa, bi\u00EAn so\u1EA1n b\u1EA5t k\u1EF3 \u00FD t\u01B0\u1EDFng, kh\u00E1i ni\u1EC7m, c\u00E1ch th\u1EE9c, \u0111\u1EC1 xu\u1EA5t, g\u1EE3i \u00FD, b\u00ECnh lu\u1EADn ho\u1EB7c h\u00ECnh th\u1EE9c kh\u00E1c c\u1EE7a b\u1EA1n m\u00E0 b\u1EA1n cung c\u1EA5p, trao \u0111\u1ED5i, chia s\u1EBB th\u00F4ng qua vi\u1EC7c s\u1EED d\u1EE5ng Sound Wave m\u1ED9t c\u00E1ch ho\u00E0n to\u00E0n mi\u1EC5n ph\u00ED. B\u1EA1n \u0111\u1ED3ng \u00FD t\u1EEB b\u1ECF b\u1EA5t k\u1EF3 quy\u1EC1n v\u00E0 y\u00EAu c\u1EA7u v\u1EDBi b\u1EA5t k\u1EF3 kho\u1EA3n ti\u1EC1n th\u01B0\u1EDFng, ph\u00ED, nhu\u1EADn b\u00FAt, l\u1EC7 ph\u00ED ho\u1EB7c c\u00E1c chi tr\u1EA3 kh\u00E1c li\u00EAn quan \u0111\u1EBFn vi\u1EC7c ch\u00FAng t\u00F4i kinh doanh, s\u1EED d\u1EE5ng, ph\u00E1t t\u00E1n, tr\u00ECnh chi\u1EBFu, ch\u1EC9nh s\u1EEDa, bi\u00EAn so\u1EA1n b\u1EA5t k\u1EF3 ho\u1EB7c t\u1EA5t c\u1EA3 nh\u1EEFng th\u00F4ng tin, h\u00ECnh \u1EA3nh m\u00E0 b\u1EA1n cung c\u1EA5p, chia s\u1EBB, trao \u0111\u1ED5i c\u1EE7a b\u1EA1n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "B\u1EA1n c\u0169ng cho ph\u00E9p Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng s\u1EA3n ph\u1EA9m c\u1EE7a AVENGERS \u0111\u01B0\u1EE3c quy\u1EC1n s\u1EED d\u1EE5ng l\u1EA1i th\u00F4ng tin \u0111\u0103ng t\u1EA3i c\u1EE7a b\u1EA1n bao g\u1ED3m nh\u01B0ng kh\u00F4ng gi\u1EDBi h\u1EA1n vi\u1EC7c ch\u1EC9nh s\u1EEDa l\u1EA1i, bi\u00EAn so\u1EA1n, ph\u00E2n t\u00E1n, tr\u00ECnh chi\u1EBFu n\u1ED9i dung \u0111\u0103ng t\u1EA3i \u0111\u00F3 v\u00EC m\u1EE5c \u0111\u00EDch c\u00E1 nh\u00E2n ho\u1EB7c phi th\u01B0\u01A1ng m\u1EA1i.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "T\u1EA5t c\u1EA3 quy\u1EC1n s\u1EDF h\u1EEFu tr\u00ED tu\u1EC7 t\u1ED3n t\u1EA1i trong Sound Wave (ngo\u1EA1i tr\u1EEB quy\u1EC1n s\u1EDF h\u1EEFu tr\u00ED tu\u1EC7 \u0111\u1ED1i v\u1EDBi c\u00E1c n\u1ED9i dung do Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng upload) \u0111\u1EC1u thu\u1ED9c v\u1EC1 AVENGERS ho\u1EB7c \u0111\u01B0\u1EE3c c\u1EA5p ph\u00E9p h\u1EE3p ph\u00E1p cho AVENGERS s\u1EED d\u1EE5ng, theo \u0111\u00F3, t\u1EA5t c\u1EA3 c\u00E1c quy\u1EC1n h\u1EE3p ph\u00E1p \u0111\u1EC1u \u0111\u01B0\u1EE3c \u0111\u1EA3m b\u1EA3o. Tr\u1EEB khi \u0111\u01B0\u1EE3c s\u1EF1 \u0111\u1ED3ng \u00FD b\u1EB1ng v\u0103n b\u1EA3n c\u1EE7a AVENGERS, b\u1EA1n kh\u00F4ng \u0111\u01B0\u1EE3c ph\u00E9p xu\u1EA5t b\u1EA3n, t\u00E1i s\u1EA3n xu\u1EA5t, truy\u1EC1n ho\u1EB7c x\u00E2m ph\u1EA1m b\u1EB1ng c\u00E1c h\u00ECnh th\u1EE9c kh\u00E1c t\u1EDBi quy\u1EC1n s\u1EDF h\u1EEFu tr\u00ED tu\u1EC7 s\u1EA3n ph\u1EA9m c\u1EE7a AVENGERS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Trong m\u1ECDi tr\u01B0\u1EDDng h\u1EE3p, Sound Wave \u0111\u01B0\u1EE3c quy\u1EC1n x\u1EED l\u00FD c\u00E1c th\u00F4ng tin \u0111\u0103ng t\u1EA3i cho ph\u00F9 h\u1EE3p v\u1EDBi thu\u1EA7n phong m\u1EF9 t\u1EE5c, c\u00E1c quy t\u1EAFc \u0111\u1EA1o \u0111\u1EE9c v\u00E0 c\u00E1c quy t\u1EAFc \u0111\u1EA3m b\u1EA3o an ninh qu\u1ED1c gia, v\u00E0 ch\u00FAng t\u00F4i c\u00F3 to\u00E0n quy\u1EC1n cho ph\u00E9p ho\u1EB7c kh\u00F4ng cho ph\u00E9p b\u00E0i vi\u1EBFt, th\u00F4ng tin, h\u00ECnh \u1EA3nh c\u1EE7a b\u1EA1n xu\u1EA5t hi\u1EC7n hay t\u1ED3n t\u1EA1i tr\u00EAn website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "B\u1EA1n hi\u1EC3u v\u00E0 \u0111\u1ED3ng \u00FD r\u1EB1ng, khi s\u1EED d\u1EE5ng website nghe nh\u1EA1c tr\u1EF1c tuy\u1EBFn n\u00E0y, b\u1EA1n s\u1EBD ti\u1EBFp nh\u1EADn nhi\u1EC1u n\u1ED9i dung th\u00F4ng tin, h\u00ECnh \u1EA3nh \u0111\u01B0\u1EE3c \u0111\u0103ng t\u1EA3i t\u1EEB nhi\u1EC1u ngu\u1ED3n kh\u00E1c nhau. Ngo\u00E0i nh\u1EEFng n\u1ED9i dung Sound Wave ch\u1EE7 \u0111\u1ED9ng \u0111\u0103ng t\u1EA3i, AVENGERS kh\u00F4ng ch\u1ECBu tr\u00E1ch nhi\u1EC7m v\u1EC1 m\u1EE9c \u0111\u1ED9 ch\u00EDnh x\u00E1c, t\u00EDnh h\u1EEFu \u00EDch, \u0111\u1ED9 an to\u00E0n, ho\u1EB7c c\u00E1c quy\u1EC1n s\u1EDF h\u1EEFu tr\u00ED tu\u1EC7 li\u00EAn quan t\u1EDBi nh\u1EEFng th\u00F4ng tin m\u00E0 Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng website \u0111\u0103ng t\u1EA3i. Khi s\u1EED d\u1EE5ng s\u1EA3n ph\u1EA9m c\u00F3 th\u1EC3 b\u1EA1n th\u1EA5y m\u1ED9t v\u00E0i th\u00F4ng tin, b\u00ECnh lu\u1EADn do Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng \u0111\u0103ng t\u1EA3i kh\u00F4ng \u0111\u00FAng s\u1EF1 th\u1EADt, ho\u1EB7c g\u00E2y ph\u1EA3n c\u1EA3m, trong tr\u01B0\u1EDDng h\u1EE3p n\u00E0y, b\u1EA1n c\u00F3 th\u1EC3 th\u00F4i kh\u00F4ng s\u1EED d\u1EE5ng s\u1EA3n ph\u1EA9m v\u00E0 cam k\u1EBFt kh\u00F4ng c\u00F3 nh\u1EEFng h\u00E0nh \u0111\u1ED9ng x\u00E2m ph\u1EA1m t\u1EDBi AVENGERS v\u00E0 Sound Wave.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Ngo\u00E0i c\u00E1c s\u1EA3n ph\u1EA9m c\u1EE7a AVENGERS, Sound Wave c\u00F3 th\u1EC3 cho ph\u00E9p ho\u1EB7c li\u00EAn k\u1EBFt v\u1EDBi \u0111\u1ED1i t\u00E1c th\u1EE9 ba \u0111\u1EC3 cung c\u1EA5p c\u00E1c s\u1EA3n ph\u1EA9m, d\u1ECBch v\u1EE5 c\u1EE7a h\u1ECD tr\u00EAn Sound Wave, do \u0111\u00F3, khi t\u1EA3i, c\u00E0i \u0111\u1EB7t ho\u1EB7c s\u1EED d\u1EE5ng m\u1ED9t s\u1EA3n ph\u1EA9m nh\u01B0 v\u1EADy, Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng th\u1EEBa nh\u1EADn r\u1EB1ng (i) Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng \u0111\u00E3 t\u00ECm hi\u1EC3u v\u00E0 ch\u1EA5p thu\u1EADn c\u00E1c \u0111i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5 c\u1EE7a b\u00EAn th\u1EE9 ba (ii) m\u1ECDi tr\u00E1ch nhi\u1EC7m ph\u00E1t sinh li\u00EAn quan \u0111\u1EBFn d\u1ECBch v\u1EE5 l\u00E0 c\u1EE7a b\u00EAn th\u1EE9 ba, AVENGERS s\u1EBD h\u1ED7 tr\u1EE3 Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng nh\u01B0ng kh\u00F4ng ch\u1ECBu tr\u00E1ch nhi\u1EC7m v\u1EC1 c\u00E1c d\u1ECBch v\u1EE5 n\u00E0y.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "\u0110\u1EC3 \u0111\u00E1p \u1EE9ng nhu c\u1EA7u v\u00E0 tr\u1EA3i nghi\u1EC7m c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng, AVENGERS theo k\u1EBF ho\u1EA1ch v\u00E0 quy\u1EBFt \u0111\u1ECBnh c\u1EE7a m\u00ECnh s\u1EBD ti\u1EBFn h\u00E0nh n\u00E2ng c\u1EA5p, c\u1EADp nh\u1EADt th\u01B0\u1EDDng xuy\u00EAn c\u00E1c phi\u00EAn b\u1EA3n, t\u00EDnh n\u0103ng m\u1EDBi Sound Wave m\u00E0 kh\u00F4ng ph\u1EA3i b\u00E1o tr\u01B0\u1EDBc v\u1EDBi Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng. Th\u00F4ng tin chi ti\u1EBFt v\u1EC1 phi\u00EAn b\u1EA3n c\u1EADp nh\u1EADt s\u1EBD \u0111\u01B0\u1EE3c AVENGERS c\u00F4ng b\u1ED1 t\u1EA1i website: soundwave.vn.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng hi\u1EC3u r\u1EB1ng khi mu\u1ED1n t\u00ECm c\u00E1ch x\u00F3a n\u1ED9i dung c\u1EE7a m\u00ECnh t\u1EEB Sound Wave, vi\u1EC7c n\u00E0y ph\u1EA3i m\u1EA5t m\u1ED9t kho\u1EA3ng th\u1EDDi gian nh\u1EA5t \u0111\u1ECBnh. V\u00EC v\u1EA5n \u0111\u1EC1 k\u1EF9 thu\u1EADt v\u00E0 quy tr\u00ECnh n\u00EAn c\u00F3 th\u1EC3 kh\u00F4ng theo \u00FD mu\u1ED1n c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng. Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng ch\u1EA5p nh\u1EADn nh\u1EEFng r\u1EE7i ro ph\u00E1t sinh v\u00E0 Sound Wave \u0111\u01B0\u1EE3c lo\u1EA1i tr\u1EEB tr\u00E1ch nhi\u1EC7m n\u00E0y. Ch\u00FAng t\u00F4i khuy\u00EAn b\u1EA1n n\u00EAn l\u01B0u gi\u1EEF m\u1ED9t b\u1EA3n tr\u01B0\u1EDBc khi \u0111\u0103ng t\u1EA3i l\u00EAn Sound Wave.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng \u0111\u1ED3ng \u00FD c\u1EA5p quy\u1EC1n cho AVENGERS s\u1EED d\u1EE5ng n\u1ED9i dung trao \u0111\u1ED5i th\u00F4ng tin c\u1EE7a b\u1EA1n cho m\u1EE5c \u0111\u00EDch qu\u1EA3ng b\u00E1, ph\u00E1t tri\u1EC3n d\u1ECBch v\u1EE5, bao g\u1ED3m nh\u01B0ng kh\u00F4ng gi\u1EDBi h\u1EA1n c\u00E1c d\u1ECBch v\u1EE5 m\u1EDBi m\u00E0 ch\u00FAng t\u00F4i c\u00F3 th\u1EC3 cung c\u1EA5p trong t\u01B0\u01A1ng lai.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng \u0111\u1ED3ng \u00FD r\u1EB1ng AVENGERS c\u00F3 th\u1EC3 gi\u1EEF l\u1EA1i ho\u1EB7c ti\u1EBFt l\u1ED9 n\u1ED9i dung c\u1EE7a b\u1EA1n, bao g\u1ED3m c\u1EA3 Th\u00F4ng Tin C\u00E1 Nh\u00E2n cho c\u01A1 quan c\u00F3 th\u1EA9m quy\u1EC1n theo quy \u0111\u1ECBnh ph\u00E1p, ho\u1EB7c theo qu\u00E1 tr\u00ECnh h\u1EE3p ph\u00E1p kh\u00E1c. Trong qu\u00E1 tr\u00ECnh ho\u1EA1t \u0111\u1ED9ng, cho c\u00E1c m\u1EE5c \u0111\u00EDch duy tr\u00EC d\u1ECBch v\u1EE5 v\u00E0 \u0111\u1EA3m b\u1EA3o l\u1EE3i \u00EDch ng\u01B0\u1EDDi d\u00F9ng AVENGERS c\u00F3 th\u1EC3 s\u1EBD chuy\u1EC3n giao c\u00E1c th\u00F4ng tin c\u1EE7a b\u1EA1n cho b\u00EAn th\u1EE9 ba ph\u00F9 h\u1EE3p v\u1EDBi c\u00E1c quy \u0111\u1ECBnh c\u1EE7a ph\u00E1p lu\u1EADt m\u00E0 kh\u00F4ng y\u00EAu c\u1EA7u ph\u1EA3i c\u00F3 s\u1EF1 \u0111\u1ED3ng \u00FD tr\u01B0\u1EDBc c\u1EE7a b\u1EA1n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Trong qu\u00E1 tr\u00ECnh s\u1EED d\u1EE5ng Sound Wave, n\u1EBFu b\u1EA1n vi ph\u1EA1m b\u1EA5t k\u1EF3 quy \u0111\u1ECBnh n\u00E0o trong Th\u1ECFa Thu\u1EADn n\u00E0y, ch\u00FAng t\u00F4i c\u00F3 to\u00E0n quy\u1EC1n, ngay l\u1EADp t\u1EE9c v\u00E0 kh\u00F4ng c\u1EA7n th\u00F4ng b\u00E1o tr\u01B0\u1EDBc cho b\u1EA1n, ch\u1EA5m d\u1EE9t, x\u00F3a b\u1ECF t\u00E0i kho\u1EA3n c\u1EE7a b\u1EA1n m\u00E0 kh\u00F4ng ph\u1EA3i ch\u1ECBu b\u1EA5t c\u1EE9 tr\u00E1ch nhi\u1EC7m n\u00E0o \u0111\u1ED1i v\u1EDBi b\u1EA1n, \u0111\u1ED3ng th\u1EDDi t\u00F9y theo m\u1EE9c \u0111\u1ED9 vi ph\u1EA1m, ch\u00FAng t\u00F4i c\u00F3 th\u1EC3 t\u1EEB ch\u1ED1i vi\u1EC7c b\u1EA1n \u0111\u0103ng k\u00FD \u0111\u1EC3 s\u1EED d\u1EE5ng c\u00E1c d\u1ECBch v\u1EE5 kh\u00E1c c\u1EE7a AVENGERS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "M\u1ECDi vi ph\u1EA1m c\u1EE7a ch\u1EE7 t\u00E0i kho\u1EA3n trong qu\u00E1 tr\u00ECnh s\u1EED d\u1EE5ng s\u1EA3n ph\u1EA9m Sound Wave, AVENGERS c\u00F3 quy\u1EC1n t\u01B0\u1EDBc b\u1ECF m\u1ECDi quy\u1EC1n l\u1EE3i c\u1EE7a ch\u1EE7 t\u00E0i kho\u1EA3n \u0111\u1ED1i v\u1EDBi vi\u1EC7c s\u1EED d\u1EE5ng s\u1EA3n ph\u1EA9m c\u0169ng nh\u01B0 s\u1EBD y\u00EAu c\u1EA7u c\u01A1 quan ch\u1EE9c n\u0103ng truy t\u1ED1 b\u1EA1n tr\u01B0\u1EDBc ph\u00E1p lu\u1EADt n\u1EBFu c\u1EA7n thi\u1EBFt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Sound Wave quan t\u00E2m t\u1EDBi s\u1EF1 an to\u00E0n v\u00E0 ri\u00EAng t\u01B0, quy\u1EC1n l\u1EE3i c\u1EE7a t\u1EA5t c\u1EA3 th\u00E0nh vi\u00EAn s\u1EED d\u1EE5ng s\u1EA3n ph\u1EA9m c\u1EE7a m\u00ECnh, \u0111\u1EB7c bi\u1EC7t l\u00E0 tr\u1EBB em. V\u00EC v\u1EADy, n\u1EBFu b\u1EA1n l\u00E0 cha m\u1EB9 ho\u1EB7c ng\u01B0\u1EDDi gi\u00E1m h\u1ED9 h\u1EE3p ph\u00E1p c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng, b\u1EA1n c\u00F3 tr\u00E1ch nhi\u1EC7m xem x\u00E9t v\u00E0 x\u00E1c \u0111\u1ECBnh s\u1EA3n ph\u1EA9m, n\u1ED9i dung n\u00E0o c\u1EE7a Sound Wave th\u00EDch h\u1EE3p cho con em c\u1EE7a m\u00ECnh. T\u01B0\u01A1ng t\u1EF1, n\u1EBFu Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng l\u00E0 tr\u1EBB em th\u00EC b\u1EA1n ph\u1EA3i h\u1ECFi \u00FD ki\u1EBFn cha m\u1EB9 ho\u1EB7c ng\u01B0\u1EDDi gi\u00E1m h\u1ED9 h\u1EE3p ph\u00E1p c\u1EE7a m\u00ECnh v\u1EC1 vi\u1EC7c s\u1EA3n ph\u1EA9m, n\u1ED9i dung m\u00ECnh s\u1EED d\u1EE5ng c\u00F3 ph\u00F9 h\u1EE3p hay kh\u00F4ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng c\u00F3 th\u1EC3 s\u1EBD ch\u1ECBu tr\u00E1ch nhi\u1EC7m b\u1ED3i th\u01B0\u1EDDng thi\u1EC7t h\u1EA1i d\u00E2n s\u01B0, kh\u1EA3 n\u0103ng b\u1ECB ph\u1EA1t vi ph\u1EA1m h\u00E0nh ch\u00EDnh ho\u1EB7c b\u1ECB truy t\u1ED1 tr\u00E1ch nhi\u1EC7m h\u00ECnh s\u1EF1 n\u1EBFu c\u00F3 h\u00E0nh vi vi ph\u1EA1m quy\u1EC1n t\u00E1c gi\u1EA3 ho\u1EB7c quy\u1EC1n li\u00EAn quan khi s\u1EED d\u1EE5ng Sound Wave");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "\u0110i\u1EC1u 7. S\u1EED d\u1EE5ng d\u1ECBch v\u1EE5 t\u00EDnh ph\u00ED.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Sound Wave cung c\u1EA5p c\u00E1c g\u00F3i d\u1ECBch v\u1EE5 t\u00EDnh ph\u00ED (\u201CG\u00F3i VIP\u201D) cho ph\u00E9p ng\u01B0\u1EDDi s\u1EED d\u1EE5ng ti\u1EBFp c\u1EADn c\u00E1c t\u00EDnh n\u0103ng \u01B0u \u0111\u00E3i v\u01B0\u1EE3t tr\u1ED9i so v\u1EDBi d\u1ECBch v\u1EE5 mi\u1EC5n ph\u00ED th\u00F4ng th\u01B0\u1EDDng. G\u00F3i VIP \u0111\u01B0\u1EE3c chia th\u00E0nh c\u00E1c k\u1EF3 h\u1EA1n, nh\u00F3m \u0111\u1ED1i t\u01B0\u1EE3ng kh\u00E1c nhau t\u01B0\u01A1ng \u1EE9ng v\u1EDBi c\u00E1c m\u1EE9c gi\u00E1 linh ho\u1EA1t \u0111\u1EC3 ng\u01B0\u1EDDi s\u1EED d\u1EE5ng d\u1EC5 d\u00E0ng l\u1EF1a ch\u1ECDn.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Ph\u00ED v\u00E0 thanh to\u00E1n (Fees and Payment)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Ph\u00ED c\u00F4ng b\u1ED1 cho t\u1EEBng G\u00F3i VIP \u0111\u00E3 bao g\u1ED3m to\u00E0n b\u1ED9 c\u00E1c lo\u1EA1i thu\u1EBF, l\u1EC7 ph\u00ED v\u00E0 l\u00E0 s\u1ED1 ti\u1EC1n cu\u1ED1i c\u00F9ng m\u00E0 Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng ph\u1EA3i thanh to\u00E1n \u0111\u1EC3 s\u1EED d\u1EE5ng G\u00F3i VIP. Ng\u01B0\u1EDDi s\u1EED d\u1EE5ng l\u1EF1a ch\u1ECDn G\u00F3i VIP ph\u00F9 h\u1EE3p v\u1EDBi k\u1EBF ho\u1EA1ch s\u1EED d\u1EE5ng v\u00E0 thanh to\u00E1n ph\u00ED s\u1EED d\u1EE5ng c\u00E1c G\u00F3i VIP b\u1EB1ng c\u00E1c ph\u01B0\u01A1ng ti\u1EC7n thanh to\u00E1n \u0111i\u1EC7n t\u1EED kh\u1EA3 d\u1EE5ng theo l\u1EF1a ch\u1ECDn c\u1EE7a Sound Wave.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Ngay khi kho\u1EA3n thanh to\u00E1n \u0111\u01B0\u1EE3c ch\u1EA5p thu\u1EADn th\u00EC G\u00F3i VIP t\u01B0\u01A1ng \u1EE9ng \u0111\u01B0\u1EE3c k\u00EDch ho\u1EA1t, t\u1EF1 \u0111\u1ED9ng x\u00E1c nh\u1EADn tr\u00EAn t\u00E0i kho\u1EA3n c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "H\u1EE7y v\u00E0 thay \u0111\u1ED5i (Cancellation and Change)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Sau khi \u0111\u0103ng k\u00FD, Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng c\u00F3 quy\u1EC1n mua th\u00EAm c\u00E1c G\u00F3i VIP kh\u00E1c \u0111\u1EC3 k\u00E9o d\u00E0i th\u1EDDi gian s\u1EED d\u1EE5ng. N\u1EBFu G\u00F3i VIP mua th\u00EAm c\u00F3 t\u00EDnh n\u0103ng v\u01B0\u1EE3t tr\u1ED9i h\u01A1n th\u00EC th\u1EDDi gian c\u1EE7a G\u00F3i VIP \u0111\u00E3 mua tr\u01B0\u1EDBc \u0111\u00F3 \u0111\u01B0\u1EE3c quy \u0111\u1ED5i t\u01B0\u01A1ng \u0111\u01B0\u01A1ng th\u00E0nh ng\u00E0y s\u1EED d\u1EE5ng c\u1EE7a G\u00F3i VIP mua th\u00EAm (theo t\u1EC9 l\u1EC7 v\u1EC1 ph\u00ED s\u1EED d\u1EE5ng \u0111\u00E3 b\u1ECF ra v\u00E0 c\u00E1c y\u1EBFu t\u1ED1 kh\u00E1c) c\u1ED9ng d\u1ED3n v\u00E0o s\u1ED1 ng\u00E0y s\u1EED d\u1EE5ng m\u1EB7c \u0111\u1ECBnh c\u1EE7a G\u00F3i VIP mua th\u00EAm.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Ph\u00ED s\u1EED d\u1EE5ng kh\u00F4ng \u0111\u01B0\u1EE3c ho\u00E0n l\u1EA1i trong b\u1EA5t k\u1EF3 tr\u01B0\u1EDDng h\u1EE3p n\u00E0o, n\u1EBFu Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng h\u1EE7y \u0111\u0103ng k\u00FD G\u00F3i VIP th\u00EC th\u1EDDi h\u1EA1n s\u1EED d\u1EE5ng c\u1EE7a G\u00F3i VIP \u0111\u00F3 v\u1EABn \u0111\u01B0\u1EE3c b\u1EA3o l\u01B0u.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "T\u1EF1 \u0111\u1ED9ng gia h\u1EA1n (Auto-Renewal)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "T\u00EDnh n\u0103ng n\u00E0y gi\u00FAp tr\u1EA3i nghi\u1EC7m Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng kh\u00F4ng b\u1ECB gi\u00E1n \u0111o\u1EA1n, c\u1EE5 th\u1EC3: \u0110\u1ED1i v\u1EDBi m\u1ED9t s\u1ED1 G\u00F3i VIP \u0111\u01B0\u1EE3c \u00E1p d\u1EE5ng t\u00EDnh n\u0103ng t\u1EF1 \u0111\u1ED9ng gia h\u1EA1n, trong v\u00F2ng 24 gi\u1EDD tr\u01B0\u1EDBc khi h\u1EBFt th\u1EDDi h\u1EA1n s\u1EED d\u1EE5ng, t\u00EDnh n\u0103ng n\u00E0y s\u1EBD gi\u00FAp t\u1EF1 k\u00EDch ho\u1EA1t th\u00EAm 1 chu k\u1EF3 s\u1EED d\u1EE5ng n\u1EEFa b\u1EB1ng v\u1EDBi th\u1EDDi h\u1EA1n \u0111ang \u00E1p d\u1EE5ng c\u1EE7a G\u00F3i VIP \u0111\u00F3 v\u00E0 ghi n\u1EE3 m\u1ED9t kho\u1EA3n thanh to\u00E1n t\u01B0\u01A1ng \u1EE9ng v\u00E0o ph\u01B0\u01A1ng ti\u1EC7n thanh to\u00E1n c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Vi\u1EC7c \u00E1p d\u1EE5ng t\u1EF1 \u0111\u1ED9ng gia h\u1EA1n \u0111\u01B0\u1EE3c th\u00F4ng b\u00E1o t\u1EA1i giao \u0111i\u1EC7n \u0111\u0103ng k\u00FD G\u00F3i VIP t\u01B0\u01A1ng \u1EE9ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "\u0110\u1EC3 d\u1EEBng t\u00EDnh n\u0103ng t\u1EF1 \u0111\u1ED9ng gia h\u1EA1n, Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng ph\u1EA3i h\u1EE7y \u0111\u0103ng k\u00FD G\u00F3i VIP \u00EDt nh\u1EA5t 24 gi\u1EDD tr\u01B0\u1EDBc khi h\u1EBFt h\u1EA1n s\u1EED d\u1EE5ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Thay \u0111\u1ED5i:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "C\u00E1c thay \u0111\u1ED5i (n\u1EBFu c\u00F3) v\u1EC1 m\u1EE9c ph\u00ED, c\u00E1c \u0111\u1EB7c t\u00EDnh c\u1EE7a G\u00F3i VIP s\u1EBD theo quy\u1EBFt \u0111\u1ECBnh c\u1EE7a AVENGERS v\u00E0 s\u1EBD \u0111\u01B0\u1EE3c th\u00F4ng b\u00E1o c\u00F4ng khai tr\u00EAn website, \u1EE9ng d\u1EE5ng. Ph\u00ED s\u1EED d\u1EE5ng sau khi thay \u0111\u1ED5i s\u1EBD \u0111\u01B0\u1EE3c t\u1EF1 \u0111\u1ED9ng \u00E1p d\u1EE5ng trong c\u00E1c l\u1EA7n gia h\u1EA1n k\u1EBF ti\u1EBFp.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "\u0110i\u1EC1u 8. Quy\u1EC1n v\u00E0 tr\u00E1ch nhi\u1EC7m c\u1EE7a ch\u1EE7 t\u00E0i kho\u1EA3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Khi \u0111\u0103ng k\u00FD t\u00E0i kho\u1EA3n Zalo ID, Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng m\u1ED9t ph\u1EA7n ho\u1EB7c t\u1EA5t c\u1EA3 c\u00E1c d\u1ECBch v\u1EE5 trong s\u1EA3n ph\u1EA9m Sound Wave.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Trong qu\u00E1 tr\u00ECnh s\u1EED d\u1EE5ng s\u1EA3n ph\u1EA9m, Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3 gi\u1EA3i quy\u1EBFt r\u1EE7i ro n\u1EBFu ph\u00E1t sinh s\u1EF1 c\u1ED1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng c\u00F3 tr\u00E1ch nhi\u1EC7m b\u1EA3o m\u1EADt th\u00F4ng tin t\u00E0i kho\u1EA3n, n\u1EBFu nh\u1EEFng th\u00F4ng tin tr\u00EAn b\u1ECB ti\u1EBFt l\u1ED9 d\u01B0\u1EDBi b\u1EA5t k\u1EF3 h\u00ECnh th\u1EE9c n\u00E0o th\u00EC Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng ph\u1EA3i ch\u1EA5p nh\u1EADn nh\u1EEFng r\u1EE7i ro ph\u00E1t sinh. AVENGERS s\u1EBD c\u0103n c\u1EE9 v\u00E0o nh\u1EEFng th\u00F4ng tin hi\u1EC7n c\u00F3 trong t\u00E0i kho\u1EA3n \u0111\u1EC3 l\u00E0m c\u0103n c\u1EE9 quy\u1EBFt \u0111\u1ECBnh ch\u1EE7 s\u1EDF h\u1EEFu t\u00E0i kho\u1EA3n n\u1EBFu c\u00F3 tranh ch\u1EA5p v\u00E0 AVENGERS s\u1EBD kh\u00F4ng ch\u1ECBu tr\u00E1ch nhi\u1EC7m v\u1EC1 m\u1ECDi t\u1ED5n th\u1EA5t ph\u00E1t sinh.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng \u0111\u1ED3ng \u00FD s\u1EBD th\u00F4ng b\u00E1o ngay cho Sound Wave v\u1EC1 b\u1EA5t k\u1EF3 tr\u01B0\u1EDDng h\u1EE3p n\u00E0o s\u1EED d\u1EE5ng tr\u00E1i ph\u00E9p t\u00E0i kho\u1EA3n v\u00E0 m\u1EADt kh\u1EA9u c\u1EE7a b\u1EA1n ho\u1EB7c b\u1EA5t k\u1EF3 c\u00E1c h\u00E0nh \u0111\u1ED9ng ph\u00E1 v\u1EE1 h\u1EC7 th\u1ED1ng b\u1EA3o m\u1EADt n\u00E0o. B\u1EA1n c\u0169ng b\u1EA3o \u0111\u1EA3m r\u1EB1ng, b\u1EA1n lu\u00F4n tho\u00E1t t\u00E0i kho\u1EA3n c\u1EE7a m\u00ECnh sau m\u1ED7i l\u1EA7n s\u1EED d\u1EE5ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng ph\u1EA3i tu\u00E2n th\u1EE7 tuy\u1EC7t \u0111\u1ED1i quy \u0111\u1ECBnh v\u1EC1 c\u00E1c h\u00E0nh vi c\u1EA5m, c\u00E1c n\u1ED9i dung trao \u0111\u1ED5i cung c\u1EA5p th\u00F4ng tin \u0111\u01B0\u1EE3c quy \u0111\u1ECBnh trong quy ch\u1EBF n\u00E0y. N\u1EBFu vi ph\u1EA1m m\u1ED9t ho\u1EB7c nhi\u1EC1u h\u00E0nh vi, t\u00F9y thu\u1ED9c v\u00E0o m\u1EE9c \u0111\u1ED9 vi ph\u1EA1m AVENGERS s\u1EBD kh\u00F3a t\u00E0i kho\u1EA3n v\u0129nh vi\u1EC5n, t\u01B0\u1EDBc b\u1ECF m\u1ECDi quy\u1EC1n l\u1EE3i c\u1EE7a b\u1EA1n \u0111\u1ED1i c\u00E1c s\u1EA3n ph\u1EA9m c\u1EE7a AVENGERS v\u00E0 s\u1EBD y\u00EAu c\u1EA7u c\u01A1 quan ch\u1EE9c n\u0103ng truy t\u1ED1 b\u1EA1n tr\u01B0\u1EDBc ph\u00E1p lu\u1EADt n\u1EBFu c\u1EA7n thi\u1EBFt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng ph\u1EA3i ch\u1ECBu tr\u00E1ch nhi\u1EC7m ph\u00E1p l\u00FD v\u1EC1 m\u1ECDi n\u1ED9i dung do Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng \u0111\u0103ng t\u1EA3i tr\u00EAn Sound Wave bao g\u1ED3m nh\u01B0ng kh\u00F4ng gi\u1EDBi h\u1EA1n \u1EDF tr\u00E1ch nhi\u1EC7m b\u1ED3i th\u01B0\u1EDDng thi\u1EC7t h\u1EA1i cho AVENGERS v\u00E0 c\u00E1c b\u00EAn li\u00EAn quan v\u00EC vi ph\u1EA1m quy\u1EC1n s\u1EDF h\u1EEFu tr\u00ED tu\u1EC7.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Ch\u00FAng t\u00F4i c\u00F3 quy\u1EC1n ngay l\u1EADp t\u1EE9c ch\u1EA5m d\u1EE9t ho\u1EB7c kh\u00F3a t\u00E0i kho\u1EA3n c\u1EE7a b\u1EA1n ho\u1EB7c vi\u1EC7c s\u1EED d\u1EE5ng D\u1ECBch v\u1EE5 Sound Wave ho\u1EB7c truy c\u1EADp v\u00E0o n\u1ED9i dung \u1EDF b\u1EA5t k\u1EF3 th\u1EDDi \u0111i\u1EC3m n\u00E0o m\u00E0 kh\u00F4ng c\u1EA7n th\u00F4ng b\u00E1o ho\u1EB7c c\u00F3 tr\u00E1ch nhi\u1EC7m, n\u1EBFu Sound Wave x\u00E1c \u0111\u1ECBnh r\u1EB1ng b\u1EA1n \u0111\u00E3 vi ph\u1EA1m c\u00E1c \u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng, vi ph\u1EA1m lu\u1EADt ph\u00E1p, quy t\u1EAFc, quy \u0111\u1ECBnh, tham gia v\u00E0o c\u00E1c h\u00E0nh vi kh\u00F4ng th\u00EDch h\u1EE3p kh\u00E1c, ho\u1EB7c v\u00EC l\u00FD do kinh doanh kh\u00E1c. Ch\u00FAng t\u00F4i c\u0169ng c\u00F3 quy\u1EC1n ch\u1EA5m d\u1EE9t t\u00E0i kho\u1EA3n c\u1EE7a b\u1EA1n ho\u1EB7c vi\u1EC7c s\u1EED d\u1EE5ng c\u1EE7a D\u1ECBch v\u1EE5 Sound Wave ho\u1EB7c truy c\u1EADp v\u00E0o c\u00E1c n\u1ED9i dung n\u1EBFu vi\u1EC7c s\u1EED d\u1EE5ng g\u00E2y qu\u00E1 t\u1EA3i cho m\u00E1y ch\u1EE7 c\u1EE7a ch\u00FAng t\u00F4i. Trong m\u1ED9t s\u1ED1 tr\u01B0\u1EDDng h\u1EE3p, ch\u00FAng t\u00F4i c\u00F3 quy\u1EC1n s\u1EED d\u1EE5ng c\u00F4ng ngh\u1EC7 \u0111\u1EC3 h\u1EA1n ch\u1EBF ho\u1EA1t \u0111\u1ED9ng nh\u01B0 l\u00E0 gi\u1EDBi h\u1EA1n s\u1ED1 l\u01B0\u1EE3t truy c\u1EADp \u0111\u1EBFn m\u00E1y ch\u1EE7 Sound Wave ho\u1EB7c dung l\u01B0\u1EE3ng s\u1EED d\u1EE5ng c\u1EE7a ng\u01B0\u1EDDi d\u00F9ng. B\u1EA1n \u0111\u1ED3ng \u00FD t\u00F4n tr\u1ECDng nh\u1EEFng gi\u1EDBi h\u1EA1n v\u00E0 kh\u00F4ng c\u00F3 b\u1EA5t k\u00EC h\u00E0nh \u0111\u1ED9ng n\u00E0o \u0111\u1EC3 ph\u00E1 v\u1EE1, l\u1EA9n tr\u00E1nh ho\u1EB7c b\u1ECF qua ch\u00FAng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Th\u1EF1c hi\u1EC7n quy\u1EC1n v\u00E0 tr\u00E1ch nhi\u1EC7m kh\u00E1c theo quy \u0111\u1ECBnh ph\u00E1p lu\u1EADt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "\u0110i\u1EC1u 9. Quy\u1EC1n v\u00E0 tr\u00E1ch nhi\u1EC7m c\u1EE7a AVENGERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Trong qu\u00E1 tr\u00ECnh s\u1EED d\u1EE5ng s\u1EA3n ph\u1EA9m, n\u1EBFu b\u1EA1n vi ph\u1EA1m b\u1EA5t c\u1EE9 \u0111i\u1EC1u kho\u1EA3n n\u00E0o trong quy ch\u1EBF s\u1EED d\u1EE5ng Zalo ID v\u00E0 Th\u1ECFa thu\u1EADn n\u00E0y ho\u1EB7c th\u1ECFa thu\u1EADn s\u1EED d\u1EE5ng s\u1EA3n ph\u1EA9m kh\u00E1c c\u1EE7a AVENGERS \u0111\u01B0\u1EE3c quy \u0111\u1ECBnh tr\u00EAn website, ch\u00FAng t\u00F4i c\u00F3 to\u00E0n quy\u1EC1n ch\u1EA5m d\u1EE9t, x\u00F3a b\u1ECF t\u00E0i kho\u1EA3n c\u1EE7a b\u1EA1n m\u00E0 kh\u00F4ng c\u1EA7n s\u1EF1 \u0111\u1ED3ng \u00FD c\u1EE7a b\u1EA1n v\u00E0 kh\u00F4ng ph\u1EA3i ch\u1ECBu b\u1EA5t c\u1EE9 tr\u00E1ch nhi\u1EC7m n\u00E0o \u0111\u1ED1i v\u1EDBi b\u1EA1n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "M\u1ECDi vi ph\u1EA1m c\u1EE7a ch\u1EE7 t\u00E0i kho\u1EA3n trong qu\u00E1 tr\u00ECnh s\u1EED d\u1EE5ng s\u1EA3n ph\u1EA9m c\u1EE7a AVENGERS, AVENGERS c\u00F3 quy\u1EC1n t\u01B0\u1EDBc b\u1ECF m\u1ECDi quy\u1EC1n l\u1EE3i c\u1EE7a ch\u1EE7 t\u00E0i kho\u1EA3n \u0111\u1ED1i v\u1EDBi vi\u1EC7c s\u1EED d\u1EE5ng c\u00E1c s\u1EA3n ph\u1EA9m c\u1EE7a AVENGERS c\u0169ng nh\u01B0 s\u1EBD y\u00EAu c\u1EA7u c\u01A1 quan ch\u1EE9c n\u0103ng truy t\u1ED1 b\u1EA1n tr\u01B0\u1EDBc ph\u00E1p lu\u1EADt n\u1EBFu c\u1EA7n thi\u1EBFt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Khi ph\u00E1t hi\u1EC7n nh\u1EEFng vi ph\u1EA1m nh\u01B0 s\u1EED d\u1EE5ng cheats, hacks, ho\u1EB7c nh\u1EEFng l\u1ED7i kh\u00E1c, AVENGERS c\u00F3 quy\u1EC1n s\u1EED d\u1EE5ng nh\u1EEFng th\u00F4ng tin m\u00E0 b\u1EA1n cung c\u1EA5p khi \u0111\u0103ng k\u00FD t\u00E0i kho\u1EA3n \u0111\u1EC3 chuy\u1EC3n cho C\u01A1 quan ch\u1EE9c n\u0103ng gi\u1EA3i quy\u1EBFt theo quy \u0111\u1ECBnh c\u1EE7a ph\u00E1p lu\u1EADt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Khi ph\u00E1t hi\u1EC7n nh\u1EEFng vi ph\u1EA1m v\u1EC1 n\u1ED9i dung c\u1EA5m \u0111\u01B0\u1EE3c quy \u0111\u1ECBnh t\u1EA1i Th\u1ECFa thu\u1EADn n\u00E0y, AVENGERS c\u00F3 quy\u1EC1n t\u1EAFt ngay l\u1EADp t\u1EE9c c\u00E1c b\u00E0i h\u00E1t/ MV, video ho\u1EB7c n\u1ED9i dung vi ph\u1EA1m kh\u00E1c \u0111ang \u0111\u01B0\u1EE3c ph\u00E1t b\u1EDFi Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng v\u00E0/ho\u1EB7c c\u1EA3nh c\u00E1o, kh\u00F3a, t\u1EA1m d\u1EEBng chat c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng vi ph\u1EA1m. Trong tr\u01B0\u1EDDng h\u1EE3p nh\u1EADn \u0111\u01B0\u1EE3c t\u1ED1 c\u00E1o c\u1EE7a ng\u01B0\u1EDDi d\u00F9ng kh\u00E1c, AVENGERS s\u1EBD ti\u1EBFn h\u00E0nh gi\u00E1m s\u00E1t ki\u1EC3m tra v\u00E0 log data c\u00F9ng nh\u1EEFng ch\u1EE9ng c\u1EE9 li\u00EAn quan, n\u1EBFu vi ph\u1EA1m AVENGERS c\u00F3 quy\u1EC1n t\u1EAFt ngay l\u1EADp t\u1EE9c c\u00E1c video \u0111ang \u0111\u01B0\u1EE3c ph\u00E1t s\u00F3ng b\u1EDFi ng\u01B0\u1EDDi dung v\u00E0/ho\u1EB7c c\u1EA3nh c\u00E1o, kh\u00F3a, t\u1EA1m d\u1EEBng chat c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng vi ph\u1EA1m. AVENGERS c\u00F3 to\u00E0n quy\u1EC1n quy\u1EBFt \u0111\u1ECBnh c\u00E1c h\u00ECnh th\u1EE9c x\u1EED l\u00FD \u0111\u1ED1i v\u1EDBi c\u00E1c tr\u01B0\u1EDDng h\u1EE3p vi ph\u1EA1m. Tuy v\u00E0o t\u00EDnh ch\u1EA5t s\u1EF1 vi\u1EC7c, m\u1EE9c \u0111\u1ED9 \u1EA3nh h\u01B0\u1EDFng v\u00E0 nghi\u00EAm tr\u1ECDng, AVENGERS s\u1EBD \u0111\u01B0a ra h\u00ECnh th\u1EE9c x\u1EED l\u00FD ph\u00F9 h\u1EE3p. Quy\u1EBFt \u0111\u1ECBnh c\u1EE7a AVENGERS l\u00E0 quy\u1EBFt \u0111\u1ECBnh cu\u1ED1i c\u00F9ng v\u00E0 ng\u01B0\u1EDDi d\u00F9ng \u0111\u1ED3ng \u00FD ch\u1EA5p h\u00E0nh.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "C\u00F3 tr\u00E1ch nhi\u1EC7m h\u1ED7 tr\u1EE3 ch\u1EE7 t\u00E0i kho\u1EA3n trong qu\u00E1 tr\u00ECnh s\u1EED d\u1EE5ng s\u1EA3n ph\u1EA9m c\u1EE7a AVENGERS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Nh\u1EADn v\u00E0 gi\u1EA3i quy\u1EBFt khi\u1EBFu n\u1EA1i c\u1EE7a kh\u00E1ch h\u00E0ng c\u00E1c tr\u01B0\u1EDDng h\u1EE3p ph\u00E1t sinh trong qu\u00E1 tr\u00ECnh s\u1EED d\u1EE5ng s\u1EA3n ph\u1EA9m c\u1EE7a AVENGERS, tuy nhi\u00EAn AVENGERS ch\u1EC9 h\u1ED7 tr\u1EE3, nh\u1EADn v\u00E0 gi\u1EA3i quy\u1EBFt \u0111\u1ED1i v\u1EDBi t\u00E0i kho\u1EA3n \u0111\u0103ng k\u00FD \u0111\u1EA7y \u0111\u1EE7 th\u00F4ng tin, trung th\u1EF1c v\u00E0 ch\u00EDnh x\u00E1c.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "C\u00F3 tr\u00E1ch nhi\u1EC7m b\u1EA3o m\u1EADt th\u00F4ng tin c\u00E1 nh\u00E2n c\u1EE7a ch\u1EE7 t\u00E0i kho\u1EA3n, AVENGERS kh\u00F4ng b\u00E1n ho\u1EB7c trao \u0111\u1ED5i nh\u1EEFng th\u00F4ng tin n\u00E0y v\u1EDBi b\u00EAn th\u1EE9 3, tr\u1EEB tr\u01B0\u1EDDng h\u1EE3p theo quy \u0111\u1ECBnh ph\u00E1p lu\u1EADt ho\u1EB7c \u0111\u01B0\u1EE3c ch\u1EE7 t\u00E0i kho\u1EA3n ch\u1EA5p nh\u1EADn.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "\u0110i\u1EC1u 10. Gi\u1EDBi h\u1EA1n tr\u00E1ch nhi\u1EC7m v\u00E0 t\u1EEB ch\u1ED1i \u0111\u1EA3m b\u1EA3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "AVENGERS s\u1EBD kh\u00F4ng ch\u1ECBu tr\u00E1ch nhi\u1EC7m \u0111\u1ED1i v\u1EDBi b\u1EA5t c\u1EE9 v\u1EA5n \u0111\u1EC1 g\u00EC v\u1EC1 h\u1EC7 th\u1ED1ng trong qu\u00E1 tr\u00ECnh b\u1EA1n s\u1EED d\u1EE5ng s\u1EA3n ph\u1EA9m.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "N\u1EBFu ph\u00E1t sinh r\u1EE7i ro, thi\u1EC7t h\u1EA1i trong tr\u01B0\u1EDDng h\u1EE3p b\u1EA5t kh\u1EA3 kh\u00E1ng bao g\u1ED3m nh\u01B0ng kh\u00F4ng gi\u1EDBi h\u1EA1n nh\u01B0 ch\u1EADp \u0111i\u1EC7n, h\u01B0 h\u1ECFng ph\u1EA7n c\u1EE9ng, ph\u1EA7n m\u1EC1m, s\u1EF1 c\u1ED1 \u0111\u01B0\u1EDDng truy\u1EC1n internet ho\u1EB7c do thi\u00EAn tai .v.v. ng\u01B0\u1EDDi ung ph\u1EA3i ch\u1EA5p nh\u1EADn nh\u1EEFng r\u1EE7i ro, thi\u1EC7t h\u1EA1i n\u1EBFu c\u00F3. AVENGERS cam k\u1EBFt s\u1EBD l\u1ED7 l\u1EF1c gi\u1EA3m thi\u1EC3u nh\u1EEFng r\u1EE7i ro, thi\u1EC7t h\u1EA1i ph\u00E1t sinh tuy nhi\u00EAn AVENGERS s\u1EBD kh\u00F4ng ch\u1ECBu b\u1EA5t c\u1EE9 tr\u00E1ch nhi\u1EC7m n\u00E0o ph\u00E1t sinh trong c\u00E1c tr\u01B0\u1EDDng h\u1EE3p n\u00E0y.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "AVENGERS ho\u00E0n to\u00E0n kh\u00F4ng ch\u1ECBu tr\u00E1ch nhi\u1EC7m r\u1EE7i ro v\u1EC1 m\u1ECDi giao d\u1ECBch c\u1EE7a b\u1EA1n v\u1EDBi b\u00EAn th\u1EE9 3 trong qu\u00E1 tr\u00ECnh s\u1EED d\u1EE5ng s\u1EA3n ph\u1EA9m c\u1EE7a AVENGERS. Khi b\u1EA1n s\u1EED d\u1EE5ng s\u1EA3n ph\u1EA9m v\u00E0/ho\u1EB7c giao d\u1ECBch v\u1EDBi b\u00EAn th\u1EE9 3, b\u1EA1n \u0111\u00E3 hi\u1EC3u v\u00E0 \u0111\u1ED3ng \u00FD t\u1EF1 ch\u1ECBu tr\u00E1ch nhi\u1EC7m nh\u1EEFng r\u1EE7i ro ph\u00E1t sinh.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "B\u00E0i vi\u1EBFt, clip, video c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng c\u00F3 th\u1EC3 c\u00F3 nh\u1EEFng h\u1EA1n ch\u1EBF, c\u00F3 th\u1EC3 g\u00E2y ph\u1EA3n \u0111\u1ED1i, b\u1EA5t h\u1EE3p ph\u00E1p, kh\u00F4ng ch\u00EDnh x\u00E1c, ho\u1EB7c kh\u00F4ng ph\u00F9 h\u1EE3p. Sound Wave kh\u00F4ng c\u00F3 tr\u00E1ch nhi\u1EC7m cho b\u1EA5t k\u1EF3 b\u00E0i vi\u1EBFt n\u00E0o, clip, video, h\u00ECnh \u1EA3nh n\u00E0o m\u00E0 Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng \u0111\u0103ng t\u1EA3i. N\u1ED9i dung \u0111\u01B0\u1EE3c \u0111\u0103ng kh\u00F4ng ph\u1EA3n \u00E1nh quan \u0111i\u1EC3m hay ch\u00EDnh s\u00E1ch c\u1EE7a Sound Wave. Ch\u00FAng t\u00F4i c\u00F3 quy\u1EC1n gi\u00E1m s\u00E1t, h\u1EA1n ch\u1EBF ho\u1EB7c lo\u1EA1i b\u1ECF c\u00E1c n\u1ED9i dung \u0111\u0103ng t\u1EA3i tr\u00EAn khi ch\u00FAng t\u00F4i c\u00F3 c\u01A1 s\u1EDF cho r\u1EB1ng, n\u1ED9i dung \u0111\u01B0\u1EE3c \u0111\u0103ng t\u1EA3i l\u00E0 vi ph\u1EA1m th\u1ECFa thu\u1EADn n\u00E0y c\u0169ng nh\u01B0 vi ph\u1EA1m ph\u00E1p lu\u1EADt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "\u0110i\u1EC1u 11. Th\u00F4ng tin v\u00E0 b\u1EA3o m\u1EADt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Quy tr\u00ECnh \u0111\u0103ng k\u00FD t\u00E0i kho\u1EA3n Zalo ID ch\u1EC9 y\u00EAu c\u1EA7u s\u1ED1 T\u00EAn, \u0111i\u1EC7n tho\u1EA1i h\u1EE3p l\u1EC7 do b\u1EA1n s\u1EDF h\u1EEFu v\u00E0 m\u1EADt kh\u1EA9u. Vi\u1EC7c cung c\u1EA5p nh\u1EEFng th\u00F4ng tin kh\u00E1c cho AVENGERS hay kh\u00F4ng t\u00F9y thu\u1ED9c v\u00E0o quy\u1EBFt \u0111\u1ECBnh c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng. Tuy nhi\u00EAn AVENGERS ch\u1EC9 ti\u1EBFp nh\u1EADn v\u00E0 h\u1ED7 tr\u01A1 gi\u1EA3i quy\u1EBFt tranh ch\u1EA5p trong tr\u01B0\u1EDDng h\u1EE3p b\u1EA1n cung c\u1EA5p \u0111\u1EA7y \u0111\u1EE7, ch\u00EDnh x\u00E1c th\u00F4ng tin theo quy \u0111\u1ECBnh t\u1EA1i quy ch\u1EBF th\u1ECFa thu\u1EADn n\u00E0y. B\u1EA1n c\u0169ng \u0111\u1ED3ng \u00FD r\u1EB1ng user ID, Email, ho\u1EB7c nh\u1EEFng th\u00F4ng tin b\u1EA1n cung c\u1EA5p c\u00F3 th\u1EC3 c\u00F3 th\u1EC3 xu\u1EA5t hi\u1EC7n tr\u00EAn c\u00E1c website \u2013 s\u1EA3n ph\u1EA9m c\u1EE7a AVENGERS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "AVENGERS c\u00F3 th\u1EC3 s\u1EED d\u1EE5ng Th\u00F4ng Tin C\u00E1 Nh\u00E2n c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng cho m\u1EE5c \u0111\u00EDch ch\u0103m s\u00F3c kh\u00E1ch h\u00E0ng, kh\u1EA3o s\u00E1t v\u1EC1 c\u00E1c s\u1EA3n ph\u1EA9m v\u00E0 d\u1ECBch v\u1EE5 c\u1EE7a AVENGERS, ph\u00E1t tri\u1EC3n c\u00E1c d\u1ECBch v\u1EE5 m\u1EDBi v\u00E0 c\u1EA3i thi\u1EC7n c\u00E1c d\u1ECBch v\u1EE5 hi\u1EC7n c\u00F3 \u0111\u00E1p \u1EE9ng mong mu\u1ED1n v\u00E0 s\u1EDF th\u00EDch c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Sound Wave c\u00F3 th\u1EC3 s\u1EED d\u1EE5ng D\u1EEF li\u1EC7u \u0111\u1EC3 t\u00F9y bi\u1EBFn v\u00E0 c\u1EA3i ti\u1EBFn nh\u1EB1m ph\u1EE5c v\u1EE5 b\u1EA1n t\u1ED1t h\u01A1n. Ch\u00FAng t\u00F4i kh\u00F4ng s\u1EED d\u1EE5ng th\u00F4ng tin c\u1EE7a b\u1EA1n v\u00E0o m\u1EE5c \u0111\u00EDch b\u1EA5t h\u1EE3p ph\u00E1p. Sound Wave \u0111\u01B0\u1EE3c quy\u1EC1n cung c\u1EA5p th\u00F4ng tin c\u1EE7a b\u1EA1n cho b\u00EAn th\u1EE9 3 trong c\u00E1c tr\u01B0\u1EDDng h\u1EE3p nh\u01B0ng kh\u00F4ng gi\u1EDBi h\u1EA1n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Sound Wave \u0111\u01B0\u1EE3c b\u1EA1n ch\u1EA5p thu\u1EADn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "D\u1ECBch v\u1EE5 Sound Wave cung c\u1EA5p y\u00EAu c\u1EA7u s\u1EF1 t\u01B0\u01A1ng t\u00E1c v\u1EDBi m\u1ED9t b\u00EAn th\u1EE9 ba ho\u1EB7c do b\u00EAn th\u1EE9 ba cung c\u1EA5p;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Theo c\u00E1c quy \u0111\u1ECBnh h\u00E0nh ph\u00E1p ho\u1EB7c lu\u1EADt ph\u00E1p;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Trong tr\u01B0\u1EDDng h\u1EE3p Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng s\u1EED d\u1EE5ng website li\u00EAn k\u1EBFt tr\u00EAn website c\u1EE7a nghe nh\u1EA1c tr\u1EF1c tuy\u1EBFn n\u00E0y \u0111\u1EC3 truy c\u1EADp, \u0111\u1EC1 ngh\u1ECB Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng \u0111\u1ECDc k\u1EF9 th\u1ECFa thu\u1EADn s\u1EED d\u1EE5ng v\u00E0 ch\u00EDnh s\u00E1ch b\u1EA3o v\u1EC7 s\u1EF1 ri\u00EAng t\u01B0 tr\u00EAn c\u00E1c website \u0111\u00F3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "AVENGERS lu\u00F4n c\u1ED1 g\u1EAFng \u0111\u00E1p \u1EE9ng nh\u1EEFng ti\u00EAu chu\u1EA9n v\u1EC1 d\u1EEF li\u1EC7u trong ch\u00EDnh s\u00E1ch b\u1EA3o v\u1EC7 ri\u00EAng t\u01B0, tuy nhi\u00EAn AVENGERS kh\u00F4ng b\u1ECB bu\u1ED9c ph\u1EA3i b\u1EA3o \u0111\u1EA3m nh\u1EEFng ti\u00EAu chu\u1EA9n \u0111\u00F3. C\u00F3 th\u1EC3 c\u00F3 nh\u1EEFng nh\u00E2n t\u1ED1 v\u01B0\u1EE3t ra ngo\u00E0i t\u1EA7m ki\u1EC3m so\u00E1t c\u1EE7a AVENGERS d\u1EABn \u0111\u1EBFn vi\u1EC7c D\u1EEF li\u1EC7u b\u1ECB ti\u1EBFt l\u1ED9. V\u00EC v\u1EADy, AVENGERS kh\u00F4ng ch\u1ECBu tr\u00E1ch nhi\u1EC7m b\u1EA3o \u0111\u1EA3m D\u1EEF li\u1EC7u lu\u00F4n \u0111\u01B0\u1EE3c duy tr\u00EC \u1EDF t\u00ECnh tr\u1EA1ng ho\u00E0n h\u1EA3o ho\u1EB7c kh\u00F4ng b\u1ECB ti\u1EBFt l\u1ED9.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "M\u1ECDi th\u00F4ng tin c\u00E1 nh\u00E2n c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng s\u1EBD \u0111\u01B0\u1EE3c ch\u00FAng t\u00F4i n\u1ED7 l\u1EF1c cao \u0111\u1EC3 b\u1EA3o m\u1EADt, kh\u00F4ng ti\u1EBFt l\u1ED9 ra ngo\u00E0i. AVENGERS kh\u00F4ng b\u00E1n hay trao \u0111\u1ED5i nh\u1EEFng th\u00F4ng tin n\u00E0y v\u1EDBi b\u1EA5t k\u1EF3 m\u1ED9t b\u00EAn th\u1EE9 ba n\u00E0o kh\u00E1c tr\u1EEB tr\u01B0\u1EDDng h\u1EE3p \u0111\u01B0\u1EE3c quy \u0111\u1ECBnh trong Th\u1ECFa Thu\u1EADn n\u00E0y.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Trong qu\u00E1 tr\u00ECnh s\u1EED d\u1EE5ng Sound Wave, Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng \u0111\u1ED3ng \u00FD nh\u1EADn t\u1EA5t c\u1EA3 th\u00F4ng b\u00E1o t\u1EEB AVENGERS li\u00EAn quan t\u1EDBi s\u1EA3n ph\u1EA9m v\u00E0 d\u1ECBch v\u1EE5 qua th\u01B0 \u0111i\u1EC7n t\u1EED, th\u01B0 b\u01B0u ch\u00EDnh ho\u1EB7c \u0111i\u1EC7n tho\u1EA1i c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "\u0110i\u1EC1u 12. Gi\u1EA3i quy\u1EBFt khi\u1EBFu n\u1EA1i, t\u1ED1 c\u00E1o, b\u1ED3i th\u01B0\u1EDDng v\u00E0 Th\u1ECFa thu\u1EADn tr\u1ECDng t\u00E0i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Nguy\u00EAn t\u1EAFc l\u00FD vi ph\u1EA1m:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng vi ph\u1EA1m Th\u1ECFa Thu\u1EADn n\u00E0y th\u00EC t\u00F9y theo m\u1EE9c \u0111\u1ED9 nghi\u00EAm tr\u1ECDng c\u1EE7a h\u00E0nh vi vi ph\u1EA1m, Sound Wave s\u1EBD \u0111\u01A1n ph\u01B0\u01A1ng v\u00E0 to\u00E0n quy\u1EC1n quy\u1EBFt \u0111\u1ECBnh h\u00ECnh th\u1EE9c x\u1EED l\u00FD ph\u00F9 h\u1EE3p d\u01B0\u1EDBi \u0111\u00E2y:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Kh\u00F3a t\u00E0i kho\u1EA3n Zalo ID c\u00F3 th\u1EDDi h\u1EA1n ho\u1EB7c v\u0129nh vi\u1EC5n, \u0111i\u1EC1u \u0111\u00F3 \u0111\u1ED3ng ngh\u0129a v\u1EDBi vi\u1EC7c n\u1ED9i dung \u0111\u01B0\u1EE3c \u0111\u0103ng t\u1EA3i Sound Wave b\u1EDFi Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng s\u1EBD b\u1ECB x\u00F3a b\u1ECF.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "H\u1EE7y b\u1ECF to\u00E0n b\u1ED9 nh\u1EEFng quy\u1EC1n l\u1EE3i c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng g\u1EAFn li\u1EC1n v\u1EDBi Sound Wave v\u00E0 c\u00E1c s\u1EA3n ph\u1EA9m, d\u1ECBch v\u1EE5 do AVENGERS cung c\u1EA5pM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Gi\u1EA3i quy\u1EBFt tranh ch\u1EA5p, khi\u1EBFu n\u1EA1i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "B\u1EA5t k\u1EF3 tranh ch\u1EA5p ph\u00E1t sinh trong qu\u00E1 tr\u00ECnh s\u1EED d\u1EE5ng c\u1EE7a s\u1EED d\u1EE5ng Sound Wave s\u1EBD \u0111\u01B0\u1EE3c gi\u1EA3i quy\u1EBFt theo ph\u00E1p lu\u1EADt hi\u1EC7n h\u00E0nh c\u1EE7a n\u01B0\u1EDBc C\u1ED9ng h\u00F2a x\u00E3 h\u1ED9i ch\u1EE7 ngh\u0129a Vi\u1EC7t Nam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "B\u1EA5t k\u1EF3 khi\u1EBFu n\u1EA1i n\u00E0o ph\u00E1t sinh trong qu\u00E1 s\u1EED d\u1EE5ng Sound Wave ph\u1EA3i \u0111\u01B0\u1EE3c g\u1EEDi \u0111\u1EBFn AVENGERS ngay sau khi x\u1EA3y ra s\u1EF1 ki\u1EC7n ph\u00E1t sinh khi\u1EBFu n\u1EA1i. \u0110\u1ECBa ch\u1EC9 li\u00EAn l\u1EA1c: B\u1ED9 ph\u1EADn Sound Wave T\u1EA7ng 2 T\u00F2a nh\u00E0 Sarim s\u1ED1 72 Nguy\u1EC5n C\u01A1 Th\u1EA1ch, Ph\u01B0\u1EDDng An L\u1EE3i \u0110\u00F4ng, Qu\u1EADn 2, TP.HCM. Email: copyright@sound.wave.vn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "AVENGERS s\u1EBD c\u0103n c\u1EE9 t\u1EEBng tr\u01B0\u1EDDng h\u1EE3p c\u1EE5 th\u1EC3 \u0111\u1EC3 c\u00F3 ph\u01B0\u01A1ng \u00E1n gi\u1EA3i quy\u1EBFt cho ph\u00F9 h\u1EE3p. Khi th\u1EF1c hi\u1EC7n quy\u1EC1n khi\u1EBFu n\u1EA1i, ng\u01B0\u1EDDi khi\u1EBFu n\u1EA1i c\u00F3 ngh\u0129a v\u1EE5 cung c\u1EA5p c\u00E1c gi\u1EA5y t\u1EDD, b\u1EB1ng ch\u1EE9ng, c\u0103n c\u1EE9 c\u00F3 li\u00EAn quan \u0111\u1EBFn vi\u1EC7c khi\u1EBFu n\u1EA1i v\u00E0 ph\u1EA3i ch\u1ECBu tr\u00E1ch nhi\u1EC7m v\u1EC1 n\u1ED9i dung khi\u1EBFu n\u1EA1i, gi\u1EA5y t\u1EDD, b\u1EB1ng ch\u1EE9ng, c\u1EAFn c\u1EE9 do m\u00ECnh cung c\u1EA5p theo quy \u0111\u1ECBnh ph\u00E1p lu\u1EADt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "AVENGERS ch\u1EC9 h\u1ED7 tr\u1EE3, gi\u1EA3i quy\u1EBFt khi\u1EBFu n\u1EA1i, t\u1ED1 c\u00E1o c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng trong tr\u01B0\u1EDDng h\u1EE3p b\u1EA1n \u0111\u00E3 ghi \u0111\u1EA7y \u0111\u1EE7, trung th\u1EF1c v\u00E0 ch\u00EDnh x\u00E1c th\u00F4ng tin khi \u0111\u0103ng k\u00FD t\u00E0i kho\u1EA3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "\u0110\u1ED1i v\u1EDBi tranh ch\u1EA5p gi\u1EEFa Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng Sound Wave v\u1EDBi nhau, c\u00F3 th\u1EC3 AVENGERS s\u1EBD g\u1EEDi th\u00F4ng tin li\u00EAn h\u1EC7 cho c\u00E1c \u0111\u1ED1i t\u01B0\u1EE3ng tranh ch\u1EA5p \u0111\u1EC3 c\u00E1c b\u00EAn t\u1EF1 gi\u1EA3i quy\u1EBFt ho\u1EB7c AVENGERS s\u1EBD c\u0103n c\u1EE9 v\u00E0o t\u00ECnh h\u00ECnh th\u1EF1c t\u1EBF \u0111\u1EC3 gi\u1EA3i quy\u1EBFt. Theo \u0111\u00F3, AVENGERS s\u1EBD b\u1EA3o v\u1EC7 quy\u1EC1n l\u1EE3i t\u1ED1i \u0111a c\u00F3 th\u1EC3 cho Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng Sound Wave h\u1EE3p ph\u00E1p v\u00E0 ch\u00EDnh \u0111\u00E1ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng \u0111\u1ED3ng \u00FD b\u1EA3o v\u1EC7, b\u1ED3i ho\u00E0n v\u00E0 lo\u1EA1i tr\u1EEB AVENGERS kh\u1ECFi nh\u1EEFng ngh\u0129a v\u1EE5 ph\u00E1p l\u00FD, t\u1ED1 t\u1EE5ng, t\u1ED5n th\u1EA5t, chi ph\u00ED bao g\u1ED3m nh\u01B0ng kh\u00F4ng gi\u1EDBi h\u1EA1n \u00E1n ph\u00ED, chi ph\u00ED lu\u1EADt s\u01B0, chuy\u00EAn gia t\u01B0 v\u1EA5n c\u00F3 li\u00EAn quan \u0111\u1EBFn vi\u1EC7c gi\u1EA3i quy\u1EBFt ho\u1EB7c ph\u00E1t sinh t\u1EEB s\u1EF1 vi ph\u1EA1m c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng trong qu\u00E1 tr\u00ECnh s\u1EED d\u1EE5ng Sound Wave");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "M\u1ECDi tranh ch\u1EA5p li\u00EAn quan t\u1EDBi vi\u1EC7c s\u1EED d\u1EE5ng Sound Wave gi\u1EEFa Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng v\u00E0 AVENGERS s\u1EBD \u0111\u01B0\u1EE3c gi\u1EA3i quy\u1EBFt b\u1EB1ng tr\u1ECDng t\u00E0i t\u1EA1i Trung t\u00E2m Tr\u1ECDng t\u00E0i Qu\u1ED1c t\u1EBF Vi\u1EC7t Nam (VIAC) theo Quy t\u1EAFc t\u1ED1 t\u1EE5ng tr\u1ECDng t\u00E0i c\u1EE7a Trung t\u00E2m n\u00E0y v\u00E0 c\u00E1c \u0111i\u1EC1u ki\u1EC7n sau:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, " + Gi\u1EA3i quy\u1EBFt theo th\u1EE7 t\u1EE5c r\u00FAt g\u1ECDn n\u1EBFu kh\u1EA3 d\u1EE5ng t\u1EA1i th\u1EDDi \u0111i\u1EC3m gi\u1EA3i quy\u1EBFt tranh ch\u1EA5p;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, " + S\u1ED1 l\u01B0\u1EE3ng tr\u1ECDng t\u00E0i vi\u00EAn l\u00E0 01 do VIAC ch\u1EC9 \u0111\u1ECBnh;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, " + \u0110\u1ECBa \u0111i\u1EC3m tr\u1ECDng t\u00E0i l\u00E0 TP. H\u1ED3 Ch\u00ED Minh;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, " + Ng\u00F4n ng\u1EEF tr\u1ECDng t\u00E0i l\u00E0 ti\u1EBFng Vi\u1EC7t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "\u0110i\u1EC1u 13. Quy t\u1EAFc qu\u1EA3n l\u00ED x\u1EED ph\u1EA1t vi ph\u1EA1m Ng\u01B0\u1EDDi d\u00F9ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "Nguy\u00EAn t\u1EAFc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng vi ph\u1EA1m th\u1ECFa thu\u1EADn cung c\u1EA5p v\u00E0 s\u1EED d\u1EE5ng nghe nh\u1EA1c tr\u1EF1c tuy\u1EBFn th\u00EC t\u00F9y theo m\u1EE9c \u0111\u1ED9 nghi\u00EAm tr\u1ECDng c\u1EE7a h\u00E0nh vi vi ph\u1EA1m s\u1EBD b\u1ECB x\u1EED ph\u1EA1t t\u01B0\u01A1ng \u1EE9ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "Tr\u01B0\u1EDDng h\u1EE3p h\u00E0nh vi vi ph\u1EA1m c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng ch\u01B0a \u0111\u01B0\u1EE3c quy \u0111\u1ECBnh trong th\u1ECFa thu\u1EADn n\u00E0y th\u00EC t\u00F9y v\u00E0o t\u00EDnh ch\u1EA5t, m\u1EE9c \u0111\u1ED9 c\u1EE7a h\u00E0nh vi vi ph\u1EA1m, Sound Wave s\u1EBD \u0111\u01A1n ph\u01B0\u01A1ng, to\u00E0n quy\u1EC1n quy\u1EBFt \u0111\u1ECBnh m\u1EE9c x\u1EED ph\u1EA1t h\u1EE3p l\u00FD.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "H\u00ECnh th\u1EE9c x\u1EED ph\u1EA1t kh\u00F3a t\u00E0i kho\u1EA3n Zalo ID c\u00F3 th\u1EDDi h\u1EA1n ho\u1EB7c v\u0129nh vi\u1EC5n, \u0111i\u1EC1u \u0111\u00F3 \u0111\u1ED3ng ngh\u0129a v\u1EDBi vi\u1EC7c Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng c\u0169ng kh\u00F4ng th\u1EC3 s\u1EED d\u1EE5ng c\u00E1c s\u1EA3n ph\u1EA9m kh\u00E1c khi truy c\u1EADp t\u1EEB t\u00E0i kho\u1EA3n Zalo ID.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "N\u1EBFu t\u00E0i kho\u1EA3n Zalo ID b\u1ECB kh\u00F3a v\u0129nh vi\u1EC5n, th\u00EC to\u00E0n b\u1ED9 nh\u1EEFng quy\u1EC1n l\u1EE3i c\u1EE7a ch\u1EE7 t\u00E0i kho\u1EA3n c\u0169ng s\u1EBD kh\u00F3a v\u0129nh vi\u1EC5n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "C\u00E1c h\u00ECnh th\u1EE9c x\u1EED ph\u1EA1t:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, " + H\u00ECnh th\u1EE9c x\u1EED ph\u1EA1t 1: Kh\u00F3a t\u00E0i kho\u1EA3n 10 ng\u00E0y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, " + H\u00ECnh th\u1EE9c x\u1EED ph\u1EA1t 2: Kh\u00F3a t\u00E0i kho\u1EA3n 20 ng\u00E0y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, " + H\u00ECnh th\u1EE9c x\u1EED ph\u1EA1t 3: Kh\u00F3a t\u00E0i kho\u1EA3n 30 ng\u00E0y ho\u1EB7c kh\u00F3a t\u00E0i kho\u1EA3n v\u0129nh vi\u1EC5n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "H\u00ECnh th\u1EE9c x\u1EED ph\u1EA1t 1, kh\u00F3a t\u00E0i kho\u1EA3n 10 ng\u00E0y theo kho\u1EA3n 1 \u0111i\u1EC1u n\u00E0y \u0111\u01B0\u1EE3c \u00E1p d\u1EE5ng bao g\u1ED3m nh\u01B0ng kh\u00F4ng gi\u1EDBi h\u1EA1n \u0111\u1ED1i v\u1EDBi c\u00E1c h\u00E0nh vi sau.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Cung c\u1EA5p \u0111\u01B0\u1EDDng d\u1EABn \u0111\u1EBFn trang th\u00F4ng tin \u0111i\u1EC7n t\u1EED c\u00F3 n\u1ED9i dung vi ph\u1EA1m quy \u0111\u1ECBnh ph\u00E1p lu\u1EADt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Ti\u1EBFt l\u1ED9 b\u00ED m\u1EADt \u0111\u1EDDi t\u01B0 ho\u1EB7c b\u00ED m\u1EADt kh\u00E1c khi ch\u01B0a \u0111\u01B0\u1EE3c s\u1EF1 \u0111\u1ED3ng \u00FD c\u1EE7a c\u00E1 nh\u00E2n, t\u1ED5 ch\u1EE9c c\u00F3 li\u00EAn quan tr\u1EEB tr\u01B0\u1EDDng h\u1EE3p Ph\u00E1p lu\u1EADt quy \u0111\u1ECBnh. Ngo\u00E0i ch\u1ECBu x\u1EED ph\u1EA1t do Sound Wave \u00E1p d\u1EE5ng, Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng vi ph\u1EA1m c\u00F2n ch\u1ECBu tr\u00E1ch nhi\u1EC7m tr\u1EF1c ti\u1EBFp v\u1EDBi ng\u01B0\u1EDDi b\u1ECB x\u1EADm ph\u1EA1m quy\u1EC1n v\u00E0 Ph\u00E1p lu\u1EADt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "\u0110\u0103ng t\u1EA3i nh\u1EEFng th\u00F4ng tin, n\u1ED9i dung m\u00EA t\u00EDn d\u1ECB \u0111oan;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "C\u00F4ng k\u00EDch, xuy\u00EAn t\u1EA1c, x\u00FAc ph\u1EA1m nh\u00E2n ph\u1EA9m c\u00E1c Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng kh\u00E1c.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "L\u00F4i k\u00E9o c\u00F4ng \u0111\u1ED3ng th\u00E0nh vi\u00EAn tham gia c\u00F3 ch\u1EE7 \u0111\u00EDch b\u1EB1ng c\u00E1c c\u00E2u view sai ph\u1EA1m, vi ph\u1EA1m v\u0103n h\u00F3a \u0111\u1EA1o \u0111\u1EE9c.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "H\u00ECnh th\u1EE9c x\u1EED ph\u1EA1t 2, kh\u00F3a t\u00E0i kho\u1EA3n 20 ng\u00E0y theo kho\u1EA3n 1 \u0111i\u1EC1u n\u00E0y \u0111\u01B0\u1EE3c \u00E1p d\u1EE5ng bao g\u1ED3m nh\u01B0ng kh\u00F4ng gi\u1EDBi h\u1EA1n \u0111\u1ED1i v\u1EDBi c\u00E1c h\u00E0nh vi sau.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "- \u0110\u0103ng t\u1EA3i th\u00F4ng tin mi\u00EAu t\u1EA3 t\u1EC9 m\u1EC9 h\u00E0nh \u0111\u1ED9ng d\u00E2m \u00F4, ch\u00E9m, gi\u1EBFt, tai n\u1EA1n r\u00F9ng r\u1EE3n trong c\u00E1c tin, b\u00E0i, clip, \u1EA3nh kh\u00F4ng ph\u00F9 h\u1EE3p thu\u1EA7n phong m\u1EF9 t\u1EE5c Vi\u1EC7t Nam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "- Ch\u00E1t khi\u00EAu d\u00E2m, spam chat, k\u00EDch \u0111\u1ED9ng c\u00E1c th\u00E0nh vi\u00EAn kh\u00E1c \u0111\u1EC3 g\u00E2y r\u1ED1i ho\u1EB7c tuy\u00EAn truy\u1EC1n nh\u1EEFng th\u00F4ng tin vi ph\u1EA1m.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "- \u0110\u0103ng t\u1EA3i n\u1ED9i dung, th\u00F4ng tin sai s\u1EF1 th\u1EADt, vu kh\u1ED1ng, xuy\u00EAn t\u1EA1c, x\u00FAc ph\u1EA1m uy t\u00EDn c\u1EE7a c\u01A1 quan, t\u1ED5 ch\u1EE9c v\u00E0 danh d\u1EF1, nh\u00E2n ph\u1EA9m c\u1EE7a c\u00E1 nh\u00E2n;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "- \u0110\u0103ng t\u1EA3i th\u00F4ng tin kh\u00F4ng ph\u00F9 h\u1EE3p v\u1EDBi l\u1EE3i \u00EDch \u0111\u1EA5t n\u01B0\u1EDBc;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "- \u0110\u0103ng t\u1EA3i t\u00E1c ph\u1EA9m \u0111\u00E3 c\u00F3 quy\u1EBFt \u0111\u1ECBnh c\u1EA5m l\u01B0u h\u00E0nh ho\u1EB7c t\u1ECBch thu;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "- Qu\u1EA3ng c\u00E1o: n\u1ED9i dung \u0111\u0103ng t\u1EA3i c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng c\u00F3 ch\u1EE9a th\u00F4ng tin qu\u1EA3ng c\u00E1o ho\u1EB7c s\u1EED d\u1EE5ng c\u00E1c v\u0103n b\u1EA3n, h\u00ECnh \u1EA3nh, \u00E2m thanh, ho\u1EB7c video v\u00E0 th\u00F4ng tin qu\u1EA3ng c\u00E1o kh\u00E1c bao g\u1ED3m nh\u01B0ng kh\u00F4ng gi\u1EDBi h\u1EA1n nh\u1EEFng n\u1ED9i dung nh\u01B0: Tuy\u00EAn truy\u1EC1n ho\u1EB7c li\u00EAn quan \u0111\u1EBFn vi\u1EC7c treo m\u00E1y d\u00F9m/ mua b\u00E1n ID mua b\u00E1n t\u00E0i kho\u1EA3n, chuy\u00EAn b\u1EBB kh\u00F3a t\u00E0i kho\u1EA3n, spam b\u1ED9 s\u1EA3n ph\u1EA9m gi\u1EA3i tr\u00ED, v\u1EADt ph\u1EA9m ri\u00EAng, treo m\u00E1y ngo\u00E0i, h\u1ED7 tr\u1EE3, s\u1EA3n ph\u1EA9m, h\u00E0ng h\u00F3a \u2026 v\u00E0 c\u00E1c th\u00F4ng tin qu\u1EA3ng c\u00E1o kh\u00E1c m\u00E0 kh\u00F4ng c\u00F3 s\u1EF1 \u0111\u1ED3ng \u00FD b\u1EB1ng v\u0103n b\u1EA3n c\u1EE7a AVENGERS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "- X\u00E2m ph\u1EA1m ri\u00EAng t\u01B0: s\u1EED d\u1EE5ng h\u00ECnh \u1EA3nh c\u00E1 nh\u00E2n c\u1EE7a ng\u01B0\u1EDDi kh\u00E1c, c\u00F4ng khai nh\u1EEFng t\u01B0 li\u1EC7u c\u00E1 nh\u00E2n v\u00E0 nh\u1EEFng th\u00F4ng tin c\u1EE7a kh\u00E1c nh\u01B0 danh t\u00EDnh, \u0111\u1ECBa ch\u1EC9, s\u1ED1 \u0111i\u1EC7n tho\u1EA1i m\u00E0 ch\u01B0a \u0111\u01B0\u1EE3c s\u1EF1 \u0111\u1ED3ng \u00FD.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "- C\u00F4ng k\u00EDch ng\u01B0\u1EDDi kh\u00E1c: s\u1EED d\u1EE5ng h\u00ECnh \u1EA3nh, th\u00F4ng tin, \u00E2m thanh ho\u1EB7c video, x\u00FAc ph\u1EA1m, \u0111\u01B0a th\u00F4ng tin xuy\u00EAn t\u1EA1c, vu kh\u1ED1ng, nh\u1EA1o bang, x\u00FAc ph\u1EA1m uy t\u00EDn t\u1EDBi t\u1ED5 ch\u1EE9c, c\u00E1 nh\u00E2n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "- Vi ph\u1EA1m b\u1EA3n quy\u1EC1n: s\u1EED d\u1EE5ng n\u1ED9i dung kh\u00F4ng thu\u1ED9c b\u1EA3n quy\u1EC1n c\u1EE7a m\u00ECnh \u0111\u1EC3 \u0111\u0103ng t\u1EA3i l\u00EAn Sound Wave m\u00E0 kh\u00F4ng \u0111\u01B0\u1EE3c ph\u00E9p c\u1EE7a ch\u1EE7 quy\u1EC1n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "H\u00ECnh th\u1EE9c x\u1EED ph\u1EA1t 3, kh\u00F3a t\u00E0i kho\u1EA3n 30 ng\u00E0y ho\u1EB7c kh\u00F3a v\u0129nh vi\u1EC5n theo kho\u1EA3n 1 \u0111i\u1EC1u n\u00E0y \u0111\u01B0\u1EE3c \u00E1p d\u1EE5ng bao g\u1ED3m nh\u01B0ng kh\u00F4ng gi\u1EDBi h\u1EA1n \u0111\u1ED1i v\u1EDBi c\u00E1c h\u00E0nh vi sau:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "- Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng c\u00F3 h\u00E0nh vi l\u1EE3i d\u1EE5ng Sound Wave nh\u1EB1m ch\u1ED1ng ph\u00E1 n\u01B0\u1EDBc C\u1ED9ng H\u00F2a X\u00E3 H\u1ED9i Ch\u1EE7 Ngh\u0129a Vi\u1EC7t Nam. Ph\u00E1 ho\u1EA1i kh\u1ED1i \u0111\u1EA1i \u0111o\u00E0n k\u1EBFt to\u00E0n d\u00E2n t\u1ED9c.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "- Tuy\u00EAn truy\u1EC1n k\u00EDch \u0111\u1ED9ng chi\u1EBFn tranh x\u00E2m l\u01B0\u1EE3c, g\u00E2y h\u1EADn th\u00F9 gi\u1EEFa c\u00E1c d\u00E2n t\u1ED9c v\u00E0 nh\u00E2n d\u00E2n c\u00E1c n\u01B0\u1EDBc; k\u00EDch \u0111\u1ED9ng b\u1EA1o l\u1EF1c; truy\u1EC1n b\u00E1 t\u01B0 t\u01B0\u1EDFng ph\u1EA3n \u0111\u1ED9ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "- Xuy\u00EAn t\u1EA1c s\u1EF1 th\u1EADt l\u1ECBch s\u1EED, ph\u1EE7 nh\u1EADn th\u00E0nh t\u1EF1u c\u00E1ch m\u1EA1ng; x\u00FAc ph\u1EA1m d\u00E2n t\u1ED9c, danh nh\u00E2n, anh h\u00F9ng d\u00E2n t\u1ED9c.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "- \u0110\u0103ng t\u1EA3i, s\u1EED d\u1EE5ng h\u00ECnh \u1EA3nh b\u1EA3n \u0111\u1ED3 Vi\u1EC7t Nam nh\u01B0ng kh\u00F4ng th\u1EC3 hi\u1EC7n ho\u1EB7c th\u1EC3 hi\u1EC7n kh\u00F4ng \u0111\u00FAng ch\u1EE7 quy\u1EC1n qu\u1ED1c gia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "- S\u1EED D\u1EE5ng \u0111\u1EB7t t\u00EAn t\u00E0i kho\u1EA3n tr\u00F9ng t\u00EAn v\u1EDBi c\u00E1c v\u0129 nh\u00E2n, c\u00E1c v\u1ECB anh h\u00F9ng c\u1EE7a d\u00E2n t\u1ED9c, c\u00E1c v\u1ECB l\u00E3nh \u0111\u1EA1o c\u1EE7a \u0111\u1EA3ng v\u00E0 nh\u00E0 n\u01B0\u1EDBc, ho\u1EB7c Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng c\u00F3 s\u1EED d\u1EE5ng h\u00ECnh \u1EA3nh, video, ph\u00E1t ng\u00F4n, ch\u00E1t\u2026 c\u00F3 ch\u1EE9a th\u00F4ng tin b\u00E0n lu\u1EADn v\u1EC1 v\u1EA5n \u0111\u1EC1 ch\u00EDnh tr\u1ECB ho\u1EB7c ti\u1EBFt l\u1ED9 b\u00ED m\u1EADt nh\u00E0 n\u01B0\u1EDBc C\u1ED9ng h\u00F2a X\u00E3 h\u1ED9i Ch\u1EE7 ngh\u0129a Vi\u1EC7t Nam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "- Th\u00F4ng tin, h\u00ECnh \u1EA3nh, video khi\u00EAu d\u00E2m: Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng \u0111\u0103ng t\u1EA3i h\u00ECnh \u1EA3nh, \u00E2m thanh, video khi\u00EAu d\u00E2m, chat sex, video khi\u00EAu d\u00E2m \u1EDF m\u1EE9c \u0111\u1ED9 cao.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "- \u0110\u0103ng t\u1EA3i th\u00F4ng tin, qu\u1EA3ng c\u00E1o s\u1EA3n ph\u1EA9m, h\u00E0ng h\u00F3a, d\u1ECBch v\u1EE5 c\u1EA5m.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "- Lan truy\u1EC1n th\u00F4ng tin l\u1EEBa \u0111\u1EA3o: S\u1EED d\u1EE5ng v\u0103n b\u1EA3n, h\u00ECnh \u1EA3nh, \u00E2m thanh ho\u1EB7c video c\u00F3 ch\u1EE9a th\u00F4ng tin l\u1EEBa \u0111\u1EA3o gi\u1EA3 m\u1EA1o c\u00E1c t\u1ED5 ch\u1EE9c ho\u1EB7c c\u00E1 nh\u00E2n; gian l\u1EADn, l\u1EEBa \u0111\u1EA3o t\u00E0i s\u1EA3n c\u1EE7a ng\u01B0\u1EDDi kh\u00E1c ho\u1EB7c t\u00E0i kho\u1EA3n Sound Wave.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "- Ph\u00E1 ho\u1EA1i h\u1EC7 th\u1ED1ng nghe nh\u1EA1c tr\u1EF1c tuy\u1EBFn Sound Wave: Th\u00E0nh vi\u00EAn l\u1EE3i d\u1EE5ng vi\u1EC7c s\u1EED d\u1EE5ng s\u1EA3n ph\u1EA9m \u0111\u1EC3 x\u00E2m nh\u1EADp v\u00E0o h\u1EC7 th\u1ED1ng m\u00E1y ch\u1EE7 nh\u1EB1m ph\u00E1 ho\u1EA1i s\u1EA3n ph\u1EA9m ho\u1EB7c c\u1EA3n tr\u1EDF vi\u1EC7c truy c\u1EADp th\u00F4ng tin. Th\u00E0nh vi\u00EAn s\u1EED d\u1EE5ng c\u00F4ng c\u1EE5 k\u1EF9 thu\u1EADt nh\u1EB1m t\u0103ng \u0111i\u1EC3m ho\u1EA1t \u0111\u1ED9ng, v\u1EADt ph\u1EA9m ho\u1EB7c nh\u1EB1m treo m\u00E1y, spam chat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "- S\u1EED d\u1EE5ng Sound Wave \u0111\u1EC3 l\u00F4i k\u00E9o t\u1ED5 ch\u1EE9c h\u1ED9i h\u1ECDp th\u1EF1c t\u1EBF \u1EDF b\u00EAn ngo\u00E0i th\u1EF1c hi\u1EC7n c\u00E1c h\u00E0nh vi vi ph\u1EA1m ph\u00E1p lu\u1EADt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "\u0110i\u1EC1u 14. B\u1EA3n quy\u1EC1n v\u00E0 quy tr\u00ECnh b\u00E1o c\u00E1o vi ph\u1EA1m b\u1EA3n quy\u1EC1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "T\u1EA5t c\u1EA3 quy\u1EC1n S\u1EDF H\u1EEFu Tr\u00ED Tu\u1EC7 c\u1EE7a ho\u1EB7c li\u00EAn quan \u0111\u1EBFn Sound Wave (ngo\u1EA1i tr\u1EEB quy\u1EC1n s\u1EDF h\u1EEFu tr\u00ED tu\u1EC7 li\u00EAn quan t\u1EDBi c\u00E1c n\u1ED9i dung do Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng \u0111\u0103ng t\u1EA3i) thu\u1ED9c quy\u1EC1n s\u1EDF h\u1EEFu to\u00E0n v\u1EB9n v\u00E0 duy nh\u1EA5t c\u1EE7a AVENGERS ho\u1EB7c \u0111\u01B0\u1EE3c c\u1EA5p ph\u00E9p h\u1EE3p ph\u00E1p cho AVENGERS s\u1EED d\u1EE5ng bao g\u1ED3m c\u1EA3 c\u00E1c phi\u00EAn b\u1EA3n c\u1EADp nh\u1EADt, n\u00E2ng c\u1EA5p.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "Tr\u1EEB khi \u0111\u01B0\u1EE3c s\u1EF1 \u0111\u1ED3ng \u00FD c\u1EE7a AVENGERS, Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng kh\u00F4ng \u0111\u01B0\u1EE3c ph\u00E9p s\u1EED d\u1EE5ng, sao ch\u00E9p, xu\u1EA5t b\u1EA3n, t\u00E1i s\u1EA3n xu\u1EA5t, truy\u1EC1n ho\u1EB7c ph\u00E2n ph\u00E1t b\u1EB1ng b\u1EA5t c\u1EE9 h\u00ECnh th\u1EE9c n\u00E0o, b\u1EA5t c\u1EE9 th\u00E0nh ph\u1EA7n n\u00E0o c\u00E1c quy\u1EC1n S\u1EDF H\u1EEFu Tr\u00ED Tu\u1EC7 \u0111\u1ED1i v\u1EDBi s\u1EA3n ph\u1EA9m Sound Wave.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "T\u1EA1i c\u00E1c khu v\u1EF1c Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng \u0111\u01B0\u1EE3c ph\u00E9p \u0111\u0103ng t\u1EA3i n\u1ED9i dung, Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng c\u00F3 th\u1EC3 chia s\u1EBB th\u00F4ng tin \u0111\u01B0\u1EE3c ph\u00E9p d\u01B0\u1EDBi c\u00E1c \u0111\u1ECBnh d\u1EA1ng Sound Wave m\u1EB7c \u0111\u1ECBnh v\u00E0 Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng ph\u1EA3i t\u1EF1 ch\u1ECBu tr\u00E1ch nhi\u1EC7m v\u1EC1 t\u00EDnh h\u1EE3p ph\u00E1p v\u00E0 c\u00E1c tr\u00E1ch nhi\u1EC7m ph\u00E1p l\u00FD v\u1EDBi c\u00E1c n\u1ED9i dung, th\u00F4ng tin, h\u00ECnh \u1EA3nh v\u00E0 b\u1EA5t k\u1EF3 s\u1EF1 chia s\u1EBB n\u00E0o kh\u00E1c. Tuy nhi\u00EAn, trong m\u1ECDi tr\u01B0\u1EDDng h\u1EE3p, Sound Wave v\u1EABn \u0111\u01B0\u1EE3c b\u1EA3o l\u01B0u quy\u1EC1n x\u1EED l\u00FD c\u00E1c th\u00F4ng tin \u0111\u0103ng t\u1EA3i, ph\u00F9 h\u1EE3p v\u1EDBi thu\u1EA7n phong m\u1EF9 t\u1EE5c, c\u00E1c quy t\u1EAFc \u0111\u1EA1o \u0111\u1EE9c v\u00E0 c\u00E1c quy t\u1EAFc \u0111\u1EA3m b\u1EA3o an ninh qu\u1ED1c gia, v\u00E0 c\u00F3 to\u00E0n quy\u1EC1n cho ph\u00E9p ho\u1EB7c kh\u00F4ng cho ph\u00E9p n\u1ED9i dung c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng xu\u1EA5t hi\u1EC7n ho\u1EB7c t\u1ED3n t\u1EA1i tr\u00EAn Sound Wave.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "AVENGERS c\u00F3 to\u00E0n quy\u1EC1n, bao g\u1ED3m nh\u01B0ng kh\u00F4ng gi\u1EDBi h\u1EA1n trong c\u00E1c quy\u1EC1n t\u00E1c gi\u1EA3, th\u01B0\u01A1ng hi\u1EC7u, b\u00ED m\u1EADt kinh doanh, nh\u00E3n hi\u1EC7u v\u00E0 c\u00E1c quy\u1EC1n S\u1EDF H\u1EEFu Tr\u00ED Tu\u1EC7 kh\u00E1c trong s\u1EA3n ph\u1EA9m Sound Wave c\u1EE7a AVENGERS. Vi\u1EC7c s\u1EED d\u1EE5ng quy\u1EC1n v\u00E0 s\u1EDF h\u1EEFu c\u1EE7a AVENGERS c\u1EA7n ph\u1EA3i \u0111\u01B0\u1EE3c AVENGERS cho ph\u00E9p tr\u01B0\u1EDBc b\u1EB1ng v\u0103n b\u1EA3n. Ngo\u00E0i vi\u1EC7c \u0111\u01B0\u1EE3c c\u1EA5p ph\u00E9p b\u1EB1ng v\u0103n b\u1EA3n, AVENGERS kh\u00F4ng c\u1EA5p ph\u00E9p d\u01B0\u1EDBi b\u1EA5t k\u1EF3 h\u00ECnh th\u1EE9c n\u00E0o kh\u00E1c cho d\u00F9 \u0111\u00F3 l\u00E0 h\u00ECnh th\u1EE9c c\u00F4ng b\u1ED1 hay h\u00E0m \u00FD \u0111\u1EC3 Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng th\u1EF1c hi\u1EC7n c\u00E1c quy\u1EC1n tr\u00EAn. V\u00E0 do v\u1EADy, Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng kh\u00F4ng c\u00F3 quy\u1EC1n s\u1EED d\u1EE5ng s\u1EA3n ph\u1EA9m c\u1EE7a ch\u00FAng t\u00F4i v\u00E0o m\u1EE5c \u0111\u00EDch th\u01B0\u01A1ng m\u1EA1i m\u00E0 kh\u00F4ng c\u00F3 s\u1EF1 cho ph\u00E9p b\u1EB1ng v\u0103n b\u1EA3n c\u1EE7a ch\u00FAng t\u00F4i tr\u01B0\u1EDBc \u0111\u00F3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng \u0111\u1ED3ng \u00FD \u0111\u1EC3 AVENGERS t\u1EF1 do s\u1EED d\u1EE5ng, ti\u1EBFt l\u1ED9, \u00E1p d\u1EE5ng v\u00E0 s\u1EEDa \u0111\u1ED5i b\u1EA5t k\u1EF3 \u1EE9ng d\u1EE5ng, \u00FD t\u01B0\u1EDFng, kh\u00E1i ni\u1EC7m, c\u00E1ch th\u1EE9c, \u0111\u1EC1 xu\u1EA5t, g\u1EE3i \u00FD, b\u00ECnh lu\u1EADn ho\u1EB7c h\u00ECnh th\u1EE9c th\u00F4ng b\u00E1o n\u00E0o kh\u00E1c m\u00E0 Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng cung c\u1EA5p th\u00F4ng qua vi\u1EC7c s\u1EED d\u1EE5ng s\u1EA3n ph\u1EA9m Sound Wave m\u1ED9t c\u00E1ch ho\u00E0n to\u00E0n mi\u1EC5n ph\u00ED. Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng \u0111\u1ED3ng \u00FD t\u1EEB b\u1ECF b\u1EA5t k\u1EF3 quy\u1EC1n v\u00E0 y\u00EAu c\u1EA7u v\u1EDBi b\u1EA5t k\u1EF3 kho\u1EA3n ti\u1EC1n th\u01B0\u1EDFng, ph\u00ED, nhu\u1EADn b\u00FAt, l\u1EC7 ph\u00ED li\u00EAn quan \u0111\u1EBFn vi\u1EC7c AVENGERS s\u1EED d\u1EE5ng, ti\u1EBFt l\u1ED9, \u00E1p d\u1EE5ng, ch\u1EC9nh s\u1EEDa b\u1EA5t k\u1EF3 n\u1ED9i dung c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "Quy tr\u00ECnh th\u00F4ng b\u00E1o vi ph\u1EA1m b\u1EA3n quy\u1EC1n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "- N\u1EBFu Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng tin r\u1EB1ng b\u1EA5t k\u1EF3 n\u1ED9i dung, t\u00E0i li\u1EC7u, h\u00ECnh \u1EA3nh, video ho\u1EB7c c\u00E1c t\u00E0i li\u1EC7u kh\u00E1c \u0111\u01B0\u1EE3c cung c\u1EA5p th\u00F4ng qua d\u1ECBch v\u1EE5 Sound Wave, bao g\u1ED3m c\u1EA3 m\u1ED9t li\u00EAn k\u1EBFt vi ph\u1EA1m quy\u1EC1n S\u1EDF H\u1EEFu Tr\u00ED Tu\u1EC7 c\u1EE7a b\u1EA1n, vui l\u00F2ng th\u00F4ng b\u00E1o cho AVENGERS v\u1EC1 vi\u1EC7c vi ph\u1EA1m b\u1EA3n quy\u1EC1n theo quy tr\u00ECnh c\u1EE5 th\u1EC3 \u0111\u01B0\u1EE3c quy \u0111\u1ECBnh d\u01B0\u1EDBi \u0111\u00E2y.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "- AVENGERS s\u1EBD x\u1EED l\u00FD t\u1EEBng th\u00F4ng b\u00E1o vi ph\u1EA1m b\u1EA3n quy\u1EC1n m\u00E0 AVENGERS nh\u1EADn \u0111\u01B0\u1EE3c v\u00E0 x\u1EED l\u00FD theo quy \u0111\u1ECBnh c\u1EE7a ph\u00E1p lu\u1EADt s\u1EDF h\u1EEFu tr\u00ED tu\u1EC7.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "- \u0110\u1EC3 gi\u00FAp AVENGERS c\u00F3 \u0111\u1EE7 c\u01A1 s\u1EDF \u0111\u00E1p \u1EE9ng c\u00E1c y\u00EAu c\u1EA7u c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng, vui l\u00F2ng g\u1EEDi th\u00F4ng b\u00E1o b\u1EB1ng v\u0103n b\u1EA3n v\u1EDBi c\u00E1c th\u00F4ng tin sau:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](417, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, " + Ch\u1EEF k\u00FD th\u1EADt c\u1EE7a ng\u01B0\u1EDDi \u0111\u01B0\u1EE3c \u1EE7y quy\u1EC1n thay m\u1EB7t cho ch\u1EE7 s\u1EDF h\u1EEFu c\u1EE7a m\u1ED9t s\u1EA3n ph\u1EA9m \u0111\u1ED9c quy\u1EC1n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](419, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, " + M\u00F4 t\u1EA3 t\u00E1c ph\u1EA9m c\u00F3 b\u1EA3n quy\u1EC1n m\u00E0 Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng cho l\u00E0 b\u1ECB vi ph\u1EA1m.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](421, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, " + M\u00F4 t\u1EA3 v\u1EC1 n\u01A1i m\u00E0 c\u00E1c t\u00E0i li\u1EC7u Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng cho l\u00E0 vi ph\u1EA1m n\u1EB1m tr\u00EAn c\u00E1c d\u1ECBch v\u1EE5 Sound Wave \u0111\u1EE7 \u0111\u1EC3 cho ph\u00E9p Sound Wave x\u00E1c \u0111\u1ECBnh v\u1ECB tr\u00ED t\u00E0i li\u1EC7u \u0111\u00F3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](423, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, " + Th\u00F4ng tin li\u00EAn h\u1EC7 c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng nh\u01B0 \u0111\u1ECBa ch\u1EC9, s\u1ED1 \u0111i\u1EC7n tho\u1EA1i, email \u0111\u1EC3 Sound Wave c\u00F3 th\u1EC3 li\u00EAn h\u1EC7 v\u1EDBi b\u1EA1n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](425, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, " + Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng tuy\u00EAn b\u1ED1 r\u1EB1ng, Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng tin t\u01B0\u1EDFng vi\u1EC7c s\u1EED d\u1EE5ng n\u1ED9i dung \u0111\u00F3 l\u00E0 kh\u00F4ng \u0111\u01B0\u1EE3c ph\u00E9p c\u1EE7a ch\u1EE7 s\u1EDF h\u1EEFu quy\u1EC1n t\u00E1c gi\u1EA3, \u0111\u1EA1i l\u00FD \u0111\u1ED9c quy\u1EC1n ho\u1EB7c ph\u00E1p lu\u1EADt;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](427, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, " + Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng tuy\u00EAn b\u1ED1 r\u1EB1ng c\u00E1c th\u00F4ng tin trong th\u00F4ng b\u00E1o c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng l\u00E0 ch\u00EDnh x\u00E1c v\u00E0 ch\u1EA5p nh\u1EADn ch\u1ECBu tr\u00E1ch nhi\u1EC7m tr\u01B0\u1EDBc ph\u00E1p lu\u1EADt v\u1EC1 c\u00E1c th\u00F4ng tin \u0111\u00F3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "\u0110i\u1EC1u 15. Hi\u1EC7u l\u1EF1c c\u1EE7a th\u1ECFa thu\u1EADn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "C\u00E1c \u0111i\u1EC1u kho\u1EA3n quy \u0111\u1ECBnh t\u1EA1i Th\u1ECFa Thu\u1EADn n\u00E0y \u0111\u01B0\u1EE3c quy \u0111\u1ECBnh tr\u00EAn website c\u00F3 th\u1EC3 \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt, ch\u1EC9nh s\u1EEDa b\u1EA5t c\u1EE9 l\u00FAc n\u00E0o m\u00E0 kh\u00F4ng c\u1EA7n ph\u1EA3i th\u00F4ng b\u00E1o tr\u01B0\u1EDBc t\u1EDBi Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng. AVENGERS s\u1EBD c\u00F4ng b\u1ED1 r\u00F5 tr\u00EAn Website, di\u1EC5n \u0111\u00E0n v\u1EC1 nh\u1EEFng thay \u0111\u1ED5i, b\u1ED5 sung \u0111\u00F3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "Trong tr\u01B0\u1EDDng h\u1EE3p m\u1ED9t ho\u1EB7c m\u1ED9t s\u1ED1 \u0111i\u1EC1u kho\u1EA3n Th\u1ECFa Thu\u1EADn cung c\u1EA5p v\u00E0 s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5 nghe nh\u1EA1c tr\u1EF1c tuy\u1EBFn Sound Wave n\u00E0y xung \u0111\u1ED9t v\u1EDBi c\u00E1c quy \u0111\u1ECBnh c\u1EE7a lu\u1EADt ph\u00E1p Vi\u1EC7t Nam, \u0111i\u1EC1u kho\u1EA3n \u0111\u00F3 s\u1EBD \u0111\u01B0\u1EE3c ch\u1EC9nh s\u1EEDa cho ph\u00F9 h\u1EE3p v\u1EDBi quy \u0111\u1ECBnh ph\u00E1p lu\u1EADt hi\u1EC7n h\u00E0nh, ph\u1EA7n c\u00F2n l\u1EA1i c\u1EE7a Th\u1ECFa Thu\u1EADn v\u1EABn gi\u1EEF nguy\u00EAn gi\u00E1 tr\u1ECB.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div[_ngcontent-%COMP%] {\r\n  color: #1b1b1b;\r\n  width: 80%;\r\n  margin: auto;\r\n  padding: 100px;\r\n  border: solid 2px;\r\n  background-color: honeydew;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm0tb2YtdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUIiLCJmaWxlIjoidGVybS1vZi11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gIGNvbG9yOiAjMWIxYjFiO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwMHB4O1xyXG4gIGJvcmRlcjogc29saWQgMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGhvbmV5ZGV3O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermOfUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-term-of-user',
                templateUrl: './term-of-user.component.html',
                styleUrls: ['./term-of-user.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bZLO":
/*!***********************************************************!*\
  !*** ./src/app/song/detail-song/detail-song.component.ts ***!
  \***********************************************************/
/*! exports provided: DetailSongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailSongComponent", function() { return DetailSongComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_song_song_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/song/song.service */ "r1xU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_like_like_song_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/like/like-song.service */ "87Ka");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/user/user.service */ "rwBg");
/* harmony import */ var _comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comment-list/comment-list.component */ "27X8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function DetailSongComponent_div_26_div_1_a_16_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailSongComponent_div_26_div_1_a_16_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const songRecommend_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.likeSong(songRecommend_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailSongComponent_div_26_div_1_a_17_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailSongComponent_div_26_div_1_a_17_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const songRecommend_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.likeSong(songRecommend_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/songs/detail", a1]; };
function DetailSongComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailSongComponent_div_26_div_1_Template_img_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const songRecommend_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.playThisSong(songRecommend_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DetailSongComponent_div_26_div_1_a_16_Template, 2, 0, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DetailSongComponent_div_26_div_1_a_17_Template, 2, 0, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const songRecommend_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", songRecommend_r1.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, songRecommend_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](songRecommend_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](songRecommend_r1.singer.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !songRecommend_r1.isLiked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", songRecommend_r1.isLiked);
} }
function DetailSongComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailSongComponent_div_26_div_1_Template, 18, 8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const songRecommend_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", songRecommend_r1.id != ctx_r0.song.id);
} }
class DetailSongComponent {
    constructor(songService, activatedRoute, likeService, authService, userService) {
        this.songService = songService;
        this.activatedRoute = activatedRoute;
        this.likeService = likeService;
        this.authService = authService;
        this.userService = userService;
    }
    ngOnInit() {
        this.authService.currentUser.subscribe(value => {
            this.userService.getUserByUsername(value.username).subscribe(value1 => {
                this.user = value1;
            });
        });
        this.activatedRoute.paramMap.subscribe((param) => {
            this.id = +param.get('id');
            this.getSongById(this.id);
        });
    }
    playThisSong(id) {
        this.songService.countViews(id).subscribe();
        this.songService.getSongById(id).subscribe(value => {
            this.song = value;
            localStorage.setItem('songSelected', JSON.stringify(this.song));
            window.location.reload();
        });
    }
    getSongById(id) {
        this.songService.getSongById(this.id).subscribe(value => {
            this.song = value;
            this.categoryId = this.song.category.id;
            this.songService.getSongByCategoryId(this.categoryId).subscribe(value1 => {
                this.songsRecommend = value1;
            });
        });
    }
}
DetailSongComponent.ɵfac = function DetailSongComponent_Factory(t) { return new (t || DetailSongComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_song_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_like_like_song_service__WEBPACK_IMPORTED_MODULE_3__["LikeSongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
DetailSongComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailSongComponent, selectors: [["app-detail-song"]], decls: 198, vars: 6, consts: [[2, "width", "60%", "margin", "auto"], [1, "container"], [1, "container", 2, "height", "220px", "background-color", "#240b36"], [1, "row"], [1, "col-3"], ["id", "userImage", 2, "margin-top", "0px", "margin-left", "0px", 3, "src", "click"], [1, "col-lg-9"], [1, "container", "col-sm-6"], [1, "container", "container-flex"], ["class", "playlist-next-item flex-space", 4, "ngFor", "ngForOf"], ["id", "show"], [1, "playlist-aside"], [1, "similar-artists"], [1, "similar-artists-title", "flex-space"], ["href", "", 1, "display-none-960"], [1, "similar-artists-sub"], [1, "similar-artists-entry", "flex-space"], [1, "similar-artists-image"], ["src", "https://image.thanhnien.vn/768/uploaded/ngocthanh/2020_07_05/j02-anhnoibat_kieu.jpg", 2, "height", "50px", "width", "50px", "object-fit", "cover", "border-radius", "5px"], [1, "similar-artists-info"], [1, "similar-artists-info-name"], [1, "similar-artists-info-sub"], [1, "similar-artists-options"], [1, "similar-artists-options-menu"], ["aria-hidden", "true", 1, "fa", "fa-bars"], ["src", "https://tudienwiki.com/wp-content/uploads/2020/09/Binz.png", 2, "height", "50px", "width", "50px", "object-fit", "cover", "border-radius", "5px"], ["src", "https://static2.yan.vn/YanNews/2167221/201905/tieu-su-su-nghiep-va-cuoc-doi-cua-ca-si-min-f0ea35dc.jpg", 2, "height", "50px", "width", "50px", "object-fit", "cover", "border-radius", "5px"], [1, "recently-played"], [1, "recently-played-title", "similar-artists-title", "flex-space"], [1, "queue-entry", "flex-space"], [1, "queue-number"], [1, "queue-entry-image"], ["src", "src/song_pic1.jpg"], [1, "queue-entry-info"], [1, "language-sub", "latest-release-sub", "queue-entry-sub"], [1, "like-icon"], ["href", "#"], ["aria-hidden", "true", 1, "fa", "fa-heart-o"], ["src", "src/bad_guy.jpg"], [1, "playlist-next-item", "flex-space"], ["class", "playlist-next-item-entry flex-space", 4, "ngIf"], [1, "playlist-next-item-entry", "flex-space"], [1, "playlist-next-item-entry-info", "flex-space"], [2, "width", "10px"], [1, "playlist-next-item-entry-number", 2, "width", "50px"], [1, "playlist-next-item-entry-info-image"], ["id", "img", 2, "height", "50px", "width", "50px", "object-fit", "cover", 3, "src", "click"], [1, "playlist-next-item-entry-info-name", 2, "width", "100px", "word-break", "break-all"], [3, "routerLink"], ["id", "songName"], [1, "playlist-next-item-entry-info-name-sub"], [1, "playlist-next-item-entry-icons", "flex-space"], ["href", ""], ["id", "add", "aria-hidden", "true", 1, "fa", "fa-plus"], [3, "click", 4, "ngIf"], [3, "click"], ["id", "unlike", "aria-hidden", "true", 1, "fa", "fa-heart"], ["id", "like", "aria-hidden", "true", 1, "fa", "fa-heart"]], template: function DetailSongComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailSongComponent_Template_img_click_5_listener() { return ctx.playThisSong(ctx.song.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-comment-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "You May Like");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DetailSongComponent_div_26_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "View More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "aside", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Similar Artists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Jack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "V-Pop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "4:44");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Binz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Hip Hop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "4:44");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "V-Pop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "4:44");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Recently Played");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Blinding lights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "The Weeknd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Blinding lights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "The Weeknd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Blinding lights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "The Weeknd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "04");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Blinding lights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "The Weeknd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "05");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Blinding lights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "The Weeknd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "06");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Blinding lights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "The Weeknd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "07");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Blinding lights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "The Weeknd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "08");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Blinding lights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "The Weeknd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.song.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.song.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.song.singer.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.song.category.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.song.views, " views | 0 like");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.songsRecommend);
    } }, directives: [_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_6__["CommentListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["#userImage[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n  outline: 1px white;\r\n  box-shadow: 0 0 5px rgba(81, 203, 238, 1);\r\n  height: 220px;\r\n  width: 220px;\r\n  border-radius: 5px;\r\n  object-fit: cover;\r\n  transition: 0.5s;\r\n}\r\n\r\n#unlike[_ngcontent-%COMP%] {\r\n  transition: 0.2s;\r\n  cursor: pointer;\r\n  color: transparent;\r\n  -webkit-text-stroke-width: 1px;\r\n  -webkit-text-stroke-color: white;\r\n}\r\n\r\n#like[_ngcontent-%COMP%] {\r\n  -webkit-text-stroke-width: 1px;\r\n  -webkit-text-stroke-color: #FF0099;\r\n  transition: 0.2s;\r\n  cursor: pointer;\r\n  color: #FF0099;\r\n}\r\n\r\n#unlikeHistorySong[_ngcontent-%COMP%] {\r\n  transition: 0.2s;\r\n  cursor: pointer;\r\n  color: transparent;\r\n  -webkit-text-stroke-width: 1px;\r\n  -webkit-text-stroke-color: white;\r\n}\r\n\r\n#unlikeHistorySong[_ngcontent-%COMP%]:hover {\r\n  transition: 0.2s;\r\n  transform: scale(1.1);\r\n  cursor: pointer;\r\n}\r\n\r\n#userImage[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.05);\r\n  transition: 0.5s;\r\n  box-shadow: 0 0 5px rgba(81, 203, 238, 1);\r\n  border: 1px solid rgba(81, 203, 238, 1);\r\n  cursor: pointer;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n  font-size: 50px;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  font-weight: lighter;\r\n}\r\n\r\n#show[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-left: 50%;\r\n  width: 200px;\r\n  height: 50px;\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\n#add[_ngcontent-%COMP%]:hover {\r\n  color: #0779e4;\r\n  transition: 0.2s;\r\n  text-shadow: 0 0 5px rgba(81, 203, 238, 0.2);\r\n  cursor: pointer;\r\n}\r\n\r\n#like[_ngcontent-%COMP%]:hover {\r\n  color: #FF0099;\r\n  transition: 0.2s;\r\n  text-shadow: 0 0 5px rgba(81, 203, 238, 0.2);\r\n  cursor: pointer;\r\n}\r\n\r\n#songName[_ngcontent-%COMP%] {\r\n  transition: 0.5s;\r\n  width: 200px;\r\n  color: white;\r\n}\r\n\r\n#songName[_ngcontent-%COMP%]:hover {\r\n  font-size: 18px;\r\n  transition: 0.5s;\r\n  text-shadow: 0 0 5px rgba(81, 203, 238, 1);\r\n}\r\n\r\n#img[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  display: block;\r\n  border-radius: 5px;\r\n}\r\n\r\n#img[_ngcontent-%COMP%]:hover {\r\n  transition: 0.5s;\r\n  box-shadow: 0 0 5px rgba(81, 203, 238, 1);\r\n  border: 1px solid rgba(81, 203, 238, 1);\r\n  cursor: pointer;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n  border-radius: 3px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n\r\n\r\n.playlist-aside[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n}\r\n\r\n.similar-artists[_ngcontent-%COMP%], .recently-played[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.similar-artists-title[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n}\r\n\r\n.similar-artists-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 1em;\r\n  margin-bottom: 0.5em;\r\n  padding: 0;\r\n  font-size: 1.2rem;\r\n  white-space: nowrap;\r\n  width: 70%;\r\n}\r\n\r\n.similar-artists-sub[_ngcontent-%COMP%] {\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 1em;\r\n  margin-bottom: 0.5em;\r\n  padding: 0;\r\n  font-size: 0.7rem;\r\n  color: #9c9da7;\r\n  white-space: nowrap;\r\n  width: 25%;\r\n}\r\n\r\n.similar-artists-entry[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  align-items: center;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.similar-artists-image[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n}\r\n\r\n.similar-artists-info[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n}\r\n\r\n.similar-artists-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.similar-artists-info-sub[_ngcontent-%COMP%] {\r\n  color: #9c9da7;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.similar-artists-options[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  color: #9c9da7;\r\n  font-size: 0.7rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.similar-artists-options-menu[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.2em;\r\n}\r\n\r\n.similar-artists-options[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.container-flex[_ngcontent-%COMP%], .flex-space[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.container-flex[_ngcontent-%COMP%] {\r\n  margin-bottom: 6em;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  width: 75%;\r\n}\r\n\r\naside[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n}\r\n\r\n\r\n\r\n.playlist-next-item[_ngcontent-%COMP%] {\r\n  flex-direction: column;\r\n}\r\n\r\n.playlist-next-item-entry[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background: #1a1e33;\r\n  padding: 0.5em 0;\r\n  margin: 0.5em 0;\r\n}\r\n\r\n.playlist-next-item-entry[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.playlist-next-item-entry-info[_ngcontent-%COMP%] {\r\n  width: 35%;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.playlist-next-item-entry-info-image[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n}\r\n\r\n.playlist-next-item-entry-icons[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  width: 20%;\r\n  justify-content: space-around;\r\n}\r\n\r\n.playlist-next-item-entry-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #9c9da7;\r\n}\r\n\r\n.playlist-next-item-entry-number[_ngcontent-%COMP%], .playlist-next-item-entry-info-name-sub[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  color: #9c9da7;\r\n}\r\n\r\n@media screen and (max-width: 960px) and (min-width: 650px) {\r\n  .display-none-960[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 750px) {\r\n  .similar-artists-info-name[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 750px) and (min-width: 651px) {\r\n  .featured-playlist-writeup[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 0.6rem;\r\n  }\r\n\r\n  .playlist-next-item-entry-info[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n  .playlist-aside[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .similar-artists-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .similar-artists-sub[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .similar-artists-info-name[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n  }\r\n\r\n  .similar-artists-info-sub[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 550px) {\r\n  .featured-playlist[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .featured-playlist-image[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .featured-playlist-details[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n  }\r\n\r\n  .featured-playlist-info-top[_ngcontent-%COMP%] {\r\n    margin-top: 0.5em;\r\n  }\r\n\r\n  .featured-playlist-writeup[_ngcontent-%COMP%] {\r\n    margin-top: 0.5em;\r\n  }\r\n\r\n  .featured-playlist-buttons[_ngcontent-%COMP%] {\r\n    margin: 0.5em 0;\r\n  }\r\n\r\n  .playlist-next-item-entry-info[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 365px) {\r\n  .similar-artists-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .playlist-next-item-entry-info[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1zb25nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIseUNBQXlDO0VBQ3pDLHVDQUF1QztFQUN2QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsNENBQTRDO0VBQzVDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDRDQUE0QztFQUM1QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlDQUF5QztFQUN6Qyx1Q0FBdUM7RUFDdkMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTs7eUJBRXlCOztBQUV6QjtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFHQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUEscUJBQXFCOztBQUNyQjtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFHQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoiZGV0YWlsLXNvbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN1c2VySW1hZ2Uge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgb3V0bGluZTogMXB4IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSg4MSwgMjAzLCAyMzgsIDEpO1xyXG4gIGhlaWdodDogMjIwcHg7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4jdW5saWtlIHtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMXB4O1xyXG4gIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jbGlrZSB7XHJcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMXB4O1xyXG4gIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6ICNGRjAwOTk7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICNGRjAwOTk7XHJcbn1cclxuXHJcbiN1bmxpa2VIaXN0b3J5U29uZyB7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDFweDtcclxuICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI3VubGlrZUhpc3RvcnlTb25nOmhvdmVyIHtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4jdXNlckltYWdlOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDgxLCAyMDMsIDIzOCwgMSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg4MSwgMjAzLCAyMzgsIDEpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaDEge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG59XHJcblxyXG4jc2hvdyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4jYWRkOmhvdmVyIHtcclxuICBjb2xvcjogIzA3NzllNDtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4IHJnYmEoODEsIDIwMywgMjM4LCAwLjIpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2xpa2U6aG92ZXIge1xyXG4gIGNvbG9yOiAjRkYwMDk5O1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiYSg4MSwgMjAzLCAyMzgsIDAuMik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jc29uZ05hbWUge1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI3NvbmdOYW1lOmhvdmVyIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICB0ZXh0LXNoYWRvdzogMCAwIDVweCByZ2JhKDgxLCAyMDMsIDIzOCwgMSk7XHJcbn1cclxuXHJcbiNpbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbiNpbWc6aG92ZXIge1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDgxLCAyMDMsIDIzOCwgMSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg4MSwgMjAzLCAyMzgsIDEpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuZGl2IHtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRQTEFZTElTVCBQQUdFXHJcbioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4ucGxheWxpc3QtYXNpZGUge1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5zaW1pbGFyLWFydGlzdHMsIC5yZWNlbnRseS1wbGF5ZWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLnNpbWlsYXItYXJ0aXN0cy10aXRsZSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNpbWlsYXItYXJ0aXN0cy10aXRsZSBoMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLnNpbWlsYXItYXJ0aXN0cy1zdWIge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxuICBjb2xvcjogIzljOWRhNztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbi5zaW1pbGFyLWFydGlzdHMtZW50cnkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4uc2ltaWxhci1hcnRpc3RzLWltYWdlIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4uc2ltaWxhci1hcnRpc3RzLWluZm8ge1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi5zaW1pbGFyLWFydGlzdHMtaW5mbyBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnNpbWlsYXItYXJ0aXN0cy1pbmZvLXN1YiB7XHJcbiAgY29sb3I6ICM5YzlkYTc7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbn1cclxuXHJcbi5zaW1pbGFyLWFydGlzdHMtb3B0aW9ucyB7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBjb2xvcjogIzljOWRhNztcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNpbWlsYXItYXJ0aXN0cy1vcHRpb25zLW1lbnUge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMmVtO1xyXG59XHJcblxyXG4uc2ltaWxhci1hcnRpc3RzLW9wdGlvbnMgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsZXgsIC5mbGV4LXNwYWNlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbGV4IHtcclxuICBtYXJnaW4tYm90dG9tOiA2ZW07XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIHdpZHRoOiA3NSU7XHJcbn1cclxuXHJcbmFzaWRlIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4vKlBsYXlsaXN0IG5leHQgaXRlbSovXHJcbi5wbGF5bGlzdC1uZXh0LWl0ZW0ge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5wbGF5bGlzdC1uZXh0LWl0ZW0tZW50cnkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMxYTFlMzM7XHJcbiAgcGFkZGluZzogMC41ZW0gMDtcclxuICBtYXJnaW46IDAuNWVtIDA7XHJcbn1cclxuXHJcbi5wbGF5bGlzdC1uZXh0LWl0ZW0tZW50cnkgcCB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5wbGF5bGlzdC1uZXh0LWl0ZW0tZW50cnktaW5mbyB7XHJcbiAgd2lkdGg6IDM1JTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4ucGxheWxpc3QtbmV4dC1pdGVtLWVudHJ5LWluZm8taW1hZ2Uge1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5wbGF5bGlzdC1uZXh0LWl0ZW0tZW50cnktaWNvbnMge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLnBsYXlsaXN0LW5leHQtaXRlbS1lbnRyeS1pY29ucyBhIHtcclxuICBjb2xvcjogIzljOWRhNztcclxufVxyXG5cclxuLnBsYXlsaXN0LW5leHQtaXRlbS1lbnRyeS1udW1iZXIsIC5wbGF5bGlzdC1uZXh0LWl0ZW0tZW50cnktaW5mby1uYW1lLXN1YiB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgY29sb3I6ICM5YzlkYTc7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkgYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XHJcbiAgLmRpc3BsYXktbm9uZS05NjAge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgLnNpbWlsYXItYXJ0aXN0cy1pbmZvLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkgYW5kIChtaW4td2lkdGg6IDY1MXB4KSB7XHJcbiAgLmZlYXR1cmVkLXBsYXlsaXN0LXdyaXRldXAgcCB7XHJcbiAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICB9XHJcblxyXG4gIC5wbGF5bGlzdC1uZXh0LWl0ZW0tZW50cnktaW5mbyB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAucGxheWxpc3QtYXNpZGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuc2ltaWxhci1hcnRpc3RzLXRpdGxlIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLnNpbWlsYXItYXJ0aXN0cy1zdWIge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLnNpbWlsYXItYXJ0aXN0cy1pbmZvLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgfVxyXG5cclxuICAuc2ltaWxhci1hcnRpc3RzLWluZm8tc3ViIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgLmZlYXR1cmVkLXBsYXlsaXN0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmZlYXR1cmVkLXBsYXlsaXN0LWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmZlYXR1cmVkLXBsYXlsaXN0LWRldGFpbHMge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICB9XHJcblxyXG4gIC5mZWF0dXJlZC1wbGF5bGlzdC1pbmZvLXRvcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICB9XHJcblxyXG4gIC5mZWF0dXJlZC1wbGF5bGlzdC13cml0ZXVwIHtcclxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gIH1cclxuXHJcbiAgLmZlYXR1cmVkLXBsYXlsaXN0LWJ1dHRvbnMge1xyXG4gICAgbWFyZ2luOiAwLjVlbSAwO1xyXG4gIH1cclxuXHJcbiAgLnBsYXlsaXN0LW5leHQtaXRlbS1lbnRyeS1pbmZvIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjVweCkge1xyXG4gIC5zaW1pbGFyLWFydGlzdHMtdGl0bGUgaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgfVxyXG5cclxuICAucGxheWxpc3QtbmV4dC1pdGVtLWVudHJ5LWluZm8ge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailSongComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-song',
                templateUrl: './detail-song.component.html',
                styleUrls: ['./detail-song.component.css']
            }]
    }], function () { return [{ type: _service_song_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _service_like_like_song_service__WEBPACK_IMPORTED_MODULE_3__["LikeSongService"] }, { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }]; }, null); })();


/***/ }),

/***/ "cTPe":
/*!***********************************************************************!*\
  !*** ./src/app/landing-page/playing-songs/playing-songs.component.ts ***!
  \***********************************************************************/
/*! exports provided: PlayingSongsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayingSongsComponent", function() { return PlayingSongsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_song_song_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/song/song.service */ "r1xU");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/user/user.service */ "rwBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function PlayingSongsComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const history_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", history_r2.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](history_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](history_r2.singer.name);
} }
function PlayingSongsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlayingSongsComponent_div_0_div_3_Template, 11, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.historySongs);
} }
class PlayingSongsComponent {
    constructor(songService, authService, userService) {
        this.songService = songService;
        this.authService = authService;
        this.userService = userService;
        // historySong: BehaviorSubject<number> = new BehaviorSubject<number>(JSON.parse(localStorage.getItem('historySongs')));
        this.list = JSON.parse(localStorage.getItem('Storage'));
        this.historySongs = [];
    }
    ngOnInit() {
        this.getHistorySongs();
        this.authService.currentUser.subscribe(value => {
            this.userCurrent = value;
            this.userService.getUserByUsername(value.username).subscribe(value1 => {
                this.user = value1;
            });
        });
    }
    getHistorySongs() {
        for (let i = 0; i < this.list.length; i++) {
            this.songService.getSongById(Number(this.list[i])).subscribe(value => {
                this.historySongs.push(value);
            });
        }
    }
}
PlayingSongsComponent.ɵfac = function PlayingSongsComponent_Factory(t) { return new (t || PlayingSongsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_song_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
PlayingSongsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayingSongsComponent, selectors: [["app-playing-songs"]], decls: 1, vars: 1, consts: [["class", "sidenav", 4, "ngIf"], [1, "sidenav"], ["class", "ProfileItem", 4, "ngFor", "ngForOf"], [1, "ProfileItem"], ["cellpadding", "5", 1, "song"], ["rowspan", "2"], [2, "object-fit", "cover", "height", "50px", "width", "50px", "border-radius", "5px", 3, "src"], [2, "height", "50px"], [2, "display", "inline-block", "margin-top", "10px", "margin-bottom", "0", "width", "180px", "white-space", "nowrap", "overflow", "hidden !important", "text-overflow", "ellipsis"], [2, "display", "inline-block", "margin-bottom", "10px", "width", "180px", "white-space", "nowrap", "overflow", "hidden !important", "text-overflow", "ellipsis", "font-size", "12px"]], template: function PlayingSongsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PlayingSongsComponent_div_0_Template, 4, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userCurrent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["body[_ngcontent-%COMP%] {\r\n  font-family: \"Lato\", sans-serif;\r\n}\r\n\r\n.song[_ngcontent-%COMP%] {\r\n  color: #818181;\r\n}\r\n\r\n.song[_ngcontent-%COMP%]:hover {\r\n  color: #f1f1f1;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%] {\r\n  overflow-y: auto;\r\n  height: 1000px;\r\n  width: 300px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 50px;\r\n  right: 0;\r\n  background-color: transparent;\r\n  overflow-x: hidden;\r\n  padding-top: 20px;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .sidenav[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  padding: 6px 8px 6px 16px;\r\n  text-decoration: none;\r\n  font-size: 25px;\r\n  color: #818181;\r\n  display: block;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  display: block;\r\n  color: #f1f1f1;\r\n  border-radius: 50%;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav[_ngcontent-%COMP%] {padding-top: 15px;}\r\n  .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {font-size: 18px;}\r\n}\r\n\r\n.ProfileItem[_ngcontent-%COMP%]:hover {\r\n  background-color: #20353e;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXlpbmctc29uZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0VBQ1QsUUFBUTtFQUNSLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVLGlCQUFpQixDQUFDO0VBQzVCLFlBQVksZUFBZSxDQUFDO0FBQzlCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InBsYXlpbmctc29uZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNvbmcge1xyXG4gIGNvbG9yOiAjODE4MTgxO1xyXG59XHJcblxyXG4uc29uZzpob3ZlciB7XHJcbiAgY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGhlaWdodDogMTAwMHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IDUwcHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5zaWRlbmF2IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uc2lkZW5hdiBhIHtcclxuICBwYWRkaW5nOiA2cHggOHB4IDZweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6ICM4MTgxODE7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zaWRlbmF2Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNpZGVuYXYgYTpob3ZlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICNmMWYxZjE7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAuc2lkZW5hdiB7cGFkZGluZy10b3A6IDE1cHg7fVxyXG4gIC5zaWRlbmF2IGEge2ZvbnQtc2l6ZTogMThweDt9XHJcbn1cclxuXHJcbi5Qcm9maWxlSXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMzUzZTtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayingSongsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-playing-songs',
                templateUrl: './playing-songs.component.html',
                styleUrls: ['./playing-songs.component.css']
            }]
    }], function () { return [{ type: _service_song_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"] }, { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "dHQU":
/*!***********************************************************!*\
  !*** ./src/app/song/create-song/create-song.component.ts ***!
  \***********************************************************/
/*! exports provided: CreateSongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSongComponent", function() { return CreateSongComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/user/user.service */ "rwBg");
/* harmony import */ var _service_song_song_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/song/song.service */ "r1xU");
/* harmony import */ var _service_singer_singer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/singer/singer.service */ "zXpw");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/category/category.service */ "00Ag");
/* harmony import */ var _service_album_album_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/album/album.service */ "WQHl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");















function CreateSongComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Image file is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateSongComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Audio file is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateSongComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Song name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateSongComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Musician is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateSongComponent_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", s_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r9.name, " ");
} }
function CreateSongComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Singer is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateSongComponent_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", c_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", c_r10.name, " ");
} }
function CreateSongComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Category is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateSongComponent_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", a_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", a_r11.name, " ");
} }
// @ts-ignore
class CreateSongComponent {
    constructor(storage, fbd, router, authService, userService, songService, singerService, categoryService, albumService) {
        this.storage = storage;
        this.fbd = fbd;
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.songService = songService;
        this.singerService = singerService;
        this.categoryService = categoryService;
        this.albumService = albumService;
        this.name = '';
        this.description = '';
        this.urlMp3 = '';
        this.avatar = '';
        this.musician = '';
        this.views = 200;
        this.title = 'cloudsSorage';
        this.selectedFile = null;
        this.singers = [];
        this.categories = [];
        this.albums = [];
        this.failMessage = '';
        this.songForm = this.fbd.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            musician: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            singer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            album: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            urlMp3: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            urlAvatar: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.getAllSinger();
        this.getAllCategory();
        this.getAllAlbum();
    }
    ngOnInit() { }
    saveUrlMp3(event) {
        const n = Date.now();
        const file = event.target.files[0];
        const filePath = `RoomsImages/${n}`;
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(`RoomsImages/${n}`, file);
        task
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
                if (url) {
                    this.fb = url;
                    this.urlMp3 = url;
                }
                console.log(this.fb);
            });
        })).subscribe(url => {
            if (url) {
                console.log(url);
            }
        });
    }
    loadFile(event) {
        const output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = () => {
            URL.revokeObjectURL(output.src);
        };
        const n = Date.now();
        const file = event.target.files[0];
        const filePath = `RoomsImages/${n}`;
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(`RoomsImages/${n}`, file);
        task
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
                if (url) {
                    this.avatar = url;
                }
                console.log(this.fb);
            });
        })).subscribe(url => {
            if (url) {
                console.log(url);
            }
        });
    }
    saveAvatar(event) {
        const output = document.getElementById('imagePreview');
        output.src = URL.createObjectURL(event.target.files[0]);
        console.log(output.src);
        output.onload = () => {
            URL.revokeObjectURL(output.src);
        };
        const n = Date.now();
        const file = event.target.files[0];
        const filePath = `RoomsImages/${n}`;
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(`RoomsImages/${n}`, file);
        task
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
                if (url) {
                    this.fb = url;
                    this.avatar = url;
                    console.log(this.avatar);
                }
                console.log(this.fb);
            });
        })).subscribe(url => {
            if (url) {
                console.log(url);
            }
        });
    }
    setNewSong() {
        var _a, _b, _c, _d;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.getUserFromDB();
            const singer = yield this.getSinger();
            const category = yield this.getCategory();
            const album = yield this.getOneAlbum();
            const song = {
                name: (_a = this.songForm.get('name')) === null || _a === void 0 ? void 0 : _a.value,
                description: (_b = this.songForm.get('description')) === null || _b === void 0 ? void 0 : _b.value,
                urlMp3: this.urlMp3,
                avatar: this.avatar,
                musician: (_c = this.songForm.get('musician')) === null || _c === void 0 ? void 0 : _c.value,
                views: (_d = this.songForm.get('views')) === null || _d === void 0 ? void 0 : _d.value,
            };
            if (user != null) {
                song.user = user;
            }
            if (singer != null) {
                song.singer = singer;
            }
            if (category != null) {
                song.category = category;
            }
            if (album != null) {
                song.album = album;
            }
            return song;
        });
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const newS = yield this.setNewSong();
            console.log(newS);
            this.songService.createSong(newS).subscribe(() => {
                alert('Create Successfully!');
                this.router.navigate(['/profile']);
            }, error => {
                alert('Error!');
            });
        });
    }
    getUserFromDB() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userFromLocalStorage = this.authService.currentUserValue;
            return this.userService.getUserByUsername(userFromLocalStorage.username).toPromise();
        });
    }
    // @ts-ignore
    getAllSinger() {
        this.singerService.getAllSinger().subscribe(value => {
            this.singers = value;
        });
    }
    getSinger() {
        var _a;
        // tslint:disable-next-line:variable-name
        const singer_id = +((_a = this.songForm.get('singer')) === null || _a === void 0 ? void 0 : _a.value);
        return this.singerService.getOneSinger(singer_id).toPromise();
    }
    // @ts-ignore
    getAllCategory() {
        this.categoryService.getAllCategory().subscribe(value => this.categories = value);
    }
    getCategory() {
        var _a;
        // tslint:disable-next-line:variable-name
        const category_id = +((_a = this.songForm.get('category')) === null || _a === void 0 ? void 0 : _a.value);
        return this.categoryService.getCategory(category_id).toPromise();
    }
    // @ts-ignore
    getAllAlbum() {
        this.albumService.getAllAlbum().subscribe(value => this.albums = value);
    }
    getOneAlbum() {
        var _a;
        // tslint:disable-next-line:variable-name
        const album_id = +((_a = this.songForm.get('album')) === null || _a === void 0 ? void 0 : _a.value);
        // @ts-ignore
        return this.albumService.getOneAlbum(album_id).toPromise();
    }
}
CreateSongComponent.ɵfac = function CreateSongComponent_Factory(t) { return new (t || CreateSongComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_song_song_service__WEBPACK_IMPORTED_MODULE_8__["SongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_singer_singer_service__WEBPACK_IMPORTED_MODULE_9__["SingerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_category_category_service__WEBPACK_IMPORTED_MODULE_10__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_album_album_service__WEBPACK_IMPORTED_MODULE_11__["AlbumService"])); };
CreateSongComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateSongComponent, selectors: [["app-create-song"]], decls: 77, vars: 11, consts: [[1, "page-wrapper", "p-t-100", "p-b-50", 2, "background-color", "#0c1027"], [1, "wrapper", "wrapper--w900"], [1, "card", "card-6"], [1, "card-heading"], [1, "title", "text-center"], [3, "formGroup", "ngSubmit"], [1, "card-body", 2, "color", "#1b1b1b", "border-radius", "20px"], [1, "form-row"], [1, "name"], ["id", "output", "src", "assets/images/video_play_icon.png", "alt", "Song's Cover", 1, "img", 2, "width", "150px", "height", "150px", "border-radius", "10px", "object-fit", "cover"], [1, "value"], [1, "input-group", "js-input-file"], ["type", "file", "formControlName", "urlAvatar", "accept", "image/*", 2, "margin-top", "50px", 3, "change"], ["class", "alert alert-danger mt-1", "role", "alert", 4, "ngIf"], [1, "label--desc"], ["type", "file", "accept", "audio/*", "id", "file", "name", "mp3", "formControlName", "urlMp3", "autocomplete", "off", 3, "change"], ["type", "text", "formControlName", "name", 1, "input--style-6"], ["type", "text", "formControlName", "musician", 1, "input--style-6"], ["formControlName", "singer", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "category", 1, "form-control"], ["formControlName", "album", 1, "form-control"], [1, "input-group"], ["formControlName", "description", "name", "desc", "placeholder", "Something...", 1, "textarea--style-6"], ["type", "submit", 1, "btn", "btn-outline-success", "btn--radius", 2, "border", "solid", "color", "#1b1b1b", "border-radius", "5px", 3, "disabled"], [1, "value", 2, "margin-top", "20px"], [1, "form-group", "col-12", "text-center", 2, "height", "100px"], ["role", "alert", 1, "alert", "alert-danger", "mt-1"], [3, "value"]], template: function CreateSongComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Create A New Song");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CreateSongComponent_Template_form_ngSubmit_6_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CreateSongComponent_Template_input_change_13_listener($event) { return ctx.loadFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CreateSongComponent_div_14_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Upload your audio for the world");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Upload Audio *");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CreateSongComponent_Template_input_change_22_listener($event) { return ctx.saveUrlMp3($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, CreateSongComponent_div_23_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Upload your audio for the world");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Song Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, CreateSongComponent_div_31_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Musician *");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, CreateSongComponent_div_37_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Singer *");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "--> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, CreateSongComponent_option_44_Template, 2, 2, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, CreateSongComponent_div_45_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "--> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, CreateSongComponent_option_52_Template, 2, 2, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, CreateSongComponent_div_53_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Album *");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "--> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, CreateSongComponent_option_60_Template, 2, 2, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "All * fields are required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Copyright Soundwave - Case Study Module 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.songForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.songForm.get("urlAvatar").invalid && ctx.songForm.get("urlAvatar").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.songForm.get("urlMp3").invalid && ctx.songForm.get("urlMp3").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.songForm.get("name").invalid && ctx.songForm.get("name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.songForm.get("musician").invalid && ctx.songForm.get("musician").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.singers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.songForm.get("singer").invalid && ctx.songForm.get("singer").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.songForm.get("category").invalid && ctx.songForm.get("category").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.albums);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.songForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: [".font-robo[_ngcontent-%COMP%] {\r\n  font-family: \"Roboto\", \"Arial\", \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n.font-poppins[_ngcontent-%COMP%] {\r\n  font-family: \"Poppins\", \"Arial\", \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n.font-opensans[_ngcontent-%COMP%] {\r\n  font-family: \"Open Sans\", \"Arial\", \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n\r\n\r\n.row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.row[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]:last-child   .input-group-desc[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.row-space[_ngcontent-%COMP%] {\r\n  justify-content: space-between;\r\n}\r\n\r\n.row-refine[_ngcontent-%COMP%] {\r\n  margin: 0 -15px;\r\n}\r\n\r\n.row-refine[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%]   .input-group-desc[_ngcontent-%COMP%], .row-refine[_ngcontent-%COMP%]   .col-9[_ngcontent-%COMP%]   .input-group-desc[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.col-2[_ngcontent-%COMP%] {\r\n  width: calc((100% - 30px) / 2);\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .col-2[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.form-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: flex-start;\r\n  padding: 24px 55px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n}\r\n\r\n.form-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\r\n  width: 188px;\r\n  color: #333;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  margin-top: 11px;\r\n}\r\n\r\n.form-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\r\n  width: calc(100% - 188px);\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .form-row[_ngcontent-%COMP%] {\r\n    display: block;\r\n    padding: 24px 30px;\r\n  }\r\n  .form-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n  }\r\n  .form-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-bottom: 12px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\r\n  box-sizing: inherit;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nbody[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], legend[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n\r\n\r\nli[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%], li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n}\r\n\r\n\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\n\r\n\r\nfieldset[_ngcontent-%COMP%] {\r\n  min-width: 0;\r\n  \r\n  border: 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  outline: none;\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n\r\n\r\n.page-wrapper[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: \"Open Sans\", \"Arial\", \"Helvetica Neue\", sans-serif;\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-size: 36px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n}\r\n\r\nh5[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n}\r\n\r\nh6[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n}\r\n\r\n\r\n\r\n.p-t-100[_ngcontent-%COMP%] {\r\n  padding-top: 100px;\r\n}\r\n\r\n.p-t-130[_ngcontent-%COMP%] {\r\n  padding-top: 130px;\r\n}\r\n\r\n.p-t-180[_ngcontent-%COMP%] {\r\n  padding-top: 180px;\r\n}\r\n\r\n.p-t-45[_ngcontent-%COMP%] {\r\n  padding-top: 45px;\r\n}\r\n\r\n.p-t-20[_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n}\r\n\r\n.p-t-15[_ngcontent-%COMP%] {\r\n  padding-top: 15px;\r\n}\r\n\r\n.p-t-10[_ngcontent-%COMP%] {\r\n  padding-top: 10px;\r\n}\r\n\r\n.p-t-30[_ngcontent-%COMP%] {\r\n  padding-top: 30px;\r\n}\r\n\r\n.p-b-100[_ngcontent-%COMP%] {\r\n  padding-bottom: 100px;\r\n}\r\n\r\n.p-b-50[_ngcontent-%COMP%] {\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.m-r-45[_ngcontent-%COMP%] {\r\n  margin-right: 45px;\r\n}\r\n\r\n.m-r-55[_ngcontent-%COMP%] {\r\n  margin-right: 55px;\r\n}\r\n\r\n.m-b-55[_ngcontent-%COMP%] {\r\n  margin-bottom: 55px;\r\n}\r\n\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n}\r\n\r\n.wrapper--w960[_ngcontent-%COMP%] {\r\n  max-width: 960px;\r\n}\r\n\r\n.wrapper--w900[_ngcontent-%COMP%] {\r\n  max-width: 900px;\r\n}\r\n\r\n.wrapper--w790[_ngcontent-%COMP%] {\r\n  max-width: 790px;\r\n}\r\n\r\n.wrapper--w780[_ngcontent-%COMP%] {\r\n  max-width: 780px;\r\n}\r\n\r\n.wrapper--w680[_ngcontent-%COMP%] {\r\n  max-width: 680px;\r\n}\r\n\r\n\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  line-height: 50px;\r\n  padding: 0 30px;\r\n  transition: all 0.4s ease;\r\n  cursor: pointer;\r\n  font-size: 15px;\r\n  text-transform: capitalize;\r\n  font-weight: 700;\r\n  color: #fff;\r\n  font-family: inherit;\r\n}\r\n\r\n.btn--radius[_ngcontent-%COMP%] {\r\n  border-radius: 3px;\r\n}\r\n\r\n.btn--radius-2[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n}\r\n\r\n.btn--pill[_ngcontent-%COMP%] {\r\n  border-radius: 20px;\r\n}\r\n\r\n.btn--green[_ngcontent-%COMP%] {\r\n  background: #57b846;\r\n}\r\n\r\n.btn--green[_ngcontent-%COMP%]:hover {\r\n  background: #4dae3c;\r\n}\r\n\r\n.btn--blue[_ngcontent-%COMP%] {\r\n  background: #4272d7;\r\n}\r\n\r\n.btn--blue[_ngcontent-%COMP%]:hover {\r\n  background: #3868cd;\r\n}\r\n\r\n.btn--blue-2[_ngcontent-%COMP%] {\r\n  background: #2c6ed5;\r\n}\r\n\r\n.btn--blue-2[_ngcontent-%COMP%]:hover {\r\n  background: #185ac1;\r\n}\r\n\r\n.btn--red[_ngcontent-%COMP%] {\r\n  background: #ff4b5a;\r\n}\r\n\r\n.btn--red[_ngcontent-%COMP%]:hover {\r\n  background: #eb3746;\r\n}\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  outline: none;\r\n  margin: 0;\r\n  border: none;\r\n  box-shadow: none;\r\n  width: 100%;\r\n  font-size: 14px;\r\n  font-family: inherit;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\n  resize: none;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin: 0;\r\n}\r\n\r\n.input--style-6[_ngcontent-%COMP%], .textarea--style-6[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  line-height: 38px;\r\n  border: 1px solid #cccccc;\r\n  border-radius: 3px;\r\n  color: #666;\r\n  font-size: 15px;\r\n  transition: all 0.4s ease;\r\n  padding: 0 20px;\r\n}\r\n\r\n.input--style-6[_ngcontent-%COMP%]::-webkit-input-placeholder, .textarea--style-6[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n  \r\n  color: #999;\r\n}\r\n\r\n.input--style-6[_ngcontent-%COMP%]:-moz-placeholder, .textarea--style-6[_ngcontent-%COMP%]:-moz-placeholder {\r\n  \r\n  color: #999;\r\n  opacity: 1;\r\n}\r\n\r\n.input--style-6[_ngcontent-%COMP%]::-moz-placeholder, .textarea--style-6[_ngcontent-%COMP%]::-moz-placeholder {\r\n  \r\n  color: #999;\r\n  opacity: 1;\r\n}\r\n\r\n.input--style-6[_ngcontent-%COMP%]:-ms-input-placeholder, .textarea--style-6[_ngcontent-%COMP%]:-ms-input-placeholder {\r\n  \r\n  color: #999;\r\n}\r\n\r\n.input--style-6[_ngcontent-%COMP%]:-ms-input-placeholder, .textarea--style-6[_ngcontent-%COMP%]:-ms-input-placeholder {\r\n  \r\n  color: #999;\r\n}\r\n\r\n.input--style-6[_ngcontent-%COMP%]:focus, .textarea--style-6[_ngcontent-%COMP%]:focus {\r\n  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);\r\n  transform: translateY(-3px);\r\n}\r\n\r\n.textarea--style-6[_ngcontent-%COMP%] {\r\n  line-height: 1.2;\r\n  min-height: 120px;\r\n  padding: 10px 20px;\r\n}\r\n\r\n.label--desc[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  color: #999;\r\n  margin-top: 10px;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .label--desc[_ngcontent-%COMP%] {\r\n    margin-top: 14px;\r\n  }\r\n}\r\n\r\n.input-file[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.input-file[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  color: #fff;\r\n  color: white;\r\n  line-height: 40px;\r\n  background-color: #666666;\r\n  padding: 0 20px;\r\n  border-radius: 3px;\r\n  display: inline-block;\r\n  margin-right: 15px;\r\n  transition: all 0.4s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.input-file[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .input-file[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:hover {\r\n  background: #1b1b1b;\r\n}\r\n\r\n.input-file__info[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  color: #666;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .input-file__info[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-top: 6px;\r\n  }\r\n}\r\n\r\n\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-size: 36px;\r\n  font-weight: 700;\r\n  text-align: left;\r\n  color: #fff;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .title[_ngcontent-%COMP%] {\r\n    padding: 0 15px;\r\n  }\r\n}\r\n\r\n\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border-radius: 3px;\r\n  background: #fff;\r\n}\r\n\r\n.card-6[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n}\r\n\r\n.card-6[_ngcontent-%COMP%]   .card-heading[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n}\r\n\r\n.card-6[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  position: relative;\r\n  border-bottom: none;\r\n  padding: 30px 0;\r\n  padding-bottom: 0;\r\n}\r\n\r\n.card-6[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]:before {\r\n  bottom: 100%;\r\n  left: 75px;\r\n  content: \"\";\r\n  height: 0;\r\n  width: 0;\r\n  position: absolute;\r\n  border-color: rgba(255, 255, 255, 0);\r\n  border-bottom-color: #fff;\r\n  border-width: 10px;\r\n}\r\n\r\n.card-6[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\r\n  border: 1px solid #e5e5e5;\r\n  border-top: none;\r\n  text-align: center;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .card-6[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\r\n    padding: 50px 30px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1zb25nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsNERBQTREO0FBQzlEOztBQUVBO0VBQ0UsNkRBQTZEO0FBQy9EOztBQUVBO0VBQ0UsK0RBQStEO0FBQ2pFOztBQUVBOzsrRUFFK0U7O0FBQy9FO0VBS0UsYUFBYTtFQUdiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFLRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUdFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFLRSxhQUFhO0VBR2IsZUFBZTtFQUtmLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUdFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjtFQUNBOztJQUVFLGNBQWM7SUFDZCxXQUFXO0VBQ2I7RUFDQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTs7K0VBRStFOztBQUMvRTs7O0VBR0U7O0FBR0Y7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBR0UsbUJBQW1CO0FBQ3JCOztBQUVBOzsrRUFFK0U7O0FBQy9FOztFQUVFOztBQUNGOzs7Ozs7O0VBT0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTs7RUFFRTs7QUFDRjs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUU7O0FBQ0Y7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRTs7QUFDRjtFQUNFLFlBQVk7RUFDWixRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7OytFQUUrRTs7QUFDL0U7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwrREFBK0Q7RUFDL0QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7OytFQUUrRTs7QUFDL0U7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7OytFQUUrRTs7QUFDL0U7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOzsrRUFFK0U7O0FBQy9FO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixlQUFlO0VBSWYseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBO0VBR0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBR0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBR0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOzsrRUFFK0U7O0FBQy9FOztFQUVFLGFBQWE7RUFDYixTQUFTO0VBQ1QsWUFBWTtFQUdaLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFHekIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBSWYseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsd0JBQXdCO0VBQ3hCLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSw0QkFBNEI7RUFDNUIsV0FBVztBQUNiOztBQUVBOztFQUVFLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7O0VBSUUsK0NBQStDO0VBSy9DLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixlQUFlO0VBR2Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFJbEIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztJQUNkLGVBQWU7RUFDakI7QUFDRjs7QUFHQTs7K0VBRStFOztBQUMvRTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTs7K0VBRStFOztBQUMvRTtFQUdFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsU0FBUztFQUNULFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoiY3JlYXRlLXNvbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9udC1yb2JvIHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJBcmlhbFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5mb250LXBvcHBpbnMge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgXCJBcmlhbFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5mb250LW9wZW5zYW5zIHtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgXCJBcmlhbFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICNHUklEXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xyXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4ucm93IC5jb2wtMjpsYXN0LWNoaWxkIC5pbnB1dC1ncm91cC1kZXNjIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ucm93LXNwYWNlIHtcclxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC1tb3otYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5yb3ctcmVmaW5lIHtcclxuICBtYXJnaW46IDAgLTE1cHg7XHJcbn1cclxuXHJcbi5yb3ctcmVmaW5lIC5jb2wtMyAuaW5wdXQtZ3JvdXAtZGVzYyxcclxuLnJvdy1yZWZpbmUgLmNvbC05IC5pbnB1dC1ncm91cC1kZXNjIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uY29sLTIge1xyXG4gIHdpZHRoOiAtd2Via2l0LWNhbGMoKDEwMCUgLSAzMHB4KSAvIDIpO1xyXG4gIHdpZHRoOiAtbW96LWNhbGMoKDEwMCUgLSAzMHB4KSAvIDIpO1xyXG4gIHdpZHRoOiBjYWxjKCgxMDAlIC0gMzBweCkgLyAyKTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmNvbC0yIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tcm93IHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcclxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAtbW96LWJveC1hbGlnbjogc3RhcnQ7XHJcbiAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmc6IDI0cHggNTVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcclxufVxyXG5cclxuLmZvcm0tcm93IC5uYW1lIHtcclxuICB3aWR0aDogMTg4cHg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luLXRvcDogMTFweDtcclxufVxyXG5cclxuLmZvcm0tcm93IC52YWx1ZSB7XHJcbiAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC0gMTg4cHgpO1xyXG4gIHdpZHRoOiAtbW96LWNhbGMoMTAwJSAtIDE4OHB4KTtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMTg4cHgpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuZm9ybS1yb3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDMwcHg7XHJcbiAgfVxyXG4gIC5mb3JtLXJvdyAubmFtZSxcclxuICAuZm9ybS1yb3cgLnZhbHVlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5mb3JtLXJvdyAubmFtZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICNCT1gtU0laSU5HXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi8qKlxyXG4gKiBNb3JlIHNlbnNpYmxlIGRlZmF1bHQgYm94LXNpemluZzpcclxuICogY3NzLXRyaWNrcy5jb20vaW5oZXJpdGluZy1ib3gtc2l6aW5nLXByb2JhYmx5LXNsaWdodGx5LWJldHRlci1iZXN0LXByYWN0aWNlXHJcbiAqL1xyXG5cclxuXHJcbioge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBpbmhlcml0O1xyXG4gIC1tb3otYm94LXNpemluZzogaW5oZXJpdDtcclxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAjUkVTRVRcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLyoqXHJcbiAqIEEgdmVyeSBzaW1wbGUgcmVzZXQgdGhhdCBzaXRzIG9uIHRvcCBvZiBOb3JtYWxpemUuY3NzLlxyXG4gKi9cclxuYm9keSxcclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNixcclxuYmxvY2txdW90ZSwgcCwgcHJlLFxyXG5kbCwgZGQsIG9sLCB1bCxcclxuZmlndXJlLFxyXG5ocixcclxuZmllbGRzZXQsIGxlZ2VuZCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdHJhaWxpbmcgbWFyZ2lucyBmcm9tIG5lc3RlZCBsaXN0cy5cclxuICovXHJcbmxpID4gb2wsXHJcbmxpID4gdWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgZGVmYXVsdCB0YWJsZSBzcGFjaW5nLlxyXG4gKi9cclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBSZXNldCBDaHJvbWUgYW5kIEZpcmVmb3ggYmVoYXZpb3VyIHdoaWNoIHNldHMgYSBgbWluLXdpZHRoOiBtaW4tY29udGVudDtgXHJcbiAqICAgIG9uIGZpZWxkc2V0cy5cclxuICovXHJcbmZpZWxkc2V0IHtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgLyogWzFdICovXHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICNQQUdFIFdSQVBQRVJcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLnBhZ2Utd3JhcHBlciB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBcIkFyaWFsXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuaDMge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuaDQge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuaDUge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuaDYge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgI1NQQUNJTkdcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLnAtdC0xMDAge1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxufVxyXG5cclxuLnAtdC0xMzAge1xyXG4gIHBhZGRpbmctdG9wOiAxMzBweDtcclxufVxyXG5cclxuLnAtdC0xODAge1xyXG4gIHBhZGRpbmctdG9wOiAxODBweDtcclxufVxyXG5cclxuLnAtdC00NSB7XHJcbiAgcGFkZGluZy10b3A6IDQ1cHg7XHJcbn1cclxuXHJcbi5wLXQtMjAge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ucC10LTE1IHtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG5cclxuLnAtdC0xMCB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5wLXQtMzAge1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG4ucC1iLTEwMCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4ucC1iLTUwIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLm0tci00NSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG4ubS1yLTU1IHtcclxuICBtYXJnaW4tcmlnaHQ6IDU1cHg7XHJcbn1cclxuXHJcbi5tLWItNTUge1xyXG4gIG1hcmdpbi1ib3R0b206IDU1cHg7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICNXUkFQUEVSXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi53cmFwcGVyIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLndyYXBwZXItLXc5NjAge1xyXG4gIG1heC13aWR0aDogOTYwcHg7XHJcbn1cclxuXHJcbi53cmFwcGVyLS13OTAwIHtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG59XHJcblxyXG4ud3JhcHBlci0tdzc5MCB7XHJcbiAgbWF4LXdpZHRoOiA3OTBweDtcclxufVxyXG5cclxuLndyYXBwZXItLXc3ODAge1xyXG4gIG1heC13aWR0aDogNzgwcHg7XHJcbn1cclxuXHJcbi53cmFwcGVyLS13NjgwIHtcclxuICBtYXgtd2lkdGg6IDY4MHB4O1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAjQlVUVE9OXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5idG4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG59XHJcblxyXG4uYnRuLS1yYWRpdXMge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLmJ0bi0tcmFkaXVzLTIge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmJ0bi0tcGlsbCB7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uYnRuLS1ncmVlbiB7XHJcbiAgYmFja2dyb3VuZDogIzU3Yjg0NjtcclxufVxyXG5cclxuLmJ0bi0tZ3JlZW46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM0ZGFlM2M7XHJcbn1cclxuXHJcbi5idG4tLWJsdWUge1xyXG4gIGJhY2tncm91bmQ6ICM0MjcyZDc7XHJcbn1cclxuXHJcbi5idG4tLWJsdWU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMzODY4Y2Q7XHJcbn1cclxuXHJcbi5idG4tLWJsdWUtMiB7XHJcbiAgYmFja2dyb3VuZDogIzJjNmVkNTtcclxufVxyXG5cclxuLmJ0bi0tYmx1ZS0yOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMTg1YWMxO1xyXG59XHJcblxyXG4uYnRuLS1yZWQge1xyXG4gIGJhY2tncm91bmQ6ICNmZjRiNWE7XHJcbn1cclxuXHJcbi5idG4tLXJlZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ViMzc0NjtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgI0ZPUk1cclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuaW5wdXQsXHJcbnRleHRhcmVhIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uaW5wdXQtLXN0eWxlLTYsXHJcbi50ZXh0YXJlYS0tc3R5bGUtNiB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5cclxuLmlucHV0LS1zdHlsZS02Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLFxyXG4udGV4dGFyZWEtLXN0eWxlLTY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIC8qIFdlYktpdCwgQmxpbmssIEVkZ2UgKi9cclxuICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuLmlucHV0LS1zdHlsZS02Oi1tb3otcGxhY2Vob2xkZXIsXHJcbi50ZXh0YXJlYS0tc3R5bGUtNjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAvKiBNb3ppbGxhIEZpcmVmb3ggNCB0byAxOCAqL1xyXG4gIGNvbG9yOiAjOTk5O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5pbnB1dC0tc3R5bGUtNjo6LW1vei1wbGFjZWhvbGRlcixcclxuLnRleHRhcmVhLS1zdHlsZS02OjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAvKiBNb3ppbGxhIEZpcmVmb3ggMTkrICovXHJcbiAgY29sb3I6ICM5OTk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmlucHV0LS1zdHlsZS02Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcclxuLnRleHRhcmVhLS1zdHlsZS02Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuLmlucHV0LS1zdHlsZS02Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcclxuLnRleHRhcmVhLS1zdHlsZS02Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgLyogTWljcm9zb2Z0IEVkZ2UgKi9cclxuICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuLmlucHV0LS1zdHlsZS02OmZvY3VzLFxyXG4udGV4dGFyZWEtLXN0eWxlLTY6Zm9jdXMge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbn1cclxuXHJcbi50ZXh0YXJlYS0tc3R5bGUtNiB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBtaW4taGVpZ2h0OiAxMjBweDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5sYWJlbC0tZGVzYyB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjOTk5O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5sYWJlbC0tZGVzYyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmlucHV0LWZpbGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5pbnB1dC1maWxlICsgbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjY2NjtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW5wdXQtZmlsZTpmb2N1cyArIGxhYmVsLFxyXG4uaW5wdXQtZmlsZSArIGxhYmVsOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMWIxYjFiO1xyXG59XHJcblxyXG4uaW5wdXQtZmlsZV9faW5mbyB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuaW5wdXQtZmlsZV9faW5mbyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAjVElUTEVcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC50aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAjQ0FSRFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4uY2FyZCB7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5jYXJkLTYge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY2FyZC02IC5jYXJkLWhlYWRpbmcge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY2FyZC02IC5jYXJkLWJvZHkge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgcGFkZGluZzogMzBweCAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG4uY2FyZC02IC5jYXJkLWJvZHk6YmVmb3JlIHtcclxuICBib3R0b206IDEwMCU7XHJcbiAgbGVmdDogNzVweDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC02IC5jYXJkLWZvb3RlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmNhcmQtNiAuY2FyZC1mb290ZXIge1xyXG4gICAgcGFkZGluZzogNTBweCAzMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateSongComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-create-song',
                templateUrl: './create-song.component.html',
                styleUrls: ['./create-song.component.css']
            }]
    }], function () { return [{ type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: _service_song_song_service__WEBPACK_IMPORTED_MODULE_8__["SongService"] }, { type: _service_singer_singer_service__WEBPACK_IMPORTED_MODULE_9__["SingerService"] }, { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_10__["CategoryService"] }, { type: _service_album_album_service__WEBPACK_IMPORTED_MODULE_11__["AlbumService"] }]; }, null); })();


/***/ }),

/***/ "dmcY":
/*!*********************************************!*\
  !*** ./src/app/helper/error-interceptor.ts ***!
  \*********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");






class ErrorInterceptor {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                // do stuff with response if you want
            }
        }, (err) => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    this.authService.logout();
                    this.router.navigate(['/login']);
                }
                else if (err.status === 403) {
                    this.router.navigate(['/']);
                }
            }
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "eCOg":
/*!**********************************************************************!*\
  !*** ../Project_Sound_Wave_FrontEnd/src/environments/environment.ts ***!
  \**********************************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyAaF7cyqh4DoWEU2TkDXnUeFe0Le10uH6A',
        authDomain: 'sound-wave-9d45d.firebaseapp.com',
        databaseURL: 'https://sound-wave-9d45d-default-rtdb.firebaseio.com/',
        projectId: 'sound-wave-9d45d',
        storageBucket: 'sound-wave-9d45d.appspot.com',
        messagingSenderId: '368542689977',
        appId: '1:368542689977:web:2f10c095d4d791959b8968',
        measurementId: 'G-XKDW7R2CS7'
    },
    apiUrl: 'http://localhost:8080'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "eYOR":
/*!**************************************************!*\
  !*** ./src/app/visiter/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth/auth.service */ "/AaM");







const _c0 = function () { return ["/register"]; };
class LoginComponent {
    constructor(router, fb, activatedRoute, authService) {
        this.router = router;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.user = {
            username: '',
            password: ''
        };
    }
    // tslint:disable-next-line:typedef
    ngOnInit() {
        this.authService.currentUser.subscribe(value => this.currentUser = value);
        // this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/host';
        this.formLogin = this.fb.group({
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    // tslint:disable-next-line:typedef
    login() {
        // @ts-ignore
        this.authService.login(this.user.username, this.user.password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(data => {
            // tslint:disable-next-line:no-unused-expression
            localStorage.removeItem('songSelected');
            window.location.replace('');
            // this.router.navigate([this.returnUrl]);
        }, error => {
            return this.message = 'Username or password is incorrect';
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 36, vars: 7, consts: [[1, "row", 2, "margin-left", "0%"], [1, "col-md-6", "mx-auto", "p-0"], [1, "card"], [1, "login-box"], [1, "login-snip"], ["id", "tab-1", "type", "radio", "name", "tab", "checked", "", 1, "sign-in"], ["for", "tab-1", 1, "tab"], ["id", "tab-2", "type", "radio", "name", "tab", 1, "sign-up"], ["for", "tab-2", 1, "tab", 3, "routerLink"], [1, "login-space"], [3, "formGroup", "ngSubmit"], [1, "login"], [1, "group"], ["for", "user", 1, "label"], ["id", "user", "formControlName", "username", "type", "text", "placeholder", "Enter your username", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["for", "pass", 1, "label"], ["id", "pass", "formControlName", "password", "type", "password", "data-type", "password", "placeholder", "Enter your password", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], [1, "alert-warning"], ["id", "check", "type", "checkbox", "checked", "", 1, "check"], ["for", "check"], [1, "icon"], ["type", "submit", "value", "Log In", 1, "btn", "btn-primary", "btn-block", "btn-round", 3, "disabled"], [1, "hr"], [1, "foot"], ["href", "#"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_12_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_17_listener($event) { return ctx.user.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_21_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Keep me Signed in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formLogin.valid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]], styles: ["body[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #6a6f8c;\r\n  background: #c8c8c8;\r\n  font: 600 16px/18px 'Open Sans', sans-serif;\r\n}\r\n\r\n.login-box[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: auto;\r\n  max-width: 525px;\r\n  min-height: 670px;\r\n  position: relative;\r\n  background: url(https://images.unsplash.com/photo-1480700014161-b404b4503a4c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80) no-repeat center;\r\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19)\r\n}\r\n\r\n.login-snip[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  padding: 90px 70px 50px 70px;\r\n  background: rgba(21, 101, 192, 0.34)\r\n}\r\n\r\n.login-snip[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%], .login-snip[_ngcontent-%COMP%]   .sign-up-form[_ngcontent-%COMP%] {\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  position: absolute;\r\n  transform: rotateY(180deg);\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  transition: all .4s linear\r\n}\r\n\r\n.login-snip[_ngcontent-%COMP%]   .sign-in[_ngcontent-%COMP%], .login-snip[_ngcontent-%COMP%]   .sign-up[_ngcontent-%COMP%], .login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\r\n  display: none\r\n}\r\n\r\n.login-snip[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%], .login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n  text-transform: uppercase\r\n}\r\n\r\n.login-snip[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  margin-right: 15px;\r\n  padding-bottom: 5px;\r\n  margin: 0 15px 10px 0;\r\n  display: inline-block;\r\n  border-bottom: 2px solid transparent\r\n}\r\n\r\n.login-snip[_ngcontent-%COMP%]   .sign-in[_ngcontent-%COMP%]:checked + .tab[_ngcontent-%COMP%], .login-snip[_ngcontent-%COMP%]   .sign-up[_ngcontent-%COMP%]:checked + .tab[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  border-color: #1161ee\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%] {\r\n  min-height: 345px;\r\n  position: relative;\r\n  perspective: 1000px;\r\n  transform-style: preserve-3d\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%], .login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  color: #fff;\r\n  display: block\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%], .login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n  border: none;\r\n  padding: 15px 20px;\r\n  border-radius: 25px;\r\n  background: rgba(255, 255, 255, .1)\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   input[data-type=\"password\"][_ngcontent-%COMP%] {\r\n  text-security: circle;\r\n  -webkit-text-security: circle\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\r\n  color: #aaa;\r\n  font-size: 12px\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n  background: #1161ee\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 2px;\r\n  position: relative;\r\n  display: inline-block;\r\n  background: rgba(255, 255, 255, .1)\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before, .login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:after {\r\n  content: '';\r\n  width: 10px;\r\n  height: 2px;\r\n  background: #fff;\r\n  position: absolute;\r\n  transition: all .2s ease-in-out 0s\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before {\r\n  left: 3px;\r\n  width: 5px;\r\n  bottom: 6px;\r\n  transform: scale(0) rotate(0)\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:after {\r\n  top: 6px;\r\n  right: 0;\r\n  transform: scale(0) rotate(0)\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%] {\r\n  color: #fff\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n  background: #1161ee\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before {\r\n  transform: scale(1) rotate(45deg)\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:after {\r\n  transform: scale(1) rotate(-45deg)\r\n}\r\n\r\n.login-snip[_ngcontent-%COMP%]   .sign-in[_ngcontent-%COMP%]:checked + .tab[_ngcontent-%COMP%] + .sign-up[_ngcontent-%COMP%] + .tab[_ngcontent-%COMP%] + .login-space[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\r\n  transform: rotate(0)\r\n}\r\n\r\n.login-snip[_ngcontent-%COMP%]   .sign-up[_ngcontent-%COMP%]:checked + .tab[_ngcontent-%COMP%] + .login-space[_ngcontent-%COMP%]   .sign-up-form[_ngcontent-%COMP%] {\r\n  transform: rotate(0)\r\n}\r\n\r\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before {\r\n  box-sizing: border-box\r\n}\r\n\r\n.clearfix[_ngcontent-%COMP%]:after, .clearfix[_ngcontent-%COMP%]:before {\r\n  content: '';\r\n  display: table\r\n}\r\n\r\n.clearfix[_ngcontent-%COMP%]:after {\r\n  clear: both;\r\n  display: block\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: inherit;\r\n  text-decoration: none\r\n}\r\n\r\n.hr[_ngcontent-%COMP%] {\r\n  height: 2px;\r\n  margin: 60px 0 50px 0;\r\n  background: rgba(255, 255, 255, .2)\r\n}\r\n\r\n.foot[_ngcontent-%COMP%] {\r\n  text-align: center\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n  left: 100px\r\n}\r\n\r\n[_ngcontent-%COMP%]::placeholder {\r\n  color: #b3b3b3\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlNQUFpTTtFQUNqTTtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCO0FBQ0Y7O0FBRUE7O0VBRUUsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQjtBQUNGOztBQUVBOzs7RUFHRTtBQUNGOztBQUVBOzs7RUFHRTtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQjtBQUNGOztBQUVBOztFQUVFLFdBQVc7RUFDWDtBQUNGOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7OztFQUdFLFdBQVc7RUFDWCxXQUFXO0VBQ1g7QUFDRjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1g7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCO0FBQ0Y7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1g7QUFDRjs7QUFFQTtFQUNFLFFBQVE7RUFDUixRQUFRO0VBQ1I7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTs7O0VBR0U7QUFDRjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1g7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWDtBQUNGOztBQUVBO0VBQ0UsY0FBYztFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICM2YTZmOGM7XHJcbiAgYmFja2dyb3VuZDogI2M4YzhjODtcclxuICBmb250OiA2MDAgMTZweC8xOHB4ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubG9naW4tYm94IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWF4LXdpZHRoOiA1MjVweDtcclxuICBtaW4taGVpZ2h0OiA2NzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDgwNzAwMDE0MTYxLWI0MDRiNDUwM2E0Yz9peGxpYj1yYi0xLjIuMSZpeGlkPU1Yd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHclM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz02MzQmcT04MCkgbm8tcmVwZWF0IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDEycHggMTVweCAwIHJnYmEoMCwgMCwgMCwgLjI0KSwgMCAxN3B4IDUwcHggMCByZ2JhKDAsIDAsIDAsIC4xOSlcclxufVxyXG5cclxuLmxvZ2luLXNuaXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogOTBweCA3MHB4IDUwcHggNzBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIxLCAxMDEsIDE5MiwgMC4zNClcclxufVxyXG5cclxuLmxvZ2luLXNuaXAgLmxvZ2luLFxyXG4ubG9naW4tc25pcCAuc2lnbi11cC1mb3JtIHtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjRzIGxpbmVhclxyXG59XHJcblxyXG4ubG9naW4tc25pcCAuc2lnbi1pbixcclxuLmxvZ2luLXNuaXAgLnNpZ24tdXAsXHJcbi5sb2dpbi1zcGFjZSAuZ3JvdXAgLmNoZWNrIHtcclxuICBkaXNwbGF5OiBub25lXHJcbn1cclxuXHJcbi5sb2dpbi1zbmlwIC50YWIsXHJcbi5sb2dpbi1zcGFjZSAuZ3JvdXAgLmxhYmVsLFxyXG4ubG9naW4tc3BhY2UgLmdyb3VwIC5idXR0b24ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcclxufVxyXG5cclxuLmxvZ2luLXNuaXAgLnRhYiB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIG1hcmdpbjogMCAxNXB4IDEwcHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50XHJcbn1cclxuXHJcbi5sb2dpbi1zbmlwIC5zaWduLWluOmNoZWNrZWQrLnRhYixcclxuLmxvZ2luLXNuaXAgLnNpZ24tdXA6Y2hlY2tlZCsudGFiIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItY29sb3I6ICMxMTYxZWVcclxufVxyXG5cclxuLmxvZ2luLXNwYWNlIHtcclxuICBtaW4taGVpZ2h0OiAzNDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcclxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkXHJcbn1cclxuXHJcbi5sb2dpbi1zcGFjZSAuZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHhcclxufVxyXG5cclxuLmxvZ2luLXNwYWNlIC5ncm91cCAubGFiZWwsXHJcbi5sb2dpbi1zcGFjZSAuZ3JvdXAgLmlucHV0LFxyXG4ubG9naW4tc3BhY2UgLmdyb3VwIC5idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGJsb2NrXHJcbn1cclxuXHJcbi5sb2dpbi1zcGFjZSAuZ3JvdXAgLmlucHV0LFxyXG4ubG9naW4tc3BhY2UgLmdyb3VwIC5idXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKVxyXG59XHJcblxyXG4ubG9naW4tc3BhY2UgLmdyb3VwIGlucHV0W2RhdGEtdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICB0ZXh0LXNlY3VyaXR5OiBjaXJjbGU7XHJcbiAgLXdlYmtpdC10ZXh0LXNlY3VyaXR5OiBjaXJjbGVcclxufVxyXG5cclxuLmxvZ2luLXNwYWNlIC5ncm91cCAubGFiZWwge1xyXG4gIGNvbG9yOiAjYWFhO1xyXG4gIGZvbnQtc2l6ZTogMTJweFxyXG59XHJcblxyXG4ubG9naW4tc3BhY2UgLmdyb3VwIC5idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6ICMxMTYxZWVcclxufVxyXG5cclxuLmxvZ2luLXNwYWNlIC5ncm91cCBsYWJlbCAuaWNvbiB7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpXHJcbn1cclxuXHJcbi5sb2dpbi1zcGFjZSAuZ3JvdXAgbGFiZWwgLmljb246YmVmb3JlLFxyXG4ubG9naW4tc3BhY2UgLmdyb3VwIGxhYmVsIC5pY29uOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0IDBzXHJcbn1cclxuXHJcbi5sb2dpbi1zcGFjZSAuZ3JvdXAgbGFiZWwgLmljb246YmVmb3JlIHtcclxuICBsZWZ0OiAzcHg7XHJcbiAgd2lkdGg6IDVweDtcclxuICBib3R0b206IDZweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSgwKVxyXG59XHJcblxyXG4ubG9naW4tc3BhY2UgLmdyb3VwIGxhYmVsIC5pY29uOmFmdGVyIHtcclxuICB0b3A6IDZweDtcclxuICByaWdodDogMDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSgwKVxyXG59XHJcblxyXG4ubG9naW4tc3BhY2UgLmdyb3VwIC5jaGVjazpjaGVja2VkK2xhYmVsIHtcclxuICBjb2xvcjogI2ZmZlxyXG59XHJcblxyXG4ubG9naW4tc3BhY2UgLmdyb3VwIC5jaGVjazpjaGVja2VkK2xhYmVsIC5pY29uIHtcclxuICBiYWNrZ3JvdW5kOiAjMTE2MWVlXHJcbn1cclxuXHJcbi5sb2dpbi1zcGFjZSAuZ3JvdXAgLmNoZWNrOmNoZWNrZWQrbGFiZWwgLmljb246YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSg0NWRlZylcclxufVxyXG5cclxuLmxvZ2luLXNwYWNlIC5ncm91cCAuY2hlY2s6Y2hlY2tlZCtsYWJlbCAuaWNvbjphZnRlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoLTQ1ZGVnKVxyXG59XHJcblxyXG4ubG9naW4tc25pcCAuc2lnbi1pbjpjaGVja2VkKy50YWIrLnNpZ24tdXArLnRhYisubG9naW4tc3BhY2UgLmxvZ2luIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwKVxyXG59XHJcblxyXG4ubG9naW4tc25pcCAuc2lnbi11cDpjaGVja2VkKy50YWIrLmxvZ2luLXNwYWNlIC5zaWduLXVwLWZvcm0ge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDApXHJcbn1cclxuXHJcbiosXHJcbjphZnRlcixcclxuOmJlZm9yZSB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveFxyXG59XHJcblxyXG4uY2xlYXJmaXg6YWZ0ZXIsXHJcbi5jbGVhcmZpeDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IHRhYmxlXHJcbn1cclxuXHJcbi5jbGVhcmZpeDphZnRlciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogYmxvY2tcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbn1cclxuXHJcbi5ociB7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgbWFyZ2luOiA2MHB4IDAgNTBweCAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpXHJcbn1cclxuXHJcbi5mb290IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBsZWZ0OiAxMDBweFxyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2IzYjNiM1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "jjR9":
/*!***************************************************************!*\
  !*** ./src/app/service/songPlaylist/song-playlist.service.ts ***!
  \***************************************************************/
/*! exports provided: SongPlaylistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongPlaylistService", function() { return SongPlaylistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const UPR_API = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}`;
class SongPlaylistService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    addSongToPlaylist(p_id, song) {
        return this.httpClient.post(UPR_API + `/song-playlists/${p_id}`, song);
    }
    checkSongPlaylist(p_id, song) {
        return this.httpClient.post(UPR_API + `/song-playlists/check-song/${p_id}`, song);
    }
    getSongByPlaylist(id) {
        return this.httpClient.get(UPR_API + `/song-playlists/songs/${id}`);
    }
}
SongPlaylistService.ɵfac = function SongPlaylistService_Factory(t) { return new (t || SongPlaylistService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SongPlaylistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SongPlaylistService, factory: SongPlaylistService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SongPlaylistService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "lOzJ":
/*!*******************************************************!*\
  !*** ./src/app/song/list-song/list-song.component.ts ***!
  \*******************************************************/
/*! exports provided: ListSongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSongComponent", function() { return ListSongComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ListSongComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListSongComponent.ɵfac = function ListSongComponent_Factory(t) { return new (t || ListSongComponent)(); };
ListSongComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListSongComponent, selectors: [["app-list-song"]], decls: 2, vars: 0, template: function ListSongComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "list-song works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXNvbmcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListSongComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-song',
                templateUrl: './list-song.component.html',
                styleUrls: ['./list-song.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nhcN":
/*!*************************************************************************!*\
  !*** ./src/app/playlist/comment-playlist/comment-playlist.component.ts ***!
  \*************************************************************************/
/*! exports provided: CommentPlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentPlaylistComponent", function() { return CommentPlaylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_comment_comment_playlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/comment/comment-playlist.service */ "4tpU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/user/user.service */ "rwBg");
/* harmony import */ var _service_playList_play_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/playList/play-list.service */ "06Dn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function CommentPlaylistComponent_li_5_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](comment_r3.date);
} }
function CommentPlaylistComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CommentPlaylistComponent_li_5_div_13_Template, 3, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", comment_r3.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](comment_r3.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](comment_r3.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.userCurrent);
} }
const _c0 = function () { return ["/login"]; };
function CommentPlaylistComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Log In To Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
function CommentPlaylistComponent_form_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CommentPlaylistComponent_form_8_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.addComment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommentPlaylistComponent_form_8_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.addCommentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r2.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class CommentPlaylistComponent {
    constructor(commentPlaylistService, activatedRoute, authService, userService, playlistService, fb) {
        this.commentPlaylistService = commentPlaylistService;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.userService = userService;
        this.playlistService = playlistService;
        this.fb = fb;
    }
    ngOnInit() {
        this.userCurrent = this.authService.currentUserValue;
        this.addCommentForm = this.fb.group({
            comment: [null]
        });
        const userFromLocalStorage = this.authService.currentUserValue;
        this.userService.getUserByUsername(userFromLocalStorage.username).subscribe(value => {
            this.user = value;
        });
        this.getAllComment();
    }
    getAllComment() {
        this.activatedRoute.paramMap.subscribe((param) => {
            this.id = +param.get('id');
            console.log(this.id);
            this.commentPlaylistService.getCommentByPlaylistId(this.id).subscribe(value => {
                this.comments = value;
            });
        });
    }
    getOnePlaylist(id) {
        return this.playlistService.getOnePlaylist(id).toPromise();
    }
    addComment() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const playlist = yield this.getOnePlaylist(this.id);
            // @ts-ignore
            if (document.getElementById('inputComment').value !== '') {
                const commentTest = this.addCommentForm.value;
                commentTest.comment = this.addCommentForm.value.comment;
                commentTest.user = this.user;
                commentTest.playList = playlist;
                this.commentPlaylistService.addComment(commentTest).subscribe(() => {
                    this.commentPlaylistService.getCommentByPlaylistId(this.id).subscribe(value1 => {
                        this.comments = value1;
                        console.log(this.comments);
                        this.getAllComment();
                    });
                });
                this.clear();
            }
        });
    }
    clear() {
        // @ts-ignore
        const input = document.getElementById('inputComment').value = '';
    }
}
CommentPlaylistComponent.ɵfac = function CommentPlaylistComponent_Factory(t) { return new (t || CommentPlaylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_comment_comment_playlist_service__WEBPACK_IMPORTED_MODULE_2__["CommentPlaylistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_playList_play_list_service__WEBPACK_IMPORTED_MODULE_6__["PlayListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"])); };
CommentPlaylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CommentPlaylistComponent, selectors: [["app-comment-playlist"]], decls: 9, vars: 4, consts: [[1, "chatContainer"], [1, "chatTitleContainer"], [1, "chatHistoryContainer"], [1, "formComments"], ["class", "commentLi commentstep-1", "data-commentid", "4", 4, "ngFor", "ngForOf"], [2, "text-align", "center", "margin-top", "20px"], ["type", "button", "class", "btn btn-outline-info", "style", "width: 100%", 3, "routerLink", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["data-commentid", "4", 1, "commentLi", "commentstep-1"], [1, "row", "d-flex", "justify-content-center", "mt-100", "mb-100"], [1, "col-lg-12"], [1, "card"], [1, "comment-widgets"], [1, "d-flex", "flex-row", "comment-row", "m-t-0", 2, "border-bottom", "solid gray 1px"], [1, "p-2"], ["alt", "user", 1, "rounded-circle", 2, "object-fit", "cover", "height", "50px", "width", "50px", 3, "src"], [1, "comment-text", "w-100"], [1, "font-medium", 2, "font-size", "20px"], [1, "m-b-15", "d-block", 2, "font-size", "12px"], ["class", "comment-footer", 4, "ngIf"], [1, "comment-footer", 2, "margin-top", "20px"], [1, "fas", "fa-thumbs-up"], [1, "fas", "fa-thumbs-down", 2, "margin-left", "20px"], [1, "comment-footer"], [1, "text-muted", "float-right"], ["type", "button", 1, "btn", "btn-outline-info", 2, "width", "100%", 3, "routerLink"], [3, "formGroup", "ngSubmit"], [1, "input-group", "input-group-sm", "chatMessageControls"], ["id", "sizing-addon3", 1, "input-group-addon"], [2, "width", "40px", "height", "40px", "object-fit", "cover", "border-radius", "50%", 3, "src"], ["autocomplete", "off", "id", "inputComment", "name", "comment", "formControlName", "comment", "type", "text", "placeholder", "Type your comment here..", 1, "form-control", 2, "border-radius", "20px", "height", "40px"], [1, "input-group-btn"], ["id", "clearMessageButton", 1, "btn", "btn-default", 3, "click"], ["id", "sendMessageButton", "type", "submit", 1, "btn", "btn-primary"], [1, "fas", "fa-comments"]], template: function CommentPlaylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CommentPlaylistComponent_li_5_Template, 19, 4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CommentPlaylistComponent_button_7_Template, 2, 2, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CommentPlaylistComponent_form_8_Template, 11, 2, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Comments (", ctx.comments.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.comments);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"]], styles: [".formComments[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\ninput[type=\"text\"][_ngcontent-%COMP%] {\r\n  border-radius: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.chatTitleContainer[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  font-size: 15pt;\r\n  vertical-align: middle;\r\n  display: table-cell;\r\n  height: 15px;\r\n  width: 100%;\r\n  font-family: Expert-Sans-Regular, verdana, Arial, helvetica, sans-serif;\r\n  color: white;\r\n\r\n}\r\n\r\n.chatContainer[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: #1a1e33;\r\n  padding: 20px;\r\n\r\n}\r\n\r\n.chatHistoryContainer[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  height: 300px;\r\n  width: 100%;\r\n  background-color: transparent;\r\n  border-top-left-radius: 6px;\r\n  border-top-right-radius: 6px;\r\n\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:hover {\r\n  transition: 0.5s;\r\n  box-shadow: 0 0 5px rgba(81, 203, 238, 1);\r\n  border: 1px solid rgba(81, 203, 238, 1);\r\n}\r\n\r\n.chatMessageControls[_ngcontent-%COMP%] {\r\n\r\n  margin-top: 6px;\r\n  padding: 10px;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  border-bottom-left-radius: 6px;\r\n  border-bottom-right-radius: 6px;\r\n\r\n}\r\n\r\n.fa[_ngcontent-%COMP%] {\r\n  margin-right: 6px;\r\n}\r\n\r\n.formComments[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  padding-bottom: 60px;\r\n  padding-left: 0px;\r\n\r\n}\r\n\r\n.formComments[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\r\n  margin-bottom: 10px;\r\n\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 0;\r\n  word-wrap: break-word;\r\n  background-color: #1a93ca;\r\n  background-clip: border-box;\r\n  border: 0px solid transparent;\r\n  border-radius: 0px\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n  padding: 1.25rem\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  font-weight: 600;\r\n  margin-bottom: 10px\r\n}\r\n\r\n.comment-widgets[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-bottom: 10px\r\n}\r\n\r\n.comment-widgets[_ngcontent-%COMP%]   .comment-row[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid transparent;\r\n  padding: 14px;\r\n  display: flex;\r\n  margin: 10px 0\r\n}\r\n\r\n.p-2[_ngcontent-%COMP%] {\r\n  padding: 0.5rem !important\r\n}\r\n\r\n.comment-text[_ngcontent-%COMP%] {\r\n  padding-left: 15px\r\n}\r\n\r\n.w-100[_ngcontent-%COMP%] {\r\n  width: 100% !important\r\n}\r\n\r\n.m-b-15[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px\r\n}\r\n\r\n.btn-sm[_ngcontent-%COMP%] {\r\n  padding: 0.25rem 0.5rem;\r\n  font-size: 0.76563rem;\r\n  line-height: 1.5;\r\n  border-radius: 1px\r\n}\r\n\r\n.btn-cyan[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background-color: #27a9e3;\r\n  border-color: #27a9e3\r\n}\r\n\r\n.btn-cyan[_ngcontent-%COMP%]:hover {\r\n  color: #fff;\r\n  background-color: #1a93ca;\r\n  border-color: #198bbe\r\n}\r\n\r\n.comment-widgets[_ngcontent-%COMP%]   .comment-row[_ngcontent-%COMP%]:hover {\r\n  background: rgba(0, 0, 0, 0.05)\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQtcGxheWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUVBQXVFO0VBQ3ZFLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsYUFBYTs7QUFFZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsV0FBVztFQUNYLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsNEJBQTRCOztBQUU5Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsdUNBQXVDO0FBQ3pDOztBQUVBOztFQUVFLGVBQWU7RUFDZixhQUFhO0VBQ2IsV0FBVztFQUNYLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsK0JBQStCOztBQUVqQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixpQkFBaUI7O0FBRW5COztBQUVBOztFQUVFLG1CQUFtQjs7QUFFckI7O0FBR0E7RUFDRSxrQkFBa0I7RUFHbEIsYUFBYTtFQUliLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCO0FBQ0Y7O0FBRUE7RUFHRSxjQUFjO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFHYixhQUFhO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQjtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QjtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QjtBQUNGOztBQUVBO0VBQ0U7QUFDRiIsImZpbGUiOiJjb21tZW50LXBsYXlsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybUNvbW1lbnRzOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uY2hhdFRpdGxlQ29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTVwdDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiBFeHBlcnQtU2Fucy1SZWd1bGFyLCB2ZXJkYW5hLCBBcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi5jaGF0Q29udGFpbmVyIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTFlMzM7XHJcbiAgcGFkZGluZzogMjBweDtcclxuXHJcbn1cclxuXHJcbi5jaGF0SGlzdG9yeUNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xyXG5cclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpob3ZlciB7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoODEsIDIwMywgMjM4LCAxKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDgxLCAyMDMsIDIzOCwgMSk7XHJcbn1cclxuXHJcbi5jaGF0TWVzc2FnZUNvbnRyb2xzIHtcclxuXHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDZweDtcclxuXHJcbn1cclxuXHJcbi5mYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbn1cclxuXHJcbi5mb3JtQ29tbWVudHMge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG5cclxufVxyXG5cclxuLmZvcm1Db21tZW50cyBsaSB7XHJcblxyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG59XHJcblxyXG5cclxuLmNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTkzY2E7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweFxyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gIC1tcy1mbGV4OiAxIDEgYXV0bztcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBwYWRkaW5nOiAxLjI1cmVtXHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLXRpdGxlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4XHJcbn1cclxuXHJcbi5jb21tZW50LXdpZGdldHMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4XHJcbn1cclxuXHJcbi5jb21tZW50LXdpZGdldHMgLmNvbW1lbnQtcm93IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMTRweDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMTBweCAwXHJcbn1cclxuXHJcbi5wLTIge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5jb21tZW50LXRleHQge1xyXG4gIHBhZGRpbmctbGVmdDogMTVweFxyXG59XHJcblxyXG4udy0xMDAge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnRcclxufVxyXG5cclxuLm0tYi0xNSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweFxyXG59XHJcblxyXG4uYnRuLXNtIHtcclxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICBmb250LXNpemU6IDAuNzY1NjNyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBib3JkZXItcmFkaXVzOiAxcHhcclxufVxyXG5cclxuLmJ0bi1jeWFuIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdhOWUzO1xyXG4gIGJvcmRlci1jb2xvcjogIzI3YTllM1xyXG59XHJcblxyXG4uYnRuLWN5YW46aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTkzY2E7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMTk4YmJlXHJcbn1cclxuXHJcbi5jb21tZW50LXdpZGdldHMgLmNvbW1lbnQtcm93OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDUpXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CommentPlaylistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-comment-playlist',
                templateUrl: './comment-playlist.component.html',
                styleUrls: ['./comment-playlist.component.css']
            }]
    }], function () { return [{ type: _service_comment_comment_playlist_service__WEBPACK_IMPORTED_MODULE_2__["CommentPlaylistService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _service_playList_play_list_service__WEBPACK_IMPORTED_MODULE_6__["PlayListService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "o5Wg":
/*!**********************************************************************!*\
  !*** ./src/app/client/user/resetpassword/resetpassword.component.ts ***!
  \**********************************************************************/
/*! exports provided: ResetpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordComponent", function() { return ResetpasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/user/user.service */ "rwBg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/auth/auth.service */ "/AaM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = function () { return ["/profile"]; };
class ResetpasswordComponent {
    constructor(userService, formBuilder, authService, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.resetPassForm = this.formBuilder.group({
            password: [''],
            newpassword: ['']
        });
        this.authService.currentUser.subscribe(value => {
            this.currentUser = value;
            this.userService.getUserByUsername(value.username).subscribe(value1 => {
                this.user = value1;
            });
        });
    }
    resetPassword() {
        this.user.comfirmPassword = this.resetPassForm.value.password;
        this.userService.checkPassword(this.user).subscribe(value => {
            if (value && (this.resetPassForm.value.password !== this.resetPassForm.value.newpassword)) {
                this.userService.resetPassword(this.user.username, this.resetPassForm.value.newpassword).subscribe();
                this.authService.logout();
                alert('Reset Password Successfully! Please Log In!');
                this.router.navigate(['/login']);
            }
            else {
                alert('Xin kiểm tra lại mật khẩu cũ và Mật khẩu mới không được trùng mật khẩu cũ!');
            }
        });
    }
}
ResetpasswordComponent.ɵfac = function ResetpasswordComponent_Factory(t) { return new (t || ResetpasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ResetpasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetpasswordComponent, selectors: [["app-resetpassword"]], decls: 26, vars: 6, consts: [[3, "formGroup", "ngSubmit"], [1, "wrapper", "bg-white", "mt-sm-5"], [1, "pb-4", "border-bottom"], ["id", "box", 1, "d-flex", "align-items-start", "py-3", "border-bottom"], ["id", "output", "alt", "User's Avatar", 1, "img", 3, "src"], ["id", "img-section", 1, "pl-sm-4", "pl-2"], [1, "py-2"], [1, "row", "py-2"], [1, "col-md-6"], ["type", "password", "formControlName", "password", 1, "bg-light", "form-control"], [1, "col-md-6", "pt-md-0", "pt-3"], ["type", "password", "formControlName", "newpassword", "name", "newpassword", 1, "bg-light", "form-control"], [1, "py-3", "pb-4", "text-center"], ["type", "submit", 1, "btn", "btn-success"], [1, "btn", "btn-outline-light", 2, "color", "black", 3, "routerLink"]], template: function ResetpasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetpasswordComponent_Template_form_ngSubmit_0_listener() { return ctx.resetPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Old Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.resetPassForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: 'Poppins', sans-serif;\r\n  background-color: aliceblue\r\n}\r\n\r\n.previewImage[_ngcontent-%COMP%] {\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 6px;\r\n  object-fit: cover\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  padding: 30px 50px;\r\n  border: 1px solid #ddd;\r\n  border-radius: 15px;\r\n  margin: 10px auto;\r\n  max-width: 600px\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n  color: black;\r\n  letter-spacing: -1px;\r\n  font-weight: 400\r\n}\r\n\r\n#box[_ngcontent-%COMP%]:hover   #image[_ngcontent-%COMP%] {\r\n  opacity: 0.3;\r\n}\r\n\r\n#box[_ngcontent-%COMP%]:hover   #middle[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\n\r\n#middle[_ngcontent-%COMP%] {\r\n  transition: .5s ease;\r\n  opacity: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n\r\n.img[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  display: block;\r\n  transition: .5s ease;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 6px;\r\n  object-fit: cover\r\n}\r\n\r\n#img-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #deactivate[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #resetpassword[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  color: #777;\r\n  margin-bottom: 10px;\r\n  text-align: justify\r\n}\r\n\r\n#img-section[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], #img-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #deactivate[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], #resetpassword[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  color: #0c1027;\r\n  font-size: 14px\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  color: #777;\r\n  padding-left: 3px\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n  border-radius: 10px\r\n}\r\n\r\ninput[placeholder][_ngcontent-%COMP%] {\r\n  font-weight: 500\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n  box-shadow: none;\r\n  border: 1.5px solid #0779e4\r\n}\r\n\r\nselect[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  border: 1px solid #ddd;\r\n  border-radius: 10px;\r\n  height: 40px;\r\n  padding: 5px 10px\r\n}\r\n\r\nselect[_ngcontent-%COMP%]:focus {\r\n  outline: none\r\n}\r\n\r\n@media (max-width: 576px) {\r\n  .wrapper[_ngcontent-%COMP%] {\r\n    padding: 25px 20px\r\n  }\r\n\r\n  #deactivate[_ngcontent-%COMP%] {\r\n    line-height: 18px\r\n  }\r\n\r\n  #resetpassword[_ngcontent-%COMP%] {\r\n    line-height: 18px\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0cGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RUFBNEU7O0FBRTVFO0VBQ0Usa0NBQWtDO0VBQ2xDO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQjtBQUNGOztBQUVBOzs7RUFHRSxlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQjtBQUNGOztBQUVBOzs7O0VBSUUsY0FBYztFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1g7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUdBO0VBQ0U7SUFDRTtFQUNGOztFQUVBO0lBQ0U7RUFDRjs7RUFFQTtJQUNFO0VBQ0Y7QUFDRiIsImZpbGUiOiJyZXNldHBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWVcclxufVxyXG5cclxuLnByZXZpZXdJbWFnZSB7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBvYmplY3QtZml0OiBjb3ZlclxyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgcGFkZGluZzogMzBweCA1MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICBtYXgtd2lkdGg6IDYwMHB4XHJcbn1cclxuXHJcbmg0IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMFxyXG59XHJcblxyXG4jYm94OmhvdmVyICNpbWFnZSB7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4jYm94OmhvdmVyICNtaWRkbGUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbiNtaWRkbGUge1xyXG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW1nIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyXHJcbn1cclxuXHJcbiNpbWctc2VjdGlvbiBwLFxyXG4jZGVhY3RpdmF0ZSBwLFxyXG4jcmVzZXRwYXNzd29yZCBwIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5XHJcbn1cclxuXHJcbiNpbWctc2VjdGlvbiBiLFxyXG4jaW1nLXNlY3Rpb24gYnV0dG9uLFxyXG4jZGVhY3RpdmF0ZSBiLFxyXG4jcmVzZXRwYXNzd29yZCBiIHtcclxuICBjb2xvcjogIzBjMTAyNztcclxuICBmb250LXNpemU6IDE0cHhcclxufVxyXG5cclxubGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbiAgcGFkZGluZy1sZWZ0OiAzcHhcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweFxyXG59XHJcblxyXG5pbnB1dFtwbGFjZWhvbGRlcl0ge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDBcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkICMwNzc5ZTRcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4XHJcbn1cclxuXHJcbnNlbGVjdDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMjVweCAyMHB4XHJcbiAgfVxyXG5cclxuICAjZGVhY3RpdmF0ZSB7XHJcbiAgICBsaW5lLWhlaWdodDogMThweFxyXG4gIH1cclxuXHJcbiAgI3Jlc2V0cGFzc3dvcmQge1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHhcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetpasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resetpassword',
                templateUrl: './resetpassword.component.html',
                styleUrls: ['./resetpassword.component.css']
            }]
    }], function () { return [{ type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "omAJ":
/*!****************************************************************!*\
  !*** ./src/app/client/user/my-profile/my-profile.component.ts ***!
  \****************************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _service_song_song_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/song/song.service */ "r1xU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/user/user.service */ "rwBg");
/* harmony import */ var _service_like_like_song_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/like/like-song.service */ "87Ka");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _service_playList_play_list_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../service/playList/play-list.service */ "06Dn");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../service/category/category.service */ "00Ag");
/* harmony import */ var _service_songPlaylist_song_playlist_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../service/songPlaylist/song-playlist.service */ "jjR9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
















function MyProfileComponent_div_0_div_39_ng_template_8_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", c_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", c_r10.name, " ");
} }
function MyProfileComponent_div_0_div_39_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Update a new playlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function MyProfileComponent_div_0_div_39_ng_template_8_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const playlistUpdate_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.updateMyPlaylist(playlistUpdate_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "select", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, MyProfileComponent_div_0_div_39_ng_template_8_option_31_Template, 2, 2, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_div_0_div_39_ng_template_8_Template_button_click_33_listener() { const modal_r8 = ctx.$implicit; return modal_r8.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_div_0_div_39_ng_template_8_Template_button_click_35_listener() { const modal_r8 = ctx.$implicit; return modal_r8.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playlistUpdate_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r7.playUpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](playlistUpdate_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](playlistUpdate_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", playlistUpdate_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", playlistUpdate_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", playlistUpdate_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.categories);
} }
const _c0 = function (a1) { return ["/playlist", a1]; };
function MyProfileComponent_div_0_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_div_0_div_39_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r17.openScrollableContent(_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MyProfileComponent_div_0_div_39_ng_template_8_Template, 37, 7, "ng-template", null, 51, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playlistUpdate_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, playlistUpdate_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](playlistUpdate_r5.name);
} }
function MyProfileComponent_div_0_div_40_a_23_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_div_0_div_40_a_23_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const song_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r25.likeSong(song_r19.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MyProfileComponent_div_0_div_40_a_24_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_div_0_div_40_a_24_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const song_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r28.likeSong(song_r19.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MyProfileComponent_div_0_div_40_ng_template_27_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pl_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", pl_r33.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pl_r33.name, " ");
} }
function MyProfileComponent_div_0_div_40_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function MyProfileComponent_div_0_div_40_ng_template_27_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const song_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r34.addSongToPlaylist(song_r19.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Pick your playlist to add song:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "select", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MyProfileComponent_div_0_div_40_ng_template_27_option_6_Template, 2, 2, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_div_0_div_40_ng_template_27_Template_button_click_8_listener() { const modal_r31 = ctx.$implicit; return modal_r31.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Add to playlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_div_0_div_40_ng_template_27_Template_button_click_10_listener() { const modal_r31 = ctx.$implicit; return modal_r31.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r24.songPlaylistForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r24.myPlayLists);
} }
const _c1 = function (a1) { return ["/songs/detail", a1]; };
const _c2 = function (a1) { return ["/songs/update/", a1]; };
function MyProfileComponent_div_0_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_div_0_div_40_Template_img_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const song_r19 = ctx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r39.playThisSong(song_r19.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_div_0_div_40_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const song_r19 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r41.deleteSong(song_r19.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_div_0_div_40_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](28); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r42.openScrollableContent(_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, MyProfileComponent_div_0_div_40_a_23_Template, 2, 0, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, MyProfileComponent_div_0_div_40_a_24_Template, 2, 0, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, MyProfileComponent_div_0_div_40_ng_template_27_Template, 12, 2, "ng-template", null, 84, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const song_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", song_r19.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c1, song_r19.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](song_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](song_r19.singer.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](song_r19.category.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c2, song_r19.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", song_r19.isLiked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !song_r19.isLiked);
} }
const _c3 = function () { return ["/songs/create"]; };
function MyProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Play All");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Create New Song");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_div_0_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); return ctx_r43.openScrollableContent(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Create New Playlist ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, MyProfileComponent_div_0_div_39_Template, 10, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, MyProfileComponent_div_0_div_40_Template, 29, 12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "View More");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "aside", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Similar Artists");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "View All");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Jack");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "V-Pop");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Binz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Hip Hop");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Min");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "V-Pop");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Recently Played");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "View All");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "01");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Blinding lights");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "The Weeknd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "02");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Blinding lights");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "The Weeknd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "03");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Blinding lights");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "The Weeknd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "04");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Blinding lights");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "The Weeknd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "05");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Blinding lights");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "The Weeknd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "06");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Blinding lights");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "The Weeknd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "07");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](182, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "Blinding lights");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "The Weeknd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](191, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "08");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](196, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Blinding lights");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "The Weeknd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](205, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.user.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Email: ", ctx_r0.user.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Phone: ", ctx_r0.user.phoneNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Address: ", ctx_r0.user.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.songs.length, " songs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.myPlayLists);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.songs);
} }
function MyProfileComponent_ng_template_3_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", c_r47.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", c_r47.name, " ");
} }
function MyProfileComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Create a new playlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function MyProfileComponent_ng_template_3_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r48.savePlayList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "select", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "--> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, MyProfileComponent_ng_template_3_option_25_Template, 2, 2, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_ng_template_3_Template_button_click_27_listener() { const modal_r45 = ctx.$implicit; return modal_r45.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_ng_template_3_Template_button_click_29_listener() { const modal_r45 = ctx.$implicit; return modal_r45.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.playForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.categories);
} }
class MyProfileComponent {
    constructor(songService, activatedRoute, authService, userService, likeService, modalService, playListService, fb, categoryService, songPlaylistService) {
        this.songService = songService;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.userService = userService;
        this.likeService = likeService;
        this.modalService = modalService;
        this.playListService = playListService;
        this.fb = fb;
        this.categoryService = categoryService;
        this.songPlaylistService = songPlaylistService;
        this.songs = [];
        this.playlists = [];
        this.categories = [];
        this.songLikes = [];
        this.myPlayLists = [];
        this.playForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.songPlaylistForm = this.fb.group({
            song: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            playlist: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(term => term.length < 1 ? []
            : this.playlists.filter(v => v.name.toLowerCase()
                .indexOf(term.toLowerCase()) > -1).slice(0, 10)));
        this.formatter = (x) => {
            x.name, x.id;
        };
    }
    ngOnInit() {
        this.playUpForm = this.fb.group({
            name: [null],
            category: [null],
            description: [null]
        });
        const userFromLocalStorage = this.authService.currentUserValue;
        this.userService.getUserByUsername(userFromLocalStorage.username).subscribe(value => {
            this.user = value;
            this.getMySongs(this.user.id);
            this.getMyPlaylists(this.user.id);
        });
        this.getAllCategory();
        this.getAllPlaylist();
    }
    // @ts-ignore
    getMySongs(id) {
        this.songService.getUserSong(id).subscribe(value => {
            this.songs = value;
            this.songs = value;
            this.songs.map(song => song.isLiked = false);
            this.likeService.getAllLikeUser(id).subscribe((data) => {
                this.songLikes = data;
                for (let i = 0; i < this.songs.length; i++) {
                    for (let j = 0; j < this.songLikes.length; j++) {
                        if (this.songs[i].id == this.songLikes[j].id) {
                            this.songs[i].isLiked = true;
                        }
                    }
                }
                console.log(this.songLikes);
            });
        });
    }
    likeSong(s_id) {
        this.likeService.likeSong(s_id, this.user.id).subscribe(() => console.log(this.user.id));
        this.getMySongs(this.user.id);
        // this.getAllLikeSong(this.user.id);
    }
    playThisSong(id) {
        this.songService.countViews(id).subscribe(() => console.log());
        this.songService.getSongById(id).subscribe(value => {
            this.song = value;
            localStorage.setItem('songSelected', JSON.stringify(this.song));
            window.location.reload();
        });
    }
    deleteSong(id) {
        if (confirm('Are you sure')) {
            this.songService.deleteSong(id).subscribe(() => console.log('ok'));
            window.location.reload();
        }
    }
    openScrollableContent(longContent) {
        this.modalService.open(longContent, { scrollable: true });
    }
    setNewPlayList() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const category_id = +((_a = this.playForm.get('category')) === null || _a === void 0 ? void 0 : _a.value);
            const category = yield this.getCategory(category_id);
            const playList = {
                name: this.playForm.get('name').value,
                description: this.playForm.get('description').value,
                user: this.user
            };
            if (category != null) {
                playList.category = category;
            }
            return playList;
        });
    }
    savePlayList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const newPlay = yield this.setNewPlayList();
            this.playListService.savePlayList(newPlay).subscribe(() => {
                alert("Save new playlist successfully");
                this.getMyPlaylists(this.user.id);
                this.getMySongs(this.user.id);
            });
        });
    }
    // @ts-ignore
    getAllCategory() {
        this.categoryService.getAllCategory().subscribe(value => this.categories = value);
    }
    getCategory(id) {
        return this.categoryService.getCategory(id).toPromise();
    }
    getAllPlaylist() {
        this.playListService.getAllPlaylist().subscribe(value => {
            this.myPlayLists = value;
        });
    }
    getSongAddToList(id) {
        return this.songService.getSongById(id).toPromise();
    }
    checkSongPlaylist(id, song) {
        return this.songPlaylistService.checkSongPlaylist(id, song).toPromise();
    }
    getOnePlaylist(id) {
        return this.playListService.getOnePlaylist(id).toPromise();
    }
    setNewPlaylistUp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const category_id = +this.playUpForm.value.category;
            const category = yield this.getCategory(category_id);
            const playList = {
                name: this.playUpForm.value.name,
                description: this.playUpForm.value.description,
                user: this.user
            };
            if (category != null) {
                playList.category = category;
            }
            return playList;
        });
    }
    updateMyPlaylist(p_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const playlist = yield this.setNewPlaylistUp();
            this.playListService.updateMyPlaylist(p_id, this.user.id, playlist).subscribe(() => {
                alert("update successful");
                this.getMyPlaylists(this.user.id);
            });
        });
    }
    addSongToPlaylist(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const newSong = yield this.getSongAddToList(id);
            let p_id = +this.songPlaylistForm.get('playlist').value;
            let checkSong = yield this.checkSongPlaylist(p_id, newSong);
            if (checkSong) {
                this.songPlaylistService.addSongToPlaylist(p_id, newSong).subscribe(() => alert('add to playlist ok!'));
            }
            else {
                alert('this song had in this playlist');
            }
        });
    }
    getMyPlaylists(id) {
        this.playListService.getMyPlaylists(id).subscribe(value => this.myPlayLists = value);
    }
}
MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) { return new (t || MyProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_song_song_service__WEBPACK_IMPORTED_MODULE_4__["SongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_like_like_song_service__WEBPACK_IMPORTED_MODULE_8__["LikeSongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_playList_play_list_service__WEBPACK_IMPORTED_MODULE_10__["PlayListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_category_category_service__WEBPACK_IMPORTED_MODULE_11__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_songPlaylist_song_playlist_service__WEBPACK_IMPORTED_MODULE_12__["SongPlaylistService"])); };
MyProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MyProfileComponent, selectors: [["app-my-profile"]], decls: 5, vars: 1, consts: [["class", "container container-flex", 4, "ngIf"], [1, "modal"], [1, "card", "card-deck"], ["createPlaylist", ""], [1, "container", "container-flex"], [1, "featured-playlist", "flex-space"], [1, "featured-playlist-image"], [2, "height", "300px", "width", "300px", "border-radius", "5px", "object-fit", "cover", 3, "src"], [1, "featured-playlist-details"], [1, "featured-playlist-info"], [1, "flex-space", "featured-playlist-info-top"], [1, "featured-playlist-info-name"], [1, "featured-playlist-writeup"], [1, "featured-playlist-buttons"], [1, "btn", "btn-outline-primary"], [1, "btn", "btn-outline-primary", 3, "routerLink"], [1, "btn", "btn-outline-primary", 3, "click"], [4, "ngFor", "ngForOf"], ["class", "playlist-next-item flex-space", 4, "ngFor", "ngForOf"], ["id", "show"], [1, "playlist-aside"], [1, "similar-artists"], [1, "similar-artists-title", "flex-space"], ["href", "", 1, "display-none-960"], [1, "similar-artists-sub"], [1, "similar-artists-entry", "flex-space"], [1, "similar-artists-image"], ["src", "https://image.thanhnien.vn/768/uploaded/ngocthanh/2020_07_05/j02-anhnoibat_kieu.jpg", 2, "height", "50px", "width", "50px", "object-fit", "cover", "border-radius", "5px"], [1, "similar-artists-info"], [1, "similar-artists-info-name"], [1, "similar-artists-info-sub"], [1, "similar-artists-options"], [1, "similar-artists-options-menu"], ["aria-hidden", "true", 1, "fa", "fa-bars"], ["src", "https://tudienwiki.com/wp-content/uploads/2020/09/Binz.png", 2, "height", "50px", "width", "50px", "object-fit", "cover", "border-radius", "5px"], ["src", "https://static2.yan.vn/YanNews/2167221/201905/tieu-su-su-nghiep-va-cuoc-doi-cua-ca-si-min-f0ea35dc.jpg", 2, "height", "50px", "width", "50px", "object-fit", "cover", "border-radius", "5px"], [1, "recently-played"], [1, "recently-played-title", "similar-artists-title", "flex-space"], [1, "queue-entry", "flex-space"], [1, "queue-number"], [1, "queue-entry-image"], ["src", "src/song_pic1.jpg"], [1, "queue-entry-info"], [1, "language-sub", "latest-release-sub", "queue-entry-sub"], [1, "like-icon"], ["href", "#"], ["aria-hidden", "true", 1, "fa", "fa-heart-o"], ["src", "src/bad_guy.jpg"], [3, "routerLink"], ["id", "edit2", 3, "click"], [1, "fas", "fa-edit"], ["updatePlaylist", ""], [1, "modal-header", 2, "background-color", "#1a1e33"], [1, "modal-title"], [3, "formGroup", "ngSubmit"], [2, "border-radius", "10px", "color", "#1a1e33"], ["cellpadding", "10px", 2, "color", "#1a1e33", "margin", "auto"], [1, "col-form-label-lg"], ["type", "text", "formControlName", "name", 3, "value"], ["type", "text", 3, "value"], ["type", "text", "formControlName", "description", 3, "value"], ["formControlName", "category", 1, "input-group-lg", 2, "width", "100%", "height", "30px"], [3, "value", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-outline-success", 3, "click"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], [3, "value"], [1, "playlist-next-item", "flex-space"], [1, "playlist-next-item-entry", "flex-space"], [1, "playlist-next-item-entry-info", "flex-space", 2, "width", "50%"], [2, "width", "10px"], [1, "playlist-next-item-entry-info-image"], [2, "height", "50px", "width", "50px", "object-fit", "cover", 3, "src", "click"], [1, "playlist-next-item-entry-info-name", 2, "width", "200px", "word-break", "break-all"], [1, "playlist-next-item-entry-info-name-sub"], [2, "margin-top", "20px", "margin-left", "200px"], ["id", "categoryName"], [1, "playlist-next-item-entry-icons", "flex-space"], ["id", "edit", 3, "routerLink"], [1, "mytooltip", 3, "click"], ["id", "delete", 1, "fas", "fa-trash-alt"], ["role", "button", 3, "click"], ["id", "add", "aria-hidden", "true", 1, "fa", "fa-plus"], [3, "click", 4, "ngIf"], ["longContent", ""], [3, "click"], ["id", "unlike", "aria-hidden", "true", 1, "fa", "fa-heart"], ["id", "like", "aria-hidden", "true", 1, "fa", "fa-heart"], [1, "modal-header"], [1, "modal-title", 2, "color", "#1b1b1b"], ["formControlName", "playlist", 1, "input-group-lg"], ["type", "submit", 1, "btn-danger", 3, "click"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["type", "text", "formControlName", "name", 1, "input-group-lg"], ["type", "text", "formControlName", "description", 1, "input-group-lg"]], template: function MyProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MyProfileComponent_div_0_Template, 206, 11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MyProfileComponent_ng_template_3_Template, 31, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: ["#show[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-left: 50%;\r\n  width: 200px;\r\n  height: 50px;\r\n  text-decoration: none;\r\n}\r\n\r\n#delete[_ngcontent-%COMP%]:hover {\r\n  color: #fc4a1a;\r\n  transition: 0.2s;\r\n  text-shadow: 0 0 5px rgba(81, 203, 238, 0.2);\r\n  cursor: pointer;\r\n}\r\n\r\n#edit[_ngcontent-%COMP%]:hover {\r\n  color: #6be585;\r\n  transition: 0.2s;\r\n  text-shadow: 0 0 5px rgba(81, 203, 238, 0.2);\r\n  cursor: pointer;\r\n}\r\n\r\n#add[_ngcontent-%COMP%]:hover {\r\n  color: #0779e4;\r\n  transition: 0.2s;\r\n  text-shadow: 0 0 5px rgba(81, 203, 238, 0.2);\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n#unlike[_ngcontent-%COMP%] {\r\n  transition: 0.2s;\r\n  cursor: pointer;\r\n  color: transparent;\r\n  -webkit-text-stroke-width: 1px;\r\n  -webkit-text-stroke-color: white;\r\n}\r\n\r\n#like[_ngcontent-%COMP%] {\r\n  -webkit-text-stroke-width: 1px;\r\n  -webkit-text-stroke-color: #FF0099;\r\n  transition: 0.2s;\r\n  cursor: pointer;\r\n  color: #FF0099;\r\n}\r\n\r\n#like[_ngcontent-%COMP%]:hover {\r\n  transition: 0.2s;\r\n  transform: scale(1.1);\r\n  cursor: pointer;\r\n}\r\n\r\n#unlike[_ngcontent-%COMP%]:hover {\r\n  transition: 0.2s;\r\n  transform: scale(1.1);\r\n  cursor: pointer;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]:hover {\r\n  transition: 0.5s;\r\n  box-shadow: 0 0 5px rgba(81, 203, 238, 1);\r\n  border: 1px solid rgba(81, 203, 238, 1);\r\n  cursor: pointer;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\n#categoryName[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  font-weight: lighter;\r\n  outline: 1px white;\r\n  display: block;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  transition: 0.5s;\r\n  color: white;\r\n}\r\n\r\np[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  font-size: 15px;\r\n  transition: 0.5s;\r\n  text-shadow: 0 0 5px rgba(81, 203, 238, 1);\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n  border-radius: 3px;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  background-color: #0c1027;\r\n  color: var(--main-font-color);\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  min-width: 270px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  display: block;\r\n  border-radius: 5px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  max-width: 900px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.container-flex[_ngcontent-%COMP%], .flex-space[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.container-flex[_ngcontent-%COMP%] {\r\n  margin-bottom: 6em;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  width: 75%;\r\n}\r\n\r\naside[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n}\r\n\r\n\r\n\r\n.playlist-aside[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n}\r\n\r\n.similar-artists[_ngcontent-%COMP%], .recently-played[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.similar-artists-title[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n}\r\n\r\n.similar-artists-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 1em;\r\n  margin-bottom: 0.5em;\r\n  padding: 0;\r\n  font-size: 1.2rem;\r\n  white-space: nowrap;\r\n  width: 70%;\r\n}\r\n\r\n.similar-artists-sub[_ngcontent-%COMP%] {\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 1em;\r\n  margin-bottom: 0.5em;\r\n  padding: 0;\r\n  font-size: 0.7rem;\r\n  color: #9c9da7;\r\n  white-space: nowrap;\r\n  width: 25%;\r\n}\r\n\r\n.similar-artists-entry[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  align-items: center;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.similar-artists-image[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n}\r\n\r\n.similar-artists-info[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n}\r\n\r\n.similar-artists-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.similar-artists-info-sub[_ngcontent-%COMP%] {\r\n  color: #9c9da7;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.similar-artists-options[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  color: #9c9da7;\r\n  font-size: 0.7rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.similar-artists-options-menu[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.2em;\r\n}\r\n\r\n.similar-artists-options[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\n.recently-played-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 1.08rem;\r\n}\r\n\r\n\r\n\r\n.featured-playlist[_ngcontent-%COMP%] {\r\n  background: #141b41;\r\n}\r\n\r\n.featured-playlist-image[_ngcontent-%COMP%] {\r\n  width: 45%;\r\n}\r\n\r\n.featured-playlist-image[_ngcontent-%COMP%]::after {\r\n  display: block;\r\n  position: relative;\r\n  background-image: linear-gradient(to bottom, transparent 0%, #141b41 150%);\r\n  margin-top: -150px;\r\n  height: 150px;\r\n  width: 100%;\r\n  content: '';\r\n}\r\n\r\n.featured-playlist-details[_ngcontent-%COMP%] {\r\n  width: 52.5%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n.featured-playlist-info-name[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.featured-playlist-info-top[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n}\r\n\r\n.featured-playlist[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 0.8rem;\r\n  color: #9c9da7;\r\n}\r\n\r\n.followers[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 0.6rem;\r\n}\r\n\r\n.featured-playlist-buttons[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.play-all-button[_ngcontent-%COMP%] {\r\n  margin-right: 5px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.play-all-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  background-image: linear-gradient(to right, #4327b4, #be46dd);\r\n  color: white;\r\n  border: none;\r\n  padding: 0.5em 3em;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  margin-bottom: 0.2em;\r\n}\r\n\r\n.play-all-button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 0.7rem;\r\n}\r\n\r\n\r\n\r\n.playlist-next-item[_ngcontent-%COMP%] {\r\n  flex-direction: column;\r\n}\r\n\r\n.playlist-next-item-entry[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background: #1a1e33;\r\n  padding: 0.5em 0;\r\n  margin: 0.5em 0;\r\n}\r\n\r\n.playlist-next-item-entry[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  min-width: 270px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.playlist-next-item-entry-info[_ngcontent-%COMP%] {\r\n  width: 35%;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.playlist-next-item-entry-info-image[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n}\r\n\r\n.playlist-next-item-entry-icons[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  width: 20%;\r\n  justify-content: space-around;\r\n}\r\n\r\n.playlist-next-item-entry-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #9c9da7;\r\n}\r\n\r\n.playlist-next-item-entry-number[_ngcontent-%COMP%], .playlist-next-item-entry-info-name-sub[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  color: #9c9da7;\r\n}\r\n\r\n@media screen and (max-width: 960px) and (min-width: 650px) {\r\n  .display-none-960[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 750px) {\r\n  .similar-artists-info-name[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 750px) and (min-width: 651px) {\r\n  .featured-playlist-writeup[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 0.6rem;\r\n  }\r\n\r\n  .playlist-next-item-entry-info[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n  .playlist-aside[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .similar-artists-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .similar-artists-sub[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .similar-artists-info-name[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n  }\r\n\r\n  .similar-artists-info-sub[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 550px) {\r\n  .featured-playlist[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .featured-playlist-image[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .featured-playlist-details[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n  }\r\n\r\n  .featured-playlist-info-top[_ngcontent-%COMP%] {\r\n    margin-top: 0.5em;\r\n  }\r\n\r\n  .featured-playlist-writeup[_ngcontent-%COMP%] {\r\n    margin-top: 0.5em;\r\n  }\r\n\r\n  .featured-playlist-buttons[_ngcontent-%COMP%] {\r\n    margin: 0.5em 0;\r\n  }\r\n\r\n  .playlist-next-item-entry-info[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 365px) {\r\n  .similar-artists-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .playlist-next-item-entry-info[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDRDQUE0QztFQUM1QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiw0Q0FBNEM7RUFDNUMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsNENBQTRDO0VBQzVDLGVBQWU7QUFDakI7O0FBRUEsZ0JBQWdCOztBQUNoQixvQkFBb0I7O0FBQ3BCLHNCQUFzQjs7QUFDdEIsa0RBQWtEOztBQUNsRCxxQkFBcUI7O0FBQ3JCLElBQUk7O0FBRUo7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUNBQXlDO0VBQ3pDLHVDQUF1QztFQUN2QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3Qix5Q0FBeUM7RUFDekMsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTs7eUJBRXlCOztBQUV6QjtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFHQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQSxrQkFBa0I7O0FBQ2xCO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUdBLE9BQU87O0FBQ1A7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDBFQUEwRTtFQUMxRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw2REFBNkQ7RUFDN0QsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEscUJBQXFCOztBQUNyQjtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUdBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFDQSxRQUFRIiwiZmlsZSI6Im15LXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaG93IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4jZGVsZXRlOmhvdmVyIHtcclxuICBjb2xvcjogI2ZjNGExYTtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4IHJnYmEoODEsIDIwMywgMjM4LCAwLjIpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2VkaXQ6aG92ZXIge1xyXG4gIGNvbG9yOiAjNmJlNTg1O1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiYSg4MSwgMjAzLCAyMzgsIDAuMik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jYWRkOmhvdmVyIHtcclxuICBjb2xvcjogIzA3NzllNDtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4IHJnYmEoODEsIDIwMywgMjM4LCAwLjIpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyojbGlrZTpob3ZlciB7Ki9cclxuLyogIGNvbG9yOiAjRkYwMDk5OyovXHJcbi8qICB0cmFuc2l0aW9uOiAwLjJzOyovXHJcbi8qICB0ZXh0LXNoYWRvdzogMCAwIDVweCByZ2JhKDgxLCAyMDMsIDIzOCwgMC4yKTsqL1xyXG4vKiAgY3Vyc29yOiBwb2ludGVyOyovXHJcbi8qfSovXHJcblxyXG4jdW5saWtlIHtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMXB4O1xyXG4gIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jbGlrZSB7XHJcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMXB4O1xyXG4gIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6ICNGRjAwOTk7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICNGRjAwOTk7XHJcbn1cclxuXHJcbiNsaWtlOmhvdmVyIHtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiN1bmxpa2U6aG92ZXIge1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW1nOmhvdmVyIHtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSg4MSwgMjAzLCAyMzgsIDEpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoODEsIDIwMywgMjM4LCAxKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuI2NhdGVnb3J5TmFtZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIG91dGxpbmU6IDFweCB3aGl0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxucCB7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnA6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICB0ZXh0LXNoYWRvdzogMCAwIDVweCByZ2JhKDgxLCAyMDMsIDIzOCwgMSk7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG5zcGFuIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzEwMjc7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWluLXdpZHRoOiAyNzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuaDIge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsZXgsIC5mbGV4LXNwYWNlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbGV4IHtcclxuICBtYXJnaW4tYm90dG9tOiA2ZW07XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIHdpZHRoOiA3NSU7XHJcbn1cclxuXHJcbmFzaWRlIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0UExBWUxJU1QgUEFHRVxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLnBsYXlsaXN0LWFzaWRlIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4uc2ltaWxhci1hcnRpc3RzLCAucmVjZW50bHktcGxheWVkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5zaW1pbGFyLWFydGlzdHMtdGl0bGUge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaW1pbGFyLWFydGlzdHMtdGl0bGUgaDIge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5zaW1pbGFyLWFydGlzdHMtc3ViIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgY29sb3I6ICM5YzlkYTc7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4uc2ltaWxhci1hcnRpc3RzLWVudHJ5IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxuLnNpbWlsYXItYXJ0aXN0cy1pbWFnZSB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLnNpbWlsYXItYXJ0aXN0cy1pbmZvIHtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4uc2ltaWxhci1hcnRpc3RzLWluZm8gcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5zaW1pbGFyLWFydGlzdHMtaW5mby1zdWIge1xyXG4gIGNvbG9yOiAjOWM5ZGE3O1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG59XHJcblxyXG4uc2ltaWxhci1hcnRpc3RzLW9wdGlvbnMge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgY29sb3I6ICM5YzlkYTc7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaW1pbGFyLWFydGlzdHMtb3B0aW9ucy1tZW51IHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcclxufVxyXG5cclxuLnNpbWlsYXItYXJ0aXN0cy1vcHRpb25zIHAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLypSZWNlbnRseSBQbGF5ZWQqL1xyXG4ucmVjZW50bHktcGxheWVkLXRpdGxlIGgyIHtcclxuICBmb250LXNpemU6IDEuMDhyZW07XHJcbn1cclxuXHJcblxyXG4vKk1BSU4qL1xyXG4uZmVhdHVyZWQtcGxheWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6ICMxNDFiNDE7XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1wbGF5bGlzdC1pbWFnZSB7XHJcbiAgd2lkdGg6IDQ1JTtcclxufVxyXG5cclxuLmZlYXR1cmVkLXBsYXlsaXN0LWltYWdlOjphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50IDAlLCAjMTQxYjQxIDE1MCUpO1xyXG4gIG1hcmdpbi10b3A6IC0xNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG59XHJcblxyXG4uZmVhdHVyZWQtcGxheWxpc3QtZGV0YWlscyB7XHJcbiAgd2lkdGg6IDUyLjUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmZlYXR1cmVkLXBsYXlsaXN0LWluZm8tbmFtZSBoMiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1wbGF5bGlzdC1pbmZvLXRvcCB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZlYXR1cmVkLXBsYXlsaXN0IHAge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGNvbG9yOiAjOWM5ZGE3O1xyXG59XHJcblxyXG4uZm9sbG93ZXJzIHAge1xyXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xyXG59XHJcblxyXG4uZmVhdHVyZWQtcGxheWxpc3QtYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBsYXktYWxsLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ucGxheS1hbGwtYnV0dG9uIGJ1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQzMjdiNCwgI2JlNDZkZCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwLjVlbSAzZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcclxufVxyXG5cclxuLnBsYXktYWxsLWJ1dHRvbiBwIHtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxufVxyXG5cclxuLypQbGF5bGlzdCBuZXh0IGl0ZW0qL1xyXG4ucGxheWxpc3QtbmV4dC1pdGVtIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucGxheWxpc3QtbmV4dC1pdGVtLWVudHJ5IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMWExZTMzO1xyXG4gIHBhZGRpbmc6IDAuNWVtIDA7XHJcbiAgbWFyZ2luOiAwLjVlbSAwO1xyXG59XHJcblxyXG4ucGxheWxpc3QtbmV4dC1pdGVtLWVudHJ5IHAge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWluLXdpZHRoOiAyNzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5wbGF5bGlzdC1uZXh0LWl0ZW0tZW50cnktaW5mbyB7XHJcbiAgd2lkdGg6IDM1JTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4ucGxheWxpc3QtbmV4dC1pdGVtLWVudHJ5LWluZm8taW1hZ2Uge1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5wbGF5bGlzdC1uZXh0LWl0ZW0tZW50cnktaWNvbnMge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLnBsYXlsaXN0LW5leHQtaXRlbS1lbnRyeS1pY29ucyBhIHtcclxuICBjb2xvcjogIzljOWRhNztcclxufVxyXG5cclxuLnBsYXlsaXN0LW5leHQtaXRlbS1lbnRyeS1udW1iZXIsIC5wbGF5bGlzdC1uZXh0LWl0ZW0tZW50cnktaW5mby1uYW1lLXN1YiB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgY29sb3I6ICM5YzlkYTc7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkgYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XHJcbiAgLmRpc3BsYXktbm9uZS05NjAge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgLnNpbWlsYXItYXJ0aXN0cy1pbmZvLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkgYW5kIChtaW4td2lkdGg6IDY1MXB4KSB7XHJcbiAgLmZlYXR1cmVkLXBsYXlsaXN0LXdyaXRldXAgcCB7XHJcbiAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICB9XHJcblxyXG4gIC5wbGF5bGlzdC1uZXh0LWl0ZW0tZW50cnktaW5mbyB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAucGxheWxpc3QtYXNpZGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuc2ltaWxhci1hcnRpc3RzLXRpdGxlIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLnNpbWlsYXItYXJ0aXN0cy1zdWIge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLnNpbWlsYXItYXJ0aXN0cy1pbmZvLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgfVxyXG5cclxuICAuc2ltaWxhci1hcnRpc3RzLWluZm8tc3ViIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgLmZlYXR1cmVkLXBsYXlsaXN0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmZlYXR1cmVkLXBsYXlsaXN0LWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmZlYXR1cmVkLXBsYXlsaXN0LWRldGFpbHMge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICB9XHJcblxyXG4gIC5mZWF0dXJlZC1wbGF5bGlzdC1pbmZvLXRvcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICB9XHJcblxyXG4gIC5mZWF0dXJlZC1wbGF5bGlzdC13cml0ZXVwIHtcclxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gIH1cclxuXHJcbiAgLmZlYXR1cmVkLXBsYXlsaXN0LWJ1dHRvbnMge1xyXG4gICAgbWFyZ2luOiAwLjVlbSAwO1xyXG4gIH1cclxuXHJcbiAgLnBsYXlsaXN0LW5leHQtaXRlbS1lbnRyeS1pbmZvIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjVweCkge1xyXG4gIC5zaW1pbGFyLWFydGlzdHMtdGl0bGUgaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgfVxyXG5cclxuICAucGxheWxpc3QtbmV4dC1pdGVtLWVudHJ5LWluZm8ge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcbn1cclxuLyptb2RhbCovXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MyProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-my-profile',
                templateUrl: './my-profile.component.html',
                styleUrls: ['./my-profile.component.css']
            }]
    }], function () { return [{ type: _service_song_song_service__WEBPACK_IMPORTED_MODULE_4__["SongService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: _service_like_like_song_service__WEBPACK_IMPORTED_MODULE_8__["LikeSongService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"] }, { type: _service_playList_play_list_service__WEBPACK_IMPORTED_MODULE_10__["PlayListService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_11__["CategoryService"] }, { type: _service_songPlaylist_song_playlist_service__WEBPACK_IMPORTED_MODULE_12__["SongPlaylistService"] }]; }, null); })();


/***/ }),

/***/ "opFN":
/*!********************************************************!*\
  !*** ./src/app/visiter/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth/auth.service */ "/AaM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function RegisterComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Username is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Password must match .");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Phone number is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You must agree to continue.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/login"]; };
const _c1 = function () { return ["/termofservice"]; };
class RegisterComponent {
    // submitted = false;
    constructor(serviceAuth, fb, router) {
        this.serviceAuth = serviceAuth;
        this.fb = fb;
        this.router = router;
    }
    ngOnInit() {
        this.formRegister = this.fb.group({
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            phoneNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            confirmPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            check: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        // tslint:disable-next-line:ban-types
    }
    comparePassword(password, confirmPassword) {
        return password !== confirmPassword;
    }
    // tslint:disable-next-line:typedef
    register() {
        const user1 = this.formRegister.value;
        this.serviceAuth.register(user1).subscribe(value => {
            alert('Register Account Successful !!!');
            this.router.navigate(['/login']);
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 48, vars: 13, consts: [[1, "row", 2, "margin-left", "0%", "margin-bottom", "200px"], [1, "col-md-6", "mx-auto", "p-0"], [1, "card"], [1, "login-box"], [1, "login-snip"], ["id", "tab-1", "type", "radio", "name", "tab", 1, "sign-in"], ["for", "tab-1", 1, "tab", 3, "routerLink"], ["id", "tab-2", "type", "radio", "name", "tab", "checked", "", 1, "sign-up"], ["for", "tab-2", 1, "tab"], [1, "login-space"], [3, "formGroup", "ngSubmit"], [1, "sign-up-form"], [1, "group"], ["for", "user", 1, "label"], ["id", "user", "formControlName", "username", "type", "text", "placeholder", "Create your Username", 1, "input"], ["class", "alert alert-danger mt-1", "role", "alert", 4, "ngIf"], ["for", "pass", 1, "label"], ["id", "pass", "formControlName", "password", "type", "password", "data-type", "password", "placeholder", "Create your password", 1, "input"], ["for", "repeatpass", 1, "label"], ["id", "repeatpass", "formControlName", "confirmPassword", "type", "password", "data-type", "password", "placeholder", "Repeat your password", 1, "input"], ["for", "phonenumber", 1, "label"], ["id", "phonenumber", "formControlName", "phoneNumber", "type", "text", "placeholder", "Enter your email address", 1, "input"], [1, "form-group", 2, "margin-top", "10px"], ["formControlName", "check", "type", "checkbox", "value", "", "id", "check", "required", "", 1, "form-uncheck-input"], ["for", "invalidCheck"], [1, "already", 3, "routerLink"], ["type", "submit", "value", "Sign Up", 1, "btn", "btn-primary", "btn-block", "btn-round", 3, "disabled"], [1, "hr"], [1, "foot"], ["role", "alert", 1, "alert", "alert-danger", "mt-1"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_12_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RegisterComponent_div_18_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RegisterComponent_div_23_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Repeat Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RegisterComponent_div_28_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, RegisterComponent_div_33_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " I understand and agree to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Term Of Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, RegisterComponent_div_40_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Already Member?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Click to Log In!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formRegister);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formRegister.get("username").invalid && ctx.formRegister.get("username").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formRegister.get("password").invalid && ctx.formRegister.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comparePassword(ctx.formRegister.value.password, ctx.formRegister.value.confirmPassword) && ctx.formRegister.get("confirmPassword").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formRegister.get("phoneNumber").invalid && ctx.formRegister.get("phoneNumber").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formRegister.get("check").invalid && ctx.formRegister.get("check").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formRegister.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxRequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #6a6f8c;\r\n  background: #c8c8c8;\r\n  font: 600 16px/18px 'Open Sans', sans-serif;\r\n\r\n}\r\n\r\n.login-box[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: auto;\r\n  max-width: 525px;\r\n  min-height: 900px;\r\n  position: relative;\r\n  background: url(https://images.unsplash.com/photo-1493247035880-efdf55d1cc99?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80) no-repeat center;\r\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19)\r\n}\r\n\r\n.login-snip[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  padding: 90px 70px 50px 70px;\r\n  background: rgba(21, 101, 192, 0.34)\r\n}\r\n\r\n.login-snip[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%], .login-snip[_ngcontent-%COMP%]   .sign-up-form[_ngcontent-%COMP%] {\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  position: absolute;\r\n  transform: rotateY(180deg);\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  transition: all .4s linear\r\n}\r\n\r\n.login-snip[_ngcontent-%COMP%]   .sign-in[_ngcontent-%COMP%], .login-snip[_ngcontent-%COMP%]   .sign-up[_ngcontent-%COMP%], .login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\r\n  display: none\r\n}\r\n\r\n.login-snip[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%], .login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n  text-transform: uppercase\r\n}\r\n\r\n.login-snip[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  margin-right: 15px;\r\n  padding-bottom: 5px;\r\n  margin: 0 15px 10px 0;\r\n  display: inline-block;\r\n  border-bottom: 2px solid transparent\r\n}\r\n\r\n.login-snip[_ngcontent-%COMP%]   .sign-in[_ngcontent-%COMP%]:checked    + .tab[_ngcontent-%COMP%], .login-snip[_ngcontent-%COMP%]   .sign-up[_ngcontent-%COMP%]:checked    + .tab[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  border-color: #1161ee\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%] {\r\n  min-height: 345px;\r\n  position: relative;\r\n  perspective: 1000px;\r\n  transform-style: preserve-3d\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%], .login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  color: #fff;\r\n  display: block\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%], .login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n  border: none;\r\n  padding: 15px 20px;\r\n  border-radius: 25px;\r\n  background: rgba(255, 255, 255, .1)\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   input[data-type=\"password\"][_ngcontent-%COMP%] {\r\n  text-security: circle;\r\n  -webkit-text-security: circle\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\r\n  color: #aaa;\r\n  font-size: 12px\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n  background: #1161ee\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 2px;\r\n  position: relative;\r\n  display: inline-block;\r\n  background: rgba(255, 255, 255, .1)\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before, .login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:after {\r\n  content: '';\r\n  width: 10px;\r\n  height: 2px;\r\n  background: #fff;\r\n  position: absolute;\r\n  transition: all .2s ease-in-out 0s\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before {\r\n  left: 3px;\r\n  width: 5px;\r\n  bottom: 6px;\r\n  transform: scale(0) rotate(0)\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:after {\r\n  top: 6px;\r\n  right: 0;\r\n  transform: scale(0) rotate(0)\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\r\n  color: #fff\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n  background: #1161ee\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before {\r\n  transform: scale(1) rotate(45deg)\r\n}\r\n\r\n.login-space[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:after {\r\n  transform: scale(1) rotate(-45deg)\r\n}\r\n\r\n.login-snip[_ngcontent-%COMP%]   .sign-in[_ngcontent-%COMP%]:checked    + .tab[_ngcontent-%COMP%]    + .sign-up[_ngcontent-%COMP%]    + .tab[_ngcontent-%COMP%]    + .login-space[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\r\n  transform: rotate(0)\r\n}\r\n\r\n.login-snip[_ngcontent-%COMP%]   .sign-up[_ngcontent-%COMP%]:checked    + .tab[_ngcontent-%COMP%]    + .login-space[_ngcontent-%COMP%]   .sign-up-form[_ngcontent-%COMP%] {\r\n  transform: rotate(0)\r\n}\r\n\r\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before {\r\n  box-sizing: border-box\r\n}\r\n\r\n.clearfix[_ngcontent-%COMP%]:after, .clearfix[_ngcontent-%COMP%]:before {\r\n  content: '';\r\n  display: table\r\n}\r\n\r\n.clearfix[_ngcontent-%COMP%]:after {\r\n  clear: both;\r\n  display: block\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: inherit;\r\n  text-decoration: none\r\n}\r\n\r\n.hr[_ngcontent-%COMP%] {\r\n  height: 2px;\r\n  margin: 60px 0 50px 0;\r\n  background: rgba(255, 255, 255, .2)\r\n}\r\n\r\n.foot[_ngcontent-%COMP%] {\r\n  text-align: center\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n  left: 100px\r\n}\r\n\r\n[_ngcontent-%COMP%]::placeholder {\r\n  color: #b3b3b3\r\n}\r\n\r\n.already[_ngcontent-%COMP%]:hover {\r\n  color: lightskyblue;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiwyQ0FBMkM7O0FBRTdDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrTUFBa007RUFDbE07QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QjtBQUNGOztBQUVBOztFQUVFLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0I7QUFDRjs7QUFFQTs7O0VBR0U7QUFDRjs7QUFFQTs7O0VBR0U7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckI7QUFDRjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1g7QUFDRjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBOzs7RUFHRSxXQUFXO0VBQ1gsV0FBVztFQUNYO0FBQ0Y7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQjtBQUNGOztBQUVBOztFQUVFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYO0FBQ0Y7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsUUFBUTtFQUNSO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7OztFQUdFO0FBQ0Y7O0FBRUE7O0VBRUUsV0FBVztFQUNYO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1g7QUFDRjs7QUFFQTtFQUNFLGNBQWM7RUFDZDtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWjtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiAjNmE2ZjhjO1xyXG4gIGJhY2tncm91bmQ6ICNjOGM4Yzg7XHJcbiAgZm9udDogNjAwIDE2cHgvMThweCAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuXHJcbi5sb2dpbi1ib3gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXgtd2lkdGg6IDUyNXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDkwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0OTMyNDcwMzU4ODAtZWZkZjU1ZDFjYzk5P2l4aWQ9TVh3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIdyUzRCZpeGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEzNTAmcT04MCkgbm8tcmVwZWF0IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDEycHggMTVweCAwIHJnYmEoMCwgMCwgMCwgLjI0KSwgMCAxN3B4IDUwcHggMCByZ2JhKDAsIDAsIDAsIC4xOSlcclxufVxyXG5cclxuLmxvZ2luLXNuaXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogOTBweCA3MHB4IDUwcHggNzBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIxLCAxMDEsIDE5MiwgMC4zNClcclxufVxyXG5cclxuLmxvZ2luLXNuaXAgLmxvZ2luLFxyXG4ubG9naW4tc25pcCAuc2lnbi11cC1mb3JtIHtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjRzIGxpbmVhclxyXG59XHJcblxyXG4ubG9naW4tc25pcCAuc2lnbi1pbixcclxuLmxvZ2luLXNuaXAgLnNpZ24tdXAsXHJcbi5sb2dpbi1zcGFjZSAuZ3JvdXAgLmNoZWNrIHtcclxuICBkaXNwbGF5OiBub25lXHJcbn1cclxuXHJcbi5sb2dpbi1zbmlwIC50YWIsXHJcbi5sb2dpbi1zcGFjZSAuZ3JvdXAgLmxhYmVsLFxyXG4ubG9naW4tc3BhY2UgLmdyb3VwIC5idXR0b24ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcclxufVxyXG5cclxuLmxvZ2luLXNuaXAgLnRhYiB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIG1hcmdpbjogMCAxNXB4IDEwcHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50XHJcbn1cclxuXHJcbi5sb2dpbi1zbmlwIC5zaWduLWluOmNoZWNrZWQgKyAudGFiLFxyXG4ubG9naW4tc25pcCAuc2lnbi11cDpjaGVja2VkICsgLnRhYiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMTE2MWVlXHJcbn1cclxuXHJcbi5sb2dpbi1zcGFjZSB7XHJcbiAgbWluLWhlaWdodDogMzQ1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZFxyXG59XHJcblxyXG4ubG9naW4tc3BhY2UgLmdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4XHJcbn1cclxuXHJcbi5sb2dpbi1zcGFjZSAuZ3JvdXAgLmxhYmVsLFxyXG4ubG9naW4tc3BhY2UgLmdyb3VwIC5pbnB1dCxcclxuLmxvZ2luLXNwYWNlIC5ncm91cCAuYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBibG9ja1xyXG59XHJcblxyXG4ubG9naW4tc3BhY2UgLmdyb3VwIC5pbnB1dCxcclxuLmxvZ2luLXNwYWNlIC5ncm91cCAuYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSlcclxufVxyXG5cclxuLmxvZ2luLXNwYWNlIC5ncm91cCBpbnB1dFtkYXRhLXR5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgdGV4dC1zZWN1cml0eTogY2lyY2xlO1xyXG4gIC13ZWJraXQtdGV4dC1zZWN1cml0eTogY2lyY2xlXHJcbn1cclxuXHJcbi5sb2dpbi1zcGFjZSAuZ3JvdXAgLmxhYmVsIHtcclxuICBjb2xvcjogI2FhYTtcclxuICBmb250LXNpemU6IDEycHhcclxufVxyXG5cclxuLmxvZ2luLXNwYWNlIC5ncm91cCAuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiAjMTE2MWVlXHJcbn1cclxuXHJcbi5sb2dpbi1zcGFjZSAuZ3JvdXAgbGFiZWwgLmljb24ge1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKVxyXG59XHJcblxyXG4ubG9naW4tc3BhY2UgLmdyb3VwIGxhYmVsIC5pY29uOmJlZm9yZSxcclxuLmxvZ2luLXNwYWNlIC5ncm91cCBsYWJlbCAuaWNvbjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dCAwc1xyXG59XHJcblxyXG4ubG9naW4tc3BhY2UgLmdyb3VwIGxhYmVsIC5pY29uOmJlZm9yZSB7XHJcbiAgbGVmdDogM3B4O1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgYm90dG9tOiA2cHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoMClcclxufVxyXG5cclxuLmxvZ2luLXNwYWNlIC5ncm91cCBsYWJlbCAuaWNvbjphZnRlciB7XHJcbiAgdG9wOiA2cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoMClcclxufVxyXG5cclxuLmxvZ2luLXNwYWNlIC5ncm91cCAuY2hlY2s6Y2hlY2tlZCArIGxhYmVsIHtcclxuICBjb2xvcjogI2ZmZlxyXG59XHJcblxyXG4ubG9naW4tc3BhY2UgLmdyb3VwIC5jaGVjazpjaGVja2VkICsgbGFiZWwgLmljb24ge1xyXG4gIGJhY2tncm91bmQ6ICMxMTYxZWVcclxufVxyXG5cclxuLmxvZ2luLXNwYWNlIC5ncm91cCAuY2hlY2s6Y2hlY2tlZCArIGxhYmVsIC5pY29uOmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoNDVkZWcpXHJcbn1cclxuXHJcbi5sb2dpbi1zcGFjZSAuZ3JvdXAgLmNoZWNrOmNoZWNrZWQgKyBsYWJlbCAuaWNvbjphZnRlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoLTQ1ZGVnKVxyXG59XHJcblxyXG4ubG9naW4tc25pcCAuc2lnbi1pbjpjaGVja2VkICsgLnRhYiArIC5zaWduLXVwICsgLnRhYiArIC5sb2dpbi1zcGFjZSAubG9naW4ge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDApXHJcbn1cclxuXHJcbi5sb2dpbi1zbmlwIC5zaWduLXVwOmNoZWNrZWQgKyAudGFiICsgLmxvZ2luLXNwYWNlIC5zaWduLXVwLWZvcm0ge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDApXHJcbn1cclxuXHJcbiosXHJcbjphZnRlcixcclxuOmJlZm9yZSB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveFxyXG59XHJcblxyXG4uY2xlYXJmaXg6YWZ0ZXIsXHJcbi5jbGVhcmZpeDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IHRhYmxlXHJcbn1cclxuXHJcbi5jbGVhcmZpeDphZnRlciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogYmxvY2tcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbn1cclxuXHJcbi5ociB7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgbWFyZ2luOiA2MHB4IDAgNTBweCAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpXHJcbn1cclxuXHJcbi5mb290IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBsZWZ0OiAxMDBweFxyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2IzYjNiM1xyXG59XHJcblxyXG4uYWxyZWFkeTpob3ZlciB7XHJcbiAgY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "r1xU":
/*!**********************************************!*\
  !*** ./src/app/service/song/song.service.ts ***!
  \**********************************************/
/*! exports provided: SongService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongService", function() { return SongService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Project_Sound_Wave_FrontEnd_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../Project_Sound_Wave_FrontEnd/src/environments/environment */ "eCOg");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const URL_API = `${_Project_Sound_Wave_FrontEnd_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}`;
class SongService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllSong() {
        return this.httpClient.get(URL_API + '/songs');
    }
    getAllNewSong() {
        return this.httpClient.get(URL_API + '/songs/date-new');
    }
    getTopViewSong() {
        return this.httpClient.get(URL_API + '/songs/most-views');
    }
    createSong(song) {
        return this.httpClient.post(URL_API + `/songs`, song);
    }
    getSongById(id) {
        return this.httpClient.post(URL_API + `/songs/getsong`, id);
    }
    getUserSong(id) {
        return this.httpClient.post(URL_API + `/songs/my-songs`, id);
    }
    updateSong(song) {
        return this.httpClient.put(URL_API + `/songs/${song.id}`, song);
    }
    getSong(id) {
        return this.httpClient.get(URL_API + `/songs/${id}`);
    }
    countViews(id) {
        return this.httpClient.post(URL_API + `/songs/count-views`, id);
    }
    deleteSong(id) {
        return this.httpClient.delete(URL_API + `/songs/${id}`);
    }
    searchSong(name) {
        return this.httpClient.post(URL_API + `/songs/search/${name}`, name);
    }
    // getSongByCategoryId(id: number): Observable<any> {
    //   return this.httpClient.get(URL_API + `/songs/detail/${id}`);
    // }
    getSongByCategoryId(id) {
        return this.httpClient.get(URL_API + `/songs/category/${id}`);
    }
}
SongService.ɵfac = function SongService_Factory(t) { return new (t || SongService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SongService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SongService, factory: SongService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SongService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "rwBg":
/*!**********************************************!*\
  !*** ./src/app/service/user/user.service.ts ***!
  \**********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Project_Sound_Wave_FrontEnd_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../Project_Sound_Wave_FrontEnd/src/environments/environment */ "eCOg");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "/AaM");





const API_URL = `${_Project_Sound_Wave_FrontEnd_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}`;
// @ts-ignore
class UserService {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    resetPassword(username, password) {
        return this.http.put(API_URL + `/users/resetpassword/${username}`, password);
    }
    getUserByUsername(username) {
        return this.http.get(API_URL + `/users/${username}`);
    }
    updateUser(user) {
        return this.http.put(API_URL + `/users/update`, user);
    }
    checkPassword(user) {
        return this.http.post(API_URL + `/users/resetpassword`, user);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _client_user_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client/user/resetpassword/resetpassword.component */ "o5Wg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _helper_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper/auth-guard */ "3QLD");
/* harmony import */ var _visiter_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visiter/login/login.component */ "eYOR");
/* harmony import */ var _visiter_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visiter/register/register.component */ "opFN");
/* harmony import */ var _client_user_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client/user/my-profile/my-profile.component */ "omAJ");
/* harmony import */ var _song_create_song_create_song_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./song/create-song/create-song.component */ "dHQU");
/* harmony import */ var _song_update_song_update_song_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./song/update-song/update-song.component */ "My5X");
/* harmony import */ var _song_list_song_list_song_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./song/list-song/list-song.component */ "lOzJ");
/* harmony import */ var _landing_page_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./landing-page/home/home.component */ "/XLG");
/* harmony import */ var _client_user_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./client/user/update-profile/update-profile.component */ "G2W0");
/* harmony import */ var _song_search_song_search_song_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./song/search-song/search-song.component */ "NBmG");
/* harmony import */ var _song_detail_song_detail_song_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./song/detail-song/detail-song.component */ "bZLO");
/* harmony import */ var _playlist_playlist_details_playlist_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./playlist/playlist-details/playlist-details.component */ "5yS1");
/* harmony import */ var _client_user_term_of_user_term_of_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./client/user/term-of-user/term-of-user.component */ "a5im");
// @ts-ignore


// @ts-ignore
















const routes = [
    {
        path: '',
        component: _landing_page_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
    },
    {
        path: 'termofservice',
        component: _client_user_term_of_user_term_of_user_component__WEBPACK_IMPORTED_MODULE_15__["TermOfUserComponent"],
    },
    {
        path: 'resetpassword',
        component: _client_user_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_1__["ResetpasswordComponent"],
        canActivate: [_helper_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'login',
        component: _visiter_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
    },
    {
        path: 'register',
        component: _visiter_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    },
    {
        path: 'profile',
        component: _client_user_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_6__["MyProfileComponent"],
        canActivate: [_helper_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'profile/update',
        component: _client_user_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_11__["UpdateProfileComponent"],
        canActivate: [_helper_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'songs/create',
        component: _song_create_song_create_song_component__WEBPACK_IMPORTED_MODULE_7__["CreateSongComponent"],
        canActivate: [_helper_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'songs/detail/:id',
        component: _song_detail_song_detail_song_component__WEBPACK_IMPORTED_MODULE_13__["DetailSongComponent"]
    },
    {
        path: 'songs/update/:id',
        component: _song_update_song_update_song_component__WEBPACK_IMPORTED_MODULE_8__["UpdateSongComponent"]
    },
    {
        path: 'songs/search/:name',
        component: _song_search_song_search_song_component__WEBPACK_IMPORTED_MODULE_12__["SearchSongComponent"]
    },
    {
        path: 'songs',
        component: _song_list_song_list_song_component__WEBPACK_IMPORTED_MODULE_9__["ListSongComponent"],
    },
    {
        path: 'playlist/:id',
        component: _playlist_playlist_details_playlist_details_component__WEBPACK_IMPORTED_MODULE_14__["PlaylistDetailsComponent"],
    },
];
// @ts-ignore
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yewD":
/*!*****************************************************!*\
  !*** ./src/app/landing-page/menu/menu.component.ts ***!
  \*****************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 2, vars: 0, template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "menu works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zXpw":
/*!**************************************************!*\
  !*** ./src/app/service/singer/singer.service.ts ***!
  \**************************************************/
/*! exports provided: SingerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingerService", function() { return SingerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Project_Sound_Wave_FrontEnd_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../Project_Sound_Wave_FrontEnd/src/environments/environment */ "eCOg");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const urlApi = `${_Project_Sound_Wave_FrontEnd_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}`;
// @ts-ignore
class SingerService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllSinger() {
        return this.httpClient.get(urlApi + '/singers');
    }
    getOneSinger(id) {
        return this.httpClient.get(urlApi + '/singers' + `/${id}`);
    }
}
SingerService.ɵfac = function SingerService_Factory(t) { return new (t || SingerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SingerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SingerService, factory: SingerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map