import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';
import { CountrySuggestionsComponent } from './components/country-suggestions/country-suggestions.component';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    CountryDetailComponent,
    CountryTableComponent,
    CountryInputComponent,
    CountrySuggestionsComponent,
  ],
  exports: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    CountryDetailComponent,
    CountryTableComponent,
    CountryInputComponent,
    CountrySuggestionsComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class CountriesModule {}
