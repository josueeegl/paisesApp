import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
})
export class ByCountryComponent {
  constructor(private countryService: CountryService) {}
  value: string = '';
  isError: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  suggestionsShow: boolean = false;

  search = (value: string) => {
    this.isError = false;
    this.value = value;
    this.suggestionsShow = false;

    this.countryService.countrySearch(this.value).subscribe({
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

    this.countryService.countrySearch(value).subscribe({
      next: (country) => (this.suggestedCountries = country.splice(0, 5)),
      error: (err) => (this.suggestedCountries = []),
    });
  };
}
