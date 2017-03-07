import { Component } from '@angular/core';
import { MyFirstServiceService } from './my-first-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private service: MyFirstServiceService) {
    console.log(service.add(5, 7));

  }


}
