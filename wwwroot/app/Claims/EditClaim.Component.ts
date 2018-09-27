import { Component, OnInit } from '@angular/core'
import { ClaimModel } from '../Claims/Claim.Model'
import { ClaimService } from '../Claims/Services/Claim.Service'
import { NgProgressService } from "ng2-progressbar";
import { Router, ActivatedRoute } from '@angular/router'

@Component({
    templateUrl: 'app/Claims/EditClaim.html',
    providers: [ClaimService]
})

export class EditClaimComponent implements OnInit {
    claimmodel: ClaimModel = new ClaimModel();
    ID: string;
    private username: string = "";
    private data: any;
    constructor(private pService: NgProgressService, private _Route: Router, private _claimservice: ClaimService, private _routeParams: ActivatedRoute) {
        this.data = JSON.parse(localStorage.getItem('AdminUser'));
        this.username = this.data.username
    }

    ngOnInit(): void {
        this.ID = this._routeParams.snapshot.params['ID'];
        if (this.ID != null) {
            this._claimservice.EditClaim(this.ID)
                .subscribe(data => {
                    this.claimmodel = <ClaimModel>data;
                },
                    error => {
                        if (error) {
                            alert("An Error has occured please try again after some time !");
                        }
                    });
        }
    }

    onSubmit1() {

        var formdata = this.claimmodel;
        //formdata.Username = this.username;
        this._claimservice.UpdateClaim(formdata).subscribe(
            data => {
                if (data == true) {
                    alert("Данные были изменены успешно ");
                    this._Route.navigate(['AllClaim']);
                }
                else {
                    alert("Problem While Adding Claim");
                }
            },
            error => {
                if (error) {
                    alert("Произошла ощибка");
                }
            });

    }
}