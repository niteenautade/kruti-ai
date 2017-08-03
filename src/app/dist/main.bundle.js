webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendableLinkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SendableLinkComponent = (function () {
    function SendableLinkComponent() {
        this.clickedGetLink = false;
        this.clickedCopyLink = false;
    }
    SendableLinkComponent.prototype.ngOnInit = function () {
    };
    SendableLinkComponent.prototype.getLink = function (data) {
        this.nameInBtoA = btoa(data.nameOfThePerson);
        this.clickedGetLink = true;
        console.log(data.nameOfThePerson, ' : ', this.nameInBtoA);
        this.sendableLink = window.location.host + '/u/' + this.nameInBtoA;
    };
    return SendableLinkComponent;
}());
SendableLinkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sendable-link',
        template: __webpack_require__(170),
        styles: [__webpack_require__(157)]
    }),
    __metadata("design:paramtypes", [])
], SendableLinkComponent);

//# sourceMappingURL=sendable-link.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, ".typeWriter{\r\n  color: white;\r\n  font-size: 1.1em;\r\n}\r\n.page2{\r\n  background-color: aliceblue;\r\n  min-height: 100%;\r\n}\r\n.page1{\r\n    padding-top: 20px;\r\n    background-color: crimson;\r\n    min-height: 100%;\r\n}\r\n.bigFont{\r\n  font-size: 5em;\r\n  color:yellow;\r\n}\r\n.talkInput{\r\n    transition: box-shadow blinker linear 0.5s;\r\n}\r\n.talkInput:focus { \r\n    outline: none;\r\n    border-color: #9ecaed;\r\n    box-shadow: 0 0 10px #9ecaed;\r\n}\r\nul{\r\n  list-style-type:none;\r\n  padding: 0;\r\n}\r\nli:nth-child(odd){\r\n  text-align: left;\r\n  position: relative;\r\n\tbackground: #19B5FE;\r\n  border-radius: .4em;\r\n  padding-left: 10%;\r\n  padding-right: 20%;\r\n  padding-top: 2px;\r\n  padding-bottom: 2px;\r\n  margin-bottom: 5px;\r\n}\r\nli:nth-child(odd):after{\r\n  content: '';\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 50%;\r\n\twidth: 0;\r\n\theight: 0;\r\n\tborder: 7px solid transparent;\r\n\tborder-right-color: #19B5FE;\r\n\tborder-left: 0;\r\n\tborder-top: 0;\r\n\tmargin-top: -3.5px;\r\n\tmargin-left: -7px;\r\n}\r\nli:nth-child(even){\r\n  position: relative;\r\n  background: white;\r\n  border-radius: .4em;\r\n  padding-left: 20%;\r\n  padding-right: 10%;\r\n  padding-top: 2px;\r\n  padding-bottom: 2px;\r\n  margin-bottom: 5px;\r\n}\r\nli:nth-child(even):after{\r\n  content: '';\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttop: 50%;\r\n\twidth: 0;\r\n\theight: 0;\r\n\tborder: 7px solid transparent;\r\n\tborder-left-color: white;\r\n\tborder-right: 0;\r\n\tborder-top: 0;\r\n\tmargin-top: -3.5px;\r\n\tmargin-right: -7px;\r\n}\r\n\r\n#chatConv::-webkit-scrollbar{\r\n  width: 8px;\r\n  background-color: white;\r\n}\r\n#chatConv::-webkit-scrollbar-thumb{\r\n  border-radius: 10px;\r\n  background-color: #19B5FE;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, ".btn-success{\r\n    background-color: #5cb85c;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<div class=\"page1\">\r\n  <div class=\"row\" style=\"margin-left:0px;margin-right:0px;\">\r\n    <div class=\"col-md-3 col-1\"></div>\r\n    <div class=\"col-md-6 col-10\">\r\n      <div class=\"text-center typeWriter\">\r\n        <typewriter [contents]=\"contents\" [erasable]=\"false\" [beforeType]=\"500\" [beforeStart]=\"0\" [afterEnd]=\"1000\" [delay]=\"0\"\r\n        [speed]=\"40\" [cursor]=\"'|'\" [cursorDelay]=\"-1\">\r\n        </typewriter>\r\n        <div [hidden]=\"!hideFirstTalkInputBox\">\r\n          <h3 style=\"margin-top: 30px;\">Hope You Had Fun Using This Application!</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-1\"></div>\r\n  </div>\r\n  <div class=\"row\" style=\"margin-top:10%; margin-left:0px;margin-right:0px;\">\r\n    <div class=\"col-md-3 col-1\"></div>\r\n    <div class=\"col-md-6 col-10\">\r\n      <div [hidden]=\"hideFirstTalkInputBox\" style=\"padding:10px 10px 10px 10px;background-color:white\">\r\n        <form autocomplete=\"off\" class=\"input-group\" #talkForm=\"ngForm\">\r\n          <input type=\"text\" name=\"typedInput\" [(ngModel)]=\"typedInput\" placeholder=\"Talk to Me\" class=\"form-control talkInput\" #talkInput1>\r\n          <span class=\"input-group-btn\">\r\n            <!-- <a scrollTo href=\"#page2\"> -->\r\n            <button type=\"submit\" (click)=\"initialTalk(talkForm.value)\" class=\"btn btn-secondary\" style=\"cursor:pointer\">Talk</button>\r\n            <!-- </a> -->\r\n          </span>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-1\"></div>\r\n  </div>\r\n</div>\r\n<div class=\"page2\" *ngIf=\"talkButtonClicked\" id=\"page2\">\r\n  <div class=\"row\" style=\"padding-top:30px;margin:0 auto;\">\r\n    <div class=\"col-md-3 col-1\"></div>\r\n    <div class=\"col-md-6 col-10\" style=\"height:100vh;\">\r\n      <div #chatConversation style=\"height:80%;overflow-y:auto;overflow-x:hidden\" id=\"chatConv\">\r\n        <div *ngIf=\"chatArray.length > 0\" style=\"padding-top:20px;\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-2 col-1\"></div>\r\n            <div class=\"col-md-8 col-10\">\r\n              <ul>\r\n                <li *ngFor=\"let chat of chatArray;let index=index\">\r\n                  <div *ngIf=\"index%2==0\" style=\"color:white\">You:</div>\r\n                  <div *ngIf=\"index%2!=0\" style=\"color:#19B5FE\">Kruti-AI:</div>\r\n                  <div>{{chat}}</div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"col-md-2 col-1\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <form autocomplete=\"off\" class=\"input-group\" #talkForm=\"ngForm\">\r\n        <input type=\"text\" name=\"typedInput\" [(ngModel)]=\"typedInput\" placeholder=\"Talk to Me\" class=\"form-control talkInput\" #talkInput2>\r\n        <span class=\"input-group-btn\">\r\n            <button type=\"submit\" (click)=\"talkToKruti(talkForm.value)\" class=\"btn btn-secondary\" style=\"cursor:pointer\">Talk</button>\r\n        </span>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-md-3 col-1\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3\"></div>\n  <div class=\"col-md-6\">\n    <form class=\"input-group\" (ngSubmit)=\"getLink(getLinkForm.value)\" style=\"margin-top:30px;\" #getLinkForm=\"ngForm\">\n      <input type=\"text\" name=\"nameOfThePerson\" [(ngModel)]=\"nameOfThePerson\" placeholder=\"Enter name to get a sendable link\" class=\"form-control\">\n      <span class=\"input-group-btn\">\n        <button type=\"submit\" class=\"btn btn-primary\" style=\"cursor:pointer\">Get Link</button>\n      </span>\n    </form>\n    <br>\n    <div *ngIf=\"clickedGetLink\">\n      <div>Sendable Link:</div>\n      <div class=\"input-group\">\n        <input [(ngModel)]=\"sendableLink\" #sendableLinkInput class=\"form-control\" readonly>\n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-primary\" [ngxClipboard]=\"sendableLinkInput\" [class.btn-success]= \"clickedCopyLink\" (cbOnSuccess)=\"clickedCopyLink = true\" style=\"cursor:pointer\">Copy Link</button>\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3\"></div>\n</div>"

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(91);


