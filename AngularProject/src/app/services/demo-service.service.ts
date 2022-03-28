import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {

  constructor() { }

  sendbackData(){
    return "this is the data from the service";
  }

}
