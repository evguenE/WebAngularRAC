import { Component, OnInit } from '@angular/core'
import { ClaimModel } from '../Claims/Claim.Model'
import { ClaimService } from '../Claims/Services/Claim.Service'
import { NgProgressService } from "ng2-progressbar";
import { Router } from '@angular/router'

@Component({  
    templateUrl: 'app/Claims/AllClaims.html',   
    providers: [ClaimService]
})
/** AllClaims component*/
export class AllClaimsComponent implements OnInit
{

    ClaimData: ClaimModel[];

    constructor(private pService: NgProgressService, private _claimservice: ClaimService) {
    }

    ngOnInit(): void {
        this.pService.start();
        this._claimservice
            .GetAllClaimsDetails()
            .subscribe(data => {
                this.ClaimData = data
                this.pService.done();
            },
                error => {
                    if (error) {
                        alert("An Error has occured please try again after some time !");
                    }
                });

    }

}