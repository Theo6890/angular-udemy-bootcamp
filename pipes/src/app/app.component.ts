import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name!: string;
  date!: string;
  amount!: string;
  height!: number;
  miles!: number;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000
  };

  onHeightChange($event: any): void {
    this.height = $event.target.value;
  }

  onMilesChange($event: any): void {
    this.miles = $event.target.value;
  }

  onChangeName($event: any): void {
    this.name = $event.target.value;
  }

  onChangeDate($event: any): void {
    this.date = $event.target.value;
  }

  onChangeAmount($event: any): void {
    this.amount = $event.target.value;
  }
}
