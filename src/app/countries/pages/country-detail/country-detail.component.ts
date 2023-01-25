import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country, Languages } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
})
export class CountryDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  country!: Country;
  lenguajes: string = '';

  ngOnInit(): void {
    //esta es una forma de hacerlo
    /* this.activatedRoute.params.subscribe(({ id }) => {
      this.countryService.countryDetail(id).subscribe((country) => {
        console.log(country);
      });
    }); */

    //forma refactorizada utilizando el pipe switchMap
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.countryDetail(id)),
        tap(console.log)
      )
      .subscribe((data) => {
        this.country = data[0];
        Object.entries(this.country.languages).forEach(([key, value]) => {
          this.lenguajes += ' ' + value;
        });
      });
  }
}
