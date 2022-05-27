import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spaceclient',
  templateUrl: './spaceclient.component.html',
  styleUrls: ['./spaceclient.component.css']
})
export class SpaceclientComponent implements OnInit {
info : any;
pwd : any;
  constructor() { }

  ngOnInit(): void {
  }

  recupInfoLogin(val : any){
    this.info = val;
    console.log(this.info)
  }

  recupInfoPwd(val : any){
    this.pwd = val;
    console.log(this.info)
  }
}
