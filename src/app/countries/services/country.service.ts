import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  get params() {
    return new HttpParams().set('fields', 'name,capital,population,flags,cca3');
  }

  constructor(private http: HttpClient) {}

  countrySearch = (countryName: string): Observable<Country[]> => {
    const url = `${this.apiUrl}/name/${countryName}`;
    return this.http
      .get<Country[]>(url, { params: this.params })
      .pipe(tap(console.log));
  };
  capitalSearch = (capitalCountry: string): Observable<Country[]> => {
    const url = `${this.apiUrl}/capital/${capitalCountry}`;
    return this.http
      .get<Country[]>(url, { params: this.params })
      .pipe(tap(console.log));
  };

  countryDetail = (countryCode: string): Observable<Country> => {
    const url = `${this.apiUrl}/alpha/${countryCode}`;
    return this.http.get<Country>(url);
  };

  regionSearch = (region: string): Observable<Country[]> => {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http
      .get<Country[]>(url, { params: this.params })
      .pipe(tap(console.log));
  };
}
