import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: number = undefined;
  constructor() { }

  ngOnInit(): void {
  }
 sum(firstNumber: string, secondNumber: string) {
    this.result = +firstNumber + +secondNumber;
 }
  tru(firstNumber: string, secondNumber: string) {
    this.result = +firstNumber - +secondNumber;
  }
  nhan(firstNumber: string, secondNumber: string) {
    this.result = +firstNumber * +secondNumber;
  }
  chia(firstNumber: string, secondNumber: string) {
    this.result = +firstNumber / +secondNumber;
  }
}
