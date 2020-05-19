import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Equity } from './equity.model';
import { map } from "rxjs/operators";
import { Subject } from "rxjs";
import { NgIf } from '@angular/common';

@Injectable({providedIn: "root"})
export class EquityService {

    constructor(private http:HttpClient) {}

    createApplicant(
        id: string,
        Name : string,
        DOB : string,
        NI: string,
        MobileNum: string,
        HomeNum: string,
        Email: string,
        MartialStatus: string,
        Occupation: string,
        JobStatus: string,
        Dependants: string,
        DependantsDOB: string
        ) {
        const applicantData: Equity = {
            id: id,
            Name : Name,
            DOB : DOB,
            NI: NI,
            MobileNum: MobileNum,
            HomeNum: HomeNum,
            Email: Email,
            MartialStatus: MartialStatus,
            Occupation: Occupation,
            JobStatus: JobStatus,
            Dependants: Dependants,
            DependantsDOB: DependantsDOB
        };
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

