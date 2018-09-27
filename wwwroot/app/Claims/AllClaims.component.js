"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Claim_Service_1 = require("../Claims/Services/Claim.Service");
var ng2_progressbar_1 = require("ng2-progressbar");
var AllClaimsComponent = /** @class */ (function () {
    function AllClaimsComponent(pService, _claimservice) {
        this.pService = pService;
        this._claimservice = _claimservice;
    }
    AllClaimsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pService.start();
        this._claimservice
            .GetAllClaimsDetails()
            .subscribe(function (data) {
            _this.ClaimData = data;
            _this.pService.done();
        }, function (error) {
            if (error) {
                alert("An Error has occured please try again after some time !");
            }
        });
    };
    AllClaimsComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Claims/AllClaims.html',
            providers: [Claim_Service_1.ClaimService]
        })
        /** AllClaims component*/
        ,
        __metadata("design:paramtypes", [ng2_progressbar_1.NgProgressService, Claim_Service_1.ClaimService])
    ], AllClaimsComponent);
    return AllClaimsComponent;
}());
exports.AllClaimsComponent = AllClaimsComponent;
//# sourceMappingURL=AllClaims.Component.js.map