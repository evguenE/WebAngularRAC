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
var ClaimComponent = /** @class */ (function () {
    function ClaimComponent(_claimservice, pService, _Route) {
        this._claimservice = _claimservice;
        this.pService = pService;
        this._Route = _Route;
        this.claimmodel = new Claim_Model_1.ClaimModel();
        this.submitted = false;
        this.username = "";
        this.emailPattern = '/^([a-zA-Z0-9])+([a-zA-Z0-9._%+-])+@([a-zA-Z0-9_.-])+\.(([a-zA-Z]){2,6})$/';
        this.data = JSON.parse(localStorage.getItem('AdminUser'));
        this.username = this.data.username;
    }
    ClaimComponent.prototype.onSubmit = function () {
        var _this = this;
        this.pService.start();
        var formdata = this.claimmodel;
        //formdata.Username = this.username;
        this._claimservice.AddClaim(formdata).subscribe(function (data) {
            if (data == true) {
                alert("Your Data Saved Successfully ");
                _this._Route.navigate(['UploadClaimPhoto']);
            }
            else {
                alert("Problem While Adding Claims");
            }
        }, function (error) {
            if (error) {
                alert("An Error has occured please try again after some time !");
            }
        });
        this.pService.done();
    };
    ClaimComponent.prototype.CheckModelNameExist = function () {
        var _this = this;
        var claims = this.claimmodel;
        if (claims.Pp != null) {
            this._claimservice.validateModelTrade(claims.Pp).subscribe(function (data) {
                _this.status = data;
                if (_this.status == false) {
                    _this.claimmodel.Pp = "";
                    alert("ModelName Already Exits");
                }
                else {
                }
            }, function (error) {
                if (error) {
                    alert("An Error has occured please try again after some time !");
                }
            });
        }
    };
    ClaimComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Claims/Claim.html',
            providers: [Claim_Service_1.ClaimService]
        }),
        __metadata("design:paramtypes", [Claim_Service_1.ClaimService, ng2_progressbar_1.NgProgressService, router_1.Router])
    ], ClaimComponent);
    return ClaimComponent;
}());
exports.ClaimComponent = ClaimComponent;
//# sourceMappingURL=Claim.Component.js.map