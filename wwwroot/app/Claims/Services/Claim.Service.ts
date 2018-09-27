import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ClaimModel } from '../Claim.Model';

@Injectable()
export class ClaimService {
    private actionUrl: string;
    private actionGetUrl: string;
    private actionPutUrl: string;
    private token: string = "";
    private username: string = "";
    private data: any;

    constructor(private _http: Http, private _Route: Router) {
        this.actionUrl = 'http://localhost:56483/api/Claims';
        this.data = JSON.parse(localStorage.getItem('AdminUser'));
        this.token = this.data.token;
        this.username = this.data.username
    }

    public AddClaim(claimmodel: ClaimModel) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Token', `${this.token}`);
        let options = new RequestOptions({ headers: headers });
        return this._http.post('http://localhost:56483/api/Claims', claimmodel, options)
            .map((res: Response) => res.json())
            .catch(response => {
                if (response.status === 401) {
                    this._Route.navigate(['Login']);
                }
                return response;
            });
    }

   
    public validateModelTrade(Pp: string) {
      //let UsernameModel = { "Model_Name": Model_Name };
        let Trade = {"Pp": Pp };
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Token', `${this.token}`);
        let options = new RequestOptions({ headers: headers });
        return this._http.post('http://localhost:56483/api/ValidateModelTrade', Trade, options)
            .map((res: Response) => res.json())
            .catch(response => {
                if (response.status === 401) {
                    this._Route.navigate(['Login']);
                }
                return response;
            });
    }

    public GetAllClaimsDetails = (): Observable<any> => {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Token', `${this.token}`);
        let options = new RequestOptions({ headers: headers });

        return this._http.get(this.actionUrl, options)
            .map((response: Response) => <any>response.json())
            .catch(response => {
                if (response.status === 401) {
                    this._Route.navigate(['Login']);
                }
                return response;
            });
    }

    public EditClaim(ClaimID: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Token', `${this.token}`);
        let options = new RequestOptions({ headers: headers });

        this.actionGetUrl = "http://localhost:56483/api/Claims/" + ClaimID;
        return this._http.get(this.actionGetUrl, options)
            .map((response: Response) => <any>response.json())
            .catch(response => {
                if (response.status === 401) {
                    this._Route.navigate(['Login']);
                }
                return response;
            });
    }

    public UpdateClaim(claimmodel: ClaimModel) {

        this.actionPutUrl = "http://localhost:56483/api/Claims/" + claimmodel.Pp;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Token', `${this.token}`);
        let options = new RequestOptions({ headers: headers });
        return this._http.put(this.actionGetUrl, claimmodel, options).map((res: Response) => res.json())
            .catch(response => {
                if (response.status === 401) {
                    this._Route.navigate(['Login']);
                }
                return response;
            });
    }
}