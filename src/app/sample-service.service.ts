import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {
data:any={};
  constructor(private http:HttpClient) { 
    console.log("First time init");
  
  }

  getData(callback:Function){
    this.http.get('http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/1-204108_1_AL?apikey=xE8pozJ0orRi3hLDDdswqJmGxYoTwGfn&language=en-us&details=false&metric=false')
    .subscribe(data=>{
      callback(data);
    });
  }
}
