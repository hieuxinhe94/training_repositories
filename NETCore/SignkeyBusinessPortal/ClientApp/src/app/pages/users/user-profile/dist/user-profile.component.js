"use strict";
var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserProfileComponent = void 0;
var core_1 = require("@angular/core");
var edit_profile_component_1 = require("../edit-profile/edit-profile.component");
var UserProfileComponent = /** @class */ (function() {
    function UserProfileComponent(modalService) {
        this.modalService = modalService;
        this.close = false;
    }
    UserProfileComponent.prototype.ngOnInit = function() {};
    UserProfileComponent.prototype.openProfileSetup = function() {
        var modal = this.modalService.create({
            nzTitle: '',
            nzContent: edit_profile_component_1.EditProfileComponent,
            nzWidth: 600
        });
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'sk-user-profile',
            templateUrl: './user-profile.component.html',
            styleUrls: ['./user-profile.component.scss']
        })
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
