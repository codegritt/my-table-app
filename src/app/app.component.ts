import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 5';
  secondaryTable = [];
  Table = [
    {
      id: 151,
      name: 'Alan B. Shepard, Jr.',
      job: 'Astronaut',
      year_joined: 1959,
      missions: ['MR-3', 'Apollo 14']
    },
    {
      id: 152,
      name: 'Virgil I. Grissom',
      job: 'Astronaut',
      year_joined: 1959,
      missions: ['MR-4', 'Apollo 1']
    },
    {
      id: 153,
      name: 'John H. Glenn, Jr.',
      job: 'Astronaut',
      year_joined: 1959,
      missions: ['MA-6', 'STS-95']
    },
    {
      id: 154,
      name: 'M. Scott Carpenter',
      job: 'Astronaut',
      year_joined: 1959,
      missions: ['MA-7']
    }
  ];
  addToAnotherTable(ind) {
    var index = this.secondaryTable.indexOf(ind);
    if (index > -1) {
      this.secondaryTable.splice(index, 1);
    }
    else{
      this.secondaryTable.push(ind);
    }
  }
}
