import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() inputType: string;
  @Input() width: string;

  constructor() { }

  ngOnInit(): void {
  }

}
