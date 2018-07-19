import { Component } from '@angular/core';
import {SampleServiceService} from './sample-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  car:Car;
  iconlink="https://developer.accuweather.com/sites/default/files/";
  jso:any=[];
  constructor(private service:SampleServiceService){
    let engine:Engine=new Engine("V8 turbo twin");
    let tires:Tires=new Tires();
    this.car=new Car(engine,tires,"Maseratti");
    this.service.getData((data)=>{
      this.jso=data;
      console.log(this.jso);
    });
  
  }
}

class Engine{
displacement:number=1000;
constructor(private type:string){

}  
getPower(){
  return this.displacement+" cc with a "+this.type+" engine";
}
}

class Tires{
pressure:number=26;
constructor(){
  
}
getPressure(){
  return this.pressure+" psi";
} 
}

class Car{

  constructor(private engine:Engine,private tires:Tires,private carName:string){
  
  }
  carDetails(){
    return "A "+this.carName+" whose displacement is "+this.engine.getPower()+" and having a pressure of "+this.tires.getPressure();
  } 
}