import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Equity } from './equity.model';
import { map } from "rxjs/operators";
import { Subject } from "rxjs";

@Injectable({providedIn: "root"})
export class EquityService {

    constructor(private http:HttpClient) {}

    createApplicant(name: string, DOB: string) {
        const applicantData: Equity = {Name: name, DOB: DOB};
        console.log(applicantData)

        this.http.post<{name:string}>(
            "https://prototype1-95aef.firebaseio.com/applicants.json",
            applicantData
        )
        .subscribe(responseData => {
            console.log(responseData)
        })
    }
}

