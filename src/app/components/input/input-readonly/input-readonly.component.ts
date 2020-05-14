import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-input-readonly',
  templateUrl: './input-readonly.component.html',
  styleUrls: ['./input-readonly.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputReadonlyComponent implements OnInit {
  @Input() labelName:string;
  @Input() value:string;

  constructor() { }

  ngOnInit(): void {
  }

}
