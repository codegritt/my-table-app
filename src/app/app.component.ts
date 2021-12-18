import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  astronautsToBeSelected = [
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

  astronautsSelected = [
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

  /**
   * This method is called when a row is clicked in First table
   * It just moves astronauts from one table to the other!
   */
  selectAstronaut(astronaut: { id: number; name: string; job: string; year_joined: number; missions: string[]; }) {
    // Splice returns an array, hence ... is used, it destructures the array
    this.astronautsSelected.push(...this.astronautsToBeSelected.splice(this.astronautsToBeSelected.indexOf(astronaut), 1));
  }

/**
 * This method is called when a row is clicked in the Second Table
 * It moves astronaut back to first table
 */
  deselectAstronaut(astronaut: { id: number; name: string; job: string; year_joined: number; missions: string[]; }) {
    // Splice returns an array, hence ... is used, it destructures the array
    this.astronautsToBeSelected.push(...this.astronautsSelected.splice(this.astronautsSelected.indexOf(astronaut), 1));
  }
}
