import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-spaceclient',
  templateUrl: './spaceclient.component.html',
  styleUrls: ['./spaceclient.component.css']
})
export class SpaceclientComponent implements OnInit {
info : any;
pwd : any;
user :any;
  constructor(private http: HttpClient) { }

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

  getCurrentUser(){
    this.http.get('http://localhost:8086/espacelient').subscribe({
      next:(data) =>this.user = data
    })
  }
}
