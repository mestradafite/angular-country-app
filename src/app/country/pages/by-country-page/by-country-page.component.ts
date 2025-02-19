import { Component } from '@angular/core';
import { CountrySearchInputComponent } from '../../../shared/components/country-search-input/country-search-input.component';
import { CountryListComponent } from '../../../shared/components/country-list/country-list.component';

@Component({
  standalone: true,
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {}
