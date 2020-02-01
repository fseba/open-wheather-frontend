import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {City} from '../../interfaces/City';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import {CitiesService} from '../../services/cities.service';

@Component({
  selector: 'app-cities-page',
  templateUrl: './cities-page.component.html',
  styleUrls: ['./cities-page.component.css']
})
export class CitiesPageComponent implements OnInit, OnDestroy {
  faCheck = faCheck;
  faPlus = faPlus;
  selectedCityId: number = Number(sessionStorage.getItem('selectedCity'));

  cities: City[];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  constructor( private citiesService: CitiesService) {
    this.cities = this.citiesService.getCities();
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  selectCity(id: number): void {
    this.citiesService.setSelectedCity(id);
    this.selectedCityId = id;
  }

}
