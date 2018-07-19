import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService2Service {
text:string="Default";
callback:Function;
  constructor() { }
getText(callback?:Function){
  this.callback=callback;
  return this.text;
}
updateText(text:string){
this.text=text;
console.log(this.text);
this.callback(text);
}

}
