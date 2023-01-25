import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class ByRegionComponent {
  constructor(private countryService: CountryService) {}
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActive: string = '';
  countries: Country[] = [];

  activeRegion = (region: string) => {
    if (region === this.regionActive) return;
    this.regionActive = region;

    this.countryService.regionSearch(region).subscribe({
      next: (countries) => (this.countries = countries),
      error: () => {
        this.countries = [];
      },
    });
  };

  getClassButton(region: string): string {
    return this.regionActive === region
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
