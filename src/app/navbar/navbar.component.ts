import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  @Output()
  selectedLink = new EventEmitter
  
  onSelect(link: string) {
    console.log(this.selectedLink.emit(link))
  }

  ngOnInit(): void {
  }

}
