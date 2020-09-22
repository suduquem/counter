import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // counter: number = 0;
  counter = 0;
  bookList: Array<string> = ['one', 'two', 'three', 'four', 'five'];
  isIncrementClicked: boolean;
  isDecrementClicked: boolean;

  ngOnInit(): void {
    console.log('Inicia');
  }

  increment(): void {
    this.counter++;
    this.isIncrementClicked = true;
    this.isDecrementClicked = false;
  }

  decrement(): void {
    this.counter--;
    this.isDecrementClicked = true;
    this.isIncrementClicked = false;
    if (this.counter < 0) {
      this.counter = 0;
    }
  }
}
