import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { faHome, faBars, faCogs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  faHome = faHome;
  faBars = faBars;
  faCogs = faCogs
  @Output()
  selectedLink = new EventEmitter
  
  onSelect(link: string) {
    console.log(this.selectedLink.emit(link))
  }

  ngOnInit(): void {
  }

}
