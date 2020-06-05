import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {
  @Input() buttonType:string;
  @Input() buttonTitle:string;
  @Input() buttonState:string;

  constructor() { }

  ngOnInit(): void {
  }

}
