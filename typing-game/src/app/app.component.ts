import {Component} from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typing-game';
  randomSentence = '';
  enteredText = '';

  constructor() {
    this.randomSentence = lorem.sentence();
    console.log(this.randomSentence);
  }

  onChangeInput(event: any): void {
    this.enteredText = event.target.value;
  }

  compare(randomLetter: string, enteredLetter: string): string {
    if (!enteredLetter) {
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
