"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var configuration_1 = require("src/app/helper/configuration");
var base_response_model_1 = require("src/app/models/base-response-model");
var login_model_1 = require("src/app/models/login-model");
var register_model_1 = require("src/app/models/register-model");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, notification, router) {
        this.authService = authService;
        this.notification = notification;
        this.router = router;
        this.registerModel = new register_model_1.RegisterModel();
        this.registerForm = new forms_1.FormGroup({});
        this.submitting = false;
        this.Closed = new core_1.EventEmitter();
        this.ClosedWithSuccess = new core_1.EventEmitter();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = new forms_1.FormBuilder().group({
            fullnameCtl: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(50)]],
            emailCtl: ['', [forms_1.Validators.email, forms_1.Validators.minLength(5)]],
            phonenumberCtl: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(15)]],
            passwordCtl: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(50)]],
            passwordConfirmCtl: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(50)]]
        });
    };
    RegisterComponent.prototype.signUp = function () {
        var _this = this;
        if (this.registerForm.invalid) {
            return;
        }
        if (this.f.passwordCtl.value !== this.f.passwordConfirmCtl.value) {
            return;
        }
        this.composeModel();
        this.submitting = true;
        this.authService.register(this.registerModel).toPromise().then(function (res) {
            var _a;
            switch ((_a = res.result) === null || _a === void 0 ? void 0 : _a.status) {
                case base_response_model_1.EntityStatus.Exist:
                    _this.notification.error('Error', 'Email or phonenumber already use.');
                    _this.submitting = false;
                    break;
                case base_response_model_1.EntityStatus.JustCreated:
                    _this.notification.info('Register successed!', 'Created your profile');
                    var loginModel = new login_model_1.LoginModel({
                        username: _this.registerModel.email,
                        phonenumber: _this.registerModel.phonenumber,
                        password: _this.registerModel.password
                    });
                    _this.authService.authenticate(loginModel).toPromise()
                        .then(function (authRes) {
                        if (authRes.accessToken && authRes.accessToken.length) {
                            _this.router.navigate(["/" + configuration_1.Configuration.DASHBOARD_URL]);
                        }
                    })["finally"](function () { _this.submitting = false; });
                    break;
                default:
                case base_response_model_1.EntityStatus.UnKnown:
                    _this.notification.error('Error', 'Unknow the result');
                    _this.submitting = false;
                    break;
            }
        })["catch"](function (err) {
            _this.submitting = false;
        });
    };
    RegisterComponent.prototype.backToSignIn = function () {
        this.Closed.emit(true);
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    RegisterComponent.prototype.composeModel = function () {
        this.registerModel = new register_model_1.RegisterModel();
        this.registerModel.submited = true;
        this.registerModel.fullName = this.f.fullnameCtl.value;
        this.registerModel.phonenumber = this.f.phonenumberCtl.value;
        this.registerModel.email = this.f.emailCtl.value;
        this.registerModel.password = this.f.passwordCtl.value;
    };
    RegisterComponent.prototype.customValidatorForPassword = function (control) {
        if (control && control.value && control.value === this.f.passwordCtl.value) {
            return null;
        }
        return { err: 'password not matched' };
    };
    __decorate([
        core_1.Output()
    ], RegisterComponent.prototype, "Closed");
    __decorate([
        core_1.Output()
    ], RegisterComponent.prototype, "ClosedWithSuccess");
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'sk-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
