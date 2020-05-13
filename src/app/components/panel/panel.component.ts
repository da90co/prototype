import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PanelComponent implements OnInit {
  @Input() cardTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
