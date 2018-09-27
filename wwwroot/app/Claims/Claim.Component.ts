import { Component, OnInit } from '@angular/core'
import { ClaimModel } from '../Claims/Claim.Model'
import { ClaimService } from '../Claims/Services/Claim.Service'
import { NgProgressService } from "ng2-progressbar";
import { Router } from '@angular/router'

@Component({
    templateUrl: 'app/Claims/Claim.html',
    providers: [ClaimService]
})

export class ClaimComponent {
    claimmodel: ClaimModel = new ClaimModel();
    submitted: boolean = false;
    status: boolean;
    private username: string = "";
    private data: any;
    emailPattern: string = '/^([a-zA-Z0-9])+([a-zA-Z0-9._%+-])+@([a-zA-Z0-9_.-])+\.(([a-zA-Z]){2,6})$/';

    constructor(private _claimservice: ClaimService, private pService: NgProgressService, private _Route: Router) {
        this.data = JSON.parse(localStorage.getItem('AdminUser'));
        this.username = this.data.username
    }

    onSubmit() {
        this.pService.start();
        var formdata = this.claimmodel;
        //formdata.Username = this.username;
        this._claimservice.AddClaim(formdata).subscribe(
            data => {
                if (data == true) {
                    alert("Your Data Saved Successfully ");
                    this._Route.navigate(['UploadClaimPhoto']);
                }
                else {
                    alert("Problem While Adding Claims");
                }
            },
            error => {
                if (error) {
                    alert("An Error has occured please try again after some time !");
                }
            });
        this.pService.done();
    }

    CheckModelNameExist() {

        var claims = this.claimmodel;
        if (claims.Pp != null) {
            this._claimservice.validateModelTrade(claims.Pp).subscribe
                (
                data => {
                    this.status = <boolean>data;

                    if (this.status == false) {
                        this.claimmodel.Pp = "";
                        alert("ModelName Already Exits");
                    }
                    else {

                    }
                },
                error => {
                    if (error) {
                        alert("An Error has occured please try again after some time !");
                    }
                });
        }
    }



}


