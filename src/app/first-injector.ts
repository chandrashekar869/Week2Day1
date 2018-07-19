import {ReflectiveInjector} from '@angular/core'


class Service1{
    constructor() { 
        console.log("First time init of Service 1");
      }
    
      getData(){
        return "Some string from Service 1";
      }
}
class Service2{
    constructor() { 
        console.log("First time init of Service 2");
      }
    
      getData(){
        return "Some string from Service 2";
      }
}
let injector=ReflectiveInjector.resolveAndCreate([Service1,Service2]);

let dependencyService1=injector.get(Service1);
let dependencyService2=injector.get(Service2);
