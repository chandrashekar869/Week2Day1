import { Component, OnInit } from '@angular/core';
import {SampleService2Service} from '../sample-service2.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
str:string;
  constructor(private service:SampleService2Service) { 
    this.str=this.service.getText((data)=>{
      this.str=data;
      console.log(this.str);
    });
  }

  ngOnInit() {
  }

}
