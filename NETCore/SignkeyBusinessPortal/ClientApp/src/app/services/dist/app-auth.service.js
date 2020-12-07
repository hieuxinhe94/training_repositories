"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppAuthService = void 0;
var core_1 = require("@angular/core");
var configuration_1 = require("../helper/configuration");
var operators_1 = require("rxjs/operators");
var login_model_result_1 = require("../models/login-model-result");
var mapper_utils_1 = require("../helper/mapper-utils");
var AppAuthService = /** @class */ (function () {
    function AppAuthService(http) {
        this.http = http;
    }
    AppAuthService.prototype.authenticate = function (loginModel) {
        var contentParams = mapper_utils_1.Utils.composeLoginParams(loginModel);
        return this.http.post(configuration_1.Configuration.PREFIX_API_URL + "/connect/token", contentParams)
            .pipe(operators_1.map(function (res) {
            res = new login_model_result_1.LoginModelResult(res);
            if (res && res.accessToken) {
                localStorage.setItem(configuration_1.Configuration.TOKEN_KEY_NAME, res.accessToken);
                var expiredDate = new Date();
                expiredDate.setSeconds(expiredDate.getSeconds() + res.expireInSeconds);
                localStorage.setItem(configuration_1.Configuration.TOKEN_KEY_EXPIRED_DATE_NAME, expiredDate.toDateString());
                // TODO: CHECK EXPIRED DATE AND SET A TIMMER
                // this.currentUser.next(new User({ username: res.userId, token: res.accessToken }));
            }
            return res;
        }));
    };
    AppAuthService.prototype.register = function (query) {
        return this.http
            .post(configuration_1.Configuration.PREFIX_API_URL + "/api/services/app/SaleAgent/RegisterNew", query);
    };
    AppAuthService.prototype.logout = function () {
        return new Promise(function (resolve, reject) {
            localStorage.removeItem(configuration_1.Configuration.TOKEN_KEY_NAME);
            // this.currentUser.next(null);
            resolve('done');
        });
    };
    Object.defineProperty(AppAuthService.prototype, "getAccessToken", {
        get: function () {
            return localStorage.getItem(configuration_1.Configuration.TOKEN_KEY_NAME);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppAuthService.prototype, "isValidToken", {
        get: function () {
            var token = localStorage.getItem(configuration_1.Configuration.TOKEN_KEY_NAME);
            return (token && token.length);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppAuthService.prototype, "getTokenExpiredDate", {
        get: function () {
            return localStorage.getItem(configuration_1.Configuration.TOKEN_KEY_EXPIRED_DATE_NAME);
        },
        enumerable: false,
        configurable: true
    });
    AppAuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AppAuthService);
    return AppAuthService;
}());
exports.AppAuthService = AppAuthService;
