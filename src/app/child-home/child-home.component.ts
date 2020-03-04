import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-home',
  templateUrl: './child-home.component.html',
  styleUrls: ['./child-home.component.css']
})
export class ChildHomeComponent implements OnInit {
   data:any;
   @Output() sendEvent = new  EventEmitter <any>()

  constructor() { }

  ngOnInit(): void {
  }

  sendData() {
    this.sendEvent.emit(this.data)
  }

}
