import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
})
export class ByCapitalComponent {
  constructor(private countryService: CountryService) {}
  value: string = '';
  isError: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  suggestionsShow: boolean = false;

  search = (value: string) => {
    this.isError = false;
    this.value = value;

    this.countryService.capitalSearch(this.value).subscribe({
      next: (countries) => (this.countries = countries),
      error: () => {
        this.isError = true;
        this.countries = [];
      },
    });
  };
  suggestions = (value: string) => {
    this.isError = false;
    this.value = value;
    this.suggestionsShow = true;

    this.countryService.capitalSearch(value).subscribe({
      next: (country) => (this.suggestedCountries = country.splice(0, 5)),
      error: (err) => (this.suggestedCountries = []),
    });
  };
}
