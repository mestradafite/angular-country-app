import { Component } from '@angular/core';
import { CountryListComponent } from '../../../shared/components/country-list/country-list.component';

@Component({
  standalone: true,
  imports: [CountryListComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {}
