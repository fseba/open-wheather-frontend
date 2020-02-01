import { Component, OnInit } from '@angular/core';
import {City} from '../../interfaces/City';
import {CitiesService} from '../../services/cities.service';
import {CityInfo, CityInfoListItem} from '../../interfaces/CityInfo';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  loading: boolean;
  error: boolean;

  selectedCity: City;
  todayCityInfo: CityInfoListItem;
  nextDays: CityInfoListItem[];

  constructor( private citiesService: CitiesService ) {
    this.selectedCity = citiesService.getSelectedCity();
    console.log(this.selectedCity);
  }

  ngOnInit() {
    this.getCityInfo();
  }

  getCityInfo() {
    this.loading = true;
    this.citiesService.getCityInfo(this.selectedCity.id).subscribe( res => {
      this.loading = false;
      console.log(res);
      this.todayCityInfo = res.list[0];
      this.nextDays = res.list.slice(1);
    }, error => {
      console.log(error);
      this.loading = false;
      this.error = true;
    });
  }
}
