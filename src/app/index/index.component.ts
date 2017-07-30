import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private _http:Http,private route: ActivatedRoute) {
    console.log('Niteen Autade in base64',btoa('Niteen Autade'));
  }
  user:string='';
  talkButtonClicked:boolean=false;
  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['id'])
      this.user=atob(params['id']);
    });
  }
  togglePage2(){
    this.talkButtonClicked = true;
  }

}
