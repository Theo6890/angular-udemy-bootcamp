import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;

  onButtonClick(): void {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmonpqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  onChangeUseLetters(): void {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(): void {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(): void {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(value: string): void {
    // tslint:disable-next-line:radix
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
}
