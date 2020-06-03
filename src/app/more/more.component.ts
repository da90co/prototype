import { Component, OnInit } from '@angular/core';
import { Equity } from "../equity/equity.model"
import { HttpClient } from '@angular/common/http';
import { EquityService } from '../equity/equity.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {

  constructor(private http:HttpClient, private equityService: EquityService) { }

  ngOnInit(): void {
  }

  onCreateEquity(equityData: Equity) {
    this.equityService.createApplicant(
        equityData.id,
        equityData.Name,
        equityData.DOB,
        equityData.NI,
        equityData.MobileNum,
        equityData.HomeNum,
        equityData.WorkNum,
        equityData.Email,
        equityData.MartialStatus,
        equityData.Social,
        equityData.Occupation,
        equityData.JobStatus,
        equityData.Dependants,
        equityData.DependantsDOB,

        equityData.Monthly,
        equityData.CurrentArrears,
        equityData.ReasonForArrears,
        equityData.PreviousMonthArrears,
        equityData.CurrentMonthArrears,
        equityData.DateArrearsBalance,
        equityData.ExperianCode,
        equityData.PaymentType,
        equityData.DDFlag,
        equityData.ShortfallRequest
      )
  }

}
