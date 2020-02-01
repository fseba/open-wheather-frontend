export interface CityInfo {
  cod: string;
  message: number;
  cnt: number;
  list: CityInfoListItem[];
}

export interface CityInfoListItem {
   dt: number;
   main: CityInfoListItemMain;
   weather: CityInfoListItemWeather[];
   clouds: CityInfoListItemCloud;
   wind: CityInfoListItemWind;
   sys: CityInfoListItemSys;
   dt_txt: string;
}

export interface CityInfoListItemMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface CityInfoListItemWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface CityInfoListItemCloud {
  all: number;
}

export interface CityInfoListItemWind {
  speed: number;
  deg: number;
}

export interface CityInfoListItemSys {
  pod: string;
  deg: number;
}


