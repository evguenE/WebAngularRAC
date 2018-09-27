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
var Claim_Model_1 = require("../Claims/Claim.Model");
var Claim_Service_1 = require("../Claims/Services/Claim.Service");
var ng2_progressbar_1 = require("ng2-progressbar");
var router_1 = require("@angular/router");
var EditClaimComponent = /** @class */ (function () {
    function EditClaimComponent(pService, _Route, _claimservice, _routeParams) {
        this.pService = pService;
        this._Route = _Route;
        this._claimservice = _claimservice;
        this._routeParams = _routeParams;
        this.claimmodel = new Claim_Model_1.ClaimModel();
        this.username = "";
        this.data = JSON.parse(localStorage.getItem('AdminUser'));
        this.username = this.data.username;
    }
    EditClaimComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ID = this._routeParams.snapshot.params['ID'];
        if (this.ID != null) {
            this._claimservice.EditClaim(this.ID)
                .subscribe(function (data) {
                _this.claimmodel = data;
            }, function (error) {
                if (error) {
                    alert("An Error has occured please try again after some time !");
                }
            });
        }
    };
    EditClaimComponent.prototype.onSubmit = function () {
        var _this = this;
        var formdata = this.claimmodel;
        //formdata.Username = this.username;
        this._claimservice.UpdateClaim(formdata).subscribe(function (data) {
            if (data == true) {
                alert("Your Data Update Successfully ");
                _this._Route.navigate(['AllClaim']);
            }
            else {
                alert("Problem While Adding Cars");
            }
        }, function (error) {
            if (error) {
                alert("An Error has occured please try again after some time !");
            }
        });
    };
    EditClaimComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Claims/EditClaim.html',
            providers: [Claim_Service_1.ClaimService]
        }),
        __metadata("design:paramtypes", [ng2_progressbar_1.NgProgressService, router_1.Router, Claim_Service_1.ClaimService, router_1.ActivatedRoute])
    ], EditClaimComponent);
    return EditClaimComponent;
}());
exports.EditClaimComponent = EditClaimComponent;
//# sourceMappingURL=EditClaim.Component.js.map