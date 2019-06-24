import { Component, OnInit, Injector } from '@angular/core';
import {NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class DatepickerComponent implements OnInit {
  model1: Date;
  model2: Date;
  
  constructor() { }

  ngOnInit() {
  }

  get today() {
    return new Date();
  }
}