/***/ }),

/***/ 90:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 90;


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(101);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(168),
        styles: [__webpack_require__(155)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index_index_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_scroll_to__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_scroll_to___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_scroll_to__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_typewriter__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sendable_link_sendable_link_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_clipboard__ = __webpack_require__(165);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__index_index_component__["a" /* IndexComponent */] },
    { path: 'u/:id', component: __WEBPACK_IMPORTED_MODULE_6__index_index_component__["a" /* IndexComponent */] },
    { path: 'sendableLink', component: __WEBPACK_IMPORTED_MODULE_9__sendable_link_sendable_link_component__["a" /* SendableLinkComponent */] },
    { path: '**', redirectTo: '' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_9__sendable_link_sendable_link_component__["a" /* SendableLinkComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_7_ng2_scroll_to__["ScrollToModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_typewriter__["a" /* TypewriterModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_clipboard__["a" /* ClipboardModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8_ng2_typewriter__["b" /* TypewriterService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_typewriter__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IndexComponent = (function () {
    function IndexComponent(_http, route, tws) {
        var _this = this;
        this._http = _http;
        this.route = route;
        this.tws = tws;
        this.contents = [];
        this.arr = [];
        this.user = '';
        this.talkButtonClicked = false;
        this.hideFirstTalkInputBox = false;
        this.typedInput = '';
        this.chatArray = [];
        this.data = '';
        this.route.params.subscribe(function (params) {
            if (params['id'])
                _this.user = atob(params['id']);
            var temp = '<div style="font-size:1.5em;font-weight:bold;">Hi, ' + _this.user + '</div>';
            _this.arr.push(temp);
            _this.arr.push('How Are you?');
            _this.arr.push('I am Kruti - An Artificially Intelligent System');
            _this.arr.push('I was designed to talk to you about my creator @niteenautade');
            _this.arr.push('Let\'s Talk. Try asking me something about my master in the box below');
        });
        this.contents = this.tws.format(this.arr);
    }
    IndexComponent.prototype.ngAfterViewInit = function () {
        var e = this._inputElement1.nativeElement;
        e.focus();
    };
    IndexComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    IndexComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    IndexComponent.prototype.ngOnInit = function () { };
    IndexComponent.prototype.togglePage2 = function () {
        console.log("Toggle Page 2");
        this.talkButtonClicked = true;
    };
    IndexComponent.prototype.initialTalk = function (data) {
        var _this = this;
        console.log('Initial Talk Method');
        this.togglePage2();
        this._http.post('getResponse', data).subscribe(function (res) {
            console.log('ress', res);
            _this.data = res.json();
            _this.chatArray.push(_this.data['result']['resolvedQuery']);
            _this.chatArray.push(_this.data['result']['fulfillment']['speech']);
            window.scrollTo(0, document.body.scrollHeight);
            _this.hideFirstTalkInputBox = true;
        });
        this.typedInput = '';
    };
    IndexComponent.prototype.talkToKruti = function (data) {
        var _this = this;
        console.log('TalkToKriti Method');
        this._http.post('getResponse', data).subscribe(function (res) {
            console.log('ress', res);
            _this.data = res.json();
            _this.chatArray.push(_this.data['result']['resolvedQuery']);
            _this.chatArray.push(_this.data['result']['fulfillment']['speech']);
            _this.typedInput = '';
        });
    };
    return IndexComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("talkInput1"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], IndexComponent.prototype, "_inputElement1", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("talkInput2"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], IndexComponent.prototype, "_inputElement2", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chatConversation'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
], IndexComponent.prototype, "myScrollContainer", void 0);
IndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-index',
        template: __webpack_require__(169),
        styles: [__webpack_require__(156)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_typewriter__["b" /* TypewriterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_typewriter__["b" /* TypewriterService */]) === "function" && _f || Object])
], IndexComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=index.component.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.bundle.js.map