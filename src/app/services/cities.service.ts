import { Injectable } from '@angular/core';
import {City} from '../interfaces/City';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CityInfo} from '../interfaces/CityInfo';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  private readonly appId = 'd9534e22602741c63bb3c42421681686';
  private baseUrl = 'http://api.openweathermap.org/data/2.5/';
  private citiesJson: string = '[\n' +
    '  {\n' +
    '    "id": 707860,\n' +
    '    "name": "Hurzuf",\n' +
    '    "country": "UA",\n' +
    '    "coord": {\n' +
    '      "lon": 34.283333,\n' +
    '      "lat": 44.549999\n' +
    '    }\n' +
    '  },\n' +
    '  {\n' +
    '    "id": 519188,\n' +
    '    "name": "Novinki",\n' +
    '    "country": "RU",\n' +
    '    "coord": {\n' +
    '      "lon": 37.666668,\n' +
    '      "lat": 55.683334\n' +
    '    }\n' +
    '  },\n' +
    '  {\n' +
    '    "id": 1283378,\n' +
    '    "name": "Gorkhā",\n' +
    '    "country": "NP",\n' +
    '    "coord": {\n' +
    '      "lon": 84.633331,\n' +
    '      "lat": 28\n' +
    '    }\n' +
    '  },\n' +
    '  {\n' +
    '    "id": 1270260,\n' +
    '    "name": "State of Haryāna",\n' +
    '    "country": "IN",\n' +
    '    "coord": {\n' +
    '      "lon": 76,\n' +
    '      "lat": 29\n' +
    '    }\n' +
    '  },\n' +
    '  {\n' +
    '    "id": 708546,\n' +
    '    "name": "Holubynka",\n' +
    '    "country": "UA",\n' +
    '    "coord": {\n' +
    '      "lon": 33.900002,\n' +
    '      "lat": 44.599998\n' +
    '    }\n' +
    '  },\n' +
    '  {\n' +
    '    "id": 1283710,\n' +
    '    "name": "Bāgmatī Zone",\n' +
    '    "country": "NP",\n' +
    '    "coord": {\n' +
    '      "lon": 85.416664,\n' +
    '      "lat": 28\n' +
    '    }\n' +
    '  }]';
  private readonly cities: City[] = JSON.parse(this.citiesJson);

  constructor( private http: HttpClient ) {



  }

  getCities(): City[] {
    return this.cities;
  }

  setSelectedCity( id: number ): void {
    sessionStorage.setItem('selectedCity', id.toString());
  }

  getSelectedCity(): City {
    let cityRawId = sessionStorage.getItem('selectedCity');
    if ( !cityRawId) {
      sessionStorage.setItem('selectedCity', '707860');
      cityRawId = '707860';
    }
    const cityId = Number(cityRawId);
    return this.cities.find( city => city.id === cityId );
  }

  getCityInfo(id: number): Observable<CityInfo> {
    const url = `${ this.baseUrl }forecast?id=${id}&APPID=${this.appId}&units=metric&lang=sp`;
    console.log(url);
    return this.http.get<CityInfo>(url);
  }
}
