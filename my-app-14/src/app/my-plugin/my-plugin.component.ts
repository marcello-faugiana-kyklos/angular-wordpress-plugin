import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-my-plugin',
  templateUrl: './my-plugin.component.html',
  styleUrls: ['./my-plugin.component.css']
})
export class MyPluginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
