import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-suggestions',
  templateUrl: './country-suggestions.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class CountrySuggestionsComponent {
  @Input() suggestedCountries: Country[] = [];
  @Input() value: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  search = () => {
    this.onEnter.emit(this.value);
  };
}
