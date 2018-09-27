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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var ClaimService = /** @class */ (function () {
    function ClaimService(_http, _Route) {
        var _this = this;
        this._http = _http;
        this._Route = _Route;
        this.token = "";
        this.username = "";
        this.GetAllClaimsDetails = function () {
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
            headers.append('Token', "" + _this.token);
            var options = new http_1.RequestOptions({ headers: headers });
            return _this._http.get(_this.actionUrl, options)
                .map(function (response) { return response.json(); })
                .catch(function (response) {
                if (response.status === 401) {
                    _this._Route.navigate(['Login']);
                }
                return response;
            });
        };
        this.actionUrl = 'http://localhost:56483/api/Claims';
        this.data = JSON.parse(localStorage.getItem('AdminUser'));
        this.token = this.data.token;
        this.username = this.data.username;
    }
    ClaimService.prototype.AddClaim = function (claimmodel) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Token', "" + this.token);
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post('http://localhost:56483/api/Claims', claimmodel, options)
            .map(function (res) { return res.json(); })
            .catch(function (response) {
            if (response.status === 401) {
                _this._Route.navigate(['Login']);
            }
            return response;
        });
    };
    ClaimService.prototype.validateModelTrade = function (Pp) {
        var _this = this;
        //let UsernameModel = { "Model_Name": Model_Name };
        var Trade = { "Pp": Pp };
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Token', "" + this.token);
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post('http://localhost:56483/api/ValidateModelTrade', Trade, options)
            .map(function (res) { return res.json(); })
            .catch(function (response) {
            if (response.status === 401) {
                _this._Route.navigate(['Login']);
            }
            return response;
        });
    };
    ClaimService.prototype.EditClaim = function (ClaimID) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Token', "" + this.token);
        var options = new http_1.RequestOptions({ headers: headers });
        this.actionGetUrl = "http://localhost:56483/api/Claims/" + ClaimID;
        return this._http.get(this.actionGetUrl, options)
            .map(function (response) { return response.json(); })
            .catch(function (response) {
            if (response.status === 401) {
                _this._Route.navigate(['Login']);
            }
            return response;
        });
    };
    ClaimService.prototype.UpdateClaim = function (claimmodel) {
        var _this = this;
        this.actionPutUrl = "http://localhost:56483/api/Claims/" + claimmodel.Pp;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Token', "" + this.token);
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put(this.actionGetUrl, claimmodel, options).map(function (res) { return res.json(); })
            .catch(function (response) {
            if (response.status === 401) {
                _this._Route.navigate(['Login']);
            }
            return response;
        });
    };
    ClaimService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router])
    ], ClaimService);
    return ClaimService;
}());
exports.ClaimService = ClaimService;
//# sourceMappingURL=Claim.Service.js.map