webpackJsonp([1,4],{

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, ".typeWriter{\r\n  color: white;\r\n  font-size: 1.1em;\r\n}\r\n.page2{\r\n  background-color: white;\r\n  height: 100%;\r\n}\r\n.page1{\r\n    padding-top: 20px;\r\n    background-color: crimson;\r\n    height: 100%;\r\n}\r\n.bigFont{\r\n  font-size: 5em;\r\n  color:yellow;\r\n}\r\n.talkInput{\r\n    transition: box-shadow blinker linear 0.5s;\r\n}\r\n.talkInput:focus { \r\n    outline: none;\r\n    border-color: #9ecaed;\r\n    box-shadow: 0 0 10px #9ecaed;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "<div class=\"page1\">\n  <div class=\"row\" style=\"margin-left:0px;margin-right:0px;\">\n    <div class=\"col-md-3 col-1\"></div>\n    <div class=\"col-md-6 col-10\">\n      <div class=\"text-center typeWriter\">\n        <typewriter [contents]=\"contents\" [erasable]=\"false\" [beforeType]=\"500\" [beforeStart]=\"0\" [afterEnd]=\"1000\" [delay]=\"0\"\n        [speed]=\"40\" [cursor]=\"'|'\" [cursorDelay]=\"-1\">\n        </typewriter>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-1\"></div>\n  </div>\n  <div class=\"row\" style=\"margin-top:10%; margin-left:0px;margin-right:0px;\">\n    <div class=\"col-md-3 col-1\"></div>\n    <div class=\"col-md-6 col-10\" style=\"padding:10px 10px 10px 10px;background-color:white\">\n      <form class=\"input-group\">\n        <input type=\"text\" name=\"typedInput\" placeholder=\"Talk to Me\" class=\"form-control talkInput\" #talkInput>\n        <span class=\"input-group-btn\">\n          <a scrollTo href=\"#page2\">\n          <button type=\"submit\" (click)=\"togglePage2()\" class=\"btn btn-secondary\" style=\"cursor:pointer\">Talk</button>\n          </a>\n        </span>\n      </form>\n    </div>\n    <div class=\"col-md-3 col-1\"></div>\n  </div>\n</div>\n<div class=\"page2\" *ngIf=\"talkButtonClicked\" id=\"page2\">\n\n</div>"

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3\"></div>\n  <div class=\"col-md-6\">\n    <form class=\"input-group\" (ngSubmit)=\"getLink(getLinkForm.value)\" style=\"margin-top:30px;\" #getLinkForm=\"ngForm\">\n      <input type=\"text\" name=\"nameOfThePerson\" [(ngModel)]=\"nameOfThePerson\" placeholder=\"Enter name to get a sendable link\" class=\"form-control\">\n      <span class=\"input-group-btn\">\n        <button type=\"submit\" class=\"btn btn-primary\" style=\"cursor:pointer\">Get Link</button>\n      </span>\n    </form>\n    <br>\n    <div>\n      <div *ngIf=\"clickedGetLink\">Sendable Link: <a href=\"http://localhost:4200/u/{{sendableLink}}\">http://localhost:4200/u/{{sendableLink}}</a></div>\n    </div>\n  </div>\n  <div class=\"col-md-3\"></div>\n</div>"

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(88);


/***/ }),

/***/ 87:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 87;


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(98);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 94:
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
        template: __webpack_require__(162),
        styles: [__webpack_require__(152)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index_index_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_scroll_to__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_scroll_to___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_scroll_to__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_typewriter__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sendable_link_sendable_link_component__ = __webpack_require__(97);
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
            __WEBPACK_IMPORTED_MODULE_8_ng2_typewriter__["a" /* TypewriterModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8_ng2_typewriter__["b" /* TypewriterService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(60);
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
        var e = this._inputElement.nativeElement;
        var time = 40;
        console.log('TIme:', time);
        var myTimer = setInterval(function () {
            fun();
        }, 500);
        function fun() {
            console.log('TIme:', time);
            if (time >= 0) {
                time--;
                if (time % 2 == 0 && time < 15) {
                    console.log('focus');
                    e.focus();
                }
                if (time % 2 != 0) {
                    console.log('no focus');
                    e.blur();
                }
            }
            else
                clearInterval(myTimer);
        }
    };
    IndexComponent.prototype.ngOnInit = function () { };
    IndexComponent.prototype.togglePage2 = function () {
        console.log("Toggle Page 2");
        this.talkButtonClicked = true;
    };
    return IndexComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("talkInput"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], IndexComponent.prototype, "_inputElement", void 0);
IndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-index',
        template: __webpack_require__(163),
        styles: [__webpack_require__(153)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_typewriter__["b" /* TypewriterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_typewriter__["b" /* TypewriterService */]) === "function" && _d || Object])
], IndexComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ 97:
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
    }
    SendableLinkComponent.prototype.ngOnInit = function () {
    };
    SendableLinkComponent.prototype.getLink = function (data) {
        this.sendableLink = btoa(data.nameOfThePerson);
        this.clickedGetLink = true;
        console.log(data.nameOfThePerson, ' : ', this.sendableLink);
    };
    return SendableLinkComponent;
}());
SendableLinkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sendable-link',
        template: __webpack_require__(164),
        styles: [__webpack_require__(154)]
    }),
    __metadata("design:paramtypes", [])
], SendableLinkComponent);

//# sourceMappingURL=sendable-link.component.js.map

/***/ }),

/***/ 98:
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

/***/ })

},[195]);
//# sourceMappingURL=main.bundle.js.map