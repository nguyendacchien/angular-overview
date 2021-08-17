import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  input?:string='';
  result?:string = '0';

  constructor() { }

  ngOnInit(): void {
  }
  clickCell(number:string){
    // this.input=number + number
    this.input+=number;
  }
  getResult(){
    return this.result = eval(<string>this.input);
  }
  delete(){
    this.input ='';
    this.result='0'
  }

}
