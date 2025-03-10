import { Component } from '@angular/core';
import { CountryListComponent } from '../../../shared/components/country-list/country-list.component';
import { CountrySearchInputComponent } from '../../../shared/components/country-search-input/country-search-input.component';

@Component({
  standalone: true,
  templateUrl: './by-capital-page.component.html',
  imports: [CountrySearchInputComponent, CountryListComponent],
})
export class ByCapitalPageComponent {
  onSearch(value: string) {
    console.log(value);
  }
}
