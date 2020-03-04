import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any = [{name: 'jikku',address:'vellearyil(H)', edit:true}, {name:'jersal',address:'karimannoor(H)', edit:true},{name: 'aswin',address:'abcd(H)', edit:true}];
  data:any;

  constructor() { }

  ngOnInit(): void {
  }

  addItem () {
    this.items.push({edit:true})
  }
  deleteItem(index) {
    this.items.splice(index ,1)
  }

  receiveData($event) {
    this.data = $event

  }

}
