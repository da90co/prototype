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
    this.equityService.createApplicant(equityData.Name, equityData.DOB, equityData.NiNum, equityData.MobileNum, equityData.HomeNum, equityData.Work)
  }

}
