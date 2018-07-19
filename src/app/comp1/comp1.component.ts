import { Component, OnInit } from '@angular/core';
import {SampleService2Service} from '../sample-service2.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
str:string;
inData:string;
  constructor(private service:SampleService2Service) { 
    this.str=service.getText();
  }
 
}

}
