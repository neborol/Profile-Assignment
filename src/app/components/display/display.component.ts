import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  // Dependency injection of the Redux library
  constructor(private ngRedux: NgRedux<any>) {}

  ngOnInit() {
  }

}
