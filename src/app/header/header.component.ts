

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() public sounds = 'THIS IS MY HEADER';
  twocrow = '插值';
  value = '224';
  fontSize24 = 'fontSize24';
  fontStyle = 'fontStyle';
}


