import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spaceclient',
  templateUrl: './spaceclient.component.html',
  styleUrls: ['./spaceclient.component.css']
})
export class SpaceclientComponent implements OnInit {
info : any;
  constructor() { }

  ngOnInit(): void {
  }

  recupInfo(val : any){
    this.info = val;
    console.log(this.info)
  }
}
