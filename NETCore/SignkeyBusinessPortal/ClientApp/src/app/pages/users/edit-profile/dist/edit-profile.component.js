"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EditProfileComponent = void 0;
var core_1 = require("@angular/core");
var user_profile_1 = require("src/app/models/user-profile");
var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(authService, profileService, notification) {
        this.authService = authService;
        this.profileService = profileService;
        this.notification = notification;
        this.OnClose = new core_1.EventEmitter();
        this.tempUserprofile = new user_profile_1.UserProfile();
        this.emailRegex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
        this.paypalRegex = new RegExp('^[a-z0-9._%+-]+@paypal\\.[a-z]{2,4}$');
        this.isSubmiting = false;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getCurrentUser.subscribe(function (val) {
            if (val) {
                _this.tempUserprofile = val.UserDetail;
                _this.tempUserprofile.PaypalEmail = val.PaypalEmail;
                _this.tempUserprofile.PaypalEmailVerified = val.HasVerifiedPaypalEmail;
            }
        });
    };
    Object.defineProperty(EditProfileComponent.prototype, "isValid", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g;
            if (this.tempUserprofile == null) {
                return false;
            }
            this.formErrors = {};
            if (((_a = this.tempUserprofile.Name) === null || _a === void 0 ? void 0 : _a.trim().length) < 3) {
                this.formErrors.Name = 'Name invalid';
                return false;
            }
            if (((_b = this.tempUserprofile.Surname) === null || _b === void 0 ? void 0 : _b.trim().length) < 3) {
                this.formErrors.Surname = 'Name invalid';
                return false;
            }
            if (((_c = this.tempUserprofile.Address) === null || _c === void 0 ? void 0 : _c.trim().length) < 3) {
                this.formErrors.Address = 'Address invalid';
                return false;
            }
            if (((_d = this.tempUserprofile.Email) === null || _d === void 0 ? void 0 : _d.trim().length) <= 3 || !this.emailRegex.test((_e = this.tempUserprofile.Email) === null || _e === void 0 ? void 0 : _e.trim())) {
                this.formErrors.Email = 'Email is invalid';
                return false;
            }
            if (((_f = this.tempUserprofile.PaypalEmail) === null || _f === void 0 ? void 0 : _f.trim().length) <= 5 || !this.paypalRegex.test((_g = this.tempUserprofile.PaypalEmail) === null || _g === void 0 ? void 0 : _g.trim())) {
                this.formErrors.PaypalEmail = 'Paypal email is invalid';
                return false;
            }
            return true;
        },
        enumerable: false,
        configurable: true
    });
    EditProfileComponent.prototype.saveProfile = function () {
        var _this = this;
        if (!this.isValid) {
            return;
        }
        this.isSubmiting = true;
        this.profileService.updateCurrentUserInfo(this.tempUserprofile).subscribe(function (res) {
            _this.notification.success('Update successfully', '');
            _this.OnClose.emit();
        }, function (err) {
            _this.notification.error('Can not update your profile', 'please try later');
            _this.isSubmiting = false;
        }, function () {
            _this.isSubmiting = false;
        });
    };
    EditProfileComponent.prototype.verifyEmail = function () {
        this.tempUserprofile.EmailVerified = true;
        this.notification.success('Sent email for verify', 'Please check your inbox');
    };
    EditProfileComponent.prototype.verifyPaypal = function () {
        this.tempUserprofile.PaypalEmailVerified = true;
        this.notification.success('Sent email for verify', 'Please check your inbox');
    };
    __decorate([
        core_1.Input()
    ], EditProfileComponent.prototype, "MissingField");
    __decorate([
        core_1.Output()
    ], EditProfileComponent.prototype, "OnClose");
    EditProfileComponent = __decorate([
        core_1.Component({
            selector: 'sk-edit-profile',
            templateUrl: './edit-profile.component.html',
            styleUrls: ['./edit-profile.component.scss']
        })
    ], EditProfileComponent);
    return EditProfileComponent;
}());
exports.EditProfileComponent = EditProfileComponent;
