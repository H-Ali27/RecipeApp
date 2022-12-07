import { Component, OnInit } from '@angular/core';
import { WeatherData } from './Model/Weather.Model';
import { WeatherserviceService } from './services/weatherservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherservice:WeatherserviceService){}
  
  weatherdata?:WeatherData;
  cityName:number=102643743;
  ngOnInit(): void {
   this.getweatherdata(this.cityName);
  }
  onSubmit(){
      this.getweatherdata(this.cityName);
      this.cityName = NaN;
  }

  private getweatherdata(CityName:number){
    this.weatherservice.getweatherdata(CityName)
    .subscribe({
      next: (response) => {
        this.weatherdata = response;
        console.log(response);
      }
    });
  }

}
