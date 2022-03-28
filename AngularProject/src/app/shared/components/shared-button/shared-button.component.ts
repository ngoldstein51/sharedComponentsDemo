import { Component, OnInit, Input } from '@angular/core';
import { DemoServiceService } from 'src/app/services/demo-service.service';

@Component({
  selector: 'app-shared-button',
  templateUrl: './shared-button.component.html',
  styles: [
  ]
})
export class SharedButtonComponent implements OnInit {

  @Input() name:string = "";
  
  constructor(private demoService:DemoServiceService) { }

  ngOnInit(): void {
  }

  callService(){
    console.log(this.demoService.sendbackData());
  }

}
