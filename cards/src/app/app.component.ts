import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {title: 'Neat tree', imageUrl: 'assets/tree.jpeg', username: 'nature', content: 'I saw this neat tree today'},
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'bikerOfHell',
      content: 'I id a hellish ride this morning'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainerlover',
      content: 'Here is a picture of a snowy mountain'
    }
  ];
}
