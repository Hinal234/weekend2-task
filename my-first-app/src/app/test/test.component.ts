import { Component, OnInit } from '@angular/core';
import { DateTimeService } from '../date-time.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name = "John";
  myId = "testId";
  classname="text-success";
  hasError=true;
  count=0;
  constructor(public dt:DateTimeService) { }

  ngOnInit(): void {
  }

  getUser(){
    return "WelCome  " + this.name;
  }

  counter(){
    return this.count++;
  }
  getData(value:any){
    console.log(value);
  }

}
