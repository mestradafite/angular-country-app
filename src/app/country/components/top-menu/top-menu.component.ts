import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  selector: 'country-top-menu',
  templateUrl: './top-menu.component.html',
})
export class TopMenuComponent {}
