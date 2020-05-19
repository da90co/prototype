import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Equity } from "./equity.model"
import { HttpClient } from '@angular/common/http';
import { EquityService } from './equity.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-equity',
  templateUrl: './equity.component.html',
  styleUrls: ['./equity.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EquityComponent implements OnInit {
  loadedEquity: Equity[] = [];
  isFetching = false;

  constructor() { }

  ngOnInit(): void {
  }

}
