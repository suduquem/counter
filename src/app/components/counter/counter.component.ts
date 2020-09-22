import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit, OnChanges {
  @Input() counterParent: number;

  changesHistory: Array<[number, number]> = [];

  constructor() {}

  // Se ejecuta cada que cambie counterParent
  ngOnChanges(changes: SimpleChanges): void {
    let { previousValue } = changes.counterParent;
    const { currentValue } = changes.counterParent;

    if (previousValue === undefined) {
      previousValue = 0;
    }

    this.changesHistory.push([currentValue, previousValue]);
  }

  ngOnInit(): void {
    console.log('Inicia');
  }
}
