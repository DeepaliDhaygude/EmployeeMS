import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {
  @Input() HeadArray : string[] = [];
  @Input() GridArray : any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
