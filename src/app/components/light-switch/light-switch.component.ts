import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.css']
})
export class LightSwitchComponent implements OnInit {
  checked = false;

  constructor() { }

  ngOnInit() {
  }

  switchLight() {    
    this.checked = !this.checked;
    console.log(this.checked);
  }

}
