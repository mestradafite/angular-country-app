import { Component, output, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.component.html',
})
export class CountrySearchInputComponent {
  value = output<string>();

  placeholder = input('Buscar');
}
