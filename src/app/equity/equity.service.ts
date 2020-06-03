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
        WorkNum: string,
        Email: string,
        MartialStatus: string,
        Social: string,
        Occupation: string,
        JobStatus: string,
        Dependants: string,
        DependantsDOB: string,

        Monthly: string,
        CurrentArrears: string,
        ReasonForArrears: string,
        PreviousMonthArrears: string,
        CurrentMonthArrears: string,
        DateArrearsBalance: string,
        ExperianCode: string,
        PaymentType: string,
        DDFlag: string,
        ShortfallRequest: string
        ) {
        const applicantData: Equity = {
            id: id,
            Name : Name,
            DOB : DOB,
            NI: NI,
            MobileNum: MobileNum,
            HomeNum: HomeNum,
            WorkNum: WorkNum,
            Email: Email,
            MartialStatus: MartialStatus,
            Social: Social,
            Occupation: Occupation,
            JobStatus: JobStatus,
            Dependants: Dependants,
            DependantsDOB: DependantsDOB,

            Monthly: Monthly,
            CurrentArrears: CurrentArrears,
            ReasonForArrears: ReasonForArrears,
            PreviousMonthArrears: PreviousMonthArrears,
            CurrentMonthArrears: CurrentArrears,
            DateArrearsBalance: DateArrearsBalance,
            ExperianCode: ExperianCode,
            PaymentType: PaymentType,
            DDFlag: DDFlag,
            ShortfallRequest: ShortfallRequest
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

    
    getApplicants() {
            return this.http.get<{[key: string]: Equity}>("https://prototype1-95aef.firebaseio.com/applicants.json")
            .pipe(map(responseData => {
                const equityArray: Equity[] = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        equityArray.push({...responseData[key], id: key})
                    }
                }
                return equityArray;
                //console.log (equityArray)
            }))
    }
}

