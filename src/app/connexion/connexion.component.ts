import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(public servService: ServService, private route : Router, private http: HttpClient) { }

  user: any;

  add(val:any){
    console.log(val);
    this.user=val;
    this.servService.good=val;
    this.route.navigateByUrl(this.user);
  }
    ngOnInit(): void {
    }
  
    connexion(val : any){
      console.log('contenu de va ', val)
      this.http.post('http://localhost:8086/connexion', val).subscribe({
        next: (data) => {
          this.user = data;
          if(this.user.login != null) {
            this.route.navigateByUrl('QSN');
          }else{
            console.log('identifant ou le mot est inc')
          }
         },
        error: (err) => {console.log(err);}
      });
    }
}
