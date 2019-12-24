import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-twenty-three',
  templateUrl: './test-twenty-three.component.html',
  styleUrls: ['./test-twenty-three.component.css']
})
export class TestTwentyThreeComponent implements OnInit {
  username = '';
  SetUsername = '';
  disableBtn = false;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.SetUsername = this.username;
    this.disableBtn = true;
  }

}
