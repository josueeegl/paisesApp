import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ByCountryComponent } from './countries/pages/by-country/by-country.component';
import { ByRegionComponent } from './countries/pages/by-region/by-region.component';
import { ByCapitalComponent } from './countries/pages/by-capital/by-capital.component';
import { CountryDetailComponent } from './countries/pages/country-detail/country-detail.component';

const routes: Routes = [
  { path: '', component: ByCountryComponent, pathMatch: 'full' },
  { path: 'region', component: ByRegionComponent },
  { path: 'capital', component: ByCapitalComponent },
  { path: 'country/:id', component: CountryDetailComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
