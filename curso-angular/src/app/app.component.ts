import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso-angular';
  newDriver: string = 'Paul Johnson';
  newData = {
    car: 'McLaren',
    model: 'MP4/4',
    year: 1988
  }
}
