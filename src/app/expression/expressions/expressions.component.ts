// expressions.component.ts
import { Component, OnInit } from '@angular/core';
import * as CircularJSON from 'circular-json'

@Component({
  selector: 'app-expressions',
  templateUrl: './expressions.component.html',
  styleUrls: ['./expressions.component.css']
})
export class ExpressionsComponent implements OnInit {
  numberOfExpressions!: number;
  expressions: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  generateForms(): void {
    this.expressions = Array.from({ length: this.numberOfExpressions }, () => ({ name: '', age: null, email: '' }));
  }

  submitForms(): void {
    const jsonString = CircularJSON.stringify(this.expressions);
    console.log(jsonString);
  }
}
